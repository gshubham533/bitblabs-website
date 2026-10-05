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

/** GA4 event names: start with a letter, then letters, numbers, underscores. Max 40. */
function buttonEventName(rollup: string, section: string): string | null {
  const safe = section.replace(/[^A-Za-z0-9_]/g, '_').replace(/_+/g, '_').slice(0, 20)
  const name = `${rollup}_${safe}`.slice(0, 40)
  if (!/^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(name) || name === rollup) return null
  return name
}

/**
 * Records a booking click.
 * `fit_call_open` / `booking_open` is the total. Mark that one as the key event.
 * `fit_call_open_hero`, `fit_call_open_nav`, and the other button names are the comparison.
 */
export function trackBookingClick(section: string, intent: 'fit' | 'paid', label?: string) {
  const rollup = intent === 'paid' ? 'booking_open' : 'fit_call_open'
  trackEvent(rollup, { source_section: section })
  const byButton = buttonEventName(rollup, section)
  if (byButton) trackEvent(byButton, { source_section: section })
  trackEvent('cta_click', { source_section: section, label })
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
