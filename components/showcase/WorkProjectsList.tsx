'use client'

import type { ReactNode } from 'react'
import { InnerHero } from '@/components/hl/PageShell'
import { Eyebrow } from '@/components/hl/ui'
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
  subtitle = <>Built with workflows, systems, and production.</>,
  trailingContent,
}: WorkProjectsListProps) {
  const ordered = orderPortfolioProjects(projects)

  return (
    <div className="flex w-full flex-col">
      <InnerHero eyebrow={<Eyebrow>Selected work</Eyebrow>} title={title} description={subtitle} />

      <div className="pb-20 lg:pb-30">
        <div className="hl-container flex flex-col gap-7.5">
          {ordered.map((project, index) => (
            <WorkProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      {trailingContent ? <div className="w-full">{trailingContent}</div> : null}
    </div>
  )
}
