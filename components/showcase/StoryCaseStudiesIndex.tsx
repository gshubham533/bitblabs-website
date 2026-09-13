'use client'

import { NotesIndexChapter } from '@/components/story/NotesIndexChapter'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { HeroChapter } from '@/components/story/HeroChapter'
import { StoryShell } from '@/components/story/StoryShell'
import type { CaseStudy } from '@/lib/data'

interface StoryCaseStudiesIndexProps {
  studies: CaseStudy[]
}

export function StoryCaseStudiesIndex({ studies }: StoryCaseStudiesIndexProps) {
  return (
    <StoryShell variant="default" showScrollCue>
      <main>
        <HeroChapter
          id="hero"
          note="industry essays"
          lines={['Notes on', 'workflow', 'and AI.']}
          accent="Longer reads."
          subline="Essays on operational AI, workflow design, and what holds up in production."
        />

        <NotesIndexChapter studies={studies} />

        <GridPaperClose variant="home" lines={['Need help', 'with a workflow?']} accent="Start here." />
      </main>
    </StoryShell>
  )
}
