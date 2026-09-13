'use client'

import Link from 'next/link'
import {
  APPLY_HREF,
  APPLY_NAV_LABEL,
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
  tone?: 'dark' | 'light'
}

export function SiteFooter({ compact = false, showLegalInfo = false, tone = 'dark' }: SiteFooterProps) {
  const year = new Date().getFullYear()
  const light = tone === 'light'

  return (
    <footer
      className={cn(
        'border-t px-5 py-10 text-sm sm:px-8',
        compact && 'pt-8',
        light
          ? 'border-[#111]/10 bg-[#f3f2ee] text-[#111]/50'
          : 'border-white/10 bg-[#050505] text-white/45'
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <p className={cn('font-semibold', light ? 'text-[#111]' : 'text-white')}>BitBLabs</p>
          <p className="mt-2 leading-relaxed">
            Paid AI Strategy Session for founder-led service businesses.
          </p>
          <p className={cn('mt-4 text-xs', light ? 'text-[#111]/35' : 'text-white/35')}>
            © {year} BitBLabs
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <a
            href={APPLY_HREF}
            className={cn(
              'inline-flex min-h-10 items-center px-4 text-[13px] font-semibold',
              light ? 'bg-[#111] text-white' : 'bg-white text-black'
            )}
          >
            {APPLY_NAV_LABEL}
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Link href={PORTFOLIO_SECTION_HREF} className={light ? 'hover:text-[#111]' : 'hover:text-white'}>
              Work
            </Link>
            <Link href={PRIVACY_PATH} className={light ? 'hover:text-[#111]' : 'hover:text-white'}>
              Privacy
            </Link>
            <Link href={TERMS_PATH} className={light ? 'hover:text-[#111]' : 'hover:text-white'}>
              Terms
            </Link>
          </nav>
        </div>
      </div>

      {showLegalInfo ? (
        <div
          className={cn(
            'mx-auto mt-10 max-w-6xl border-t pt-6 text-xs leading-relaxed',
            light ? 'border-[#111]/10 text-[#111]/40' : 'border-white/10 text-white/35'
          )}
        >
          <p>{LEGAL_NAME}</p>
          <address className="mt-2 not-italic">
            {LEGAL_ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-2">
            <a href={`tel:${CONTACT_PHONE}`} className={light ? 'hover:text-[#111]' : 'hover:text-white'}>
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      ) : null}
    </footer>
  )
}
