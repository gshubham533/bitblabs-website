'use client'

import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { sceneThemeClasses, type SceneTheme } from '@/components/showcase/case-study/utils'

interface StickyStoryStep {
  title: string
  description: string
}

interface StickyStorySectionProps {
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
  title: string
  intro?: string
  steps: StickyStoryStep[]
  accent: string
  theme?: SceneTheme
  blurText?: boolean
}

export function StickyStorySection({
  title,
  intro,
  steps,
  theme = 'board',
}: StickyStorySectionProps) {
  if (steps.length === 0) return null

  const styles = sceneThemeClasses(theme)

  return (
    <section className={cn('bb-home-section', styles.section)}>
      <div className="bb-home-container grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2
              className={cn(
                'font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.02] tracking-[0.02em]',
                styles.heading
              )}
            >
              {title}
            </h2>
            {intro ? (
              <p className={cn('mt-5 max-w-md text-lg leading-relaxed', styles.body)}>{intro}</p>
            ) : null}
          </Reveal>
        </div>

        <div className="space-y-4 md:space-y-5">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="rounded-[0.85rem] border border-[var(--bb-rail)] bg-[var(--bb-surface)] p-5 shadow-[var(--bb-chip-shadow)] sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--bb-brand)] bg-[var(--bb-brand-soft)] font-[family-name:var(--font-barlow-condensed)] text-xs font-semibold text-[var(--bb-brand-dark)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className={cn(
                        'font-[family-name:var(--font-barlow-condensed)] text-xl font-semibold tracking-[0.02em] md:text-2xl',
                        styles.heading
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className={cn('mt-3 text-base leading-relaxed md:text-lg', styles.body)}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
