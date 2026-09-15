'use client'

import { bbEaseNarrative } from '@/components/home/motion'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export type BoardPhase = 'stuck' | 'flow'

type LaneChip = {
  id: string
  label: string
  state: 'stuck' | 'moving' | 'cleared'
}

type Swimlane = {
  id: string
  title: string
  chips: LaneChip[]
}

const LANES_STUCK: Swimlane[] = [
  {
    id: 'people',
    title: 'People',
    chips: [
      { id: 'p1', label: 'Owner waiting', state: 'stuck' },
      { id: 'p2', label: 'Ask around', state: 'stuck' },
    ],
  },
  {
    id: 'inbox',
    title: 'Inbox',
    chips: [
      { id: 'i1', label: 'New enquiry', state: 'stuck' },
      { id: 'i2', label: 'Unassigned', state: 'stuck' },
    ],
  },
  {
    id: 'sheet',
    title: 'Spreadsheet',
    chips: [
      { id: 's1', label: 'Copy / paste', state: 'stuck' },
      { id: 's2', label: 'Version conflict', state: 'stuck' },
    ],
  },
  {
    id: 'handoff',
    title: 'Handoff',
    chips: [
      { id: 'h1', label: 'Chase update', state: 'stuck' },
      { id: 'h2', label: 'Decision delayed', state: 'stuck' },
    ],
  },
]

const LANES_FLOW: Swimlane[] = [
  {
    id: 'people',
    title: 'People',
    chips: [
      { id: 'p1', label: 'Judgment gate', state: 'cleared' },
      { id: 'p2', label: 'Exception only', state: 'moving' },
    ],
  },
  {
    id: 'inbox',
    title: 'Inbox',
    chips: [
      { id: 'i1', label: 'Captured', state: 'cleared' },
      { id: 'i2', label: 'Routed', state: 'moving' },
    ],
  },
  {
    id: 'sheet',
    title: 'System',
    chips: [
      { id: 's1', label: 'Single source', state: 'cleared' },
      { id: 's2', label: 'Auto-update', state: 'moving' },
    ],
  },
  {
    id: 'handoff',
    title: 'Flow',
    chips: [
      { id: 'h1', label: 'Status visible', state: 'cleared' },
      { id: 'h2', label: 'Done', state: 'cleared' },
    ],
  },
]

export function SwimlaneBoard({
  className,
  title = 'BitBlabs',
  bleed = false,
  showControls = true,
  autoPlay = true,
  phase: controlledPhase,
  onPhaseChange,
}: {
  className?: string
  title?: string
  bleed?: boolean
  showControls?: boolean
  autoPlay?: boolean
  phase?: BoardPhase
  onPhaseChange?: (phase: BoardPhase) => void
}) {
  const reduce = useReducedMotion()
  const [internalPhase, setInternalPhase] = useState<BoardPhase>('stuck')
  const [paused, setPaused] = useState(false)
  const phase = controlledPhase ?? internalPhase

  const setPhase = (next: BoardPhase) => {
    onPhaseChange?.(next)
    if (controlledPhase === undefined) setInternalPhase(next)
  }

  useEffect(() => {
    if (typeof window === 'undefined' || controlledPhase !== undefined) return
    if (new URLSearchParams(window.location.search).get('board') === 'flow') {
      setInternalPhase('flow')
      setPaused(true)
    }
  }, [controlledPhase])

  useEffect(() => {
    if (reduce || paused || !autoPlay || controlledPhase !== undefined) return
    const id = window.setInterval(() => {
      setInternalPhase((p) => (p === 'stuck' ? 'flow' : 'stuck'))
    }, 4200)
    return () => window.clearInterval(id)
  }, [reduce, paused, autoPlay, controlledPhase])

  const lanes = phase === 'stuck' ? LANES_STUCK : LANES_FLOW

  return (
    <div
      className={cn(
        'bb-swimlane relative overflow-hidden border border-[var(--bb-rail)] bg-[var(--bb-board)]',
        bleed ? 'rounded-none border-x-0 border-y shadow-none' : 'rounded-[1.1rem] shadow-[var(--bb-shadow)]',
        className
      )}
    >
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--bb-rail)] px-4 py-3 sm:px-6 sm:py-4">
        <div>
          <p className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.6rem,4vw,2.75rem)] font-semibold uppercase leading-none tracking-[0.04em] text-[var(--bb-ink)]">
            {title}
          </p>
          <p className="mt-1 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bb-ink-muted)]">
            Ops war-room · live lanes
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <span
            className={cn(
              'rounded-sm px-2 py-1 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em]',
              phase === 'stuck'
                ? 'bg-[var(--bb-amber)] text-[var(--bb-ink)]'
                : 'bg-[var(--bb-mint)] text-[var(--bb-ink)]'
            )}
          >
            {phase === 'stuck' ? 'Work stuck' : 'Work flowing'}
          </span>
          {showControls ? (
            <>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md"
                aria-label="Show stuck state"
                aria-pressed={phase === 'stuck'}
                onClick={() => {
                  setPhase('stuck')
                  setPaused(true)
                }}
              >
                <span
                  className={cn(
                    'h-2 w-8 rounded-sm',
                    phase === 'stuck' ? 'bg-[var(--bb-brand)]' : 'bg-[var(--bb-rail)]'
                  )}
                />
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md"
                aria-label="Show flowing state"
                aria-pressed={phase === 'flow'}
                onClick={() => {
                  setPhase('flow')
                  setPaused(true)
                }}
              >
                <span
                  className={cn(
                    'h-2 w-8 rounded-sm',
                    phase === 'flow' ? 'bg-[var(--bb-brand)]' : 'bg-[var(--bb-rail)]'
                  )}
                />
              </button>
              {!reduce && autoPlay ? (
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center rounded-md border border-[var(--bb-rail)] bg-[var(--bb-surface)] px-3 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]"
                  onClick={() => setPaused((v) => !v)}
                  aria-pressed={paused}
                >
                  {paused ? 'Play' : 'Pause'}
                </button>
              ) : null}
            </>
          ) : null}
        </div>
      </div>

      <div className="relative px-3 py-3 sm:px-5 sm:py-5">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-[3.75rem] z-[1] hidden h-[10px] sm:block sm:top-[4.25rem]"
        >
          <div
            className={cn(
              'mx-4 h-full rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_0_rgba(20,24,32,0.2)] transition-[background,opacity] duration-500 sm:mx-5',
              phase === 'flow'
                ? 'bg-[var(--bb-brand)] opacity-100'
                : 'bg-[repeating-linear-gradient(90deg,var(--bb-brand)_0_18px,transparent_18px_28px)] opacity-55'
            )}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={phase}
            className="relative z-[2] grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4"
            initial={reduce ? false : { opacity: 0.25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={reduce ? undefined : { opacity: 0, filter: 'blur(3px)' }}
            transition={{ duration: 0.45, ease: bbEaseNarrative }}
          >
            {lanes.map((lane, laneIndex) => (
              <div
                key={lane.id}
                className="min-h-0 rounded-lg border border-[var(--bb-rail)] bg-[var(--bb-surface)]/90 p-2 shadow-[var(--bb-chip-shadow)] sm:min-h-[10.5rem] sm:p-2.5"
              >
                <div className="mb-2 flex items-center justify-between gap-2 border-b border-dashed border-[var(--bb-rail)] pb-2">
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)] sm:text-sm">
                    {lane.title}
                  </h3>
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-[10px] font-medium tabular-nums text-[var(--bb-ink-muted)]">
                    {String(laneIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="flex flex-col gap-1.5 sm:gap-2">
                  {lane.chips.map((chip, chipIndex) => (
                    <motion.li
                      key={chip.id}
                      className={cn(
                        'rounded-md border px-2 py-1.5 text-[12px] font-medium leading-snug shadow-[var(--bb-chip-shadow)] sm:px-2.5 sm:py-2 sm:text-[13px]',
                        chip.state === 'stuck' &&
                          'border-[var(--bb-amber)]/70 bg-[var(--bb-amber)] text-[var(--bb-ink)]',
                        chip.state === 'moving' &&
                          'border-[var(--bb-brand)]/45 bg-[var(--bb-brand-soft)] text-[var(--bb-brand-dark)]',
                        chip.state === 'cleared' &&
                          'border-[var(--bb-mint)]/80 bg-[var(--bb-mint)] text-[var(--bb-ink)]'
                      )}
                      initial={reduce ? false : { x: phase === 'flow' ? -10 : 8, opacity: 0.4 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: reduce ? 0 : laneIndex * 0.04 + chipIndex * 0.05,
                        ease: bbEaseNarrative,
                      }}
                    >
                      {chip.label}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
