import { cn } from '@/lib/utils'

interface SectionFrameProps {
  id?: string
  eyebrow?: string
  title?: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
  tone?: 'light' | 'muted' | 'dark'
}

const shellClass = {
  light: 'bg-white text-zinc-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]',
  muted: 'bg-white text-zinc-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]',
  dark: 'bg-zinc-950 text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)]',
} as const

const eyebrowClass = {
  light: 'text-zinc-500',
  muted: 'text-zinc-500',
  dark: 'text-zinc-400',
} as const

export function SectionFrame({
  id,
  eyebrow,
  title,
  children,
  className,
  innerClassName,
  tone = 'light',
}: SectionFrameProps) {
  return (
    <section id={id} className={cn(className)}>
      <div
        className={cn(
          'rounded-4xl px-6 py-14 sm:px-8 md:rounded-5xl md:px-12 md:py-16 lg:px-16 lg:py-20',
          shellClass[tone],
          innerClassName
        )}
      >
        {eyebrow ? (
          <p className={cn('font-heading text-xs uppercase tracking-[0.2em]', eyebrowClass[tone])}>
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
