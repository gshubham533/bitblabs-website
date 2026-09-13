'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  SplitMockChapter,
  StepsChapter,
  TypographicListChapter,
} from '@/components/story/ContentChapters'
import { StoryHandwrittenNote, StoryReveal, StorySerifHeadline } from '@/components/story/StoryReveal'
import {
  CASE_STUDY_UI_ASPECT,
  CaseStudyScreenshot,
} from '@/components/showcase/case-study/CaseStudyScreenshot'
import { liveUrlLabel } from '@/components/showcase/case-study/screenshot-frame'
import {
  caseStudyHeroMedia,
  slideChapterLabel,
} from '@/components/showcase/case-study/utils'
import type { CaseStudyProject } from '@/lib/case-study-project'
import type { StorySlide } from '@/lib/story-slide'
import { cn } from '@/lib/utils'

interface CaseStudyHeroProps {
  project: CaseStudyProject
  backHref: string
  backLabel: string
}

export function CaseStudyHero({ project, backHref, backLabel }: CaseStudyHeroProps) {
  const heroMedia = caseStudyHeroMedia(project)
  const accent =
    project.tagline.split('.').filter(Boolean)[0]?.trim() ?? project.tagline

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+2rem)]"
      style={{
        backgroundColor: 'var(--color-paper)',
        backgroundImage:
          'linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper-2" />
      <div className="relative mx-auto max-w-4xl">
        <StoryReveal>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-ink"
          >
            ← {backLabel}
          </Link>
        </StoryReveal>

        <div className="mt-8 text-center md:mt-10">
          <StoryReveal variant="soft">
            <StoryHandwrittenNote
              text={`${project.categoryLabel} · ${project.year}`}
              className="mb-6 text-center"
            />
          </StoryReveal>
          <StorySerifHeadline
            lines={[project.title]}
            accent={`${accent}.`}
            align="center"
            animateLines
          />
          <StoryReveal delay={0.28} variant="soft">
            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-2 md:text-lg">
              {project.description}
            </p>
          </StoryReveal>
          {project.liveUrl ? (
            <StoryReveal delay={0.34} variant="soft">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full border border-rule px-5 py-2 font-body text-sm text-ink transition-colors hover:bg-paper-2"
              >
                {liveUrlLabel(project.liveUrl)} ↗
              </a>
            </StoryReveal>
          ) : null}
        </div>

        {heroMedia ? (
          <StoryReveal className="mt-10 md:mt-14" delay={0.4} variant="soft">
            <CaseStudyScreenshot
              src={heroMedia}
              alt={`${project.title} product preview`}
              layout="cinematic"
              aspectRatio={project.coverAspect ?? CASE_STUDY_UI_ASPECT}
              frameTheme={project.screenshotFrame ?? 'light'}
              sectionTheme="light"
              projectStyle={project.screenshotStyle ?? 'device'}
              videoSrc={project.coverVideo}
              deviceLabel={liveUrlLabel(project.liveUrl, `${project.slug.replace(/-/g, '')}.com`)}
            />
          </StoryReveal>
        ) : null}
      </div>
    </section>
  )
}

function slideAccent(slide: StorySlide, index: number): string {
  if (slide.highlight) {
    const first = slide.highlight.split('.').filter(Boolean)[0]?.trim()
    if (first && first.length < 48) return `${first}.`
  }
  return `0${index + 1}.`
}

function SlideScreenshot({
  slide,
  project,
  alt,
}: {
  slide: StorySlide
  project: CaseStudyProject
  alt: string
}) {
  if (!slide.image) return null

  return (
    <CaseStudyScreenshot
      src={slide.image}
      alt={alt}
      layout="inline"
      aspectRatio={slide.imageAspect ?? project.coverAspect ?? CASE_STUDY_UI_ASPECT}
      frameTheme={project.screenshotFrame ?? 'light'}
      sectionTheme="light"
      imageFit={slide.imageFit}
      slideFrame={slide.imageFrame}
      projectStyle={project.screenshotStyle ?? 'device'}
      deviceLabel={liveUrlLabel(project.liveUrl, `${project.slug.replace(/-/g, '')}.com`)}
    />
  )
}

interface CaseStudySlideSectionProps {
  slide: StorySlide
  project: CaseStudyProject
  index: number
}

export function CaseStudySlideSection({ slide, project, index }: CaseStudySlideSectionProps) {
  const note = slideChapterLabel(slide.type).toLowerCase()
  const headline = slide.title ?? slideChapterLabel(slide.type)
  const reverse = index % 2 === 1

  if (slide.type === 'features' && slide.features?.length) {
    return (
      <section className="bg-paper-2 px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]">
        <div className="mx-auto max-w-4xl">
          <StoryReveal>
            <StoryHandwrittenNote text={note} className="mb-6" />
          </StoryReveal>
          <StoryReveal>
            <StorySerifHeadline lines={[headline]} accent={slideAccent(slide, index)} align="left" />
          </StoryReveal>
          <StoryReveal delay={0.06}>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-2">{slide.content}</p>
          </StoryReveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {slide.features.map((feature, featureIndex) => (
              <StoryReveal key={feature.title} delay={featureIndex * 0.04}>
                <li className="rounded-[var(--radius-story-card)] border border-rule bg-paper p-5 shadow-[var(--shadow-story-float)]">
                  <p className="font-display text-sm font-bold text-ink">
                    <span aria-hidden className="mr-2">{feature.icon}</span>
                    {feature.title}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">
                    {feature.description}
                  </p>
                </li>
              </StoryReveal>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  if (slide.type === 'stats' && slide.stats?.length) {
    return (
      <TypographicListChapter
        id={`slide-${slide.id}`}
        note={note}
        lines={[headline]}
        accent={slideAccent(slide, index)}
        rows={slide.stats.map((stat) => ({
          category: stat.value,
          detail: stat.label,
        }))}
        dark={index % 2 === 1}
      />
    )
  }

  if ((slide.type === 'process' || slide.type === 'architecture') && (slide.steps?.length || slide.layers?.length)) {
    const steps =
      slide.steps?.map((step) => ({
        number: String(step.number).padStart(2, '0'),
        title: step.title,
        description: step.description,
      })) ??
      slide.layers?.map((layer, layerIndex) => ({
        number: String(layerIndex + 1).padStart(2, '0'),
        title: layer.name,
        description: layer.description,
      })) ??
      []

    return (
      <StepsChapter
        id={`slide-${slide.id}`}
        note={note}
        lines={[headline]}
        accent={slideAccent(slide, index)}
        steps={steps}
      />
    )
  }

  if (slide.type === 'gallery' && slide.galleryImages?.length) {
    return (
      <section className="bg-paper-3 px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]">
        <div className="mx-auto max-w-5xl">
          <StoryReveal>
            <StoryHandwrittenNote text={note} className="mb-6" />
          </StoryReveal>
          <StoryReveal>
            <StorySerifHeadline lines={[headline]} accent={slideAccent(slide, index)} align="left" />
          </StoryReveal>
          <StoryReveal delay={0.06}>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-2">{slide.content}</p>
          </StoryReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {slide.galleryImages.map((image, imageIndex) => (
              <StoryReveal key={image} delay={imageIndex * 0.05}>
                <CaseStudyScreenshot
                  src={image}
                  alt={`${project.title} screenshot ${imageIndex + 1}`}
                  layout="inline"
                  aspectRatio={project.coverAspect ?? CASE_STUDY_UI_ASPECT}
                  frameTheme={project.screenshotFrame ?? 'light'}
                  sectionTheme="light"
                  projectStyle={project.screenshotStyle ?? 'device'}
                />
              </StoryReveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (slide.type === 'testimonial' && slide.testimonialImages?.length) {
    return (
      <section className="bg-paper px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]">
        <div className="mx-auto max-w-3xl text-center">
          <StoryReveal>
            <StorySerifHeadline lines={[headline]} accent={slideAccent(slide, index)} />
          </StoryReveal>
          <StoryReveal delay={0.06}>
            <p className="mt-6 font-body text-base leading-relaxed text-ink-2">{slide.content}</p>
          </StoryReveal>
          <StoryReveal className="mt-8 flex justify-center gap-4" delay={0.1}>
            {slide.testimonialImages.map((image) => (
              <div
                key={image}
                className="relative h-14 w-14 overflow-hidden rounded-full border border-rule bg-paper-2"
              >
                <Image src={image} alt="" fill className="object-cover" unoptimized />
              </div>
            ))}
          </StoryReveal>
        </div>
      </section>
    )
  }

  return (
    <SplitMockChapter
      id={`slide-${slide.id}`}
      note={note}
      lines={[headline]}
      accent={slideAccent(slide, index)}
      reverse={reverse}
    >
      <div className="space-y-6">
        {slide.image ? (
          <SlideScreenshot slide={slide} project={project} alt={`${project.title} — ${headline}`} />
        ) : null}
        <div
          className={cn(
            'rounded-[var(--radius-story-card)] border border-rule bg-paper p-6 shadow-[var(--shadow-story-float)] md:p-8',
            slide.image && 'md:p-6'
          )}
        >
          <p className="font-body text-base leading-relaxed text-ink-2 md:text-lg">{slide.content}</p>
          {slide.highlight ? (
            <p className="mt-4 font-[family-name:var(--font-story-note)] text-lg text-muted md:text-xl">
              {slide.highlight}
            </p>
          ) : null}
        </div>
      </div>
    </SplitMockChapter>
  )
}

interface CaseStudyMetricsProps {
  project: CaseStudyProject
}

export function CaseStudyMetrics({ project }: CaseStudyMetricsProps) {
  if (!project.metrics?.length) return null

  const eyebrow = project.metricsSection?.eyebrow ?? 'measured outcomes'
  const headline = project.metricsSection?.headline ?? 'Verified.'

  return (
    <TypographicListChapter
      id="metrics"
      note={eyebrow}
      lines={['Measured', 'outcomes.']}
      accent={headline}
      rows={project.metrics.map((metric) => ({
        category: metric.value,
        detail: metric.label,
      }))}
      dark
    />
  )
}

interface CaseStudyNextLinkProps {
  href: string
  title: string
}

export function CaseStudyNextLink({ href, title }: CaseStudyNextLinkProps) {
  return (
    <section className="border-t border-rule bg-paper-2 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <StoryReveal>
          <p className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted">
            Next project
          </p>
          <Link
            href={href}
            className="mt-3 inline-block font-[family-name:var(--font-story-serif)] text-2xl text-ink transition-colors hover:text-[var(--color-story-green)] md:text-3xl"
          >
            {title} →
          </Link>
        </StoryReveal>
      </div>
    </section>
  )
}

export function selectCaseStudyBodySlides(slides: StorySlide[]): StorySlide[] {
  return slides.filter((slide) => slide.type !== 'intro' && slide.type !== 'conclusion')
}

export function selectCaseStudyConclusion(slides: StorySlide[]): StorySlide | undefined {
  return slides.find((slide) => slide.type === 'conclusion')
}
