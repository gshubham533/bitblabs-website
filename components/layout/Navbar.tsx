'use client'

import { cn } from '@/lib/utils'
import {
  APPLY_CTA_LABEL,
  APPLY_NAV_CTA_LABEL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  STRATEGY_APPLY_PATH,
} from '@/lib/site'
import { TrackedCtaLink } from '@/components/ui/TrackedCtaLink'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface NavbarProps {
  theme?: 'light' | 'dark'
  position?: 'fixed' | 'absolute' | 'static'
  variant?: 'default' | 'strategy'
}

const NAV_LINKS = [
  { href: '/projects', label: 'Work' },
  { href: STRATEGY_APPLY_PATH, label: 'Apply' },
] as const

export function Navbar({
  theme: _theme = 'light',
  position = 'fixed',
  variant: _variant,
}: NavbarProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (position === 'static') return
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [position])

  const headerClass =
    position === 'static'
      ? 'relative z-nav'
      : position === 'absolute'
        ? 'absolute inset-x-0 top-0 z-nav'
        : 'fixed inset-x-0 top-0 z-nav'

  const ctaButton = (
    <TrackedCtaLink href={STRATEGY_APPLY_PATH} cta="apply" location="nav">
      {APPLY_NAV_CTA_LABEL}
    </TrackedCtaLink>
  )

  return (
    <>
      <header
        className={cn(
          headerClass,
          'border-b border-transparent',
          scrolled || position === 'static'
            ? 'border-rule bg-paper/80 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="page-x">
          <nav
            aria-label="Primary"
            className="page-max grid h-14 grid-cols-[1fr_auto] items-center gap-4 md:h-16 md:grid-cols-[1fr_auto_1fr]"
          >
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2 justify-self-start"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logos/bitblabs-logo.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-8 object-contain"
              />
              <span className="font-display text-sm font-bold tracking-tight text-ink">
                BitBLabs
              </span>
            </Link>

            <ul className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'font-body text-sm whitespace-nowrap',
                      pathname === link.href ||
                        (link.href === '/projects' && pathname.startsWith('/projects/'))
                        ? 'text-ink font-medium'
                        : 'text-ink-2'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center justify-self-end gap-5 md:flex">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="font-body text-sm text-ink-2 whitespace-nowrap"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
              {ctaButton}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center justify-self-end md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span
                  className={cn(
                    'block h-px w-5 bg-ink transition-transform duration-[var(--dur-micro)] ease-out',
                    menuOpen && 'translate-y-[5px] rotate-45'
                  )}
                />
                <span
                  className={cn(
                    'block h-px w-5 bg-ink transition-opacity duration-[var(--dur-micro)] ease-out',
                    menuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'block h-px w-5 bg-ink transition-transform duration-[var(--dur-micro)] ease-out',
                    menuOpen && '-translate-y-[5px] -rotate-45'
                  )}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          'fixed inset-0 z-overlay bg-paper px-6 pt-24 transition-opacity duration-[var(--dur-short)] ease-out md:hidden',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-bold text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={`tel:${CONTACT_PHONE}`} className="font-body text-lg text-ink-2">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <TrackedCtaLink
              href={STRATEGY_APPLY_PATH}
              cta="apply"
              location="nav"
              className="w-full"
            >
              {APPLY_CTA_LABEL}
            </TrackedCtaLink>
          </li>
        </ul>
      </div>
    </>
  )
}
