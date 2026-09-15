'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import type { CaseStudyProject } from '@/lib/case-study-project'
import { portfolioProjects } from '@/lib/portfolio-data'
import { orderPortfolioProjects } from '@/lib/project-utils'
import type { StorySlide } from '@/lib/story-slide'
import { MetricsShowcase } from '@/components/showcase/case-study/MetricsShowcase'
import { CaseStudyStatsBlock } from '@/components/showcase/case-study/CaseStudyStatsBlock'
import { StickyStorySection } from '@/components/showcase/case-study/StickyStorySection'
import { ParallaxGallery } from '@/components/showcase/case-study/ParallaxGallery'
import {
  CASE_STUDY_UI_ASPECT,
  CaseStudyScreenshot,
} from '@/components/showcase/case-study/CaseStudyScreenshot'
import { liveUrlLabel } from '@/components/showcase/case-study/screenshot-frame'
import {
  FeatureGridScene,
  FullBleedVisual,
  MetaItem,
  StatementScene,
  TestimonialScene,
} from '@/components/showcase/case-study/CaseStudyScenes'
import { PORTFOLIO_SECTION_HREF } from '@/lib/site'
import {
  caseStudyHeroMedia,
  slideChapterLabel,
  stickySourceSlide,
  stickyStoryFromSlides,
  type SceneTheme,
} from '@/components/showcase/case-study/utils'

interface AgencyCaseStudyProps {
  project: CaseStudyProject
  backHref?: string
  backLabel?: string
}

function sectionTheme(chapterNumber: number): SceneTheme {
  return chapterNumber % 2 === 0 ? 'surface' : 'board'
}

function CaseStudyBackLink({
  href,
  label = 'Back',
}: {
  href: string
  label?: string
}) {
  return (
    <Link href={href} className="bb-btn-secondary min-h-10 px-3.5 py-2 text-sm">
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        fill="none"
        className="h-3.5 w-3.5 shrink-0"
      >
        <path
          d="M10 3.5 5.5 8 10 12.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </Link>
  )
}

export function AgencyCaseStudy({
  project,
  backHref = PORTFOLIO_SECTION_HREF,
  backLabel = 'Back to work',
}: AgencyCaseStudyProps) {
  const slides = project.slides ?? []
  const accent = project.color
  const snapshotMetrics = project.metrics ?? []
  const coverSrc = caseStudyHeroMedia(project)

  let chapterNum = 0
  const nextChapter = (label: string) => {
    chapterNum += 1
    return { number: chapterNum, label, theme: sectionTheme(chapterNum) }
  }

  const stickySource = stickySourceSlide(slides)
  const stickyStory = stickyStoryFromSlides(slides)
  let stickyRendered = false

  const deviceLabel = liveUrlLabel(project.liveUrl, `${project.slug.replace(/-/g, '')}.com`)
  const conclusionSlide = slides.find((s) => s.type === 'conclusion') ?? slides[slides.length - 1]

  const orderedProjects = orderPortfolioProjects(portfolioProjects)
  const currentIndex = orderedProjects.findIndex((p) => p.slug === project.slug)
  const nextProject =
    currentIndex >= 0
      ? orderedProjects[(currentIndex + 1) % orderedProjects.length]
      : orderedProjects[0]

  const renderStatement = (
    slide: StorySlide,
    ch: { number: number; label: string; theme: SceneTheme },
    align: 'left' | 'center' = 'left'
  ) => (
    <StatementScene
      key={slide.id}
      chapterNumber={ch.number}
      chapterLabel={ch.label}
      headline={slide.title ?? ch.label}
      body={slide.content}
      pullQuote={slide.highlight}
      accent={accent}
      align={align}
      theme={ch.theme}
    />
  )

  const slideSections: ReactNode[] = []

  for (const slide of slides) {
    const ch = nextChapter(slideChapterLabel(slide.type))

    if (
      stickyStory &&
      stickySource?.id === slide.id &&
      !stickyRendered &&
      (slide.type === 'process' || slide.type === 'architecture')
    ) {
      stickyRendered = true
      slideSections.push(
        <StickyStorySection
          key={`sticky-${slide.id}`}
          chapterNumber={ch.number}
          chapterLabel={ch.label}
          title={stickyStory.title}
          intro={stickyStory.intro}
          steps={stickyStory.steps}
          accent={accent}
          theme={ch.theme}
        />
      )
      continue
    }

    switch (slide.type) {
      case 'intro':
      case 'problem':
      case 'solution':
      case 'insight':
        slideSections.push(
          renderStatement(slide, ch, slide.type === 'problem' ? 'center' : 'left')
        )
        break

      case 'scene':
        if (slide.image) {
          slideSections.push(
            <FullBleedVisual
              key={slide.id}
              chapterNumber={ch.number}
              chapterLabel={ch.label}
              title={slide.title ?? project.title}
              body={slide.content}
              pullQuote={slide.highlight}
              image={slide.image}
              accent={accent}
              layout="cinematic"
              theme={ch.theme}
              imageAspect={slide.imageAspect}
              screenshotFrame={project.screenshotFrame}
              screenshotStyle={project.screenshotStyle}
              slideFrame={slide.imageFrame}
              deviceLabel={deviceLabel}
              imageFit={slide.imageFit}
            />
          )
        } else {
          slideSections.push(renderStatement(slide, ch))
        }
        break

      case 'process':
      case 'architecture':
        slideSections.push(renderStatement(slide, ch))
        break

      case 'features':
        if (slide.features?.length) {
          slideSections.push(
            <FeatureGridScene
              key={slide.id}
              chapterNumber={ch.number}
              chapterLabel={ch.label}
              title={slide.title ?? 'Capabilities'}
              body={slide.content}
              features={slide.features}
              accent={accent}
              theme={ch.theme}
            />
          )
        }
        break

      case 'stats':
        if (slide.stats?.length) {
          slideSections.push(
            <CaseStudyStatsBlock
              key={slide.id}
              slide={slide}
              accent={accent}
              chapterNumber={ch.number}
              chapterLabel={ch.label}
            />
          )
        }
        break

      case 'gallery':
        if (slide.galleryImages?.length) {
          slideSections.push(
            <ParallaxGallery
              key={slide.id}
              chapterNumber={ch.number}
              chapterLabel={ch.label}
              title={slide.title ?? 'Project Gallery'}
              description={slide.content}
              images={slide.galleryImages}
              accent={accent}
              theme={ch.theme}
              screenshotFrame={project.screenshotFrame}
              screenshotStyle={project.screenshotStyle}
              deviceLabel={deviceLabel}
            />
          )
        }
        break

      case 'conclusion':
        if (slide.image) {
          slideSections.push(
            <FullBleedVisual
              key={slide.id}
              chapterNumber={ch.number}
              chapterLabel={ch.label}
              title={slide.title ?? project.title}
              body={slide.content}
              pullQuote={slide.highlight}
              image={slide.image}
              accent={accent}
              layout="cinematic"
              theme={ch.theme}
              imageAspect={slide.imageAspect}
              screenshotFrame={project.screenshotFrame}
              screenshotStyle={project.screenshotStyle}
              slideFrame={slide.imageFrame}
              deviceLabel={deviceLabel}
              imageFit={slide.imageFit}
            />
          )
        } else {
          slideSections.push(renderStatement(slide, ch, 'center'))
        }
        break

      case 'testimonial':
        slideSections.push(
          <TestimonialScene
            key={slide.id}
            chapterNumber={ch.number}
            chapterLabel={ch.label}
            quote={slide.highlight ?? slide.content}
            attribution={slide.title ?? slide.dialogue}
            accent={accent}
            theme={ch.theme}
          />
        )
        break

      default:
        slideSections.push(renderStatement(slide, ch))
        break
    }
  }

  const metricsChapter = nextChapter(project.metricsSection?.headline ?? 'Results & Impact')
  const closingChapter = nextChapter('Next project')

  return (
    <article id="case-study-article" className="text-[var(--bb-ink)] antialiased">
      <div className="bb-home-container flex items-center justify-between gap-4 pb-2 pt-28 sm:pt-32">
        <CaseStudyBackLink href={backHref} label={backLabel} />
        <p className="truncate text-sm text-[var(--bb-ink-muted)]">{project.title}</p>
      </div>

      <section className="bb-home-section pt-8 sm:pt-10">
        <div className="bb-home-container">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-board)] px-2.5 py-1.5 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)]">
                {project.industry}
              </span>
              {project.year ? (
                <span className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-board)] px-2.5 py-1.5 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)]">
                  {project.duration} · {project.year}
                </span>
              ) : null}
              {project.tech.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-brand-soft)] px-2.5 py-1.5 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bb-brand-dark)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-8 max-w-5xl font-[family-name:var(--font-barlow-condensed)] text-[clamp(2.4rem,7.2vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.01em] text-[var(--bb-ink)]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--bb-ink-muted)] md:text-xl">
              {project.tagline}
            </p>

            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bb-btn-primary mt-8"
              >
                View live product →
              </a>
            ) : null}
          </Reveal>

          <Reveal className="mt-12 grid gap-8 border-t border-[var(--bb-line)] pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <MetaItem label="Industry" value={project.industry} />
            <MetaItem label="Timeline" value={project.duration} />
            <MetaItem label="Role" value={project.role} />
            <MetaItem
              label="Stack"
              value={
                project.tech.length > 0
                  ? project.tech.slice(0, 3).join(' · ')
                  : project.categoryLabel
              }
            />
          </Reveal>

          {coverSrc || project.coverVideo ? (
            <Reveal className="mt-12 md:mt-14">
              <CaseStudyScreenshot
                src={coverSrc ?? project.thumbnail}
                alt={project.title}
                layout="cinematic"
                aspectRatio={project.coverAspect ?? CASE_STUDY_UI_ASPECT}
                frameTheme={project.screenshotFrame ?? 'light'}
                sectionTheme="light"
                frameVariant={
                  project.coverVideo
                    ? 'minimal'
                    : project.screenshotStyle === 'device'
                      ? 'device'
                      : undefined
                }
                projectStyle={project.screenshotStyle}
                deviceLabel={deviceLabel}
                imageFit={project.coverVideo ? 'cover' : 'contain'}
                videoSrc={project.coverVideo}
                className="mx-auto"
              />
            </Reveal>
          ) : null}
        </div>
      </section>

      {slideSections}

      <MetricsShowcase
        chapterNumber={metricsChapter.number}
        chapterLabel={metricsChapter.label}
        headline={project.metricsSection?.headline ?? 'Built for scale. Proven in market.'}
        metrics={snapshotMetrics}
        accent={accent}
        theme={metricsChapter.theme}
      />

      <section className="bb-home-section border-t border-[var(--bb-line)] bg-[var(--bb-board)]">
        <div className="bb-home-container text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[0.02em] text-[var(--bb-ink)]">
              {nextProject?.title ?? conclusionSlide?.title ?? closingChapter.label}
            </h2>
            {conclusionSlide?.highlight ? (
              <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--bb-ink-muted)] md:text-xl">
                {conclusionSlide.highlight}
              </p>
            ) : null}
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bb-btn-secondary"
              >
                View live product
              </a>
            ) : null}
            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="bb-btn-primary">
                Next: {nextProject.title}
              </Link>
            ) : null}
          </Reveal>
        </div>
      </section>
    </article>
  )
}
