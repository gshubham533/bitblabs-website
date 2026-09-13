'use client'

import Link from 'next/link'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { HeroChapter } from '@/components/story/HeroChapter'
import { StoryShell } from '@/components/story/StoryShell'

export default function SideQuestsPage() {
  return (
    <StoryShell variant="default">
      <main>
        <HeroChapter
          lines={['Side quests']}
          accent="Coming soon."
          note="not the offer"
          subline="Empty on purpose. Experiments live here later. Production work is on Work."
        >
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/projects" className="btn-primary">
              View work
            </Link>
            <Link href="/" className="btn-ghost">
              Home
            </Link>
          </div>
        </HeroChapter>
        <GridPaperClose variant="home" />
      </main>
    </StoryShell>
  )
}
