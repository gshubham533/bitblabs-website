import Image from 'next/image'
import Link from 'next/link'
import { HOME_GLIMPSE_COUNT, getHomeGlimpseOutcome, isHomeGlimpseSlug } from '@/lib/home'
import { portfolioProjects } from '@/lib/portfolio-data'
import { isLogoAsset, orderPortfolioProjects } from '@/lib/project-utils'
import { cn } from '@/lib/utils'

const CARD_ASPECT = '1024/490'

function glimpseMedia(slug: string) {
  const project = portfolioProjects.find((item) => item.slug === slug)
  if (!project) return undefined
  return project.images.workCover ?? project.images.cover ?? project.images.thumbnail
}

export function WorkGlimpses() {
  const projects = orderPortfolioProjects(portfolioProjects)
    .filter((project) => isHomeGlimpseSlug(project.slug))
    .slice(0, HOME_GLIMPSE_COUNT)

  return (
    <section id="work" className="page-x bg-paper-2 py-16 md:py-24">
      <div className="page-max">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[length:var(--text-display-s)] font-bold text-ink">
            Work in production
          </h2>
          <Link href="/projects" className="font-body text-sm text-ink whitespace-nowrap">
            All work
          </Link>
        </div>

        <ul className="mt-12 flex flex-col gap-14 md:gap-20">
          {projects.map((project, index) => {
            const src = glimpseMedia(project.slug)
            const logo = src ? isLogoAsset(src) : false
            const href = project.slides?.length ? `/projects/${project.slug}` : project.links.live
            const outcome = getHomeGlimpseOutcome(project.slug)
            const reverse = index % 2 === 1

            const figure = (
              <div
                className="relative min-w-0 overflow-hidden rounded-card border border-rule bg-paper"
                style={{ aspectRatio: CARD_ASPECT }}
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`${project.title} preview`}
                    fill
                    unoptimized
                    className={logo ? 'object-contain p-12 sm:p-16' : 'object-cover object-top'}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : null}
              </div>
            )

            const copy = (
              <div className="flex min-w-0 flex-col justify-center">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-ink-2 md:text-lg">
                  {outcome}
                </p>
              </div>
            )

            const body = (
              <div
                className={cn(
                  'grid min-w-0 grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12',
                  reverse && 'md:[&>div:first-child]:order-2'
                )}
              >
                {copy}
                {figure}
              </div>
            )

            return (
              <li key={project.slug} className="min-w-0">
                {href ? (
                  <Link href={href} className="block min-w-0">
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
