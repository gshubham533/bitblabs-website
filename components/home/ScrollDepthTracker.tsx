'use client'

import { trackEvent } from '@/lib/analytics'
import { useEffect } from 'react'

const DEPTHS = [25, 50, 75, 90] as const

export function ScrollDepthTracker() {
  useEffect(() => {
    const fired = new Set<number>()
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      if (max <= 0) return
      const pct = Math.round((window.scrollY / max) * 100)
      for (const depth of DEPTHS) {
        if (pct >= depth && !fired.has(depth)) {
          fired.add(depth)
          trackEvent('scroll_depth', { depth })
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
