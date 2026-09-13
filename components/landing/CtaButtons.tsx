import Link from 'next/link'
import {
  APPLY_CTA_LABEL,
  APPLY_FINAL_CTA_LABEL,
  APPLY_HREF,
  PROJECTS_CTA_LABEL,
} from '@/lib/site'
import { cn } from '@/lib/utils'

type Tone = 'onDark' | 'onLight'

const primaryClass: Record<Tone, string> = {
  onDark:
    'bg-white text-zinc-950 hover:bg-zinc-100',
  onLight:
    'bg-zinc-950 text-white hover:bg-zinc-800',
}

const secondaryClass: Record<Tone, string> = {
  onDark:
    'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
  onLight:
    'border border-zinc-300 text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50',
}

export function PrimaryApplyLink({
  tone,
  label = APPLY_CTA_LABEL,
  className,
}: {
  tone: Tone
  label?: string
  className?: string
}) {
  return (
    <a
      href={APPLY_HREF}
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-heading text-sm font-semibold transition-colors sm:px-8',
        primaryClass[tone],
        className
      )}
    >
      {label}
    </a>
  )
}

export function SecondaryProjectsLink({
  tone,
  className,
}: {
  tone: Tone
  className?: string
}) {
  return (
    <Link
      href="/projects"
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-heading text-sm font-medium transition-colors sm:px-8',
        secondaryClass[tone],
        className
      )}
    >
      {PROJECTS_CTA_LABEL} →
    </Link>
  )
}

export function CtaPair({
  tone,
  primaryLabel = APPLY_CTA_LABEL,
  className,
}: {
  tone: Tone
  primaryLabel?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center', className)}>
      <PrimaryApplyLink tone={tone} label={primaryLabel} />
      <SecondaryProjectsLink tone={tone} />
    </div>
  )
}

export { APPLY_FINAL_CTA_LABEL }
