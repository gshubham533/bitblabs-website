import Link from 'next/link'
import { FinalCta } from '@/components/hl/FinalCta'
import { IconArrowRight } from '@/components/hl/icons'
import { InnerHero, PageShell } from '@/components/hl/PageShell'
import { Eyebrow } from '@/components/hl/ui'
import { caseStudies } from '@/lib/data'

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow={<Eyebrow>Field notes</Eyebrow>}
        title="Case studies"
        description="First-hand notes from BitBlabs work on operational AI systems, including anonymized recruitment coordination. Not a blog of generic AI takes."
      />
      <section className="pb-20 lg:pb-30">
        <div className="hl-container">
          <ul className="grid gap-5 md:grid-cols-2 lg:gap-7.5">
            {caseStudies.map((study) => (
              <li key={study.id}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-5 transition-shadow hover:shadow-xl md:p-7.5 lg:p-10"
                >
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-zinc-200 px-3.5 py-1.5 text-sm font-semibold text-zinc-800">
                      {study.category}
                    </span>
                    <span className="rounded-full border border-zinc-200 px-3.5 py-1.5 text-sm font-medium text-zinc-500">
                      {study.date
                        ? new Intl.DateTimeFormat('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          }).format(new Date(study.date))
                        : study.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">{study.title}</h2>
                  <p className="mt-2.5 flex-1 text-lg text-zinc-600">{study.description}</p>
                  <span className="mt-7.5 inline-flex items-center gap-2 text-base font-medium text-zinc-900">
                    Read case study
                    <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  )
}
