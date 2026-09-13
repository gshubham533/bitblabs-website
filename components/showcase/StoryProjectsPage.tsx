'use client'

import { ProjectIndexChapter } from '@/components/story/ProjectIndexChapter'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { HeroChapter } from '@/components/story/HeroChapter'
import { StoryShell } from '@/components/story/StoryShell'
import { orderPortfolioProjects } from '@/lib/project-utils'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { HOME_APPLY_SUPPORT } from '@/lib/home'

interface StoryProjectsPageProps {
  projects: PortfolioProject[]
}

export function StoryProjectsPage({ projects }: StoryProjectsPageProps) {
  const ordered = orderPortfolioProjects(projects)

  return (
    <StoryShell variant="strategy" showScrollCue>
      <main>
        <HeroChapter
          id="hero"
          note="selected work"
          lines={['Production systems', 'for real workflows.']}
          accent="Not decks."
          subline="Operational AI, voice, and ops platforms shipped for teams running live volume — proof behind the Strategy Session."
        />

        <ProjectIndexChapter projects={ordered} />

        <GridPaperClose
          variant="strategy"
          lines={['See something', 'similar?']}
          accent="Apply."
          pricingLine="USD 2,000 · Strategy Session · written Opportunity Brief"
          bodyLine={HOME_APPLY_SUPPORT}
        />
      </main>
    </StoryShell>
  )
}
