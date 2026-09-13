import Link from 'next/link'
import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import type { LegalSection } from '@/lib/legal/types'
import { PRIVACY_PATH, TERMS_PATH } from '@/lib/site'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: LegalSection[]
  relatedPage: 'privacy' | 'terms'
}

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
  relatedPage,
}: LegalPageLayoutProps) {
  const relatedHref = relatedPage === 'privacy' ? TERMS_PATH : PRIVACY_PATH
  const relatedLabel =
    relatedPage === 'privacy' ? 'Terms & Conditions' : 'Privacy Policy'

  return (
    <main className="relative min-h-screen bg-paper text-ink">
      <Navbar position="static" />

      <article className="page-x mx-auto max-w-[42rem] pb-16 pt-10 md:pt-14">
        <Link href="/" className="font-body text-sm text-ink-2">
          ← Back to home
        </Link>

        <header className="mt-8 space-y-3 md:mt-10">
          <h1 className="font-display text-[length:var(--text-display-s)] font-bold tracking-tight text-ink">
            {title}
          </h1>
          <p className="font-body text-sm text-muted">Last updated: {lastUpdated}</p>
        </header>

        <div className="mt-10 space-y-10 font-body text-base leading-relaxed text-ink-2 md:mt-12">
          <p>{intro}</p>

          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-display text-xl font-bold text-ink">{section.title}</h2>
              <div className="space-y-3">{section.body}</div>
            </section>
          ))}

          <nav aria-label="Related legal page" className="border-t border-rule pt-10">
            <p className="font-body text-sm text-muted">
              See also:{' '}
              <Link href={relatedHref} className="text-ink">
                {relatedLabel}
              </Link>
            </p>
          </nav>
        </div>
      </article>

      <SiteFooter compact />
    </main>
  )
}
