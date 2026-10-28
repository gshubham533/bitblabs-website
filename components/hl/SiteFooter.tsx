import Link from 'next/link'
import { founders } from '@/lib/founders'
import {
  BOOK_NAV_LABEL,
  CASE_STUDIES_PATH,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  LEGAL_NAME,
  PORTFOLIO_SECTION_HREF,
  PRIVACY_PATH,
  TERMS_PATH,
} from '@/lib/site'
import { IconLinkedIn, IconMail, IconPhone } from './icons'
import { Logo } from './Logo'
import { NewsletterForm } from './NewsletterForm'
import { TrackedBookLink } from './TrackedBookLink'
import { RollIcon } from './ui'

const linkClass =
  'text-base text-zinc-600 decoration-2 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline md:text-lg'

const PAGES = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: PORTFOLIO_SECTION_HREF },
  { label: 'Case studies', href: CASE_STUDIES_PATH },
  { label: 'Brain stuff', href: '/brain-stuff' },
  { label: 'Side quests', href: '/side-quests' },
]

const OTHER = [
  { label: 'FAQs', href: '/#faq' },
  { label: 'Privacy Policy', href: PRIVACY_PATH },
  { label: 'Terms', href: TERMS_PATH },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  const linkedIn = founders[0]?.linkedIn

  const socials = [
    { label: `Email ${CONTACT_EMAIL}`, href: CONTACT_EMAIL_HREF, icon: <IconMail className="size-4" /> },
    { label: 'Call BitBlabs', href: `tel:${CONTACT_PHONE}`, icon: <IconPhone className="size-4" /> },
    ...(linkedIn
      ? [{ label: 'BitBlabs founder on LinkedIn', href: linkedIn, icon: <IconLinkedIn className="size-4" />, external: true }]
      : []),
  ]

  return (
    <footer className="bg-hl-bg pb-5 pt-20 lg:pb-7.5">
      <div className="hl-container">
        <div className="grid grid-cols-1 justify-between gap-7.5 md:grid-cols-4 md:gap-12.5 lg:gap-32">
          <div className="md:col-span-2">
            <Logo size="lg" className="mb-10" />
            <div className="lg:max-w-md">
              <h2 className="mb-2.5 text-xl font-medium md:text-2xl">Notes on workflows worth fixing</h2>
              <p className="mb-5 text-lg text-zinc-500">
                No spam. Occasional notes on where AI helps real operations, and where it doesn’t.
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-base font-medium text-zinc-900 lg:mb-7.5">Pages links</h3>
            <div className="flex flex-col gap-2">
              {PAGES.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-5 text-base font-medium text-zinc-900 lg:mb-7.5">Other links</h3>
            <TrackedBookLink location="footer" className={linkClass}>
              {BOOK_NAV_LABEL}
            </TrackedBookLink>
            {OTHER.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
            <a href={CONTACT_EMAIL_HREF} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-start gap-5 border-t border-zinc-200 pt-5 md:mt-8 md:flex-row md:justify-between md:gap-6 md:pt-7.5 lg:mt-16">
          <p className="text-base text-zinc-600 md:text-lg">
            © {year} <span className="font-medium text-zinc-900">{LEGAL_NAME}</span> · Pune, India
          </p>
          <div className="flex items-center justify-start gap-2.5 md:justify-end">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                {...('external' in s && s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group inline-flex size-9 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-zinc-800"
              >
                <RollIcon>{s.icon}</RollIcon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
