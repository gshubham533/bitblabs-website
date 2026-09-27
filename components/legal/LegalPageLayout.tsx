import Link from 'next/link'
import type { ReactNode } from 'react'
import { FinalCta } from '@/components/hl/FinalCta'
import { PageShell } from '@/components/hl/PageShell'
import type { LegalSection } from '@/lib/legal/types'
import { PRIVACY_PATH, TERMS_PATH } from '@/lib/site'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: LegalSection[]
  relatedPage: 'privacy' | 'terms'
}

/** The template's Privacy Policy page: big centered title, then a max-w-4xl reading column. */
export function LegalPageLayout({ title, lastUpdated, intro, sections, relatedPage }: LegalPageLayoutProps) {
  const relatedHref = relatedPage === 'privacy' ? TERMS_PATH : PRIVACY_PATH
  const relatedLabel = relatedPage === 'privacy' ? 'Terms & Conditions' : 'Privacy Policy'

  return (
    <PageShell>
      <section className="pt-34 md:pb-10 md:pt-42 lg:pt-50">
        <div className="hl-container">
          <div className="space-y-5 text-center">
            <h1 className="text-4xl font-medium md:text-5xl lg:text-[90px] lg:leading-[1.1]">{title}</h1>
            <p className="text-sm md:text-lg">Last updated: {lastUpdated}</p>
          </div>

          <div className="py-12 md:py-18 lg:py-25">
            <article className="mx-auto max-w-4xl">
              <div className="space-y-5 text-zinc-800 md:space-y-10">
                <p className="text-base leading-normal text-zinc-600 md:text-lg md:leading-relaxed">{intro}</p>

                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="mb-2.5 text-xl font-medium text-zinc-900 md:text-2xl lg:text-4xl">{section.title}</h2>
                    <div className="space-y-4 text-base leading-normal text-zinc-600 marker:text-zinc-600 md:text-lg md:leading-relaxed [&_ul]:space-y-2.5 [&_ul]:ps-6 lg:[&_ul]:space-y-4">
                      {section.body}
                    </div>
                  </section>
                ))}

                <nav aria-label="Related legal page" className="border-t border-zinc-200 pt-10">
                  <p className="text-base text-zinc-600">
                    See also:{' '}
                    <Link href={relatedHref} className="font-medium text-zinc-900 underline underline-offset-4">
                      {relatedLabel}
                    </Link>
                  </p>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  )
}
