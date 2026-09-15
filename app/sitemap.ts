import type { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/data'
import { portfolioProjects } from '@/lib/portfolio-data'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-15')

  const core: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified },
    { url: `${SITE_URL}/projects`, lastModified },
    { url: `${SITE_URL}/case-studies`, lastModified },
    { url: `${SITE_URL}/privacy`, lastModified },
    { url: `${SITE_URL}/terms`, lastModified },
  ]

  const projects = portfolioProjects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified,
  }))

  const studies = caseStudies.map((study) => ({
    url: `${SITE_URL}/case-studies/${study.slug}`,
    lastModified,
  }))

  return [...core, ...projects, ...studies]
}
