import Link from 'next/link';
import { projects, type Project } from '@/lib/content';

/** Setoo is backend-only: show the real voice pipeline instead of a screen. */
function Pipeline() {
  const steps = [
    { k: 'Speech-to-text', v: 'Deepgram' },
    { k: 'Language model', v: 'OpenAI' },
    { k: 'Text-to-speech', v: 'ElevenLabs' },
  ];
  return (
    <div className="pipeline" aria-hidden="true">
      <div className="pipeline__wave">
        {Array.from({ length: 28 }, (_, i) => (
          <span key={i} style={{ height: `${18 + Math.abs(Math.sin(i * 1.7)) * 62}%` }} />
        ))}
      </div>
      <ol className="pipeline__steps">
        {steps.map((s) => (
          <li key={s.k}>
            <small>{s.k}</small>
            <b>{s.v}</b>
          </li>
        ))}
      </ol>
      <p className="pipeline__orgs">Setoo · BU Bhandari · Vani Connect</p>
    </div>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <Link className="card" href={`/work/${p.slug}`}>
      <div className="card__media" data-s="image">
        <div className="card__parallax" data-parallax="soft">
          <div className="card__bg" style={{ background: p.bg }} />
          {p.pipeline && <Pipeline />}
          {p.shot && (
            <div className="card__shot">
              <div className="card__chrome" aria-hidden="true">
                <span className="card__traffic" />
                {p.host ? <span className="card__url">{p.host}</span> : null}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.shot} alt={`${p.name} product preview`} loading="lazy" />
            </div>
          )}
        </div>
        <span className={`tag tag--${p.status.toLowerCase().replace(/\s+/g, '-')}`}>{p.status}</span>
      </div>
      <div className="card__meta">
        <p className="card__name">
          {p.name} <span>({p.industry})</span>
        </p>
        <p className="card__line">{p.line}</p>
        <p className="card__more">Read the case study →</p>
      </div>
    </Link>
  );
}

export function Work() {
  return (
    <div className="work__grid">
      {projects.map((p) => (
        <Card key={p.slug} p={p} />
      ))}
    </div>
  );
}
