'use client'

import { bbEaseNarrative } from '@/components/home/motion'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type LaneChip = {
  id: string
  label: string
  state: 'stuck' | 'moving' | 'cleared'
}

export type Swimlane = {
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

export type BoardPhase = 'stuck' | 'flow'

type BoardContextValue = {
  phase: BoardPhase
  setPhase: (phase: BoardPhase) => void
  clearLane: () => void
  paused: boolean
  setPaused: (paused: boolean) => void
}

const BoardContext = createContext<BoardContextValue | null>(null)

export function useSwimlaneBoard() {
  const ctx = useContext(BoardContext)
  if (!ctx) throw new Error('useSwimlaneBoard must be used within SwimlaneBoardProvider')
  return ctx
}

export function SwimlaneBoardProvider({
  children,
  autoPlay = true,
}: {
  children: ReactNode
  autoPlay?: boolean
}) {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState<BoardPhase>('stuck')
  const [paused, setPaused] = useState(false)

  const clearLane = useCallback(() => {
    setPhase('flow')
    setPaused(true)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('board') === 'flow') {
      setPhase('flow')
      setPaused(true)
    }
  }, [])

  useEffect(() => {
    if (reduce || paused || !autoPlay) return
    const id = window.setInterval(() => {
      setPhase((p) => (p === 'stuck' ? 'flow' : 'stuck'))
    }, 4200)
    return () => window.clearInterval(id)
  }, [reduce, paused, autoPlay])

  const value = useMemo(
    () => ({ phase, setPhase, clearLane, paused, setPaused }),
    [phase, clearLane, paused]
  )

  return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
}

export function SwimlaneBoard({
  className,
  title = 'BitBlabs',
  bleed = false,
  showControls = true,
}: {
  className?: string
  title?: string
  bleed?: boolean
  showControls?: boolean
}) {
  const reduce = useReducedMotion()
  const { phase, setPhase, paused, setPaused } = useSwimlaneBoard()
  const lanes = phase === 'stuck' ? LANES_STUCK : LANES_FLOW

  return (
    <div
      className={cn(
        'bb-swimlane relative overflow-hidden border border-[var(--bb-rail)] bg-[var(--bb-board)]',
        bleed
          ? 'rounded-none border-x-0 border-y shadow-none'
          : 'rounded-[1.1rem] shadow-[var(--bb-shadow)]',
        className
      )}
    >
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--bb-rail)] px-4 py-3 sm:px-6 sm:py-4">
        <div>
          <p className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold uppercase leading-none tracking-[0.04em] text-[var(--bb-ink)]">
            {title}
          </p>
          <p className="mt-1 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bb-ink-muted)]">
            Ops war-room · live lanes
          </p>
        </div>
        <div className="flex items-center gap-2">
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
                className={cn(
                  'h-2 w-9 rounded-sm transition',
                  phase === 'stuck' ? 'bg-[var(--bb-brand)]' : 'bg-[var(--bb-rail)]'
                )}
                aria-label="Show stuck state"
                onClick={() => {
                  setPhase('stuck')
                  setPaused(true)
                }}
              />
              <button
                type="button"
                className={cn(
                  'h-2 w-9 rounded-sm transition',
                  phase === 'flow' ? 'bg-[var(--bb-brand)]' : 'bg-[var(--bb-rail)]'
                )}
                aria-label="Show flowing state"
                onClick={() => {
                  setPhase('flow')
                  setPaused(true)
                }}
              />
              {!reduce ? (
                <button
                  type="button"
                  className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-surface)] px-2 py-1 font-[family-name:var(--font-barlow-condensed)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]"
                  onClick={() => setPaused(!paused)}
                  aria-pressed={paused}
                >
                  {paused ? 'Play' : 'Pause'}
                </button>
              ) : null}
            </>
          ) : null}
        </div>
      </div>

      <div className="relative px-3 py-4 sm:px-5 sm:py-5">
        {/* Cobalt flow tape — continuous magnetic strip across the board field */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-[4.75rem] z-[1] hidden h-[12px] lg:block"
        >
          <div
            className={cn(
              'mx-5 h-full rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_0_rgba(20,24,32,0.2)] transition-[background,opacity] duration-500',
              phase === 'flow'
                ? 'bg-[var(--bb-brand)] opacity-100'
                : 'bg-[repeating-linear-gradient(90deg,var(--bb-brand)_0_18px,transparent_18px_28px)] opacity-55'
            )}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={phase}
            className="relative z-[2] grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            initial={reduce ? false : { opacity: 0.25, filter: 'blur(5px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={reduce ? undefined : { opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.55, ease: bbEaseNarrative }}
          >
            {lanes.map((lane, laneIndex) => (
              <div
                key={lane.id}
                className="min-h-[10.5rem] rounded-lg border border-[var(--bb-rail)] bg-[var(--bb-surface)]/90 p-2.5 shadow-[var(--bb-chip-shadow)] sm:min-h-[12rem]"
              >
                <div className="mb-2 flex items-center justify-between gap-2 border-b border-dashed border-[var(--bb-rail)] pb-2">
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)]">
                    {lane.title}
                  </h3>
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-[10px] font-medium tabular-nums text-[var(--bb-ink-muted)]">
                    {String(laneIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {lane.chips.map((chip, chipIndex) => (
                    <motion.li
                      key={chip.id}
                      className={cn(
                        'rounded-md border px-2.5 py-2 text-[13px] font-medium leading-snug shadow-[var(--bb-chip-shadow)]',
                        chip.state === 'stuck' &&
                          'border-[var(--bb-amber)]/70 bg-[var(--bb-amber)] text-[var(--bb-ink)]',
                        chip.state === 'moving' &&
                          'border-[var(--bb-brand)]/45 bg-[var(--bb-brand-soft)] text-[var(--bb-brand-dark)]',
                        chip.state === 'cleared' &&
                          'border-[var(--bb-mint)]/80 bg-[var(--bb-mint)] text-[var(--bb-ink)]'
                      )}
                      initial={reduce ? false : { x: phase === 'flow' ? -14 : 10, opacity: 0.35 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.45,
                        delay: reduce ? 0 : laneIndex * 0.05 + chipIndex * 0.06,
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
