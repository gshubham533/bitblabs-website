'use client'

import Link from 'next/link'
import { BbPageShell } from '@/components/home/BbPageShell'
import { caseStudies } from '@/lib/data'

export default function CaseStudiesPage() {
  return (
    <BbPageShell>
      <section className="bb-home-section">
        <div className="bb-home-container">
          <h1 className="bb-display bb-h1 max-w-3xl text-[var(--bb-ink)]">Case studies</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:text-lg">
            First-hand notes from BitBlabs work on operational AI systems, including anonymized
            recruitment coordination. Not a blog of generic AI takes.
          </p>

          <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            {caseStudies.map((study) => (
              <li key={study.id}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="bb-panel group flex h-full flex-col p-6 transition-colors hover:bg-[var(--bb-surface-soft)] md:p-8"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="bb-label border border-[var(--bb-line)] px-2.5 py-1.5 text-[var(--bb-ink)]">
                      {study.category}
                    </span>
                    <span className="bb-label border border-[var(--bb-line)] px-2.5 py-1.5 text-[var(--bb-ink-muted)]">
                      {study.date
                        ? new Intl.DateTimeFormat('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          }).format(new Date(study.date))
                        : study.readTime}
                    </span>
                  </div>
                  <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[var(--bb-ink)]">
                    {study.title}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--bb-ink-muted)]">
                    {study.description}
                  </p>
                  <p className="mt-6 text-[15px] font-bold text-[var(--bb-blue)] transition-transform group-hover:translate-x-1.5">
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
