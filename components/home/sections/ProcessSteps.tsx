'use client'

import { SoftReveal } from '@/components/home/motion'
import {
  WorkflowDiagram,
  type WorkflowNode,
  type WorkflowVariant,
} from '@/components/home/visuals/WorkflowDiagram'
import { HOW_WE_WORK } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const STEP_VISUALS: { variant: WorkflowVariant; nodes: WorkflowNode[] }[] = [
  {
    variant: 'fragmented',
    nodes: [
      { label: 'Request', tone: 'muted' },
      { label: 'Inbox', tone: 'amber' },
      { label: 'Sheet', tone: 'amber' },
      { label: 'Chase', tone: 'amber' },
    ],
  },
  {
    variant: 'connected',
    nodes: [
      { label: 'Request', tone: 'brand' },
      { label: 'AI assist', tone: 'mint' },
      { label: 'Approval', tone: 'brand' },
      { label: 'Done', tone: 'mint' },
    ],
  },
  {
    variant: 'resolved',
    nodes: [
      { label: 'Live system', tone: 'mint' },
      { label: 'Integrations', tone: 'brand' },
      { label: 'People in control', tone: 'brand' },
    ],
  },
]

export function ProcessSteps() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (reduce) return
    const observers: IntersectionObserver[] = []
    stepRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [reduce])

  const visual = STEP_VISUALS[active] ?? STEP_VISUALS[0]

  return (
    <section id="how-it-works" className="bb-home-section bg-white/40">
      <div className="bb-home-container">
        <SoftReveal>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
            {HOW_WE_WORK.headline}
          </h2>
        </SoftReveal>

        {/* Mobile / reduced motion: stacked panels */}
        <div className={cn('mt-12 space-y-6', !reduce && 'lg:hidden')}>
          {HOW_WE_WORK.steps.map((step, index) => (
            <SoftReveal key={step.number} delay={index * 0.06}>
              <article className="bb-panel grid gap-6 overflow-hidden p-6 sm:p-8">
                <div>
                  <p className="font-mono text-sm text-[var(--bb-brand)]">{step.number}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--bb-ink-muted)] sm:text-base">
                    {step.body}
                  </p>
                  <p className="mt-5 inline-flex rounded-md bg-[var(--bb-mint)] px-3 py-1.5 text-sm font-semibold text-[var(--bb-ink)]">
                    Outcome: {step.outcome}
                  </p>
                </div>
                <WorkflowDiagram
                  compact
                  animate
                  variant={STEP_VISUALS[index].variant}
                  nodes={STEP_VISUALS[index].nodes}
                  redrawKey={`process-m-${index}`}
                />
              </article>
            </SoftReveal>
          ))}
        </div>

        {/* Desktop scroll-scrubbed sticky story */}
        {!reduce ? (
          <div className="mt-14 hidden lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <div className="space-y-24 pb-24">
              {HOW_WE_WORK.steps.map((step, index) => (
                <article
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  className={cn(
                    'transition-opacity duration-300',
                    active === index ? 'opacity-100' : 'opacity-40'
                  )}
                >
                  <button
                    type="button"
                    className="w-full text-left"
                    onClick={() => setActive(index)}
                  >
                    <p className="font-mono text-sm text-[var(--bb-brand)]">{step.number}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--bb-ink-muted)] sm:text-base">
                      {step.body}
                    </p>
                    <p className="mt-5 inline-flex rounded-md bg-[var(--bb-mint)] px-3 py-1.5 text-sm font-semibold text-[var(--bb-ink)]">
                      Outcome: {step.outcome}
                    </p>
                  </button>
                </article>
              ))}
            </div>

            <div className="relative">
              <div className="sticky top-28">
                <div className="bb-panel p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--bb-ink-muted)]">
                    Step {HOW_WE_WORK.steps[active]?.number}
                  </p>
                  <WorkflowDiagram
                    animate
                    compact
                    variant={visual.variant}
                    nodes={visual.nodes}
                    redrawKey={`process-d-${active}`}
                  />
                  <div className="mt-5 flex gap-2">
                    {HOW_WE_WORK.steps.map((step, index) => (
                      <button
                        key={step.number}
                        type="button"
                        aria-label={`Go to step ${step.number}`}
                        className={cn(
                          'h-1.5 flex-1 rounded-md transition',
                          active === index ? 'bg-[var(--bb-brand)]' : 'bg-[var(--bb-line)]'
                        )}
                        onClick={() => setActive(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
