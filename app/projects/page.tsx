'use client'

import { FinalCta } from '@/components/hl/FinalCta'
import { PageShell } from '@/components/hl/PageShell'
import { WorkProjectsList } from '@/components/showcase/WorkProjectsList'
import { StudioProducts } from '@/components/sections/StudioProducts'
import { portfolioProjects } from '@/lib/portfolio-data'

export default function ProjectsPage() {
  return (
    <PageShell>
      <WorkProjectsList
        projects={portfolioProjects}
        title="Our work"
        subtitle="Workflows, systems, and products we have taken into production."
        trailingContent={<StudioProducts embedded />}
      />
      <FinalCta />
    </PageShell>
  )
}
