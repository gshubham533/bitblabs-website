import { StoryProjectsPage } from '@/components/showcase/StoryProjectsPage'
import { portfolioProjects } from '@/lib/portfolio-data'

export default function ProjectsPage() {
  return <StoryProjectsPage projects={portfolioProjects} />
}
