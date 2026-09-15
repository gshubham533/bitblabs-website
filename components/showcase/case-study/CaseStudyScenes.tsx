'use client'

import { Reveal } from '@/components/ui/Reveal'
import { CaseStudyScreenshot } from '@/components/showcase/case-study/CaseStudyScreenshot'
import type { ImageFrameVariant } from '@/components/showcase/case-study/screenshot-frame'
import { cn } from '@/lib/utils'
import { sceneThemeClasses, type SceneTheme } from '@/components/showcase/case-study/utils'

const HEADING =
  'font-[family-name:var(--font-barlow-condensed)] font-semibold leading-[1.02] tracking-[0.02em]'
const LABEL =
  'font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]'

/** @deprecated Kept for call sites; chapter numbers/kickers are banned on war-room surfaces. */
export function ChapterMarker({
  label,
  align = 'left',
}: {
  number?: number
  label: string
  accent?: string
  theme?: SceneTheme
  align?: 'left' | 'center'
}) {
  return (
    <h2
      className={cn(
        HEADING,
        'text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--bb-ink)]',
        align === 'center' && 'text-center'
      )}
    >
      {label}
    </h2>
  )
}

export function MetaItem({
  label,
  value,
}: {
  label: string
  value: string
  theme?: SceneTheme
  blurText?: boolean
  startDelay?: number
}) {
  return (
    <div>
      <p className={LABEL}>{label}</p>
      <p className="mt-2 text-base text-[var(--bb-ink)] md:text-lg">{value}</p>
    </div>
  )
}

export function StatementScene({
  chapterLabel,
  headline,
  body,
  pullQuote,
  accent,
  align = 'left',
  theme = 'board',
}: {
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
  headline: string
  body: string
  pullQuote?: string
  accent: string
  align?: 'left' | 'center'
  theme?: SceneTheme
  blurText?: boolean
  backgroundVideo?: string
}) {
  const styles = sceneThemeClasses(theme)
  const title = headline || chapterLabel || ''

  return (
    <section className={cn('bb-home-section border-t', styles.border, styles.section)}>
      <div
        className={cn(
          'bb-home-container',
          align === 'center' && 'text-center'
        )}
      >
        <Reveal>
          <h2
            className={cn(
              HEADING,
              styles.heading,
              align === 'center'
                ? 'mx-auto max-w-4xl text-[clamp(1.75rem,4vw,2.75rem)]'
                : 'max-w-4xl text-[clamp(1.75rem,4vw,2.75rem)]'
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              'mt-6 text-lg leading-relaxed md:text-xl',
              styles.body,
              align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'
            )}
          >
            {body}
          </p>
          {pullQuote ? (
            <p
              className={cn(
                'mt-8 border-l-2 pl-6 text-xl leading-relaxed md:text-2xl',
                styles.pullQuote,
                align === 'center' && 'mx-auto max-w-3xl border-l-0 border-t pt-8 pl-0'
              )}
              style={{ borderColor: 'var(--bb-brand)' }}
            >
              {pullQuote}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}

export function FullBleedVisual({
  chapterLabel,
  title,
  body,
  pullQuote,
  image,
  reverse = false,
  layout = 'cinematic',
  theme = 'board',
  imageAspect,
  screenshotFrame = 'light',
  screenshotStyle,
  slideFrame,
  deviceLabel,
  imageFit,
}: {
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
  title: string
  body: string
  pullQuote?: string
  image: string
  accent: string
  reverse?: boolean
  layout?: 'split' | 'cinematic'
  theme?: SceneTheme
  blurText?: boolean
  imageAspect?: string
  screenshotFrame?: 'light' | 'dark'
  screenshotStyle?: 'minimal' | 'device'
  slideFrame?: ImageFrameVariant
  deviceLabel?: string
  imageFit?: 'contain' | 'cover'
}) {
  const styles = sceneThemeClasses(theme)
  const heading = title || chapterLabel || ''

  const copy = (
    <>
      <h2 className={cn(HEADING, 'mt-0 text-[clamp(1.75rem,4vw,2.75rem)]', styles.heading)}>
        {heading}
      </h2>
      <p className={cn('mt-6 max-w-3xl text-lg leading-relaxed md:text-xl', styles.body)}>{body}</p>
      {pullQuote ? (
        <p className={cn('mt-8 max-w-2xl text-xl leading-relaxed md:text-2xl', styles.pullQuote)}>
          {pullQuote}
        </p>
      ) : null}
    </>
  )

  if (layout === 'cinematic') {
    return (
      <section className={cn('border-t', styles.border, styles.section)}>
        <Reveal>
          <div className="bb-home-container pt-10 md:pt-14">
            <CaseStudyScreenshot
              src={image}
              alt={title}
              layout="cinematic"
              className="mx-auto"
              aspectRatio={imageAspect}
              frameTheme={screenshotFrame}
              sectionTheme="light"
              slideFrame={slideFrame}
              projectStyle={screenshotStyle}
              deviceLabel={deviceLabel}
              imageFit={imageFit}
            />
          </div>
        </Reveal>
        <div className="bb-home-container py-12 md:py-16">
          <Reveal>{copy}</Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('border-t', styles.border, styles.section)}>
      <div
        className={cn(
          'bb-home-container grid items-center gap-10 py-16 md:gap-16 md:py-20 lg:grid-cols-2',
          reverse && 'lg:[&>*:first-child]:order-2'
        )}
      >
        <Reveal>{copy}</Reveal>
        <Reveal delay={0.08}>
          <CaseStudyScreenshot
            src={image}
            alt={title}
            layout="inline"
            aspectRatio={imageAspect}
            frameTheme={screenshotFrame}
            sectionTheme="light"
            slideFrame={slideFrame}
            projectStyle={screenshotStyle}
            deviceLabel={deviceLabel}
            imageFit={imageFit}
          />
        </Reveal>
      </div>
    </section>
  )
}

export function FeatureGridScene({
  chapterLabel,
  title,
  body,
  features,
  theme = 'board',
}: {
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
  title: string
  body: string
  features: { title: string; description: string }[]
  accent: string
  theme?: SceneTheme
  blurText?: boolean
  backgroundVideo?: string
}) {
  const styles = sceneThemeClasses(theme)
  const heading = title || chapterLabel || ''

  return (
    <section className={cn('bb-home-section border-t', styles.border, styles.sectionAlt)}>
      <div className="bb-home-container">
        <Reveal>
          <h2 className={cn(HEADING, 'max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)]', styles.heading)}>
            {heading}
          </h2>
          <p className={cn('mt-6 max-w-2xl text-lg leading-relaxed md:text-xl', styles.body)}>{body}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <div className={cn('h-full rounded-[0.85rem] border p-6 md:p-8', styles.card)}>
                <div className="mb-5 h-px w-10 bg-[var(--bb-brand)]" />
                <h3
                  className={cn(
                    HEADING,
                    'text-xl tracking-[0.02em] md:text-2xl',
                    styles.heading
                  )}
                >
                  {feature.title}
                </h3>
                <p className={cn('mt-3 text-base leading-relaxed', styles.body)}>
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialScene({
  quote,
  attribution,
  theme = 'board',
}: {
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
  quote: string
  attribution?: string
  accent?: string
  theme?: SceneTheme
}) {
  const styles = sceneThemeClasses(theme)

  return (
    <section className={cn('bb-home-section border-t', styles.border, styles.sectionAlt)}>
      <div className="bb-home-container max-w-5xl text-center">
        <Reveal>
          <blockquote
            className={cn(
              HEADING,
              'text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium leading-[1.25]',
              styles.heading
            )}
          >
            &ldquo;{quote}&rdquo;
          </blockquote>
          {attribution ? (
            <p className={cn('mt-8', LABEL)}>{attribution}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
