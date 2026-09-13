'use client'

import {
  DeliverablesChapter,
  EarlyProofChapter,
  FaqRiskChapter,
  ProofBriefChapter,
  StepsChapter,
  TypographicListChapter,
} from '@/components/story/ContentChapters'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { HeroChapter } from '@/components/story/HeroChapter'
import { StoryShell } from '@/components/story/StoryShell'
import { OpportunityBriefSample } from '@/components/strategy/OpportunityBriefSample'
import { StrategyFaq } from '@/components/strategy/StrategyFaq'
import { TrackedCtaLink } from '@/components/ui/TrackedCtaLink'
import {
  HOME_APPLY_SUPPORT,
  HOME_CLIENTS,
  HOME_DELIVERABLES,
  HOME_EARLY_QUOTE_ID,
  HOME_FINAL_CTA,
  HOME_HERO,
  HOME_PROBLEM,
  HOME_PROOF_OUTCOMES,
  HOME_PROOF_SLUGS,
  HOME_PROOF_STAT,
  HOME_RISK,
  HOME_STEPS,
} from '@/lib/home'
import { portfolioProjects } from '@/lib/portfolio-data'
import { APPLY_CTA_LABEL, STRATEGY_APPLY_PATH } from '@/lib/site'
import { testimonials } from '@/lib/testimonials'

export function StoryHomePage() {
  const earlyQuote = testimonials.find((t) => t.id === HOME_EARLY_QUOTE_ID) ?? testimonials[0]
  const proofProjects = HOME_PROOF_SLUGS.map((slug) => {
    const project = portfolioProjects.find((p) => p.slug === slug)
    if (!project) return null
    return { project, outcome: HOME_PROOF_OUTCOMES[slug] }
  }).filter(Boolean) as Array<{
    project: (typeof portfolioProjects)[number]
    outcome: string
  }>

  return (
    <StoryShell variant="strategy" showScrollCue>
      <main>
        <HeroChapter
          id="hero"
          lines={[...HOME_HERO.lines]}
          accent={HOME_HERO.accent}
          note={HOME_HERO.note}
          subline={HOME_HERO.subline}
        >
          <TrackedCtaLink href={STRATEGY_APPLY_PATH} cta="apply" location="hero">
            {APPLY_CTA_LABEL}
          </TrackedCtaLink>
          <p className="max-w-md font-body text-sm leading-relaxed text-ink-2">
            {HOME_APPLY_SUPPORT}
          </p>
          <p className="font-body text-sm text-ink-2">{HOME_HERO.pricingCue}</p>
        </HeroChapter>

        <EarlyProofChapter
          id="trust"
          clients={HOME_CLIENTS}
          statistic={HOME_PROOF_STAT}
          quote={earlyQuote.quote}
          attribution={`${earlyQuote.name} · ${earlyQuote.role} · ${earlyQuote.company}`}
        />

        <TypographicListChapter
          id="problem"
          note={HOME_PROBLEM.note}
          lines={[...HOME_PROBLEM.lines]}
          accent={HOME_PROBLEM.accent}
          rows={HOME_PROBLEM.pains.map((pain) => ({
            category: '',
            detail: pain,
          }))}
          compact
        />

        <DeliverablesChapter
          id="deliverables"
          title={HOME_DELIVERABLES.title}
          intro={HOME_DELIVERABLES.intro}
          items={HOME_DELIVERABLES.items}
        />

        <StepsChapter
          id="how-it-works"
          note="how it works"
          lines={['Assessment.', 'Session.', 'Brief.']}
          accent="Then decide."
          steps={HOME_STEPS}
        />

        <ProofBriefChapter
          id="proof"
          note="shipped work + sample deliverable"
          lines={['Production systems', 'behind the brief.']}
          accent="Real outcomes."
          projects={proofProjects}
          brief={<OpportunityBriefSample />}
        />

        <FaqRiskChapter
          id="faq"
          lines={[HOME_RISK.title]}
          accent="No hype."
          principles={HOME_RISK.principles}
          faq={<StrategyFaq embedded />}
        />

        <GridPaperClose
          variant="strategy"
          lines={[...HOME_FINAL_CTA.lines]}
          accent={HOME_FINAL_CTA.accent}
          pricingLine={HOME_FINAL_CTA.pricingLine}
          bodyLine={HOME_FINAL_CTA.body}
        />
      </main>
    </StoryShell>
  )
}
