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
  onNavigate?: () => void
  /** Delay navigation so an authored beat (e.g. clear-lane) can play first. */
  clearBeatMs?: number
}

export function BookButton({
  children,
  className,
  location,
  label,
  large,
  onNavigate,
  clearBeatMs = 0,
}: BookButtonProps) {
  const [href, setHref] = useState(BOOK_HREF)

  useEffect(() => {
    setHref(bookingHrefWithUtm(BOOK_HREF))
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(large ? 'bb-btn-primary bb-btn-primary-lg' : 'bb-btn-primary', className)}
      onClick={(event) => {
        trackEvent('cta_click', {
          location,
          label: label ?? String(children),
          page: '/',
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
      <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}
