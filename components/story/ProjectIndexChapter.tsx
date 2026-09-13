'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { getCategoryLabel, isLogoAsset } from '@/lib/project-utils'
import { StoryHandwrittenNote, StoryReveal } from '@/components/story/StoryReveal'
import { cn } from '@/lib/utils'

function projectPreviewSrc(project: PortfolioProject): string | undefined {
  return project.images.workCover ?? project.images.cover ?? project.images.thumbnail
}

interface ProjectIndexChapterProps {
  id?: string
  projects: PortfolioProject[]
}

export function ProjectIndexChapter({ id = 'projects', projects }: ProjectIndexChapterProps) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)))
    return unique.map((category) => ({
      id: category,
      label: getCategoryLabel(category),
    }))
  }, [projects])

  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section
      id={id}
      className="bg-paper px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
    >
      <div className="mx-auto max-w-4xl">
        <StoryReveal className="mb-8" variant="soft">
          <StoryHandwrittenNote text="index" />
        </StoryReveal>

        {categories.length > 1 ? (
          <StoryReveal>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                className={cn(
                  'rounded-full border px-4 py-1.5 font-body text-sm transition-[colors,transform] duration-[var(--dur-short)] ease-[var(--ease-out)] active:scale-[0.98]',
                  activeCategory === 'all'
                    ? 'border-ink bg-ink text-paper'
                    : 'border-rule bg-paper text-ink-2 hover:border-ink/30'
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'rounded-full border px-4 py-1.5 font-body text-sm transition-[colors,transform] duration-[var(--dur-short)] ease-[var(--ease-out)] active:scale-[0.98]',
                    activeCategory === category.id
                      ? 'border-ink bg-ink text-paper'
                      : 'border-rule bg-paper text-ink-2 hover:border-ink/30'
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </StoryReveal>
        ) : null}

        <ul className="mt-10 divide-y divide-rule border-y border-rule">
          {filtered.map((project, index) => {
            const preview = projectPreviewSrc(project)
            const logo = preview ? isLogoAsset(preview) : false

            return (
              <StoryReveal key={project.slug} delay={Math.min(index * 0.03, 0.24)}>
                <li>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group grid gap-4 py-5 transition-colors duration-[var(--dur-short)] hover:bg-paper-2/50 md:grid-cols-[1fr_8rem] md:items-center md:gap-8 md:py-6"
                  >
                    <div className="min-w-0">
                      <p className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted">
                        {getCategoryLabel(project.category)} · {project.year}
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-story-serif)] text-xl leading-[1.1] text-ink md:text-2xl">
                        {project.title}
                      </p>
                      <p className="mt-2 font-body text-sm leading-relaxed text-ink-2 md:text-base">
                        {project.tagline}
                      </p>
                    </div>
                    {preview ? (
                      <div className="relative hidden aspect-[16/10] overflow-hidden rounded-[var(--radius-story-card)] border border-rule bg-paper-3 md:block">
                        <Image
                          src={preview}
                          alt=""
                          fill
                          className={
                            logo ? 'object-contain p-4' : 'object-cover object-top'
                          }
                          sizes="128px"
                          unoptimized={logo}
                        />
                      </div>
                    ) : null}
                  </Link>
                </li>
              </StoryReveal>
            )
          })}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-8 font-body text-sm text-muted">No projects in this category.</p>
        ) : null}
      </div>
    </section>
  )
}
