'use client'

import { SoftReveal } from '@/components/home/motion'
import { METHOD } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function WorkflowMethod() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="method" className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <p className="bb-home-eyebrow">
            <span className="bb-home-eyebrow-dot" aria-hidden />
            {METHOD.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
            {METHOD.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:text-lg">
            {METHOD.supporting}
          </p>
        </SoftReveal>

        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {METHOD.stages.map((stage, index) => {
            const isActive = active === index
            const isDimmed = active !== null && active !== index
            return (
              <li key={stage.title} className="relative">
                {index < METHOD.stages.length - 1 ? (
                  <div
                    aria-hidden
                    className={cn(
                      'absolute left-[calc(100%-0.5rem)] top-8 hidden h-px w-[calc(100%-2rem)] transition-colors lg:block',
                      isActive || active === index + 1
                        ? 'bg-[var(--bb-brand)]/60'
                        : 'bg-[var(--bb-brand)]/30'
                    )}
                  />
                ) : null}
                <SoftReveal delay={index * 0.05}>
                  <article
                    tabIndex={0}
                    className={cn(
                      'bb-card bb-method-stage h-full cursor-default p-5 outline-none sm:p-6',
                      isActive && 'is-active',
                      isDimmed && 'is-dimmed'
                    )}
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(index)}
                    onBlur={() => setActive(null)}
                  >
                    <p className="font-mono text-xs text-[var(--bb-ink-muted)]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--bb-ink-muted)]">
                      {stage.body}
                    </p>
                    <p
                      className={cn(
                        'bb-method-example mt-4 rounded-md bg-[var(--bb-brand-soft)] px-3 py-1.5 text-xs font-medium text-[var(--bb-brand-dark)]',
                        isActive && 'ring-1 ring-[var(--bb-brand)]/30'
                      )}
                    >
                      {stage.example}
                    </p>
                  </article>
                </SoftReveal>
              </li>
            )
          })}
        </ol>

        <SoftReveal>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--bb-ink)]">
            {METHOD.closing}
          </p>
        </SoftReveal>
      </div>
    </section>
  )
}
