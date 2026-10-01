/** Lightweight analytics helpers for homepage conversion events. */

type EventProps = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    va?: (event: 'event', payload: { name: string; data?: EventProps }) => void
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag === 'function') return
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments)
  }
}

function withContext(props?: EventProps): EventProps {
  const width = window.innerWidth
  const device = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop'
  return {
    page: window.location.pathname || '/',
    device,
    ...props,
  }
}

export function trackEvent(name: string, props?: EventProps) {
  if (typeof window === 'undefined') return
  const data = withContext(props)
  try {
    window.va?.('event', { name, data })
  } catch {
    // Analytics must never break booking.
  }
  try {
    ensureGtag()
    window.gtag?.('event', name, data)
  } catch {
    // Analytics must never break booking.
  }
}

/** Preserve UTM params from the current page onto an outbound booking URL. */
export function bookingHrefWithUtm(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl
  try {
    const current = new URL(window.location.href)
    const target = new URL(baseUrl)
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
    for (const key of keys) {
      const value = current.searchParams.get(key)
      if (value && !target.searchParams.has(key)) {
        target.searchParams.set(key, value)
      }
    }
    return target.toString()
  } catch {
    return baseUrl
  }
}
