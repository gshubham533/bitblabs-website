'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { bookingHrefWithUtm, trackEvent } from '@/lib/analytics'
import { BOOK_HREF } from '@/lib/site'

/** Booking link that records the same click events as the main Book buttons. */
export function TrackedBookLink({
  location,
  className,
  children,
  newTab = true,
}: {
  location: string
  className?: string
  children: ReactNode
  newTab?: boolean
}) {
  const [href, setHref] = useState(BOOK_HREF)
  useEffect(() => setHref(bookingHrefWithUtm(BOOK_HREF)), [])

  return (
    <a
      href={href}
      className={className}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={() => {
        trackEvent('cta_click', {
          location,
          label: typeof children === 'string' ? children : 'Book',
          page: window.location.pathname || '/',
        })
        trackEvent('booking_open', { source_section: location })
      }}
    >
      {children}
    </a>
  )
}
