'use client'

import { BookButton } from '@/components/home/BookButton'
import { SecondaryCtaLink } from '@/components/home/SecondaryCtaLink'
import { ColorBar } from '@/components/home/ui/Editorial'
import { SoftReveal } from '@/components/home/motion'
import { HERO, WORKFLOW_EXAMPLES } from '@/lib/landing'

const STRIP_FILLS = [
  'bg-[var(--bb-blue)]',
  'bg-[var(--bb-green)]',
  'bg-[var(--bb-amber-fill)]',
  'bg-[var(--bb-red)]',
  'bg-[var(--bb-blue)]',
] as const

export function HeroSection() {
  return (
    <header className="border-b border-[var(--bb-line)]">
      <div className="bb-home-container pb-16 pt-20 max-lg:pb-16 max-lg:pt-20 lg:pb-24 lg:pt-28">
        <SoftReveal>
          <div className="bb-labelgrid">
            <p className="bb-label pt-3.5 text-[var(--bb-ink)]">
              {HERO.eyebrow.split(' + ').map((line, i, arr) => (
                <span key={line}>
                  {line}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            <div>
              <h1 className="bb-display bb-h1 w-full max-w-[900px]">{HERO.headline}</h1>
              <ColorBar className="mt-9 w-[132px]" height={6} />
              <p className="mb-4 mt-7 max-w-[480px] text-[21px] leading-[1.55] text-[var(--bb-body-strong)]">
                {HERO.supporting[0]}
              </p>
              <p className="mb-11 max-w-[540px] text-[17px] leading-relaxed text-[var(--bb-ink-muted)]">
                {HERO.supporting[1]}
              </p>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <BookButton location="hero" large className="group">
                  {HERO.primaryCta}
                </BookButton>
                <SecondaryCtaLink location="hero">{HERO.secondaryCta}</SecondaryCtaLink>
              </div>
              <p className="mt-4 text-[15px] text-[var(--bb-caption)]">{HERO.microcopy}</p>
            </div>
          </div>
        </SoftReveal>
      </div>
      <div className="grid grid-cols-1 border-t border-[var(--bb-line)] lg:grid-cols-5">
        {WORKFLOW_EXAMPLES.tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="bb-label flex items-center justify-center gap-3 border-b border-[var(--bb-line)] py-[18px] tracking-[0.16em] text-[var(--bb-caption)] last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <span
              className={`size-2 rounded-full ${STRIP_FILLS[index % STRIP_FILLS.length]}`}
              aria-hidden
            />
            {tab.label}
          </div>
        ))}
      </div>
    </header>
  )
}
