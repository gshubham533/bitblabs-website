/** Lightweight analytics helpers for homepage conversion events. */

type EventProps = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    va?: (event: 'event', payload: { name: string; data?: EventProps }) => void
  }
}

export function trackEvent(name: string, props?: EventProps) {
  if (typeof window === 'undefined') return
  try {
    window.va?.('event', { name, data: props })
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
