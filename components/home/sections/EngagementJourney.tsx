'use client'

import { ProgressRail, SoftReveal } from '@/components/home/motion'
import { JOURNEY } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function EngagementJourney() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (reduce) {
      setProgress(1)
      return
    }
    const el = sectionRef.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const view = window.innerHeight
      const start = view * 0.75
      const end = view * 0.25
      const raw = (start - rect.top) / (start - end + rect.height * 0.5)
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduce])

  const activeIndex = Math.min(
    JOURNEY.steps.length - 1,
    Math.floor(progress * JOURNEY.steps.length)
  )

  return (
    <section id="journey" ref={sectionRef} className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
            {JOURNEY.headline}
          </h2>
        </SoftReveal>

        <ol className="relative mt-12 space-y-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:space-y-0">
          <ProgressRail
            progress={progress}
            orientation="vertical"
            className="lg:hidden"
          />
          <ProgressRail
            progress={progress}
            orientation="horizontal"
            className="hidden lg:block"
          />
          {JOURNEY.steps.map((step, index) => {
            const active = index <= activeIndex
            return (
              <li
                key={step.title}
                className={cn(
                  'relative flex gap-4 pb-8 transition-opacity duration-300 lg:flex-col lg:pb-0',
                  active ? 'opacity-100' : 'opacity-45'
                )}
              >
                <span
                  className={cn(
                    'relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-2 bg-white text-sm font-bold transition-colors',
                    active
                      ? 'border-[var(--bb-brand)] text-[var(--bb-brand-dark)]'
                      : 'border-[var(--bb-line)] text-[var(--bb-ink-muted)]'
                  )}
                >
                  {index + 1}
                </span>
                <div className="pt-1 lg:pt-4">
                  <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--bb-ink-muted)]">
                    {step.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
