import type { Metadata } from 'next'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { HeroChapter } from '@/components/story/HeroChapter'
import { StoryShell } from '@/components/story/StoryShell'
import { StrategyApplyForm } from '@/components/strategy/StrategyApplyForm'
import { HOME_APPLY_SUPPORT, HOME_HERO } from '@/lib/home'
import { SITE_URL, STRATEGY_APPLY_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Apply for an AI Workflow Strategy Session',
  description: HOME_APPLY_SUPPORT,
  alternates: { canonical: STRATEGY_APPLY_PATH },
  openGraph: {
    title: 'Apply for an AI Workflow Strategy Session | BitBLabs',
    description: HOME_APPLY_SUPPORT,
    url: `${SITE_URL}${STRATEGY_APPLY_PATH}`,
    siteName: 'BitBLabs',
    type: 'website',
  },
}

export default function StrategyApplyPage() {
  return (
    <StoryShell variant="strategy">
      <main>
        <HeroChapter
          id="apply"
          lines={['Apply for a', 'Strategy Session.']}
          accent="One workflow."
          note="qualification, not a full assessment"
          subline={HOME_APPLY_SUPPORT}
        />
        <section className="px-6 pb-[calc(var(--story-nav-offset)+3rem)] pt-4 md:pt-8">
          <p className="mx-auto mb-8 max-w-xl text-center font-body text-sm text-ink-2">
            {HOME_HERO.pricingCue}
          </p>
          <StrategyApplyForm />
        </section>
        <GridPaperClose
          variant="strategy"
          showCta={false}
          lines={['We review', 'every application.']}
          accent="Personally."
          bodyLine="If the session is suitable, you will receive the payment and scheduling link. The detailed workflow assessment still comes after payment."
        />
      </main>
    </StoryShell>
  )
}
