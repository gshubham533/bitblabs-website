'use client'

import { CollageChapter } from '@/components/story/ContentChapters'
import {
  CaseStudyHero,
  CaseStudyMetrics,
  CaseStudyNextLink,
  CaseStudySlideSection,
  selectCaseStudyBodySlides,
  selectCaseStudyConclusion,
} from '@/components/story/CaseStudyChapters'
import { GridPaperClose } from '@/components/story/GridPaperClose'
import { StoryShell } from '@/components/story/StoryShell'
import type { CaseStudyProject } from '@/lib/case-study-project'
import { portfolioProjects } from '@/lib/portfolio-data'
import { orderPortfolioProjects } from '@/lib/project-utils'
import { PORTFOLIO_SECTION_HREF } from '@/lib/site'

interface StoryCaseStudyProps {
  project: CaseStudyProject
  backHref?: string
  backLabel?: string
}

export function StoryCaseStudy({
  project,
  backHref = PORTFOLIO_SECTION_HREF,
  backLabel = 'Back to work',
}: StoryCaseStudyProps) {
  const slides = project.slides ?? []
  const bodySlides = selectCaseStudyBodySlides(slides)
  const conclusion = selectCaseStudyConclusion(slides)

  const orderedProjects = orderPortfolioProjects(portfolioProjects)
  const currentIndex = orderedProjects.findIndex((item) => item.slug === project.slug)
  const nextProject =
    currentIndex >= 0
      ? orderedProjects[(currentIndex + 1) % orderedProjects.length]
      : orderedProjects[0]

  const hasSlideMetrics = bodySlides.some(
    (slide) => slide.type === 'stats' && slide.stats?.length
  )

  return (
    <StoryShell variant="default">
      <main>
        <CaseStudyHero project={project} backHref={backHref} backLabel={backLabel} />

        {bodySlides.length > 0 ? (
          bodySlides.map((slide, index) => (
            <CaseStudySlideSection
              key={slide.id}
              slide={slide}
              project={project}
              index={index}
            />
          ))
        ) : (
          <section className="bg-paper-2 px-6 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <p className="font-body text-base leading-relaxed text-ink-2 md:text-lg">
                {project.description}
              </p>
              {project.tech.length ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-rule bg-paper px-3 py-1 font-body text-xs text-ink-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        )}

        {!hasSlideMetrics ? <CaseStudyMetrics project={project} /> : null}

        {conclusion ? (
          <CollageChapter
            lines={[conclusion.title ?? 'Outcome']}
            accent={conclusion.highlight?.split('.')[0] ?? 'Shipped.'}
            subline={conclusion.content}
          >
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-rule px-6 py-3 font-body text-sm text-ink"
              >
                View live product ↗
              </a>
            ) : null}
          </CollageChapter>
        ) : (
          <CollageChapter
            lines={['Production system', 'in your stack.']}
            accent="Shipped."
            subline={`${project.role} · ${project.duration}`}
          />
        )}

        {nextProject && nextProject.slug !== project.slug ? (
          <CaseStudyNextLink
            href={`/projects/${nextProject.slug}`}
            title={nextProject.title}
          />
        ) : null}

        <GridPaperClose
          variant="strategy"
          lines={['Bring a similar', 'workflow.']}
          accent="Apply."
          pricingLine="USD 2,000 · Strategy Session · written Opportunity Brief"
        />
      </main>
    </StoryShell>
  )
}
