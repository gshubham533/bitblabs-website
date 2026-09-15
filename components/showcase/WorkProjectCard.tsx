'use client'

import Image from 'next/image'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { getCategoryLabel, getIndustry } from '@/lib/project-utils'
import { WorkProjectLink } from '@/components/showcase/WorkProjectLink'
import { cn } from '@/lib/utils'

interface WorkProjectCardProps {
  project: PortfolioProject
  index: number
  /** When false, shows the screenshot frame without a photo inside. */
  showImage?: boolean
}

const WORK_CARD_ASPECT = '1024/490'
const WORK_CARD_IMAGE_SIZES = '(max-width: 768px) calc(100vw - 3rem), 1100px'

function getWorkCardCover(project: PortfolioProject): string | undefined {
  return project.images.workCover ?? project.images.cover
}

function getPreviewUrl(project: PortfolioProject): string {
  if (project.links.live) {
    try {
      return new URL(project.links.live).hostname.replace(/^www\./, '')
    } catch {
      return project.links.live
    }
  }
  return `${project.slug.replace(/-/g, '')}.com`
}

function ArticleFigure({
  project,
  cover,
}: {
  project: PortfolioProject
  cover?: string
}) {
  const previewUrl = getPreviewUrl(project)

  return (
    <figure className="group/work-img w-full min-w-0 md:w-[min(58%,42rem)] md:flex-none lg:w-[min(60%,48rem)]">
      <div className="overflow-hidden rounded-[0.85rem] border border-[var(--bb-rail)] bg-[var(--bb-surface)] shadow-[var(--bb-chip-shadow)]">
        <div
          className={cn(
            'relative overflow-hidden',
            !cover ||
              project.images.screenshotFrame === 'dark' ||
              project.slug === 'axion-plan'
              ? 'bg-[var(--bb-ink)]'
              : 'bg-[var(--bb-board)]'
          )}
          style={{ aspectRatio: WORK_CARD_ASPECT }}
        >
          {cover ? (
            <Image
              src={cover}
              alt={`${project.title} preview`}
              fill
              unoptimized
              className="object-cover object-top"
              sizes={WORK_CARD_IMAGE_SIZES}
              priority={
                project.slug === 'healthy-fasal' ||
                project.slug === 'course-companion' ||
                project.slug === 'axion-plan'
              }
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[rgba(20,24,32,0.06)]" />
        </div>
      </div>
      <figcaption className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
        {previewUrl}
      </figcaption>
    </figure>
  )
}

export function WorkProjectCard({
  project,
  index,
  showImage = true,
}: WorkProjectCardProps) {
  const hasStory = Boolean(project.slides?.length)
  const href = hasStory ? `/projects/${project.slug}` : project.links.live
  const number = String(index + 1).padStart(2, '0')
  const category = getCategoryLabel(project.category)
  const industry = getIndustry(project)
  const chips = [
    number,
    category,
    industry !== category ? industry : null,
    project.year,
  ].filter(Boolean) as string[]
  const linkLabel = hasStory
    ? 'Read case study'
    : (project.links.ctaLabel ?? (project.links.live ? 'View project' : 'Explore project'))

  const cover = showImage ? getWorkCardCover(project) : undefined
  const alignRight = index % 2 === 1

  const copy = (
    <div className="flex min-w-0 flex-col gap-4 self-center md:max-w-[min(100%,34rem)] md:flex-1 md:gap-5 lg:max-w-[min(100%,38rem)]">
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-md border border-[var(--bb-rail)] bg-[var(--bb-board)] px-2.5 py-1.5 font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bb-ink)]"
          >
            {chip}
          </span>
        ))}
      </div>
      <h2 className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1] tracking-[0.02em] text-[var(--bb-ink)]">
        {project.title}
      </h2>
      <p className="max-w-prose text-base leading-relaxed text-[var(--bb-ink-muted)] md:text-[1.0625rem]">
        {project.description}
      </p>
      {href ? <WorkProjectLink href={href} label={linkLabel} /> : null}
    </div>
  )

  return (
    <article className="bb-panel overflow-hidden p-5 sm:p-7 lg:p-8">
      <div
        className={cn(
          'flex w-full flex-col gap-8 md:items-center',
          alignRight
            ? 'md:flex-row-reverse md:justify-between md:gap-x-12 lg:gap-x-16'
            : 'md:flex-row md:justify-between md:gap-x-12 lg:gap-x-16'
        )}
      >
        {copy}
        <ArticleFigure project={project} cover={cover} />
      </div>
    </article>
  )
}
