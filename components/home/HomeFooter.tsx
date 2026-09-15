import { BookButton } from '@/components/home/BookButton'
import { FOOTER } from '@/lib/landing'
import { founders } from '@/lib/founders'
import {
  CASE_STUDY_ABSOLUTE_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  HOW_IT_WORKS_ABSOLUTE_HREF,
  OFFER_ABSOLUTE_HREF,
  PRIVACY_PATH,
  PORTFOLIO_SECTION_HREF,
  TERMS_PATH,
} from '@/lib/site'
import Link from 'next/link'

export function HomeFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--bb-line)] bg-[var(--bb-canvas)]">
      <div className="bb-home-container py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-base font-semibold text-[var(--bb-ink)]">BitBlabs</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--bb-ink-muted)]">
              {FOOTER.positioning}
            </p>
            <div className="mt-5">
              <BookButton location="footer" className="min-h-11 text-sm">
                Book Your Strategy Session
              </BookButton>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
                Explore
              </p>
              <nav className="mt-3 flex flex-col gap-2 text-sm" aria-label="Footer">
                <Link
                  href={HOW_IT_WORKS_ABSOLUTE_HREF}
                  className="text-[var(--bb-ink)] hover:text-[var(--bb-brand-dark)]"
                >
                  How it works
                </Link>
                <Link
                  href={OFFER_ABSOLUTE_HREF}
                  className="text-[var(--bb-ink)] hover:text-[var(--bb-brand-dark)]"
                >
                  AI Workflow Strategy Session
                </Link>
                <Link
                  href={CASE_STUDY_ABSOLUTE_HREF}
                  className="text-[var(--bb-ink)] hover:text-[var(--bb-brand-dark)]"
                >
                  Case study
                </Link>
                <Link
                  href={PORTFOLIO_SECTION_HREF}
                  className="text-[var(--bb-ink)] hover:text-[var(--bb-brand-dark)]"
                >
                  Work
                </Link>
                <Link href={PRIVACY_PATH} className="text-[var(--bb-ink)] hover:text-[var(--bb-brand-dark)]">
                  Privacy Policy
                </Link>
                <Link href={TERMS_PATH} className="text-[var(--bb-ink)] hover:text-[var(--bb-brand-dark)]">
                  Terms and Conditions
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--bb-ink)]">
                <li>
                  <a href={`tel:${CONTACT_PHONE}`} className="hover:text-[var(--bb-brand-dark)]">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </li>
                {founders.map((f) => (
                  <li key={f.id}>
                    <a
                      href={f.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--bb-brand-dark)]"
                    >
                      {f.name} on LinkedIn
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-[var(--bb-ink-muted)]">© {year} BitBlabs</p>
      </div>
    </footer>
  )
}
