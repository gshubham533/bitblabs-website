'use client'

import { BookButton } from '@/components/home/BookButton'
import { ACCENT_TEXT } from '@/components/home/ui/Editorial'
import { trackEvent } from '@/lib/analytics'
import {
  BOOK_HREF,
  CASE_STUDIES_PATH,
  HOW_IT_WORKS_ABSOLUTE_HREF,
  HOW_IT_WORKS_HREF,
  PORTFOLIO_SECTION_HREF,
} from '@/lib/site'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const HOME_NAV = [
  { href: '#recognition', label: 'Problems' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#offer', label: 'Session' },
  { href: '#case-study', label: 'Proof' },
  { href: '#faq', label: 'FAQ' },
] as const

const INNER_NAV = [
  { href: PORTFOLIO_SECTION_HREF, label: 'Work' },
  { href: CASE_STUDIES_PATH, label: 'Case studies' },
  { href: HOW_IT_WORKS_ABSOLUTE_HREF, label: 'How it works' },
] as const

type HomeHeaderProps = {
  variant?: 'home' | 'inner'
}

export function HomeHeader({ variant = 'home' }: HomeHeaderProps) {
  const [open, setOpen] = useState(false)
  const nav = variant === 'inner' ? INNER_NAV : HOME_NAV
  const howItWorksHref = variant === 'inner' ? HOW_IT_WORKS_ABSOLUTE_HREF : HOW_IT_WORKS_HREF

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav className="relative border-b border-[var(--bb-line)]" aria-label="Primary">
        <div className="bb-home-container flex h-[76px] items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[var(--bb-logo-ink)]"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logos/bitblabs-logo.svg"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="text-[22px] font-bold tracking-tight">BitBlabs</span>
          </Link>

          <div className="flex items-center gap-10 max-lg:gap-4">
            {nav.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[15px] font-medium hover:text-[var(--bb-blue)] max-lg:hidden"
                  onClick={() =>
                    trackEvent('secondary_cta_click', { location: 'header', label: item.label })
                  }
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] font-medium hover:text-[var(--bb-blue)] max-lg:hidden"
                  onClick={() =>
                    trackEvent('secondary_cta_click', { location: 'header', label: item.label })
                  }
                >
                  {item.label}
                </Link>
              )
            )}

            <BookButton
              location="header"
              variant="ink"
              className="whitespace-nowrap max-sm:hidden"
            >
              Book Your Strategy Session
            </BookButton>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              ) : (
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
                  <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div className="absolute inset-x-0 top-full z-50 border-b border-[var(--bb-line)] bg-[var(--bb-canvas)] lg:hidden">
            {nav.map((item, index) => {
              const className = cn(
                'bb-home-container grid grid-cols-[44px_1fr] items-center border-t border-[var(--bb-line)] py-4',
                index === 0 && 'border-t-0'
              )
              const inner = (
                <>
                  <span className={cn('text-[13px] font-bold', ACCENT_TEXT[index % 4])}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[17px] font-medium">{item.label}</span>
                </>
              )
              return item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={className}
                  onClick={() => {
                    setOpen(false)
                    trackEvent('secondary_cta_click', {
                      location: 'mobile_menu',
                      label: item.label,
                    })
                  }}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={className}
                  onClick={() => {
                    setOpen(false)
                    trackEvent('secondary_cta_click', {
                      location: 'mobile_menu',
                      label: item.label,
                    })
                  }}
                >
                  {inner}
                </Link>
              )
            })}
            {variant === 'home' ? (
              <a
                href={howItWorksHref}
                className="bb-home-container grid grid-cols-[44px_1fr] items-center border-t border-[var(--bb-line)] py-4"
                onClick={() => setOpen(false)}
              >
                <span className="text-[13px] font-bold text-[var(--bb-blue)]">→</span>
                <span className="text-[17px] font-medium">See How It Works</span>
              </a>
            ) : null}
            <div className="block bg-[var(--bb-ink)] sm:hidden">
              <a
                href={BOOK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="bb-home-container grid grid-cols-[44px_1fr] items-center py-4 text-white"
                onClick={() => {
                  setOpen(false)
                  trackEvent('cta_click', {
                    location: 'mobile_menu',
                    label: 'Book Your Strategy Session',
                    page: '/',
                  })
                  trackEvent('booking_open', { source_section: 'mobile_menu' })
                }}
              >
                <span className="text-[13px] font-bold" aria-hidden>
                  →
                </span>
                <span className="text-[17px] font-bold">Book Your Strategy Session</span>
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  )
}
