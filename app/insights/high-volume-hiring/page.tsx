import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
import { Cta } from '@/components/Roll';
import { hiringArticle as a } from '@/lib/case-studies';
import { BOOKING_HASH, BOOK_LABEL, featuredInsight } from '@/lib/content';

export const metadata: Metadata = {
  title: 'How generative AI is transforming high-volume hiring — BitBLabs',
  description: a.dek,
};

export default function HiringArticlePage() {
  return (
    <SiteShell>
      <article className="doc wrap">
        <header className="doc__head">
          <p className="eyebrow">
            <Link href="/#insight">
              <span className="eyebrow__slash">/</span> Insight
            </Link>{' '}
            · Recruitment
          </p>
          <h1 className="display-lg">{a.title}</h1>
          <p className="doc__lede">{a.dek}</p>
          <p className="doc__meta">{a.meta}</p>
        </header>

        <div className="insight-stats">
          {featuredInsight.points.map((pt) => (
            <div key={pt.k}>
              <b>{pt.v}</b>
              <span>{pt.k}</span>
            </div>
          ))}
        </div>

        <div className="legal prose">
          {a.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <div>
                {s.p?.slice(0, s.list ? 1 : undefined).map((p) => <p key={p}>{p}</p>)}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
                {s.list && s.p?.slice(1).map((p) => <p key={p}>{p}</p>)}
              </div>
            </section>
          ))}
          <p className="doc__note">{a.note}</p>
          <div className="doc__cta">
            <Cta href={BOOKING_HASH} external={false}>
              {BOOK_LABEL}
            </Cta>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
