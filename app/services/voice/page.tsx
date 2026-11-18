import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
import { Cta } from '@/components/Roll';
import { Dot, Eyebrow, Title } from '@/components/Title';
import { CallDemo } from '@/components/voice/CallDemo';
import { LatencyBars } from '@/components/voice/LatencyBars';
import { RoiEstimator } from '@/components/voice/RoiEstimator';
import { BOOKING_HASH, BOOK_LABEL, contact } from '@/lib/content';
import {
  afterCall,
  controls,
  deployments,
  latencyWork,
  pipeline,
  useCases,
  voiceFaq,
  voiceProof,
} from '@/lib/voice';

export const metadata: Metadata = {
  title: 'Voice AI — BitBLabs',
  description:
    'AI voice agents that answer in ~300ms, cut manual follow-ups 35–45%, and run across organizations from one backend. Built for Natsoft, Setoo, BU Bhandari, Vani Connect and Rezonna.',
};

export default function VoiceServicePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="svc-hero" data-theme="dark" aria-labelledby="svc-title">
        <div className="wrap svc-hero__grid">
          <div>
            <p className="eyebrow" data-s="fade" data-now="">
              <span className="eyebrow__slash">/</span> Services · Voice AI
            </p>
            <Title
              as="h1"
              id="svc-title"
              className="display-xl svc-hero__title"
              label="Voice agents that answer in 300 ms."
              lines={[
                'Voice agents',
                'that answer',
                <>
                  in 300 ms
                  <Dot />
                </>,
              ]}
              now
              delay={0.1}
            />
            <p className="svc-hero__lede body-md" data-s="para" data-now="" data-delay="0.4">
              We build AI calling systems that hold real conversations, follow your policies, and write every
              result back to your CRM. They run in production today for an enterprise with 2,000+ employees, three
              organizations on one backend, and our own real-estate sales caller.
            </p>
            <div className="svc-hero__ctas" data-s="fade" data-now="" data-delay="0.6">
              <Cta href={BOOKING_HASH} external={false}>{BOOK_LABEL}</Cta>
              <Cta href="#roi">Estimate your ROI</Cta>
            </div>
          </div>
          <div data-s="up" data-now="" data-delay="0.3">
            <CallDemo />
          </div>
        </div>
        <div className="wrap">
          <p className="svc-hero__built">
            In production for <b>Natsoft</b> · <b>Setoo</b> · <b>BU Bhandari</b> · <b>Vani Connect</b> ·{' '}
            <b>Rezonna</b>
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="svc-proof wrap" aria-labelledby="svc-proof-title">
        <div className="split">
          <div className="split__aside">
            <Eyebrow>Results</Eyebrow>
            <Title
              id="svc-proof-title"
              className="display-lg"
              label="Measured in production."
              lines={[
                'Measured in',
                <>
                  production
                  <Dot />
                </>,
              ]}
            />
            <p className="split__note body-xs">Every number names the deployment it came from.</p>
          </div>
          <dl className="stats" data-s="stagger">
            {voiceProof.map((s) => (
              <div className="stats__item" key={s.k}>
                <dt>
                  <b>{s.v}</b>
                  <span>{s.k}</span>
                </dt>
                <dd>{s.src}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Deployments */}
      <section className="svc-deploy dark" data-theme="dark" aria-labelledby="svc-deploy-title">
        <div className="wrap">
          <Eyebrow n="03">Deployments</Eyebrow>
          <Title
            id="svc-deploy-title"
            className="display-lg"
            label="Voice systems we've shipped."
            lines={[
              <>
                What we’ve shipped<Dot />
              </>,
            ]}
          />
          <div className="deploys">
            {deployments.map((d, i) => (
              <article className="deploy" key={d.id} data-s="up">
                <header className="deploy__head">
                  <span className="deploy__n">0{i + 1}</span>
                  <div>
                    <p className="deploy__kind">{d.kind}</p>
                    <h3>{d.name}</h3>
                    <p className="deploy__client">{d.client}</p>
                    <p className="deploy__meta">{d.meta}</p>
                  </div>
                </header>
                <div className="deploy__body">
                  <p className="deploy__summary">{d.summary}</p>
                  <ul className="deploy__built">
                    {d.built.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="deploy__side">
                  <dl className="deploy__results">
                    {d.results.map((r) => (
                      <div key={r.k}>
                        <dt>{r.v}</dt>
                        <dd>{r.k}</dd>
                      </div>
                    ))}
                  </dl>
                  {d.external ? (
                    <a className="deploy__link" href={d.href} target="_blank" rel="noopener noreferrer">
                      {d.hrefLabel} ↗
                    </a>
                  ) : (
                    <Link className="deploy__link" href={d.href}>
                      {d.hrefLabel} →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latency */}
      <section className="svc-latency wrap" aria-labelledby="svc-latency-title">
        <div className="split">
          <div className="split__aside">
            <Eyebrow>Latency</Eyebrow>
            <Title
              id="svc-latency-title"
              className="display-lg"
              label="Latency is the product."
              lines={[
                'Latency is',
                <>
                  the product
                  <Dot />
                </>,
              ]}
            />
            <p className="body-md split__lede" data-s="para">
              A voice agent that pauses for two seconds sounds like a machine, and callers hang up. Getting under a
              third of a second was the hardest technical win on Natvoiz.
            </p>
          </div>
          <div>
            <LatencyBars />
            <ul className="lat__how" data-s="stagger">
              {latencyWork.map((w) => (
                <li key={w.k}>
                  <h3>{w.k}</h3>
                  <p>{w.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pipeline + integrations */}
      <section className="svc-stack dark" data-theme="dark" aria-labelledby="svc-stack-title">
        <div className="wrap">
          <div className="work__head">
            <div>
              <Eyebrow>Integrations</Eyebrow>
              <Title
                id="svc-stack-title"
                className="display-lg"
                label="Your stack, not ours."
                lines={[
                  <>
                    Your stack, not ours<Dot />
                  </>,
                ]}
              />
            </div>
            <p className="work__intro body-md" data-s="para">
              Every flow picks its own providers, so you can keep the vendors you trust and swap them later without
              a rebuild. Audio streams over WebSockets end to end.
            </p>
          </div>

          <ol className="pipe" data-s="stagger">
            <li className="pipe__end">
              <small>In</small>
              <b>Caller speaks</b>
            </li>
            {pipeline.map((p) => (
              <li className="pipe__node" key={p.k}>
                <small>{p.k}</small>
                <ul>
                  {p.v.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="pipe__end">
              <small>Out</small>
              <b>Agent replies</b>
            </li>
          </ol>

          <div className="after">
            <h3>Every call leaves behind</h3>
            <ul data-s="stagger">
              {afterCall.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="svc-uses wrap" aria-labelledby="svc-uses-title">
        <Eyebrow>Use cases</Eyebrow>
        <Title
          id="svc-uses-title"
          className="display-lg"
          label="One platform, many jobs."
          lines={[
            <>
              One platform, many jobs<Dot />
            </>,
          ]}
        />
        <ul className="uses" data-s="stagger">
          {useCases.map((u) => (
            <li key={u.k}>
              <h3>{u.k}</h3>
              <p>{u.v}</p>
              <small>Shipped on {u.src}</small>
            </li>
          ))}
        </ul>
      </section>

      {/* ROI */}
      <section className="svc-roi" id="roi" aria-labelledby="svc-roi-title">
        <div className="wrap">
          <div className="work__head">
            <div>
              <Eyebrow>ROI</Eyebrow>
              <Title
                id="svc-roi-title"
                className="display-lg"
                label="What it's worth to you."
                lines={[
                  <>
                    What it’s worth to you<Dot />
                  </>,
                ]}
              />
            </div>
            <p className="work__intro body-md" data-s="para">
              Plug in your own call volume. We apply the one result we measured: 35–45% fewer manual follow-ups at
              Natsoft.
            </p>
          </div>
          <RoiEstimator />
        </div>
      </section>

      {/* Enterprise controls */}
      <section className="svc-controls wrap" aria-labelledby="svc-controls-title">
        <div className="split">
          <div className="split__aside">
            <Eyebrow>Controls</Eyebrow>
            <Title
              id="svc-controls-title"
              className="display-lg"
              label="Enterprise-ready by default."
              lines={[
                'Enterprise-ready',
                <>
                  by default
                  <Dot />
                </>,
              ]}
            />
          </div>
          <ul className="proof proof--light" data-s="stagger">
            {controls.map((c) => (
              <li key={c.k}>
                <h3>{c.k}</h3>
                <p>{c.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq wrap" aria-labelledby="svc-faq-title">
        <div className="split">
          <div className="split__aside">
            <Eyebrow>Questions</Eyebrow>
            <h2 id="svc-faq-title" className="display-lg">
              Buyer questions<Dot />
            </h2>
            <div className="svc-ask" data-s="up">
              <p>Tell us which calls eat your team’s day. We’ll map the flow, pick the providers, and show you what it takes to automate it.</p>
              <div className="svc-ask__actions">
                <Cta href={BOOKING_HASH} external={false}>{BOOK_LABEL}</Cta>
                <a className="studio__mail" href={contact.emailHref}>
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
          <div className="faq">
            {voiceFaq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
