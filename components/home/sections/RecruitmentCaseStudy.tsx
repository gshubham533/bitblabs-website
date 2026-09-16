'use client'

import { BookButton } from '@/components/home/BookButton'
import { ACCENT_TEXT, SectionIntro } from '@/components/home/ui/Editorial'
import { SoftReveal } from '@/components/home/motion'
import { trackEvent } from '@/lib/analytics'
import { CASE_STUDY } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function RecruitmentCaseStudy() {
  const [state, setState] = useState<'before' | 'after'>('before')
  const nodes = state === 'before' ? CASE_STUDY.beforeNodes : CASE_STUDY.afterNodes

  return (
    <section id="case-study" className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <SectionIntro number="02" kicker="Proof" title={CASE_STUDY.headline} accent={1} />
          <div className="lg:pl-[260px]">
            <p className="max-w-[640px] text-[17px] leading-relaxed text-[var(--bb-ink-muted)]">
              {CASE_STUDY.narrative}
            </p>

            <div className="mt-10 flex flex-wrap gap-0 border border-[var(--bb-line)]" role="group" aria-label="Case study state">
              {(['before', 'after'] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={cn(
                    'min-h-11 flex-1 px-4 py-2 text-[15px] font-bold capitalize',
                    state === value
                      ? 'bg-[var(--bb-ink)] text-white'
                      : 'bg-[var(--bb-canvas)] text-[var(--bb-ink)] hover:text-[var(--bb-blue)]'
                  )}
                  aria-pressed={state === value}
                  onClick={() => {
                    setState(value)
                    trackEvent('case_study_toggle', { selected_state: value })
                  }}
                >
                  {value}
                </button>
              ))}
            </div>

            <ol className="mt-8 grid list-none grid-cols-1 border-t border-[var(--bb-line)] p-0 sm:grid-cols-5">
              {nodes.map((node, i) => (
                <li
                  key={`${state}-${node}`}
                  className="border-b border-[var(--bb-line)] py-5 sm:border-b-0 sm:border-r sm:pr-4 sm:last:border-r-0"
                >
                  <span className={`mb-2 block text-xs font-bold tracking-[0.08em] ${ACCENT_TEXT[i % 4]}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[17px] font-bold tracking-[-0.02em]">{node}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[15px] text-[var(--bb-caption)]" aria-live="polite">
              {state === 'before'
                ? 'Manual handoffs and scattered tools.'
                : 'Connected workflow with AI assist and human approval.'}
            </p>

            <p className="bb-label mt-12 text-[var(--bb-ink)]">{CASE_STUDY.builtForLabel}</p>
            <ul className="mt-2 list-none border-t border-[var(--bb-line)] p-0">
              {CASE_STUDY.capabilities.map((item, i) => (
                <li
                  key={item}
                  className="grid grid-cols-[44px_1fr] items-baseline border-b border-[var(--bb-line)] py-5 text-[18px] leading-normal"
                >
                  <span className={`text-xs font-bold tracking-[0.06em] ${ACCENT_TEXT[i % 4]}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-[640px] text-[22px] font-bold tracking-[-0.02em]">
              {CASE_STUDY.closing}
            </p>
            <div className="mt-8">
              <BookButton location="case_study">{CASE_STUDY.cta}</BookButton>
            </div>
          </div>
        </SoftReveal>
      </div>
    </section>
  )
}
