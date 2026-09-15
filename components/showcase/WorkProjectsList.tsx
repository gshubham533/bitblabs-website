'use client'

import type { ReactNode } from 'react'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { orderPortfolioProjects } from '@/lib/project-utils'
import { WorkProjectCard } from '@/components/showcase/WorkProjectCard'

interface WorkProjectsListProps {
  projects: PortfolioProject[]
  title?: string
  subtitle?: ReactNode
  /** Rendered after the project list (e.g. Rezonna spotlight). */
  trailingContent?: ReactNode
}

export function WorkProjectsList({
  projects,
  title = 'Our work',
  subtitle = (
    <>
      Built with workflows, systems, and production.
    </>
  ),
  trailingContent,
}: WorkProjectsListProps) {
  const ordered = orderPortfolioProjects(projects)

  return (
    <div className="flex w-full flex-col">
      <header className="bb-home-section pb-0 pt-28 sm:pt-32">
        <div className="bb-home-container">
          <h1 className="max-w-3xl font-[family-name:var(--font-barlow-condensed)] text-[clamp(2.4rem,7.2vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.01em] text-[var(--bb-ink)]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:text-lg">
            {subtitle}
          </p>
        </div>
      </header>

      <div className="bb-home-section pt-10 sm:pt-14">
        <div className="bb-home-container flex flex-col gap-8 md:gap-10">
          {ordered.map((project, index) => (
            <WorkProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      {trailingContent ? <div className="w-full">{trailingContent}</div> : null}
    </div>
  )
}
