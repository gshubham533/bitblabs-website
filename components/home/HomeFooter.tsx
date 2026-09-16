import { BookButton } from '@/components/home/BookButton'
import { ColorBar } from '@/components/home/ui/Editorial'
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
    <footer className="bg-[var(--bb-ink)] text-[var(--bb-on-ink)]">
      <ColorBar />
      <div className="bb-home-container grid grid-cols-1 gap-12 pb-16 pt-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="mb-4 text-[17px] font-bold text-white">BitBlabs</p>
          <p className="max-w-[280px] text-[15px] leading-relaxed text-[var(--bb-on-ink-deemph)]">
            {FOOTER.positioning}
          </p>
        </div>
        <div>
          <p className="bb-label mb-5 text-[var(--bb-on-ink-caption)]">Explore</p>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            <li>
              <Link
                className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
                href={HOW_IT_WORKS_ABSOLUTE_HREF}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
                href={OFFER_ABSOLUTE_HREF}
              >
                AI Workflow Strategy Session
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
                href={CASE_STUDY_ABSOLUTE_HREF}
              >
                Case study
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
                href={PORTFOLIO_SECTION_HREF}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
                href={PRIVACY_PATH}
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
                href={TERMS_PATH}
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="bb-label mb-5 text-[var(--bb-on-ink-caption)]">Contact</p>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            <li>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            {founders.map((f) => (
              <li key={f.id}>
                <a
                  href={f.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[var(--bb-on-ink-muted)] hover:text-white"
                >
                  {f.name} on LinkedIn
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="bb-label mb-5 text-[var(--bb-on-ink-caption)]">Talk to us</p>
          <BookButton location="footer" variant="ink" className="whitespace-nowrap px-[26px] py-3.5 shadow-[inset_0_0_0_1px_#555] hover:bg-white hover:text-[var(--bb-ink)]">
            Book Your Strategy Session
          </BookButton>
        </div>
      </div>
      <div className="bb-home-container">
        <div className="flex items-center justify-between border-t border-[var(--bb-hairline-on-ink)] pb-6 pt-5 max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <p className="text-[13px] text-[var(--bb-on-ink-deemph)]">© {year} BitBlabs</p>
          <div className="flex items-center gap-2" aria-hidden>
            <span className="size-2 rounded-full bg-[var(--bb-blue)]" />
            <span className="size-2 rounded-full bg-[var(--bb-red)]" />
            <span className="size-2 rounded-full bg-[var(--bb-amber-fill)]" />
            <span className="size-2 rounded-full bg-[var(--bb-green)]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
