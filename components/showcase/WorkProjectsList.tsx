'use client'

import type { ReactNode } from 'react'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { orderPortfolioProjects } from '@/lib/project-utils'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { WorkProjectCard } from '@/components/showcase/WorkProjectCard'

interface WorkProjectsListProps {
  projects: PortfolioProject[]
  title?: string
  subtitle?: ReactNode
  trailingContent?: ReactNode
  showLegalInfo?: boolean
}

export function WorkProjectsList({
  projects,
  title = 'Work',
  subtitle = 'Production systems for hiring, voice, and operations.',
  trailingContent,
  showLegalInfo = false,
}: WorkProjectsListProps) {
  const ordered = orderPortfolioProjects(projects)

  return (
    <>
      <div className="flex w-full flex-col">
        <header className="page-x page-max grid items-end gap-6 pb-12 md:grid-cols-12 md:gap-12 md:pb-16">
          <h1 className="max-w-[12ch] font-display text-[length:var(--text-display)] font-bold leading-[0.95] text-ink md:col-span-6">
            {title}
          </h1>
          <p className="max-w-[40rem] font-body text-lg leading-relaxed text-ink-2 md:col-span-6 md:text-xl">
            {subtitle}
          </p>
        </header>

        <div className="w-full bg-paper-2">
          {ordered.map((project, index) => (
            <WorkProjectCard key={project.slug} project={project} index={index} />
          ))}
          {trailingContent ? <div className="w-full">{trailingContent}</div> : null}
        </div>
      </div>
      <SiteFooter compact showLegalInfo={showLegalInfo} />
    </>
  )
}
