'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { bookingHrefWithUtm, trackEvent } from '@/lib/analytics'
import { BOOK_HREF, BOOK_NAV_LABEL, CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { IconCalendar, IconChevronDown, IconMail, IconMenu, IconX } from './icons'
import { Logo } from './Logo'
import { NAV_LINKS, PAGE_LINKS } from './nav'

function IconPill({
  href,
  label,
  children,
  external,
  onClick,
}: {
  href: string
  label: string
  children: React.ReactNode
  external?: boolean
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      aria-label={label}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group relative flex size-8.75 items-center justify-center overflow-hidden rounded-lg bg-zinc-200 text-zinc-900 transition-all duration-300 md:size-12.5 md:rounded-2xl"
    >
      <span className="relative flex items-center justify-center overflow-hidden">
        <span className="block size-4.5 transition-transform duration-300 group-hover:-translate-y-6 md:size-6">
          {children}
        </span>
        <span
          className="absolute block size-4.5 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:size-6"
          aria-hidden
        >
          {children}
        </span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false)
  const [bookHref, setBookHref] = useState(BOOK_HREF)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    setBookHref(bookingHrefWithUtm(BOOK_HREF))
    const onScroll = () => setSticky((window.scrollY || document.documentElement.scrollTop) >= 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const openPages = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setPagesOpen(true)
  }
  const closePages = () => {
    closeTimer.current = window.setTimeout(() => setPagesOpen(false), 120)
  }

  const onBook = (location: string) => {
    trackEvent('cta_click', { location, label: BOOK_NAV_LABEL, page: window.location.pathname || '/' })
    trackEvent('booking_open', { source_section: location })
  }

  const spacer = cn(
    'hidden h-2.5 transition-all duration-500 ease-in-out lg:flex',
    sticky ? 'w-2.5' : 'w-full'
  )

  return (
    <header>
      <div className="fixed inset-x-0 top-0 z-[120] w-full">
        <div className="hl-container py-3.5 md:py-5 lg:py-7.5">
          <div className="flex w-full items-center justify-between rounded-lg bg-white md:rounded-2xl lg:justify-center lg:bg-transparent">
            <div className="flex min-w-[175px] rounded-[20px] bg-white px-3 py-1.5 md:py-4 lg:p-4 lg:shadow-lg">
              <Logo />
            </div>

            <div className={spacer} />

            <div className="flex items-center justify-between">
              <nav
                aria-label="Primary"
                className="hidden whitespace-nowrap rounded-[20px] bg-white p-1.5 lg:block lg:shadow-lg"
              >
                <ul className="flex items-center">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-800"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="relative inline-flex" onMouseEnter={openPages} onMouseLeave={closePages}>
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={pagesOpen}
                      onClick={() => setPagesOpen((v) => !v)}
                      onFocus={openPages}
                      className="flex items-center justify-center gap-1 rounded-2xl px-7 py-4 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-800"
                    >
                      Pages
                      <IconChevronDown className="size-4" />
                    </button>
                    <div
                      role="menu"
                      className={cn(
                        'absolute left-0 top-full mt-2 min-w-44 rounded-xl bg-white shadow-lg transition-[opacity,margin] duration-200',
                        'before:absolute before:-top-4 before:left-0 before:h-4 before:w-full',
                        pagesOpen ? 'visible opacity-100' : 'invisible opacity-0'
                      )}
                    >
                      <div className="space-y-0.5 p-2.5">
                        {PAGE_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            onClick={() => setPagesOpen(false)}
                            onBlur={closePages}
                            onFocus={openPages}
                            className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-1.5 text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-800"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={spacer} />

            <div className="flex items-center gap-1.25 rounded-[20px] bg-white p-1.5 shadow-lg">
              <IconPill href={CONTACT_EMAIL_HREF} label={`Email ${CONTACT_EMAIL}`}>
                <IconMail className="size-full" />
              </IconPill>
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onBook('nav')}
                className="group relative hidden h-12.5 items-center overflow-hidden whitespace-nowrap rounded-2xl bg-zinc-900 px-5 text-sm font-medium text-white transition-all duration-300 hover:scale-95 md:inline-flex"
              >
                <span className="relative inline-flex flex-col transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-12.5 items-center gap-2">
                    <IconCalendar className="size-4.5" />
                    {BOOK_NAV_LABEL}
                  </span>
                  <span className="absolute top-full flex h-12.5 items-center gap-2" aria-hidden>
                    <IconCalendar className="size-4.5" />
                    {BOOK_NAV_LABEL}
                  </span>
                </span>
              </a>
              <span className="md:hidden">
                <IconPill href={bookHref} label="Book your strategy session" external onClick={() => onBook('nav_mobile')}>
                  <IconCalendar className="size-full" />
                </IconPill>
              </span>
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex size-8.75 items-center justify-center overflow-hidden rounded-lg bg-zinc-200 text-zinc-900 transition-all duration-300 md:size-12.5 md:rounded-2xl"
                >
                  {menuOpen ? <IconX className="size-5 md:size-6" /> : <IconMenu className="size-5 md:size-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Site menu"
        className={cn(
          'fixed inset-x-0 z-[110] mx-4 overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 md:mx-5 lg:hidden',
          menuOpen ? 'top-18 translate-y-0 opacity-100 md:top-24' : 'pointer-events-none top-0 -translate-y-full opacity-0'
        )}
      >
        <div className="flex max-h-[70vh] flex-col overflow-y-auto p-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center p-1.5 text-base font-medium text-zinc-600 transition-all hover:text-hl-orange"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            aria-expanded={mobilePagesOpen}
            onClick={() => setMobilePagesOpen((v) => !v)}
            className="flex items-center p-1.5 text-base font-medium text-zinc-600 transition-all hover:text-hl-orange"
          >
            Pages
            <IconChevronDown className={cn('ms-4 size-4 transition-transform', mobilePagesOpen && 'rotate-180')} />
          </button>
          {mobilePagesOpen ? (
            <div className="w-full ps-5 pb-4">
              {PAGE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center rounded-lg px-2.5 py-1.5 text-base text-zinc-600 hover:bg-zinc-200 hover:text-zinc-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onBook('mobile_menu')
              setMenuOpen(false)
            }}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-base font-medium text-white"
          >
            <IconCalendar className="size-5" />
            {BOOK_NAV_LABEL}
          </a>
        </div>
      </div>
    </header>
  )
}
