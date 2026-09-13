'use client'

import Image from 'next/image'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { getCategoryLabel, getIndustry } from '@/lib/project-utils'
import { WorkProjectLink } from '@/components/showcase/WorkProjectLink'
import { cn } from '@/lib/utils'

interface WorkProjectCardProps {
  project: PortfolioProject
  index: number
  showImage?: boolean
}

const WORK_CARD_ASPECT = '1024/490'
const WORK_CARD_IMAGE_SIZES = '(max-width: 768px) calc(100vw - 3rem), 1100px'

function getWorkCardCover(project: PortfolioProject): string | undefined {
  return project.images.workCover ?? project.images.cover
}

function ArticleFigure({
  project,
  cover,
}: {
  project: PortfolioProject
  cover?: string
}) {
  return (
    <figure className="w-full min-w-0 md:w-[min(58%,42rem)] md:flex-none lg:w-[min(60%,48rem)]">
      <div
        className={cn(
          'relative overflow-hidden rounded-card border border-rule',
          !cover || project.images.screenshotFrame === 'dark' || project.slug === 'axion-plan'
            ? 'bg-ink'
            : 'bg-paper'
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
      </div>
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
  const kickerParts = [number, category, industry !== category ? industry : null, project.year].filter(
    Boolean
  )
  const linkLabel = hasStory
    ? 'Read case study'
    : (project.links.ctaLabel ?? (project.links.live ? 'View project' : 'Explore project'))

  const cover = showImage ? getWorkCardCover(project) : undefined
  const alignRight = index % 2 === 1

  const copy = (
    <div className="flex min-w-0 flex-col gap-4 self-center md:max-w-[min(100%,34rem)] md:flex-1">
      <p className="font-body text-sm text-muted">{kickerParts.join(' · ')}</p>
      <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.08] tracking-tight text-ink">
        {project.title}
      </h2>
      <p className="font-body text-base leading-relaxed text-ink-2 md:text-lg">
        {project.description}
      </p>
      {href ? <WorkProjectLink href={href} label={linkLabel} /> : null}
    </div>
  )

  return (
    <article className="w-full border-b border-rule">
      <div
        className={cn(
          'page-x flex w-full flex-col gap-10 py-14 md:items-center md:py-20',
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
