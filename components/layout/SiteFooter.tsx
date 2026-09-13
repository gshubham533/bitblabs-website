'use client'

import Link from 'next/link'
import {
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  LEGAL_ADDRESS_LINES,
  LEGAL_NAME,
  PRIVACY_PATH,
  STRATEGY_APPLY_PATH,
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
        'border-t border-rule bg-paper-2 px-6 pb-8 md:px-12 lg:px-16',
        compact ? 'pt-12' : 'pt-16 md:pt-20'
      )}
    >
      <div className="page-max">
        <p className="max-w-[18ch] font-display text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-ink">
          Leave with a priority you can defend.
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-rule pt-6 font-body text-sm text-ink-2 md:flex-row md:flex-wrap md:items-baseline md:justify-between">
          <p className="font-display text-base font-bold tracking-tight text-ink">BitBLabs</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <li>
                <Link href="/projects" className="whitespace-nowrap text-ink">
                  Work
                </Link>
              </li>
              <li>
                <Link href={STRATEGY_APPLY_PATH} className="whitespace-nowrap text-ink">
                  Apply
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="whitespace-nowrap text-ink">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={PRIVACY_PATH} className="whitespace-nowrap">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href={TERMS_PATH} className="whitespace-nowrap">
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-muted">© {year} BitBLabs</p>
        </div>

        {showLegalInfo ? (
          <div className="mt-8 max-w-xl space-y-2 font-body text-xs leading-relaxed text-muted">
            <p>{LEGAL_NAME}</p>
            <address className="not-italic">
              {LEGAL_ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p>
              <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
            </p>
          </div>
        ) : null}
      </div>
    </footer>
  )
}
