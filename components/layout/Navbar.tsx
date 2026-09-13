'use client'

import { cn } from '@/lib/utils'
import { BOOK_HREF, BOOK_NAV_LABEL, PORTFOLIO_SECTION_HREF } from '@/lib/site'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NavbarProps {
  theme?: 'light' | 'dark'
  position?: 'fixed' | 'absolute' | 'static'
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          headerPositionClass,
          solid && (light ? 'border-b border-[#111]/10 bg-[#f3f2ee]/92 backdrop-blur-md' : 'border-b border-white/10 bg-[#050505]/92 backdrop-blur')
        )}
      >
        <nav className="w-full bg-transparent" aria-label="Primary">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/logos/bitblabs-logo.svg"
                alt=""
                width={28}
                height={28}
                className={cn('h-7 w-7 object-contain opacity-90', light && 'hidden')}
              />
              <span
                className={cn(
                  'text-sm font-semibold tracking-tight',
                  light ? 'text-zinc-950' : 'text-white'
                )}
              >
                BitBLabs
              </span>
            </Link>

            <div className="flex items-center gap-5">
              <Link
                href={PORTFOLIO_SECTION_HREF}
                className={cn(
                  'hidden text-sm sm:inline',
                  light ? 'text-zinc-500 hover:text-zinc-950' : 'text-white/45 hover:text-white'
                )}
              >
                Work
              </Link>
              <a
                href={BOOK_HREF}
                className={cn(
                  'inline-flex min-h-9 items-center px-3 text-[13px] font-semibold',
                  light ? 'bg-zinc-950 text-white' : 'bg-white text-black'
                )}
              >
                {BOOK_NAV_LABEL}
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
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
          'fixed inset-0 z-[90] transition-all duration-300 sm:hidden',
          light ? 'bg-[#f3f2ee]' : 'bg-[#050505]',
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
          <li>
            <Link
              href={PORTFOLIO_SECTION_HREF}
              onClick={() => setMobileMenuOpen(false)}
              className={cn('text-2xl font-semibold', light ? 'text-[#111]' : 'text-white')}
            >
              Work
            </Link>
          </li>
          <li>
            <a
              href={BOOK_HREF}
              className={cn('text-2xl font-semibold', light ? 'text-[#111]' : 'text-white')}
            >
              {BOOK_NAV_LABEL}
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
