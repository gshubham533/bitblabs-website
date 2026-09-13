import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { OpportunityBriefSample } from '@/components/strategy/OpportunityBriefSample'
import { StrategyCtaBand } from '@/components/strategy/StrategyCtaBand'
import { StrategyFaq } from '@/components/strategy/StrategyFaq'
import { StrategySplitSection } from '@/components/strategy/StrategySplitSection'
import { TrackedCtaLink } from '@/components/ui/TrackedCtaLink'
import { portfolioProjects } from '@/lib/portfolio-data'
import { isLogoAsset } from '@/lib/project-utils'
import { APPLY_CTA_LABEL, PORTFOLIO_SECTION_HREF, STRATEGY_APPLY_PATH } from '@/lib/site'
import {
  STRATEGY_APPLY_SUPPORT,
  STRATEGY_AUDIENCE,
  STRATEGY_DELIVERABLES,
  STRATEGY_HEADLINE,
  STRATEGY_HERO_BODY,
  STRATEGY_PROBLEM,
  STRATEGY_PROOF_OUTCOMES,
  STRATEGY_PROOF_SLUGS,
  STRATEGY_RISK,
  STRATEGY_STEPS,
  STRATEGY_TAGLINE,
} from '@/lib/strategy'
import { cn } from '@/lib/utils'

const CARD_ASPECT = '1024/490'

function proofProjects() {
  return STRATEGY_PROOF_SLUGS.map((slug) => portfolioProjects.find((p) => p.slug === slug)).filter(
    Boolean
  )
}

export function StrategyPage() {
  const projects = proofProjects()

  return (
    <>
      <Navbar variant="strategy" />
      <main className="bg-paper text-ink">
        {/* Hero */}
        <section className="page-x pb-16 pt-[calc(var(--nav-offset)+1.5rem)] md:pb-20 md:pt-[calc(var(--nav-offset)+2.5rem)]">
          <div className="page-max mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold tracking-[0.08em] text-accent">
              {STRATEGY_TAGLINE}
            </p>
            <h1 className="mt-5 font-display text-[length:var(--text-display)] font-bold leading-[0.95] text-ink">
              {STRATEGY_HEADLINE}
            </h1>
            <p className="mx-auto mt-6 max-w-[38rem] font-body text-lg leading-relaxed text-ink-2 md:text-xl">
              {STRATEGY_HERO_BODY}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <TrackedCtaLink href={STRATEGY_APPLY_PATH} cta="apply" location="hero">
                {APPLY_CTA_LABEL}
              </TrackedCtaLink>
              <p className="max-w-[32rem] font-body text-sm leading-relaxed text-ink-2">
                {STRATEGY_APPLY_SUPPORT}
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-[32rem] font-body text-sm text-muted">
              USD 2,000 · 60-minute session · written Opportunity Brief included
            </p>
          </div>
        </section>

        {/* Problem */}
        <StrategySplitSection
          id="problem"
          title={STRATEGY_PROBLEM.title}
          intro={STRATEGY_PROBLEM.body}
          className="border-t border-rule bg-paper-2"
          aside={
            <ul className="space-y-4 border-t border-rule pt-6 md:pt-0 md:border-t-0">
              {STRATEGY_PROBLEM.pains.map((pain) => (
                <li
                  key={pain}
                  className="border-l-2 border-accent pl-4 font-body text-base leading-relaxed text-ink-2"
                >
                  {pain}
                </li>
              ))}
            </ul>
          }
        >
          <p className="font-body text-base text-ink-2">
            The session gives you a structured way to decide what is worth building — before budget,
            vendors, or internal teams commit to the wrong path.
          </p>
        </StrategySplitSection>

        {/* Deliverables */}
        <StrategySplitSection
          id="deliverables"
          title={STRATEGY_DELIVERABLES.title}
          intro={STRATEGY_DELIVERABLES.intro}
          reverse
          aside={
            <ol className="space-y-5">
              {STRATEGY_DELIVERABLES.items.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="font-display text-sm font-bold text-muted">{index + 1}.</span>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{item.title}</p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-ink-2">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          }
        >
          <p className="font-body text-base text-ink-2">
            Start with the business workflow, not the technology. We evaluate AI alongside
            integrations, traditional automation, and process redesign.
          </p>
        </StrategySplitSection>

        {/* How it works */}
        <section id="how-it-works" className="page-x border-t border-rule bg-paper-2 py-16 md:py-24">
          <div className="page-max">
            <h2 className="font-display text-[length:var(--text-display-s)] font-bold text-ink">
              How it works
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
              {STRATEGY_STEPS.map((step) => (
                <li key={step.number} className="min-w-0 border-t border-rule pt-6">
                  <p className="font-display text-sm font-bold text-accent">{step.number}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-ink-2">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Audience */}
        <StrategySplitSection
          id="audience"
          title={STRATEGY_AUDIENCE.title}
          intro={STRATEGY_AUDIENCE.profile}
          aside={
            <div>
              <p className="font-display text-sm font-bold text-ink">Workflow scenarios</p>
              <ul className="mt-4 space-y-4">
                {STRATEGY_AUDIENCE.scenarios.map((scenario) => (
                  <li key={scenario.function} className="border-t border-rule pt-4 first:border-t-0 first:pt-0">
                    <p className="font-display text-sm font-bold text-ink">{scenario.function}</p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-ink-2">
                      {scenario.line}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          }
        >
          <ul className="space-y-2">
            {STRATEGY_AUDIENCE.roles.map((role) => (
              <li key={role} className="font-body text-base text-ink-2">
                {role}
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-rule pt-8">
            <p className="font-display text-sm font-bold text-ink">Likely not a fit if</p>
            <ul className="mt-3 space-y-2">
              {STRATEGY_AUDIENCE.poorFit.map((item) => (
                <li key={item} className="font-body text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </StrategySplitSection>

        {/* Proof */}
        <section id="proof" className="page-x border-t border-rule bg-paper-2 py-16 md:py-24">
          <div className="page-max">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-[length:var(--text-display-s)] font-bold text-ink">
                Shipped operational systems
              </h2>
              <Link href={PORTFOLIO_SECTION_HREF} className="font-body text-sm text-ink whitespace-nowrap">
                Full portfolio
              </Link>
            </div>
            <p className="mt-4 max-w-[40rem] font-body text-base text-ink-2">
              BitBLabs builds production AI around real workflows. These projects are proof of delivery
              capability — not every engagement began through this Strategy Session.
            </p>

            <ul className="mt-12 flex flex-col gap-14 md:gap-20">
              {projects.map((project, index) => {
                if (!project) return null
                const src =
                  project.images.workCover ?? project.images.cover ?? project.images.thumbnail
                const logo = src ? isLogoAsset(src) : false
                const outcome = STRATEGY_PROOF_OUTCOMES[project.slug as keyof typeof STRATEGY_PROOF_OUTCOMES]
                const reverse = index % 2 === 1
                const href = project.slides?.length ? `/projects/${project.slug}` : project.links.live

                const body = (
                  <div
                    className={cn(
                      'grid min-w-0 grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12',
                      reverse && 'md:[&>div:first-child]:order-2'
                    )}
                  >
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 font-body text-base leading-relaxed text-ink-2 md:text-lg">
                        {outcome}
                      </p>
                    </div>
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
                          className={
                            logo ? 'object-contain p-12 sm:p-16' : 'object-cover object-top'
                          }
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : null}
                    </div>
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

        <StrategyCtaBand location="mid" bordered />

        {/* Sample brief */}
        <StrategySplitSection
          id="sample-brief"
          title="See the deliverable"
          intro="The written Opportunity Brief is the artifact your leadership team can review, challenge, and act on."
          reverse
          aside={<OpportunityBriefSample />}
        >
          <p className="font-body text-base text-ink-2">
            Every brief names the workflow, ranks opportunities with explicit trade-offs, recommends
            one pilot, and states risks and constraints plainly.
          </p>
        </StrategySplitSection>

        {/* Risk */}
        <section id="risk" className="page-x border-t border-rule py-16 md:py-24">
          <div className="page-max">
            <h2 className="font-display text-[length:var(--text-display-s)] font-bold text-ink">
              {STRATEGY_RISK.title}
            </h2>
            <ul className="mt-12 grid gap-8 md:grid-cols-2">
              {STRATEGY_RISK.principles.map((principle) => (
                <li key={principle.title} className="min-w-0 border-t border-rule pt-6">
                  <h3 className="font-display text-lg font-bold text-ink">{principle.title}</h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-ink-2">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <StrategyFaq />

        <StrategyCtaBand location="final" />
      </main>
      <SiteFooter showLegalInfo />
    </>
  )
}
