import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/SiteShell';
import { Cta } from '@/components/Roll';
import { Dot, Title } from '@/components/Title';
import { caseStudies } from '@/lib/case-studies';
import { BOOKING_HASH, BOOK_LABEL, projects } from '@/lib/content';

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: `${cs.name} — BitBLabs case study`, description: cs.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  const project = projects.find((p) => p.slug === slug);
  if (!cs || !project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <SiteShell>
      <article className="case">
        <header className="case__head wrap">
          <p className="eyebrow" data-s="fade" data-now="">
            <Link href="/#work">
              <span className="eyebrow__slash">/</span> Work
            </Link>{' '}
            · {project.industry}
          </p>
          <Title
            as="h1"
            className="display-xl case__title"
            label={`${cs.name}.`}
            lines={[
              <>
                {cs.name}
                <Dot />
              </>,
            ]}
            now
            delay={0.1}
          />
          <div className="case__intro">
            <p className="case__summary" data-s="para" data-now="" data-delay="0.3">
              {cs.summary}
            </p>
            <dl className="case__meta" data-s="stagger" data-now="" data-delay="0.4">
              {cs.meta.map((m) => (
                <div key={m.k}>
                  <dt>{m.k}</dt>
                  <dd>{m.v}</dd>
                </div>
              ))}
              {cs.live && (
                <div>
                  <dt>Live</dt>
                  <dd>
                    <a href={cs.live} target="_blank" rel="noopener noreferrer">
                      {cs.live.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </header>

        {(cs.gallery[0] || project.shot) && (
          <figure className="case__hero wrap" data-s="image">
            <div className="case__hero-frame" style={{ background: project.bg }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cs.gallery[0]?.src ?? project.shot} alt={cs.gallery[0]?.alt ?? `${cs.name} preview`} />
            </div>
          </figure>
        )}

        <section className="case__grid wrap">
          <div className="case__col">
            <h2 className="case__h">The client</h2>
            <p className="case__lead">{cs.client.title}</p>
            <p>{cs.client.text}</p>
          </div>
          <div className="case__col">
            <h2 className="case__h">The problem</h2>
            {cs.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="case__built wrap">
          <h2 className="display-lg" data-s="up">
            What we built<Dot />
          </h2>
          <div className="case__built-grid" data-s="stagger">
            {cs.built.map((b) => (
              <div key={b.title} className="case__built-item">
                <h3>{b.title}</h3>
                <ul>
                  {b.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="case__stack">
            <span>Stack</span> {cs.stack.join(' · ')}
          </p>
        </section>

        {cs.gallery.length > 1 && (
          <section className="case__gallery wrap" data-s="stagger">
            {cs.gallery.slice(1).map((g) => (
              <figure key={g.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </section>
        )}

        <section className="case__results" data-theme="dark">
          <div className="wrap">
            <h2 className="case__h">Outcome</h2>
            <div className="case__results-grid" data-s="stagger">
              {cs.results.map((r) => (
                <div key={r.k}>
                  <b>{r.v}</b>
                  <span>{r.k}</span>
                </div>
              ))}
            </div>
            {cs.resultsNote && <p className="case__note">{cs.resultsNote}</p>}
            <p className="case__why" data-s="para">
              {cs.why}
            </p>
            <div className="case__actions">
              <Cta href={BOOKING_HASH} external={false}>{BOOK_LABEL}</Cta>
              {(slug === 'natvoiz' || slug === 'setoo') && (
                <Link className="case__next" href="/services/voice">
                  All our voice AI work →
                </Link>
              )}
              <Link className="case__next" href={`/work/${next.slug}`}>
                Next: {next.name} →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
