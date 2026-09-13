import { cn } from '@/lib/utils'
import { StoryHandwrittenNote, StoryReveal, StorySerifHeadline } from '@/components/story/StoryReveal'

interface HeroChapterProps {
  id?: string
  lines: string[]
  accent: string
  note?: string
  subline?: string
  children?: React.ReactNode
  className?: string
}

export function HeroChapter({
  id,
  lines,
  accent,
  note,
  subline,
  children,
  className,
}: HeroChapterProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+2rem)]',
        className
      )}
      style={{
        backgroundColor: 'var(--color-paper)',
        backgroundImage:
          'linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper-2" />
      <div className="relative mx-auto max-w-3xl text-center">
        {note ? (
          <StoryReveal className="mb-6" variant="soft">
            <StoryHandwrittenNote text={note} className="text-center" />
          </StoryReveal>
        ) : null}
        <StorySerifHeadline
          lines={lines}
          accent={accent}
          scriptAccent
          animateLines
          className="max-w-[12ch] md:max-w-none"
        />
        {subline ? (
          <StoryReveal delay={0.28} variant="soft">
            <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-ink-2 md:text-lg">
              {subline}
            </p>
          </StoryReveal>
        ) : null}
        {children ? (
          <StoryReveal className="mt-10 flex flex-col items-center gap-4" delay={0.36} variant="soft">
            {children}
          </StoryReveal>
        ) : null}
      </div>
    </section>
  )
}
