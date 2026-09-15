'use client'

import { Reveal } from '@/components/ui/Reveal'
import type { StorySlide } from '@/lib/story-slide'
import { cn } from '@/lib/utils'
import { sceneThemeClasses } from '@/components/showcase/case-study/utils'

interface CaseStudyStatsBlockProps {
  slide: StorySlide
  accent: string
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
}

function isAccessMatrix(stats: NonNullable<StorySlide['stats']>) {
  return stats.length > 0 && stats.every((stat) => stat.value === '✓' || stat.value === '✗')
}

function AccessMatrix({
  stats,
}: {
  stats: NonNullable<StorySlide['stats']>
}) {
  const allowed = stats.filter((stat) => stat.value === '✓')
  const restricted = stats.filter((stat) => stat.value === '✗')

  const column = (
    title: string,
    items: typeof stats,
    tone: 'allowed' | 'restricted'
  ) => (
    <div
      className={cn(
        'rounded-[0.85rem] border p-6 md:p-8',
        tone === 'allowed'
          ? 'border-[var(--bb-rail)] bg-[var(--bb-mint)]/35'
          : 'border-[var(--bb-rail)] bg-[var(--bb-amber)]/25'
      )}
    >
      <p className="font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink)]">
        {title}
      </p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-4 rounded-md border border-[var(--bb-rail)] bg-[var(--bb-surface)] px-4 py-3"
          >
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold',
                tone === 'allowed'
                  ? 'bg-[var(--bb-mint)] text-[var(--bb-ink)]'
                  : 'bg-[var(--bb-amber)] text-[var(--bb-ink)]'
              )}
            >
              {item.value}
            </span>
            <div className="min-w-0 pt-1">
              <p className="font-[family-name:var(--font-barlow-condensed)] text-lg font-semibold tracking-[0.02em] text-[var(--bb-ink)]">
                {item.label}
              </p>
              {item.icon ? (
                <p className="mt-1 text-sm text-[var(--bb-ink-muted)]">{item.icon}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {column('Visible to super admins', allowed, 'allowed')}
      {column('Intentionally restricted', restricted, 'restricted')}
    </div>
  )
}

function ImpactStats({
  stats,
}: {
  stats: NonNullable<StorySlide['stats']>
  accent: string
}) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
      {stats.map((stat, i) => (
        <Reveal key={`${stat.label}-${stat.value}`} delay={i * 0.06}>
          <div className="rounded-[0.85rem] border border-[var(--bb-rail)] bg-[var(--bb-surface)] p-5 shadow-[var(--bb-chip-shadow)] sm:p-6">
            <p className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-none tracking-[-0.01em] text-[var(--bb-brand)]">
              {stat.value}
            </p>
            <p className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function CaseStudyStatsBlock({ slide, accent }: CaseStudyStatsBlockProps) {
  const stats = slide.stats ?? []
  if (stats.length === 0) return null

  const styles = sceneThemeClasses('board')
  const accessMatrix = isAccessMatrix(stats)

  return (
    <section className={cn('bb-home-section border-t', styles.border, styles.sectionAlt)}>
      <div className="bb-home-container">
        <Reveal>
          <h2 className="max-w-3xl font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[0.02em] text-[var(--bb-ink)]">
            {slide.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--bb-ink-muted)] md:text-xl">
            {slide.content}
          </p>
          {slide.highlight ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink)] md:text-lg">
              {slide.highlight}
            </p>
          ) : null}
        </Reveal>

        {accessMatrix ? <AccessMatrix stats={stats} /> : <ImpactStats stats={stats} accent={accent} />}
      </div>
    </section>
  )
}
