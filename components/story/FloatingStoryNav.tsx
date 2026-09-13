'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { APPLY_NAV_CTA_LABEL, PORTFOLIO_SECTION_HREF, STRATEGY_APPLY_PATH } from '@/lib/site'
import { TrackedCtaLink } from '@/components/ui/TrackedCtaLink'
import { useStoryLenis } from '@/components/story/StoryProvider'
import { cn } from '@/lib/utils'

export type StoryNavVariant = 'home' | 'strategy' | 'default'

interface FloatingStoryNavProps {
  variant?: StoryNavVariant
}

const MENU_LINKS = [
  { href: PORTFOLIO_SECTION_HREF, label: 'Work' },
  { href: STRATEGY_APPLY_PATH, label: 'Apply' },
  { href: '/#contact', label: 'Contact' },
] as const

export function FloatingStoryNav({ variant: _variant = 'home' }: FloatingStoryNavProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { lenis, scrollTo } = useStoryLenis()

  useEffect(() => {
    const onScroll = (scroll: number) => {
      setScrolled(scroll > 48)
    }

    if (lenis) {
      const unsub = lenis.on('scroll', ({ scroll }) => onScroll(scroll))
      onScroll(lenis.scroll)
      return () => {
        unsub()
      }
    }

    const handleWindowScroll = () => onScroll(window.scrollY)
    handleWindowScroll()
    window.addEventListener('scroll', handleWindowScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [lenis])

  const handleMenuLink = useCallback(
    (href: string, event: React.MouseEvent<HTMLAnchorElement>) => {
      setOpen(false)

      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return

      const path = href.slice(0, hashIndex) || '/'
      const hash = href.slice(hashIndex + 1)
      const onSamePage =
        (path === '/' && pathname === '/') || path === pathname || path === ''

      if (!onSamePage || !hash) return

      event.preventDefault()
      scrollTo(hash, { offset: -24 })
    },
    [pathname, scrollTo]
  )

  const cta = (
    <TrackedCtaLink
      href={STRATEGY_APPLY_PATH}
      cta="apply"
      location="nav"
      className="!min-h-[2.75rem] !rounded-full !px-5 !py-0 !text-sm active:scale-[0.98]"
    >
      {APPLY_NAV_CTA_LABEL}
    </TrackedCtaLink>
  )

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-nav flex justify-center px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2"
      >
        <div
          className={cn(
            'flex items-center gap-2 rounded-full border border-rule/60 bg-paper/90 p-1.5 backdrop-blur-md transition-shadow duration-[var(--dur-short)] ease-[var(--ease-out)]',
            scrolled
              ? 'shadow-[0_12px_40px_oklch(17%_0.02_286_/_0.28)]'
              : 'shadow-[var(--shadow-story-nav)]'
          )}
        >
          <Link
            href="/"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-story-green)] transition-transform duration-[var(--dur-micro)] ease-[var(--ease-out)] active:scale-[0.98]"
            aria-label="BitBLabs home"
          >
            <Image
              src="/logos/bitblabs-logo.svg"
              alt=""
              width={22}
              height={22}
              className="brightness-0"
            />
          </Link>
          <div className="min-w-0 flex-1 sm:flex-none">{cta}</div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rule bg-paper transition-transform duration-[var(--dur-micro)] ease-[var(--ease-out)] active:scale-[0.98]"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="flex flex-col gap-1" aria-hidden>
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'fixed inset-0 z-overlay bg-ink/40 transition-opacity duration-[var(--dur-short)] ease-[var(--ease-out)]',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <div
        className={cn(
          'fixed inset-x-4 bottom-24 z-overlay rounded-[var(--radius-story-card)] border border-rule bg-paper p-6 shadow-[var(--shadow-story-float)] transition-[transform,opacity] duration-[var(--dur-short)]',
          open
            ? 'translate-y-0 opacity-100 ease-[var(--ease-out)]'
            : 'pointer-events-none translate-y-4 opacity-0 ease-[var(--ease-in)]'
        )}
        style={{ marginBottom: 'max(0px, env(safe-area-inset-bottom))' }}
      >
        <ul className="flex flex-col gap-4">
          {MENU_LINKS.map((link) => {
            const isCurrent =
              link.href === PORTFOLIO_SECTION_HREF
                ? pathname === PORTFOLIO_SECTION_HREF || pathname.startsWith('/projects/')
                : link.href === STRATEGY_APPLY_PATH
                  ? pathname === STRATEGY_APPLY_PATH || pathname.startsWith('/ai-workflow-strategy/')
                  : false

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(event) => handleMenuLink(link.href, event)}
                  className={cn(
                    'font-display text-2xl font-bold transition-colors duration-[var(--dur-micro)]',
                    isCurrent ? 'text-[var(--color-story-green)]' : 'text-ink'
                  )}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export function StoryScrollCue() {
  const [hidden, setHidden] = useState(false)
  const { lenis } = useStoryLenis()

  useEffect(() => {
    const hideIfScrolled = (scroll: number) => {
      if (scroll > 40) setHidden(true)
    }

    if (lenis) {
      const unsub = lenis.on('scroll', ({ scroll }) => hideIfScrolled(scroll))
      hideIfScrolled(lenis.scroll)
      return () => {
        unsub()
      }
    }

    const onWindowScroll = () => hideIfScrolled(window.scrollY)
    onWindowScroll()
    window.addEventListener('scroll', onWindowScroll, { passive: true })
    return () => window.removeEventListener('scroll', onWindowScroll)
  }, [lenis])

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-x-0 z-nav flex justify-center transition-opacity duration-[var(--dur-short)] ease-[var(--ease-out)]',
        hidden ? 'opacity-0' : 'opacity-100'
      )}
      style={{ bottom: 'calc(5.75rem + max(0px, env(safe-area-inset-bottom)))' }}
      aria-hidden={hidden}
    >
      <span className="story-cue-bounce rounded-full bg-ink/70 px-3 py-1 font-body text-[10px] font-medium uppercase tracking-[0.2em] text-paper">
        Scroll
      </span>
    </div>
  )
}
