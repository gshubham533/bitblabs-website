'use client'

import { BookButton } from '@/components/home/BookButton'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/home/ui/Dialog'
import { trackEvent } from '@/lib/analytics'
import { HOW_IT_WORKS_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV = [
  { href: '#recognition', label: 'Problems' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#offer', label: 'Session' },
  { href: '#case-study', label: 'Proof' },
  { href: '#faq', label: 'FAQ' },
] as const

export function HomeHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[100]">
        <div className="bb-home-container pointer-events-auto pt-3 sm:pt-4">
          <nav
            aria-label="Primary"
            className={cn(
              'mx-auto flex h-14 items-center justify-between rounded-xl px-3.5 transition-all duration-200 sm:h-16 sm:px-4',
              scrolled
                ? 'border border-[var(--bb-rail)] bg-[var(--bb-surface)]/95 shadow-[var(--bb-shadow)]'
                : 'border border-transparent bg-[var(--bb-board)]/70'
            )}
          >
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <Image
                src="/logos/bitblabs-logo.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-[family-name:var(--font-barlow-condensed)] text-base font-semibold uppercase tracking-[0.08em] text-[var(--bb-ink)]">
                BitBlabs
              </span>
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--bb-ink-muted)] transition-colors hover:text-[var(--bb-ink)]"
                  onClick={() =>
                    trackEvent('secondary_cta_click', { location: 'header', label: item.label })
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <BookButton
                location="header_mobile"
                className="inline-flex min-h-11 px-3 text-[13px] lg:hidden"
              >
                Book
              </BookButton>
              <BookButton
                location="header"
                className="hidden min-h-11 px-4 text-[13px] lg:inline-flex"
              >
                Book Your Strategy Session
              </BookButton>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--bb-rail)] bg-[var(--bb-surface)] lg:hidden"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                  >
                    <span className="sr-only">Menu</span>
                    <span aria-hidden className="flex flex-col gap-1.5">
                      <span
                        className={cn(
                          'block h-0.5 w-4 bg-[var(--bb-ink)] transition',
                          open && 'translate-y-[4px] rotate-45'
                        )}
                      />
                      <span
                        className={cn(
                          'block h-0.5 w-4 bg-[var(--bb-ink)] transition',
                          open && '-translate-y-[4px] -rotate-45'
                        )}
                      />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent aria-describedby={undefined}>
                  <DialogTitle>Mobile navigation</DialogTitle>
                  <div className="mb-4 flex justify-end">
                    <DialogClose asChild>
                      <button
                        type="button"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--bb-rail)] bg-[var(--bb-surface)] px-3 font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.1em] text-[var(--bb-ink)]"
                        aria-label="Close menu"
                      >
                        Close
                      </button>
                    </DialogClose>
                  </div>
                  <div className="mx-auto flex w-full max-w-lg flex-col gap-2">
                    {NAV.map((item) => (
                      <DialogClose asChild key={item.href}>
                        <a
                          href={item.href}
                          className="min-h-11 rounded-2xl px-4 py-3 text-lg font-semibold text-[var(--bb-ink)]"
                          onClick={() =>
                            trackEvent('secondary_cta_click', {
                              location: 'mobile_menu',
                              label: item.label,
                            })
                          }
                        >
                          {item.label}
                        </a>
                      </DialogClose>
                    ))}
                    <DialogClose asChild>
                      <a
                        href={HOW_IT_WORKS_HREF}
                        className="min-h-11 rounded-2xl px-4 py-3 text-base text-[var(--bb-ink-muted)]"
                      >
                        See How It Works
                      </a>
                    </DialogClose>
                    <BookButton
                      location="mobile_menu"
                      className="mt-4 w-full"
                      onNavigate={() => setOpen(false)}
                    >
                      Book Your Strategy Session
                    </BookButton>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
