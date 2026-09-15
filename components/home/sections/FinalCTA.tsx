'use client'

import { BookButton } from '@/components/home/BookButton'
import { SecondaryCtaLink } from '@/components/home/SecondaryCtaLink'
import { SwimlaneBoard, type BoardPhase } from '@/components/home/visuals/SwimlaneBoard'
import { FINAL_CTA } from '@/lib/landing'
import { HOW_IT_WORKS_ABSOLUTE_HREF } from '@/lib/site'
import { useState } from 'react'

export function FinalCTA() {
  const [phase, setPhase] = useState<BoardPhase>('flow')

  return (
    <section id="book" className="bb-home-section">
      <div className="bb-home-container">
        <div className="relative overflow-hidden rounded-[1.15rem] border border-[var(--bb-rail)] bg-[var(--bb-board)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(36,87,230,0.16),transparent_45%)]"
          />
          <div className="relative px-0 pt-0">
            <SwimlaneBoard
              title="BitBlabs"
              showControls={false}
              autoPlay={false}
              phase={phase}
              onPhaseChange={setPhase}
            />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 py-10 text-center sm:px-10 sm:py-14">
            <p className="text-base leading-relaxed text-[var(--bb-ink-muted)]">{FINAL_CTA.intro}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--bb-ink-muted)]">{FINAL_CTA.feel}</p>
            <h2 className="mt-8 text-[clamp(2.1rem,4.5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight text-[var(--bb-ink)]">
              {FINAL_CTA.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:text-lg">
              {FINAL_CTA.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookButton
                location="final_cta"
                large
                className="group w-full sm:w-auto"
                onNavigate={() => setPhase('flow')}
                clearBeatMs={850}
              >
                {FINAL_CTA.primaryCta}
              </BookButton>
              <SecondaryCtaLink
                location="final_cta"
                href={HOW_IT_WORKS_ABSOLUTE_HREF}
                className="bb-btn-secondary w-full sm:w-auto"
              >
                {FINAL_CTA.secondaryCta}
              </SecondaryCtaLink>
            </div>
            <p className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-sm uppercase tracking-[0.12em] text-[var(--bb-ink-muted)]">
              {FINAL_CTA.microcopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
