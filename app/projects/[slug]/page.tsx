import { WorkJsonLd } from '@/components/seo/WorkJsonLd'
import { WorkDetailView } from '@/components/showcase/WorkDetailView'
import { fromPortfolioProject } from '@/lib/case-study-project'
import { portfolioProjects } from '@/lib/portfolio-data'
import { PORTFOLIO_SECTION_HREF } from '@/lib/site'

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((item) => item.slug === params.slug)
  const mapped = project ? fromPortfolioProject(project) : null

  return (
    <>
      {mapped ? <WorkJsonLd kind="project" project={mapped} /> : null}
      <WorkDetailView
        project={mapped}
        backHref={PORTFOLIO_SECTION_HREF}
        backLabel="Back to work"
      />
    </>
  )
}
