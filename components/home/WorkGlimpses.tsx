import Image from 'next/image'
import Link from 'next/link'
import { HOME_GLIMPSE_COUNT, HOME_GLIMPSE_OUTCOMES } from '@/lib/home'
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
    .filter((project) => HOME_GLIMPSE_OUTCOMES[project.slug])
    .slice(0, HOME_GLIMPSE_COUNT)

  return (
    <section id="work" className="bg-black px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
            Selected work
          </p>
          <Link
            href="/projects"
            className="font-heading text-sm text-white transition-opacity hover:opacity-60"
          >
            See all work →
          </Link>
        </div>

        <ul className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => {
            const src = glimpseMedia(project.slug)
            const logo = src ? isLogoAsset(src) : false
            const href = project.slides?.length ? `/projects/${project.slug}` : project.links.live
            const outcome = HOME_GLIMPSE_OUTCOMES[project.slug]

            return (
              <li key={project.slug}>
                {href ? (
                  <Link href={href} className="group block">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
                      <div
                        className={cn(
                          'relative overflow-hidden',
                          logo || project.images.screenshotFrame === 'dark'
                            ? 'bg-[#050505]'
                            : 'bg-zinc-100'
                        )}
                        style={{ aspectRatio: CARD_ASPECT }}
                      >
                        {src ? (
                          <Image
                            src={src}
                            alt={`${project.title} preview`}
                            fill
                            unoptimized
                            className={
                              logo
                                ? 'object-contain p-12 sm:p-16'
                                : 'object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
                            }
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        ) : null}
                      </div>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-body text-base leading-relaxed text-zinc-400">
                      {outcome}
                    </p>
                  </Link>
                ) : (
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-body text-base leading-relaxed text-zinc-400">
                      {outcome}
                    </p>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
