'use client'

import { BbPageShell } from '@/components/home/BbPageShell'
import { WorkProjectsList } from '@/components/showcase/WorkProjectsList'
import { StudioProducts } from '@/components/sections/StudioProducts'
import { portfolioProjects } from '@/lib/portfolio-data'

export default function ProjectsPage() {
  return (
    <BbPageShell>
      <WorkProjectsList
        projects={portfolioProjects}
        title="Our work"
        subtitle={
          <>
            Built with <strong className="font-medium text-[var(--bb-ink)]">workflows</strong>,{' '}
            <strong className="font-medium text-[var(--bb-ink)]">systems</strong>, and{' '}
            <strong className="font-medium text-[var(--bb-ink)]">production</strong>.
          </>
        }
        trailingContent={<StudioProducts embedded />}
      />
    </BbPageShell>
  )
}
