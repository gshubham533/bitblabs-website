import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

const routes = ['', '/projects', '/ai-workflow-strategy/apply', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '' || path === '/ai-workflow-strategy/apply' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/ai-workflow-strategy/apply' ? 0.9 : 0.7,
  }))
}
