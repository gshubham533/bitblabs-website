import type { StorySlide } from './story-slide'
import type { CaseStudy } from './data'
import { founders } from './founders'
import type { PortfolioProject } from './portfolio-data'
import { getCategoryLabel, getIndustry } from './project-utils'

export type WorkProofKind = 'build' | 'insight'

export interface WorkAuthor {
  id: string
  name: string
  role: string
  url: string
  bio: string
}

export interface CaseStudyProject {
  slug: string
  title: string
  tagline: string
  description: string
  role: string
  duration: string
  year: string
  industry: string
  categoryLabel: string
  tech: string[]
  proofKind?: WorkProofKind
  authors?: WorkAuthor[]
  publishedOn?: string
  updatedOn?: string
  publishedIso?: string
  updatedIso?: string
  experienceNote?: string
  takeaways?: string[]
  metrics?: { label: string; value: string }[]
  metricsSection?: {
    eyebrow: string
    headline: string
  }
  color: string
  thumbnail?: string
  cover?: string
  coverVideo?: string
  coverAspect?: string
  screenshotFrame?: 'light' | 'dark'
  screenshotStyle?: 'minimal' | 'device'
  liveUrl?: string
  slides?: StorySlide[]
  links?: {
    live?: string
    github?: string
  }
}

export function fromPortfolioProject(project: PortfolioProject): CaseStudyProject {
  return {
    slug: project.slug,
    title: project.title,
    tagline: project.tagline,
    description: project.description,
    role: project.role,
    duration: project.duration,
    year: project.year,
    industry: getIndustry(project),
    categoryLabel: getCategoryLabel(project.category),
    tech: project.tech,
    metrics: project.metrics,
    metricsSection: project.metricsSection,
    color: project.color,
    thumbnail: project.images.thumbnail,
    cover: project.images.cover,
    coverVideo: project.images.coverVideo,
    coverAspect: project.images.coverAspect,
    screenshotFrame: project.images.screenshotFrame,
    screenshotStyle: project.images.screenshotStyle,
    slides: project.slides,
    links: project.links,
    liveUrl: project.links.live,
    proofKind: 'build',
    authors: founders.map((founder) => ({
      id: founder.id,
      name: founder.name,
      role: founder.role,
      url: founder.linkedIn,
      bio: founder.bio,
    })),
  }
}

function formatDisplayDate(value?: string) {
  if (!value) return undefined
  const parsed = Date.parse(value)
  if (Number.isNaN(parsed)) return value
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(parsed))
}

export function fromLegacyCaseStudy(study: CaseStudy): CaseStudyProject {
  return {
    slug: study.slug,
    title: study.title,
    tagline: study.subtitle ?? study.description,
    description: study.description,
    role: study.author ?? 'BitBlabs',
    duration: study.readTime,
    year: formatDisplayDate(study.date) ?? study.date ?? '',
    industry: study.category,
    categoryLabel: study.category,
    tech: [],
    color: study.color,
    thumbnail: study.thumbnail || undefined,
    slides: study.slides,
    proofKind: 'insight',
    authors: founders.map((founder) => ({
      id: founder.id,
      name: founder.name,
      role: founder.role,
      url: founder.linkedIn,
      bio: founder.bio,
    })),
    publishedOn: formatDisplayDate(study.date),
    updatedOn: formatDisplayDate(study.updated),
    publishedIso: study.date,
    updatedIso: study.updated,
    experienceNote: study.experienceNote,
    takeaways: study.takeaways,
  }
}
