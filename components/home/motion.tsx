'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export const bbEaseUi = [0.2, 0.8, 0.2, 1] as const
export const bbEaseNarrative = [0.16, 1, 0.3, 1] as const

export function SoftReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.01, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.4, delay, ease: bbEaseNarrative }}
    >
      {children}
    </motion.div>
  )
}

export function PanelSwap({
  id,
  children,
  className,
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={id}
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: bbEaseUi }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function ProgressRail({
  progress,
  orientation = 'horizontal',
  className,
}: {
  progress: number
  orientation?: 'horizontal' | 'vertical'
  className?: string
}) {
  const clamped = Math.min(1, Math.max(0, progress))
  const isH = orientation === 'horizontal'
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute overflow-hidden bg-[var(--bb-brand)]/15',
        isH ? 'left-0 right-0 top-8 h-px' : 'bottom-4 left-5 top-4 w-px',
        className
      )}
    >
      <div
        className="h-full w-full origin-left bg-[var(--bb-brand)] transition-[transform] duration-150 ease-out"
        style={{
          transform: isH ? `scaleX(${clamped})` : `scaleY(${clamped})`,
          transformOrigin: isH ? 'left center' : 'top center',
        }}
      />
    </div>
  )
}
