'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

/** ~--dur-long + a touch for chapter weight */
const DURATION_RISE = 0.5
const DURATION_SOFT = 0.45
const DURATION_HERO = 0.55

export type StoryRevealVariant = 'rise' | 'soft' | 'hero'

interface StoryRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: StoryRevealVariant
}

const VARIANT_MOTION: Record<
  StoryRevealVariant,
  { y: number; duration: number }
> = {
  rise: { y: 20, duration: DURATION_RISE },
  soft: { y: 12, duration: DURATION_SOFT },
  hero: { y: 24, duration: DURATION_HERO },
}

export function StoryReveal({
  children,
  className,
  delay = 0,
  variant = 'rise',
}: StoryRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  const reduced = useReducedMotion()
  const { y, duration } = VARIANT_MOTION[variant]

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  )
}

interface StorySerifHeadlineProps {
  lines: string[]
  accent: string
  className?: string
  align?: 'left' | 'center'
  /** Script handwriting accent — use sparingly (hero only on strategy). */
  scriptAccent?: boolean
  /** Stagger roman lines then accent (hero focal moment). */
  animateLines?: boolean
}

export function StorySerifHeadline({
  lines,
  accent,
  className,
  align = 'center',
  scriptAccent = false,
  animateLines = false,
}: StorySerifHeadlineProps) {
  const reduced = useReducedMotion()
  const shouldAnimate = animateLines && !reduced

  const lineClass =
    'block font-[family-name:var(--font-story-serif)] text-[length:var(--text-story-hero)] font-normal leading-[1.05] text-ink'
  const accentClass = cn(
    'mt-1 block leading-[0.95] text-[var(--color-story-green)]',
    scriptAccent
      ? 'font-[family-name:var(--font-story-script)] text-[length:var(--text-story-script)]'
      : 'font-[family-name:var(--font-story-serif)] text-[length:var(--text-story-chapter)] italic'
  )

  return (
    <h2
      className={cn(
        'font-[family-name:var(--font-story-serif)] text-[length:var(--text-story-hero)] font-normal leading-[1.05] text-ink',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {lines.map((line, index) =>
        shouldAnimate ? (
          <motion.span
            key={line}
            className={lineClass}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION_HERO,
              ease: EASE_OUT,
              delay: Math.min(index * 0.08, 0.32),
            }}
          >
            {line}
          </motion.span>
        ) : (
          <span key={line} className="block">
            {line}
          </span>
        )
      )}
      {shouldAnimate ? (
        <motion.span
          className={accentClass}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: DURATION_HERO,
            ease: EASE_OUT,
            delay: Math.min(lines.length * 0.08 + 0.06, 0.4),
          }}
        >
          {accent}
        </motion.span>
      ) : (
        <span className={accentClass}>{accent}</span>
      )}
    </h2>
  )
}

interface StoryHandwrittenNoteProps {
  text: string
  className?: string
  arrow?: 'left' | 'right'
}

export function StoryHandwrittenNote({ text, className, arrow = 'left' }: StoryHandwrittenNoteProps) {
  return (
    <p
      className={cn(
        'font-[family-name:var(--font-story-note)] text-lg text-muted md:text-xl',
        arrow === 'right' ? 'text-right' : 'text-left',
        className
      )}
    >
      {arrow === 'left' ? '↳ ' : ''}
      {text}
      {arrow === 'right' ? ' ↰' : ''}
    </p>
  )
}
