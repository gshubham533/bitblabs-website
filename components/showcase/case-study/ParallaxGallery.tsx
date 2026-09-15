'use client'

import { Reveal } from '@/components/ui/Reveal'
import { CaseStudyScreenshot } from '@/components/showcase/case-study/CaseStudyScreenshot'
import { cn } from '@/lib/utils'
import { sceneThemeClasses, type SceneTheme } from '@/components/showcase/case-study/utils'

interface ParallaxGalleryProps {
  title: string
  description?: string
  images: string[]
  accent: string
  eyebrow?: string
  chapterNumber?: number
  chapterLabel?: string
  screenshotFrame?: 'light' | 'dark'
  screenshotStyle?: 'minimal' | 'device'
  deviceLabel?: string
  theme?: SceneTheme
  blurText?: boolean
}

export function ParallaxGallery({
  title,
  description,
  images,
  screenshotFrame = 'light',
  screenshotStyle,
  deviceLabel,
  theme = 'board',
}: ParallaxGalleryProps) {
  const styles = sceneThemeClasses(theme)

  if (images.length === 0) return null

  return (
    <section className={cn('relative pb-20 pt-16 md:pb-28 md:pt-20', styles.sectionAlt)}>
      <div className="bb-home-container mb-10 md:mb-12">
        <Reveal>
          <h2
            className={cn(
              'font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[0.02em]',
              styles.heading
            )}
          >
            {title}
          </h2>
          {description ? (
            <p className={cn('mt-4 max-w-2xl text-lg leading-relaxed md:text-xl', styles.body)}>
              {description}
            </p>
          ) : null}
          <p className={cn('mt-3 text-sm', styles.body)}>
            Scroll horizontally to view all {images.length} screens.
          </p>
        </Reveal>
      </div>

      <div className="overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory">
        <div className="flex w-max min-w-full gap-5 px-6 md:gap-8 md:px-[max(1.5rem,calc((100vw-var(--bb-max))/2+1.5rem))]">
          {images.map((src, index) => (
            <CaseStudyScreenshot
              key={`${src}-${index}`}
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              layout="gallery"
              frameTheme={screenshotFrame}
              sectionTheme="light"
              projectStyle={screenshotStyle}
              deviceLabel={deviceLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
