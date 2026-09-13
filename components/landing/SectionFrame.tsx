import { cn } from '@/lib/utils'

interface SectionFrameProps {
  id?: string
  eyebrow?: string
  title?: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
  tone?: 'light' | 'muted' | 'dark'
  align?: 'left' | 'center'
}

const shellClass = {
  light: 'bg-white text-zinc-950 shadow-[0_12px_40px_rgba(15,23,42,0.04)]',
  muted: 'bg-white text-zinc-950 shadow-[0_12px_40px_rgba(15,23,42,0.04)]',
  dark: 'bg-zinc-950 text-white shadow-[0_16px_40px_rgba(15,23,42,0.14)]',
} as const

const eyebrowClass = {
  light: 'text-zinc-400',
  muted: 'text-zinc-400',
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
  align = 'left',
}: SectionFrameProps) {
  return (
    <section id={id} className={cn(className)}>
      <div
        className={cn(
          'rounded-[2rem] px-6 py-14 sm:px-10 md:rounded-[2.5rem] md:px-14 md:py-16 lg:px-16 lg:py-20',
          shellClass[tone],
          align === 'center' && 'text-center',
          innerClassName
        )}
      >
        {eyebrow ? (
          <p
            className={cn(
              'font-heading text-xs font-medium uppercase tracking-[0.18em]',
              eyebrowClass[tone]
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2
            className={cn(
              'mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem] lg:leading-[1.15]',
              align === 'center' && 'mx-auto'
            )}
          >
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
