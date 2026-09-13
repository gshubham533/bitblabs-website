'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { HeroChapter } from '@/components/story/HeroChapter'
import { StoryShell } from '@/components/story/StoryShell'
import { trackStrategyConversion } from '@/lib/analytics'
import { PORTFOLIO_SECTION_HREF } from '@/lib/site'

interface StrategyThankYouProps {
  event: 'application_submitted' | 'paid_session_booked'
  title: string
  body: string
}

export function StrategyThankYou({ event, title, body }: StrategyThankYouProps) {
  useEffect(() => {
    trackStrategyConversion(event)
  }, [event])

  return (
    <StoryShell variant="strategy">
      <main>
        <HeroChapter lines={[title]} accent="Confirmed." note="thank you" subline={body}>
          <Link href="/" className="btn-ghost">
            Back to home
          </Link>
          <Link href={PORTFOLIO_SECTION_HREF} className="btn-ghost">
            View work
          </Link>
        </HeroChapter>
        <GridPaperClose
          variant="strategy"
          showCta={false}
          lines={['We will be', 'in touch.']}
          accent="Soon."
        />
      </main>
    </StoryShell>
  )
}
