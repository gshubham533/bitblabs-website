'use client'

import { bookingHrefWithUtm, trackEvent } from '@/lib/analytics'
import { BOOK_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { useEffect, useState, type ReactNode } from 'react'

type BookButtonProps = {
  children: ReactNode
  className?: string
  location: string
  label?: string
  large?: boolean
  variant?: 'red' | 'ink'
  onNavigate?: () => void
  /** Delay navigation so an authored beat can play first. */
  clearBeatMs?: number
}

export function BookButton({
  children,
  className,
  location,
  label,
  large,
  variant = 'red',
  onNavigate,
  clearBeatMs = 0,
}: BookButtonProps) {
  const [href, setHref] = useState(BOOK_HREF)
  const [pagePath, setPagePath] = useState('/')

  useEffect(() => {
    setHref(bookingHrefWithUtm(BOOK_HREF))
    setPagePath(window.location.pathname || '/')
  }, [])

  const base = variant === 'ink' ? 'bb-btn-ink' : large ? 'bb-btn-primary bb-btn-primary-lg' : 'bb-btn-primary'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, className)}
      onClick={(event) => {
        trackEvent('cta_click', {
          location,
          label: label ?? (typeof children === 'string' ? children : 'Book'),
          page: pagePath,
        })
        trackEvent('booking_open', { source_section: location })
        onNavigate?.()
        if (clearBeatMs > 0) {
          event.preventDefault()
          window.setTimeout(() => {
            window.open(href, '_blank', 'noopener,noreferrer')
          }, clearBeatMs)
        }
      }}
    >
      {children}
    </a>
  )
}
