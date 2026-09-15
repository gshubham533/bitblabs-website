import Link from 'next/link'
import type { ReactNode } from 'react'
import { BbPageShell } from '@/components/home/BbPageShell'
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
    <BbPageShell>
      <section className="bb-home-section pt-28 sm:pt-32">
        <div className="bb-home-container">
          <article className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="text-sm text-[var(--bb-ink-muted)] transition-colors hover:text-[var(--bb-brand)]"
            >
              ← Back to home
            </Link>

            <header className="mt-8 space-y-3 md:mt-10">
              <h1 className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(2.4rem,6vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.01em] text-[var(--bb-ink)]">
                {title}
              </h1>
              <p className="text-sm text-[var(--bb-ink-muted)]">Last updated: {lastUpdated}</p>
            </header>

            <div className="mt-10 space-y-10 text-sm leading-relaxed text-[var(--bb-ink-muted)] md:mt-12 md:text-base">
              <p>{intro}</p>

              {sections.map((section) => (
                <section key={section.title} className="space-y-3">
                  <h2 className="font-[family-name:var(--font-barlow-condensed)] text-xs font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink)]">
                    {section.title}
                  </h2>
                  <div className="space-y-3">{section.body}</div>
                </section>
              ))}

              <nav
                aria-label="Related legal page"
                className="border-t border-[var(--bb-line)] pt-10"
              >
                <p className="text-sm text-[var(--bb-ink-muted)]">
                  See also:{' '}
                  <Link
                    href={relatedHref}
                    className="font-medium text-[var(--bb-brand)] transition-colors hover:text-[var(--bb-brand-dark)]"
                  >
                    {relatedLabel}
                  </Link>
                </p>
              </nav>
            </div>
          </article>
        </div>
      </section>
    </BbPageShell>
  )
}
