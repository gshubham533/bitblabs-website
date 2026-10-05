'use client'

import Link from 'next/link'
import { useEffect, useState, type ReactNode } from 'react'
import { bookingHrefWithUtm, trackBookingClick } from '@/lib/analytics'
import { BOOK_CTA_LABEL, FIT_CALL_URL, PAY_BOOK_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full border border-zinc-200 bg-white px-5 py-1.5 text-sm font-medium text-zinc-800',
        className
      )}
    >
      {children}
    </span>
  )
}

type RollVariant = 'white' | 'black' | 'gray' | 'glass'

const variantClass: Record<RollVariant, string> = {
  white: 'bg-white text-black',
  black: 'bg-black text-white shadow-xl',
  gray: 'bg-zinc-200 text-black',
  glass: 'border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10',
}

type RollButtonProps = {
  children: ReactNode
  href: string
  variant?: RollVariant
  icon?: ReactNode
  /** `pill` matches the hero buttons (py-based); `bar` is the 56px-tall black/gray buttons. */
  shape?: 'pill' | 'bar'
  className?: string
  external?: boolean
  onClick?: () => void
}

/** The template's signature button: label rolls up to a duplicate on hover. */
export function RollButton({
  children,
  href,
  variant = 'black',
  icon,
  shape = 'bar',
  className,
  external,
  onClick,
}: RollButtonProps) {
  const row = (
    <>
      {icon ? <span className="flex shrink-0 items-center justify-center">{icon}</span> : null}
      <span>{children}</span>
    </>
  )

  const inner =
    shape === 'bar' ? (
      <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
        <span className="flex h-14 items-center gap-3 font-medium">{row}</span>
        <span className="absolute top-full flex h-14 items-center gap-3 font-medium" aria-hidden>
          {row}
        </span>
      </span>
    ) : (
      <span className="relative block overflow-hidden">
        <span className="flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-full">
          {row}
        </span>
        <span
          className="absolute left-0 top-full flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-full"
          aria-hidden
        >
          {row}
        </span>
      </span>
    )

  const classes = cn(
    'group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full font-medium transition-all duration-300 hover:scale-95',
    shape === 'bar' ? 'px-5 text-sm sm:text-base md:px-8.5 md:text-lg' : 'px-3.5 py-3 text-sm md:px-8.5 md:py-4 md:text-lg',
    variantClass[variant],
    className
  )

  const isInternal = href.startsWith('/') || href.startsWith('#')
  if (isInternal && !external) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  return (
    <a
      href={href}
      className={classes}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {inner}
    </a>
  )
}

/** Booking CTA. Defaults to the fit call. `intent="paid"` opens the $2,000 TidyCal checkout. */
export function BookRollButton({
  location,
  intent = 'fit',
  children = BOOK_CTA_LABEL,
  ...rest
}: Omit<RollButtonProps, 'href' | 'external' | 'onClick' | 'children'> & {
  location: string
  intent?: 'fit' | 'paid'
  children?: ReactNode
}) {
  const base = intent === 'paid' ? PAY_BOOK_URL : FIT_CALL_URL
  const [href, setHref] = useState(base)
  useEffect(() => setHref(bookingHrefWithUtm(base)), [base])

  return (
    <RollButton
      {...rest}
      href={href}
      external
      onClick={() => {
        trackBookingClick(location, intent, typeof children === 'string' ? children : 'Book')
      }}
    >
      {children}
    </RollButton>
  )
}

/** Small round icon chip used for card headers (template's size-12.5 colored circles). */
export function IconDot({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn('flex size-12.5 shrink-0 items-center justify-center rounded-full text-white', className)}
    >
      {children}
    </span>
  )
}

/** Icon that rolls to a duplicate on hover (footer socials, quote cards). */
export function RollIcon({ children }: { children: ReactNode }) {
  return (
    <span className="relative block size-4 overflow-hidden">
      <span className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-[200%]">
        {children}
      </span>
      <span className="absolute inset-0 translate-y-[200%] transition-transform duration-300 group-hover:translate-y-0" aria-hidden>
        {children}
      </span>
    </span>
  )
}
