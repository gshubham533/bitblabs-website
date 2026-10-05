'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { bookingHrefWithUtm, trackBookingClick } from '@/lib/analytics'
import { FIT_CALL_URL, PAY_BOOK_URL } from '@/lib/site'

/** Booking link that records the same click events as the main Book buttons. */
export function TrackedBookLink({
  location,
  className,
  children,
  newTab = true,
  intent = 'fit',
}: {
  location: string
  className?: string
  children: ReactNode
  newTab?: boolean
  /** `paid` opens the $2,000 session checkout. Default is the fit call. */
  intent?: 'fit' | 'paid'
}) {
  const base = intent === 'paid' ? PAY_BOOK_URL : FIT_CALL_URL
  const [href, setHref] = useState(base)
  useEffect(() => setHref(bookingHrefWithUtm(base)), [base])

  return (
    <a
      href={href}
      className={className}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={() => {
        trackBookingClick(location, intent, typeof children === 'string' ? children : 'Book')
      }}
    >
      {children}
    </a>
  )
}
