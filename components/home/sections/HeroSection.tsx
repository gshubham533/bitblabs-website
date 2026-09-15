'use client'

import { BookButton } from '@/components/home/BookButton'
import { SecondaryCtaLink } from '@/components/home/SecondaryCtaLink'
import {
  SwimlaneBoard,
  SwimlaneBoardProvider,
  useSwimlaneBoard,
} from '@/components/home/visuals/SwimlaneBoard'
import { bbEaseNarrative } from '@/components/home/motion'
import { HERO } from '@/lib/landing'
import { motion, useReducedMotion } from 'framer-motion'

function HeroBook() {
  const { clearLane } = useSwimlaneBoard()
  return (
    <BookButton
      location="hero"
      large
      className="group w-full sm:w-auto"
      onNavigate={clearLane}
      clearBeatMs={850}
    >
      {HERO.primaryCta}
    </BookButton>
  )
}

function HeroInner() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden pb-6 pt-[4.75rem] sm:pb-10 sm:pt-24 lg:pb-12 lg:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(36,87,230,0.14),transparent_48%),radial-gradient(ellipse_at_8%_18%,rgba(232,163,23,0.16),transparent_42%)]"
      />

      <div className="relative">
        <motion.div
          className="bb-home-container"
          initial={reduce ? false : { opacity: 0.01, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: bbEaseNarrative }}
        >
          <h1 className="max-w-4xl text-[clamp(2.4rem,7.2vw,5.4rem)] font-semibold leading-[0.94] tracking-tight text-[var(--bb-ink)]">
            {HERO.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:mt-5 sm:text-lg">
            {HERO.supporting[0]}
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
            <HeroBook />
            <SecondaryCtaLink location="hero" className="bb-btn-secondary w-full sm:w-auto">
              {HERO.secondaryCta}
            </SecondaryCtaLink>
          </div>
          <p className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-xs uppercase tracking-[0.12em] text-[var(--bb-ink-muted)] sm:text-sm">
            {HERO.microcopy}
          </p>
        </motion.div>

        <motion.div
          className="relative mt-7 w-screen max-w-[100vw] left-1/2 -translate-x-1/2 sm:mt-9"
          initial={reduce ? false : { opacity: 0.01, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.08, ease: bbEaseNarrative }}
        >
          <SwimlaneBoard title="BitBlabs" bleed />
        </motion.div>
      </div>
    </section>
  )
}

export function HeroSection() {
  return (
    <SwimlaneBoardProvider>
      <HeroInner />
    </SwimlaneBoardProvider>
  )
}
