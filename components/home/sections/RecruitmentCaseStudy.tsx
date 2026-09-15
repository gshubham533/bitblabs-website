'use client'

import { BookButton } from '@/components/home/BookButton'
import { SoftReveal } from '@/components/home/motion'
import { SwimlaneBoard, type BoardPhase } from '@/components/home/visuals/SwimlaneBoard'
import { trackEvent } from '@/lib/analytics'
import { CASE_STUDY } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function RecruitmentCaseStudy() {
  const [phase, setPhase] = useState<BoardPhase>('stuck')
  const state = phase === 'stuck' ? 'before' : 'after'

  return (
    <section id="case-study" className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <h2 className="max-w-3xl text-[clamp(2.1rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
            {CASE_STUDY.headline}
          </h2>

          <div className="bb-panel mt-10 overflow-hidden p-5 sm:p-8 lg:p-10">
            <div
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Case study state"
            >
              {(['before', 'after'] as const).map((value) => {
                const next: BoardPhase = value === 'before' ? 'stuck' : 'flow'
                return (
                  <button
                    key={value}
                    type="button"
                    className={cn(
                      'min-h-11 rounded-md px-4 py-2 font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.1em] transition',
                      state === value
                        ? 'bg-[var(--bb-brand)] text-white'
                        : 'bg-[var(--bb-board)] text-[var(--bb-ink-muted)] hover:text-[var(--bb-ink)]'
                    )}
                    aria-pressed={state === value}
                    onClick={() => {
                      setPhase(next)
                      trackEvent('case_study_toggle', { selected_state: value })
                    }}
                  >
                    {value}
                  </button>
                )
              })}
            </div>

            <div className="mt-6">
              <SwimlaneBoard
                title="BitBlabs · case board"
                showControls={false}
                autoPlay={false}
                phase={phase}
                onPhaseChange={setPhase}
              />
              <p className="mt-3 text-sm font-medium text-[var(--bb-ink-muted)]" aria-live="polite">
                {state === 'before'
                  ? 'Manual handoffs and scattered tools.'
                  : 'Connected workflow with AI assist and human approval.'}
              </p>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--bb-ink-muted)]">
              {CASE_STUDY.narrative}
            </p>
            <p className="mt-6 font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)]">
              {CASE_STUDY.builtForLabel}
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {CASE_STUDY.capabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-board)] px-3 py-2.5 text-sm text-[var(--bb-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-lg font-semibold leading-snug text-[var(--bb-ink)]">
              {CASE_STUDY.closing}
            </p>
            <div className="mt-6">
              <BookButton
                location="case_study"
                className="group w-full sm:w-auto"
                onNavigate={() => setPhase('flow')}
                clearBeatMs={850}
              >
                {CASE_STUDY.cta}
              </BookButton>
            </div>
          </div>
        </SoftReveal>
      </div>
    </section>
  )
}
