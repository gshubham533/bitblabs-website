'use client'

import Link from 'next/link'
import { BbPageShell } from '@/components/home/BbPageShell'
import { caseStudies } from '@/lib/data'

export default function CaseStudiesPage() {
  return (
    <BbPageShell>
      <section className="bb-home-section pt-28 sm:pt-32">
        <div className="bb-home-container">
          <h1 className="max-w-3xl font-[family-name:var(--font-barlow-condensed)] text-[clamp(2.4rem,7.2vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.01em] text-[var(--bb-ink)]">
            Case studies
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:text-lg">
            First-hand notes from BitBlabs work on operational AI systems, including anonymized
            recruitment coordination. Not a blog of generic AI takes.
          </p>

          <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            {caseStudies.map((study) => (
              <li key={study.id}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="bb-panel group flex h-full flex-col p-6 transition-colors hover:bg-[var(--bb-brand-soft)] md:p-8"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-board)] px-2.5 py-1.5 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)]">
                      {study.category}
                    </span>
                    <span className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-board)] px-2.5 py-1.5 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink-muted)]">
                      {study.date
                        ? new Intl.DateTimeFormat('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          }).format(new Date(study.date))
                        : study.readTime}
                    </span>
                  </div>
                  <h2 className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.05] tracking-[0.02em] text-[var(--bb-ink)]">
                    {study.title}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--bb-ink-muted)]">
                    {study.description}
                  </p>
                  <p className="mt-6 font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.1em] text-[var(--bb-brand)] transition-colors group-hover:text-[var(--bb-brand-dark)]">
                    Read case study →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </BbPageShell>
  )
}
