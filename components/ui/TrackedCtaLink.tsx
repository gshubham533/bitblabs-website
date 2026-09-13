'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import {
  trackStrategyCtaClick,
  type StrategyCtaKind,
  type StrategyCtaLocation,
} from '@/lib/analytics'
import { appendCampaignParams } from '@/lib/utm'
import { cn } from '@/lib/utils'

type CtaVariant = 'primary' | 'ghost'

interface TrackedCtaLinkProps {
  href: string
  children: React.ReactNode
  variant?: CtaVariant
  external?: boolean
  className?: string
  cta: StrategyCtaKind
  location: StrategyCtaLocation
}

export function TrackedCtaLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
  cta,
  location,
}: TrackedCtaLinkProps) {
  const router = useRouter()
  const classes = cn(variant === 'primary' ? 'btn-primary' : 'btn-ghost', className)

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      trackStrategyCtaClick(cta, location)
      if (external) return
      const destination = appendCampaignParams(href)
      if (destination === href) return
      event.preventDefault()
      router.push(destination)
    },
    [cta, external, href, location, router]
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  )
}
