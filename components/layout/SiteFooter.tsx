'use client'

import Link from 'next/link'
import {
  BOOK_HREF,
  BOOK_NAV_LABEL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  LEGAL_ADDRESS_LINES,
  LEGAL_NAME,
  PORTFOLIO_SECTION_HREF,
  PRIVACY_PATH,
  TERMS_PATH,
} from '@/lib/site'
import { cn } from '@/lib/utils'

interface SiteFooterProps {
  compact?: boolean
  showLegalInfo?: boolean
}

export function SiteFooter({ compact = false, showLegalInfo = false }: SiteFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'border-t border-white/10 bg-[#050505] px-5 py-10 text-sm text-white/45 sm:px-8',
        compact && 'pt-8'
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <p className="font-semibold text-white">BitBLabs</p>
          <p className="mt-2 leading-relaxed">
            Paid AI Strategy Session for founder-led service businesses.
          </p>
          <p className="mt-4 text-xs text-white/35">© {year} BitBLabs</p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <a
            href={BOOK_HREF}
            className="inline-flex min-h-10 items-center bg-white px-4 text-[13px] font-semibold text-black"
          >
            {BOOK_NAV_LABEL}
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Link href={PORTFOLIO_SECTION_HREF} className="hover:text-white">
              Work
            </Link>
            <Link href={PRIVACY_PATH} className="hover:text-white">
              Privacy
            </Link>
            <Link href={TERMS_PATH} className="hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </div>

      {showLegalInfo ? (
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs leading-relaxed text-white/35">
          <p>{LEGAL_NAME}</p>
          <address className="mt-2 not-italic">
            {LEGAL_ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-2">
            <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      ) : null}
    </footer>
  )
}
