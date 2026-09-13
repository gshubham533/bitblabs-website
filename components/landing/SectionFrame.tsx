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

const toneClass = {
  light: 'bg-white text-zinc-950',
  muted: 'bg-zinc-50 text-zinc-950',
  dark: 'bg-black text-white',
} as const

const eyebrowClass = {
  light: 'text-zinc-500',
  muted: 'text-zinc-500',
  dark: 'text-zinc-500',
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
    <section id={id} className={cn('px-6 py-20 md:px-12 md:py-24 lg:px-16', toneClass[tone], className)}>
      <div className={cn('mx-auto max-w-[1400px]', innerClassName)}>
        {eyebrow ? (
          <p className={cn('font-heading text-xs uppercase tracking-[0.2em]', eyebrowClass[tone])}>
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
