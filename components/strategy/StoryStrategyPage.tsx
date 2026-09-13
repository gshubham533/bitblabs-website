'use client'

import { HeroChapter } from '@/components/story/HeroChapter'
import {
  DeliverablesChapter,
  FaqRiskChapter,
  ProofBriefChapter,
  StepsChapter,
  TypographicListChapter,
} from '@/components/story/ContentChapters'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { StoryShell } from '@/components/story/StoryShell'
import { StrategyFaq } from '@/components/strategy/StrategyFaq'
import { OpportunityBriefSample } from '@/components/strategy/OpportunityBriefSample'
import { TrackedCtaLink } from '@/components/ui/TrackedCtaLink'
import { portfolioProjects } from '@/lib/portfolio-data'
import { APPLY_CTA_LABEL, STRATEGY_APPLY_PATH } from '@/lib/site'
import {
  STRATEGY_APPLY_SUPPORT,
  STRATEGY_DELIVERABLES,
  STRATEGY_FINAL_CTA,
  STRATEGY_HERO_BODY,
  STRATEGY_PROBLEM,
  STRATEGY_PROOF_OUTCOMES,
  STRATEGY_PROOF_SLUGS,
  STRATEGY_RISK,
  STRATEGY_STEPS,
} from '@/lib/strategy'

export function StoryStrategyPage() {
  const proofProjects = STRATEGY_PROOF_SLUGS.map((slug) => {
    const project = portfolioProjects.find((p) => p.slug === slug)
    if (!project) return null
    const outcome = STRATEGY_PROOF_OUTCOMES[slug]
    return { project, outcome }
  }).filter(Boolean) as Array<{
    project: (typeof portfolioProjects)[number]
    outcome: string
  }>

  return (
    <StoryShell variant="strategy" showScrollCue>
      <main>
        <HeroChapter
          id="hero"
          lines={['AI experiments', 'are multiplying.', 'Priorities are not.']}
          accent="Yet."
          subline={STRATEGY_HERO_BODY}
        >
          <TrackedCtaLink href={STRATEGY_APPLY_PATH} cta="apply" location="hero">
            {APPLY_CTA_LABEL}
          </TrackedCtaLink>
          <p className="max-w-md font-body text-sm leading-relaxed text-ink-2">
            {STRATEGY_APPLY_SUPPORT}
          </p>
          <p className="font-body text-sm text-ink-2">
            USD 2,000 · 60-minute session · written Opportunity Brief included
          </p>
        </HeroChapter>

        <TypographicListChapter
          id="problem"
          note="the cost of uncertainty"
          lines={['Scattered pilots.', 'Unclear priorities.', 'Wrong investments.']}
          accent="Sound familiar?"
          rows={STRATEGY_PROBLEM.pains.map((pain) => ({
            category: '',
            detail: pain,
          }))}
          compact
        />

        <DeliverablesChapter
          id="deliverables"
          title={STRATEGY_DELIVERABLES.title}
          intro={STRATEGY_DELIVERABLES.intro}
          items={STRATEGY_DELIVERABLES.items}
        />

        <StepsChapter
          id="how-it-works"
          note="how it works"
          lines={['Assessment.', 'Session.', 'Brief.']}
          accent="Then decide."
          steps={STRATEGY_STEPS}
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
          lines={[STRATEGY_RISK.title]}
          accent="No hype."
          principles={STRATEGY_RISK.principles}
          faq={<StrategyFaq embedded />}
        />

        <GridPaperClose
          variant="strategy"
          lines={['Leave with a', 'defensible priority.']}
          accent="Apply."
          pricingLine="USD 2,000 · includes written AI Workflow Opportunity Brief"
          bodyLine={STRATEGY_FINAL_CTA.body}
        />
      </main>
    </StoryShell>
  )
}
