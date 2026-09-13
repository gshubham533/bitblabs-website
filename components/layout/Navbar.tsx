'use client'

import { cn } from '@/lib/utils'
import { APPLY_HREF, APPLY_NAV_LABEL } from '@/lib/site'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: APPLY_HREF, label: 'Apply' },
] as const

interface NavbarProps {
  theme?: 'light' | 'dark'
  /** fixed = viewport; absolute = hero overlay; static = scrolls with page */
  position?: 'fixed' | 'absolute' | 'static'
  /** Solid bar so links stay readable over mixed page backgrounds. */
  solid?: boolean
}

export function Navbar({ theme = 'dark', position = 'fixed', solid = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const light = theme === 'light'

  const headerPositionClass =
    position === 'fixed'
      ? 'fixed inset-x-0 top-0 z-[100]'
      : position === 'absolute'
        ? 'absolute inset-x-0 top-0 z-50'
        : 'relative z-10'

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const linkClass = light
    ? 'text-zinc-500 hover:text-zinc-950'
    : 'text-zinc-400 hover:text-white'

  return (
    <>
      <header
        className={cn(
          headerPositionClass,
          solid && (light ? 'border-b border-zinc-200 bg-white/95 backdrop-blur' : 'border-b border-white/10 bg-black/90 backdrop-blur')
        )}
      >
        <nav className="w-full bg-transparent" aria-label="Primary">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="flex h-16 items-center justify-between sm:h-20">
              <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logos/bitblabs-logo.svg"
                  alt="BitBLabs"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain opacity-90 transition-opacity group-hover:opacity-100"
                />
                <span
                  className={cn(
                    'font-display text-sm font-bold tracking-tight transition-colors',
                    light ? 'text-zinc-950' : 'text-white'
                  )}
                >
                  BitBLabs
                </span>
              </Link>

              <ul className="hidden items-center gap-8 md:flex">
                <li>
                  <Link
                    href="/projects"
                    className={cn('font-heading text-sm transition-colors duration-300', linkClass)}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <a
                    href={APPLY_HREF}
                    className={cn(
                      'inline-flex min-h-10 items-center rounded-full px-5 py-2 font-heading text-sm font-semibold transition-colors',
                      light
                        ? 'bg-zinc-950 text-white hover:bg-zinc-800'
                        : 'bg-white text-zinc-950 hover:bg-zinc-100'
                    )}
                  >
                    {APPLY_NAV_LABEL}
                  </a>
                </li>
              </ul>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <span
                  className={cn(
                    'block h-px w-5 transition-all',
                    light ? 'bg-zinc-950' : 'bg-white',
                    mobileMenuOpen && 'translate-y-[3.5px] rotate-45'
                  )}
                />
                <span
                  className={cn(
                    'block h-px w-5 transition-all',
                    light ? 'bg-zinc-950' : 'bg-white',
                    mobileMenuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'block h-px w-5 transition-all',
                    light ? 'bg-zinc-950' : 'bg-white',
                    mobileMenuOpen && '-translate-y-[3.5px] -rotate-45'
                  )}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[90] bg-base/98 backdrop-blur-xl transition-all duration-300 md:hidden',
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl font-bold text-white transition-colors hover:text-zinc-400"
              >
                {link.label === 'Apply' ? APPLY_NAV_LABEL : link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
