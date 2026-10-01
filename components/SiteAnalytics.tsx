'use client'

import { trackEvent } from '@/lib/analytics'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const DEPTHS = [25, 50, 75, 90] as const
const SECTION_CTAS = new Set(['how-it-works', 'session'])

function linkHash(link: HTMLAnchorElement): string {
  const raw = link.getAttribute('href') || ''
  if (raw.startsWith('#')) return raw.slice(1)
  try {
    return new URL(link.href, window.location.origin).hash.replace(/^#/, '')
  } catch {
    return ''
  }
}

/** Site-wide events that are not tied to one button: contact, section CTAs, work opens, scroll depth. */
export function SiteAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const heading = link.querySelector('h1, h2, h3')
      const label = (heading?.textContent || link.getAttribute('aria-label') || link.textContent || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 80)

      if (href.startsWith('mailto:')) {
        trackEvent('outbound_contact', { destination: 'email', label })
        return
      }
      if (href.startsWith('tel:')) {
        trackEvent('outbound_contact', { destination: 'phone', label })
        return
      }
      if (href.includes('linkedin.com')) {
        trackEvent('outbound_contact', { destination: 'linkedin', label })
        return
      }

      const hash = linkHash(link)
      if (SECTION_CTAS.has(hash)) {
        trackEvent('secondary_cta_click', { location: hash, label })
        return
      }

      let url: URL
      try {
        url = new URL(link.href, window.location.origin)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return
      if (/^\/(case-studies|projects)\/[^/]+/.test(url.pathname)) {
        trackEvent('content_open', { destination: url.pathname, label })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

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
          trackEvent('scroll_depth', { depth, page: pathname || '/' })
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return null
}
