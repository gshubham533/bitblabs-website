import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export const ACCENT_TEXT = [
  'text-[var(--bb-blue)]',
  'text-[var(--bb-red-text)]',
  'text-[var(--bb-amber-text)]',
  'text-[var(--bb-green-text)]',
] as const

export const ACCENT_FILL = [
  'bg-[var(--bb-blue)]',
  'bg-[var(--bb-red)]',
  'bg-[var(--bb-amber-fill)]',
  'bg-[var(--bb-green)]',
] as const

export function ColorBar({
  className,
  height = 5,
}: {
  className?: string
  height?: number
}) {
  return (
    <div className={cn('flex', className)} style={{ height }} aria-hidden>
      <span className="flex-1 bg-[var(--bb-blue)]" />
      <span className="flex-1 bg-[var(--bb-red)]" />
      <span className="flex-1 bg-[var(--bb-amber-fill)]" />
      <span className="flex-1 bg-[var(--bb-green)]" />
    </div>
  )
}

export function LabelGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('bb-labelgrid', className)}>{children}</div>
}

export function BigNum({
  n,
  kicker,
  accent = 0,
  className,
}: {
  n: string
  kicker: string
  accent?: number
  className?: string
}) {
  return (
    <p className={cn('bb-bignum', ACCENT_TEXT[accent % 4], className)}>
      {n}
      <span className="font-medium text-[var(--bb-deemph)]"> / {kicker}</span>
    </p>
  )
}

export function SectionIntro({
  number,
  kicker,
  title,
  accent = 0,
  className,
}: {
  number: string
  kicker: string
  title: string
  accent?: number
  className?: string
}) {
  return (
    <LabelGrid className={cn('mb-16 items-baseline max-lg:mb-10', className)}>
      <BigNum n={number} kicker={kicker} accent={accent} />
      <h2 className="bb-display bb-h2">{title}</h2>
    </LabelGrid>
  )
}
