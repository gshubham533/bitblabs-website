'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Title, Dot, Eyebrow } from '@/components/Title';
import { stories, voices } from '@/lib/content';
import { D, prefersReducedMotion, setupGsap } from '@/lib/gsap';

/** Only quotes the named person actually said (see the note in lib/content.ts). */
const quotes = voices.filter((v) => v.verified);

function withHighlight(text: string, phrase?: string): ReactNode {
  if (!phrase) return text;
  const i = text.indexOf(phrase);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="voice__mark">{phrase}</mark>
      {text.slice(i + phrase.length)}
    </>
  );
}

export function Voices() {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const q = quotes[index];

  // Soft hand-off between quotes: blur out of focus, settle into place.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = quoteRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = setupGsap();
    gsap.fromTo(
      el,
      { opacity: 0, y: 14, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: D.default, clearProps: 'filter' },
    );
  }, [index]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = (index + (e.key === 'ArrowRight' ? 1 : -1) + quotes.length) % quotes.length;
    setIndex(n);
    tabs.current[n]?.focus();
  };

  if (!q) return null;

  return (
    <section className="voices" id="voices" aria-labelledby="voices-title">
      <div className="wrap">
        <div className="voices__head">
          <div>
            <Eyebrow>Voices</Eyebrow>
            <Title
              id="voices-title"
              className="display-lg"
              label="In their words."
              lines={[
                <>
                  In their words<Dot />
                </>,
              ]}
            />
          </div>
          <p className="voices__intro body-md" data-s="para">
            What a founder we built for wrote about working with us. Unedited, and public on LinkedIn.
          </p>
        </div>

        <div className="voice" data-s="up">
          <aside className="voice__who">
            <div className="voice__person">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={q.photo} alt={q.name} width={72} height={72} />
              <div>
                <b>{q.name}</b>
                <span>
                  {q.role}, {q.company}
                </span>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="voice__logo" src="/dpplogo.svg" alt={q.company} />
            <dl className="voice__facts">
              <div>
                <dt>Built</dt>
                <dd>EU Digital Product Passports</dd>
              </div>
              <div>
                <dt>Shipped</dt>
                <dd>MVP in 6 months, pilot-ready</dd>
              </div>
            </dl>
            <Link className="voice__case" href="/work/digipropass">
              Read the case study →
            </Link>
          </aside>

          <div className="voice__body">
            {quotes.length > 1 && (
              <div className="voice__tabs" role="tablist" aria-label="Choose a quote" onKeyDown={onKey}>
                {quotes.map((v, i) => (
                  <button
                    key={v.id}
                    ref={(n) => {
                      tabs.current[i] = n;
                    }}
                    type="button"
                    role="tab"
                    id={`voice-tab-${v.id}`}
                    aria-selected={i === index}
                    aria-controls="voice-panel"
                    tabIndex={i === index ? 0 : -1}
                    className={`voice__tab${i === index ? ' is-active' : ''}`}
                    onClick={() => setIndex(i)}
                  >
                    {v.about ? v.about.replace(/^on /, 'On ') : v.name}
                  </button>
                ))}
              </div>
            )}

            <div
              id="voice-panel"
              role="tabpanel"
              aria-labelledby={`voice-tab-${q.id}`}
              className="voice__panel"
              ref={quoteRef}
            >
              <span className="voice__glyph" aria-hidden="true">
                “
              </span>
              <blockquote className="voice__quote">{withHighlight(q.text, q.highlight)}</blockquote>
              {q.source && <p className="voice__source">{q.source}</p>}
            </div>
          </div>
        </div>

        <div className="stories">
          <h3 className="stories__title">
            How the rest of the work started <span>· in our words</span>
          </h3>
          <ul className="stories__grid" data-s="stagger">
            {stories.map((s) => (
              <li key={s.slug}>
                <Link className="story" href={`/work/${s.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.logo} alt="" style={{ height: s.logoH }} />
                  <p className="story__text">{s.text}</p>
                  <p className="story__outcome">{s.outcome}</p>
                  <small className="story__who">
                    {s.who} <span aria-hidden="true">→</span>
                  </small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
