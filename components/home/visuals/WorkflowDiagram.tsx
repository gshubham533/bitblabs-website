'use client'

import { bbEaseNarrative, bbEaseUi, SoftReveal } from '@/components/home/motion'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { useId } from 'react'

export type WorkflowNode = {
  label: string
  tone?: 'default' | 'amber' | 'mint' | 'brand' | 'muted'
}

export type WorkflowVariant = 'fragmented' | 'connected' | 'resolved'

type WorkflowDiagramProps = {
  nodes: WorkflowNode[]
  variant?: WorkflowVariant
  className?: string
  compact?: boolean
  animate?: boolean
  /** Force path/node remount when morphing between states */
  redrawKey?: string
}

const toneClass: Record<NonNullable<WorkflowNode['tone']>, string> = {
  default: 'border-[var(--bb-line)] bg-white text-[var(--bb-ink)]',
  amber: 'border-amber-200 bg-[var(--bb-amber)] text-[var(--bb-ink)]',
  mint: 'border-emerald-200 bg-[var(--bb-mint)] text-[var(--bb-ink)]',
  brand: 'border-indigo-200 bg-[var(--bb-brand-soft)] text-[var(--bb-brand-dark)]',
  muted: 'border-[var(--bb-line)] bg-[var(--bb-canvas)] text-[var(--bb-ink-muted)]',
}

export function WorkflowDiagram({
  nodes,
  variant = 'connected',
  className,
  compact,
  animate = false,
  redrawKey,
}: WorkflowDiagramProps) {
  const reduce = useReducedMotion()
  const shouldAnimate = animate && !reduce
  const reactId = useId().replace(/:/g, '')
  const flowId = `bb-flow-${reactId}`
  const mountKey = redrawKey ?? `${variant}-${nodes.map((n) => n.label).join('|')}`

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.75rem] border border-[var(--bb-line)] bg-white p-5 sm:p-7',
        className
      )}
      role="img"
      aria-label={nodes.map((n) => n.label).join(' to ')}
    >
      <svg
        key={`svg-${mountKey}`}
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 220"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={flowId} x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#4F46E5" stopOpacity="0.15" />
            <stop offset="1" stopColor="#4F46E5" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {variant === 'fragmented' ? (
          <>
            <motion.path
              d="M40 60 C90 40, 120 110, 170 90"
              stroke="#DFE3EA"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={shouldAnimate ? { pathLength: 0, opacity: 0.4 } : false}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: bbEaseNarrative }}
            />
            <motion.path
              d="M190 100 C240 70, 260 150, 320 120"
              stroke="#FFE7B3"
              strokeWidth="2"
              strokeDasharray="4 10"
              initial={shouldAnimate ? { pathLength: 0 } : false}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: bbEaseNarrative }}
            />
            <circle cx="170" cy="90" r="4" fill="#F59E0B" />
            <circle cx="260" cy="140" r="3.5" fill="#F59E0B" />
          </>
        ) : (
          <motion.path
            d={
              variant === 'resolved'
                ? 'M36 110 C110 70, 190 150, 260 100 C300 75, 340 95, 370 110'
                : 'M36 120 C90 80, 150 160, 210 110 C260 75, 310 130, 370 105'
            }
            stroke={`url(#${flowId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={shouldAnimate ? { pathLength: 0 } : false}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, ease: bbEaseNarrative }}
          />
        )}
      </svg>

      <div
        key={`nodes-${mountKey}`}
        className={cn(
          'relative z-[1] flex flex-wrap gap-2.5',
          compact ? 'gap-2' : 'sm:gap-3',
          variant === 'fragmented' && 'opacity-95'
        )}
      >
        {nodes.map((node, index) => (
          <motion.div
            key={`${node.label}-${index}`}
            className="flex items-center gap-2"
            initial={shouldAnimate ? { y: 6, opacity: 0.65 } : false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: bbEaseUi }}
          >
            <span
              className={cn(
                'inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-semibold sm:text-sm',
                toneClass[node.tone ?? 'default'],
                compact && 'px-2.5 py-1 text-[11px]'
              )}
            >
              {node.label}
            </span>
            {index < nodes.length - 1 ? (
              <span
                className={cn(
                  'hidden h-px w-4 sm:block',
                  variant === 'fragmented'
                    ? 'border-t border-dashed border-amber-300'
                    : 'bg-[var(--bb-brand)]/40'
                )}
                aria-hidden
              />
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-4 w-4 shrink-0 text-[var(--bb-brand)]', className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { SoftReveal }
