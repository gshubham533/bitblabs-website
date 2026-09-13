'use client'

import { StoryProvider } from '@/components/story/StoryProvider'
import {
  FloatingStoryNav,
  StoryScrollCue,
  type StoryNavVariant,
} from '@/components/story/FloatingStoryNav'

interface StoryShellProps {
  children: React.ReactNode
  variant?: StoryNavVariant
  showScrollCue?: boolean
}

export function StoryShell({ children, variant = 'home', showScrollCue = false }: StoryShellProps) {
  return (
    <StoryProvider>
      <div className="bg-paper text-ink">{children}</div>
      {showScrollCue ? <StoryScrollCue /> : null}
      <FloatingStoryNav variant={variant} />
    </StoryProvider>
  )
}
