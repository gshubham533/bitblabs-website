'use client'

import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { sceneThemeClasses, type SceneTheme } from '@/components/showcase/case-study/utils'

interface Metric {
  label: string
  value: string
}

interface MetricsShowcaseProps {
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
  headline: string
  subline?: string
  metrics: Metric[]
  accent: string
  theme?: SceneTheme
  blurText?: boolean
}

export function MetricsShowcase({
  headline,
  subline,
  metrics,
  theme = 'board',
}: MetricsShowcaseProps) {
  if (metrics.length === 0) return null

  const styles = sceneThemeClasses(theme)

  return (
    <section className={cn('bb-home-section border-y', styles.borderStrong, styles.section)}>
      <div className="bb-home-container">
        <Reveal>
          <h2
            className={cn(
              'max-w-3xl font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.02] tracking-[0.02em]',
              styles.heading
            )}
          >
            {headline}
          </h2>
          {subline ? (
            <p className={cn('mt-5 max-w-2xl text-lg leading-relaxed md:text-xl', styles.body)}>
              {subline}
            </p>
          ) : null}
        </Reveal>

        <div
          className={cn(
            'mt-12 grid grid-cols-2 gap-4 md:gap-5',
            metrics.length === 3 && 'md:grid-cols-3',
            metrics.length >= 4 && 'md:grid-cols-4'
          )}
        >
          {metrics.map((metric, i) => (
            <Reveal key={`${metric.label}-${metric.value}`} delay={i * 0.06}>
              <div className="rounded-[0.85rem] border border-[var(--bb-rail)] bg-[var(--bb-surface)] p-5 shadow-[var(--bb-chip-shadow)] sm:p-6">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-none tracking-[-0.01em] text-[var(--bb-brand)]">
                  {metric.value}
                </p>
                <p className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
