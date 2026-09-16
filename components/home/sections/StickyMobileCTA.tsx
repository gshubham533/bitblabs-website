'use client'

import { BookButton } from '@/components/home/BookButton'
import { useEffect, useState } from 'react'

const DISMISS_KEY = 'bb-sticky-cta-dismissed'

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === '1')
    } catch {
      setDismissed(false)
    }

    const hero = document.getElementById('hero')
    if (!hero) {
      setDismissed(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0.2, rootMargin: '-64px 0px 0px 0px' }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const show = !dismissed && visible

  useEffect(() => {
    const root = document.querySelector('.bb-home')
    if (!root) return
    root.classList.toggle('has-sticky-cta', show)
    return () => root.classList.remove('has-sticky-cta')
  }, [show])

  if (!show) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-[var(--bb-line)] bg-[var(--bb-canvas)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-bold text-[var(--bb-ink)]">
            90-min strategy session · $2,000
          </p>
        </div>
        <BookButton location="sticky_mobile" className="shrink-0 px-5 py-3 text-[15px]">
          Book
        </BookButton>
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[var(--bb-ink-muted)]"
          aria-label="Dismiss booking bar"
          onClick={() => {
            try {
              sessionStorage.setItem(DISMISS_KEY, '1')
            } catch {
              // ignore
            }
            setDismissed(true)
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}
