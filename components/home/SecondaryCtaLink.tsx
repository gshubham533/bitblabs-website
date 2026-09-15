'use client'

import { trackEvent } from '@/lib/analytics'
import { HOW_IT_WORKS_HREF } from '@/lib/site'
import type { ReactNode } from 'react'

export function SecondaryCtaLink({
  children,
  href = HOW_IT_WORKS_HREF,
  location,
  className,
}: {
  children: ReactNode
  href?: string
  location: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={className ?? 'bb-btn-secondary'}
      onClick={() =>
        trackEvent('secondary_cta_click', {
          location,
          label: typeof children === 'string' ? children : href,
        })
      }
    >
      {children}
    </a>
  )
}
