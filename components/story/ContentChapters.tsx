import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { PortfolioProject } from '@/lib/portfolio-data'
import { StoryHandwrittenNote, StoryReveal, StorySerifHeadline } from '@/components/story/StoryReveal'

export interface StoryListRow {
  category: string
  detail: string
}

interface TypographicListChapterProps {
  id?: string
  lines: string[]
  accent: string
  note?: string
  rows: StoryListRow[]
  dark?: boolean
  /** Single-column pain list without category column */
  compact?: boolean
}

export function TypographicListChapter({
  id,
  lines,
  accent,
  note,
  rows,
  dark = false,
  compact = false,
}: TypographicListChapterProps) {
  return (
    <section
      id={id}
      className={cn(
        'px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]',
        dark ? 'bg-[var(--color-story-grid)] text-paper' : 'bg-paper text-ink'
      )}
    >
      <div className="mx-auto max-w-4xl">
        {note ? (
          <StoryReveal className="mb-8" variant="soft">
            <StoryHandwrittenNote text={note} className={dark ? 'text-paper/60' : undefined} />
          </StoryReveal>
        ) : null}
        <StoryReveal>
          <StorySerifHeadline
            lines={lines}
            accent={accent}
            className={cn(
              'max-w-none',
              dark ? '[&>span]:text-paper [&>span:last-child]:text-[var(--color-story-green)]' : undefined
            )}
          />
        </StoryReveal>
        <ul className="mt-10 divide-y divide-rule border-y border-rule md:mt-14">
          {rows.map((row, index) => (
            <StoryReveal key={`${row.category}-${index}`} delay={Math.min(index * 0.05, 0.25)}>
              <li
                className={cn(
                  'py-5 md:py-6',
                  compact
                    ? 'flex flex-col gap-2'
                    : 'grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10'
                )}
              >
                {!compact ? (
                  <p className="font-[family-name:var(--font-story-serif)] text-xl leading-[1.1] md:text-3xl">
                    {row.category}
                  </p>
                ) : null}
                <p
                  className={cn(
                    'font-body text-base leading-relaxed md:text-lg',
                    dark ? 'text-paper/70' : 'text-ink-2',
                    compact && 'font-[family-name:var(--font-story-serif)] text-lg text-ink md:text-xl'
                  )}
                >
                  {row.detail}
                </p>
              </li>
            </StoryReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

interface EarlyProofChapterProps {
  id?: string
  clients: readonly string[]
  statistic: string
  quote: string
  attribution: string
}

/** Logo names + one verified outcome + one attributed quote — trust before the sell. */
export function EarlyProofChapter({
  id,
  clients,
  statistic,
  quote,
  attribution,
}: EarlyProofChapterProps) {
  return (
    <section
      id={id}
      className="border-y border-rule bg-paper-2 px-6 py-14 md:py-20 pb-[calc(var(--story-nav-offset)+2rem)]"
    >
      <div className="mx-auto max-w-4xl">
        <StoryReveal variant="soft">
          <StoryHandwrittenNote text="shipped with" className="mb-6" />
        </StoryReveal>
        <StoryReveal>
          <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            {clients.map((name) => (
              <li
                key={name}
                className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </StoryReveal>
        <StoryReveal delay={0.06}>
          <p className="mt-8 max-w-2xl font-[family-name:var(--font-story-note)] text-xl leading-snug text-ink md:text-2xl">
            {statistic}
          </p>
        </StoryReveal>
        <StoryReveal delay={0.1}>
          <figure className="mt-10 border-t border-rule pt-8">
            <blockquote className="font-body text-lg leading-relaxed text-ink md:text-xl">
              “{quote}”
            </blockquote>
            <figcaption className="mt-4 font-body text-sm text-muted">{attribution}</figcaption>
          </figure>
        </StoryReveal>
      </div>
    </section>
  )
}

interface DeliverablesChapterProps {
  id?: string
  title: string
  intro: string
  items: ReadonlyArray<{ title: string; description: string }>
}

export function DeliverablesChapter({ id, title, intro, items }: DeliverablesChapterProps) {
  return (
    <section
      id={id}
      className="bg-paper-2 px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
    >
      <div className="mx-auto max-w-4xl">
        <StoryReveal variant="soft">
          <StoryHandwrittenNote text="what you receive" className="mb-6" />
        </StoryReveal>
        <StoryReveal>
          <StorySerifHeadline lines={[title]} accent="Five deliverables." align="left" />
        </StoryReveal>
        <StoryReveal delay={0.06}>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-2 md:text-lg">
            {intro}
          </p>
        </StoryReveal>
        <ul className="mt-10 divide-y divide-rule border-y border-rule">
          {items.map((item, index) => (
            <StoryReveal key={item.title} delay={index * 0.04}>
              <li className="grid gap-2 py-5 md:grid-cols-[8rem_1fr] md:gap-8 md:py-6">
                <p className="font-display text-sm font-bold text-[var(--color-story-green)]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="font-display text-base font-bold text-ink md:text-lg">{item.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-2 md:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            </StoryReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

interface StepsChapterProps {
  id?: string
  lines: string[]
  accent: string
  note?: string
  steps: ReadonlyArray<{ number: string; title: string; description: string }>
}

export function StepsChapter({ id, lines, accent, note, steps }: StepsChapterProps) {
  return (
    <section
      id={id}
      className="border-y border-rule bg-paper px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
      style={{
        backgroundImage:
          'linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="mx-auto max-w-4xl">
        {note ? (
          <StoryReveal className="mb-6" variant="soft">
            <StoryHandwrittenNote text={note} />
          </StoryReveal>
        ) : null}
        <StoryReveal>
          <StorySerifHeadline lines={lines} accent={accent} align="left" />
        </StoryReveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-14 md:gap-8">
          {steps.map((step, index) => (
            <StoryReveal key={step.number} delay={index * 0.05}>
              <li className="rounded-[var(--radius-story-card)] border border-rule bg-paper/90 p-6 shadow-[var(--shadow-story-float)] backdrop-blur-sm transition-transform duration-[var(--dur-short)] ease-[var(--ease-out)] hover:-translate-y-0.5">
                <p className="font-[family-name:var(--font-story-serif)] text-2xl text-[var(--color-story-green)] md:text-3xl">
                  {step.number}
                </p>
                <h3 className="mt-2 font-display text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">{step.description}</p>
              </li>
            </StoryReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function getProjectCoverSrc(project: PortfolioProject): string | undefined {
  return project.images.workCover ?? project.images.cover
}

interface ProjectProofCardProps {
  project: PortfolioProject
  outcome: string
}

export function ProjectProofCard({ project, outcome }: ProjectProofCardProps) {
  const coverSrc = getProjectCoverSrc(project)
  const href = `/projects/${project.slug}`

  return (
    <div className="story-float h-full">
      <Link
        href={href}
        className="story-proof-card group flex h-full flex-col overflow-hidden rounded-[var(--radius-story-card)] border border-rule bg-paper shadow-[var(--shadow-story-float)]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-3">
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt=""
              fill
              className="object-cover object-top transition-transform duration-[var(--dur-long)] group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center"
              style={{ backgroundColor: `${project.color}18` }}
            >
              {project.images.thumbnail ? (
                <Image
                  src={project.images.thumbnail}
                  alt=""
                  width={80}
                  height={80}
                  className="opacity-80"
                  unoptimized
                />
              ) : null}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Shipped work
          </p>
          <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink md:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-2">{outcome}</p>
          {project.tech.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-rule bg-paper-2 px-2.5 py-0.5 font-body text-[11px] text-ink-2"
                >
                  {pill}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Link>
    </div>
  )
}

interface ProofBriefChapterProps {
  id?: string
  lines: string[]
  accent: string
  note?: string
  projects: Array<{ project: PortfolioProject; outcome: string }>
  brief: React.ReactNode
}

export function ProofBriefChapter({
  id,
  lines,
  accent,
  note,
  projects,
  brief,
}: ProofBriefChapterProps) {
  return (
    <section
      id={id}
      className="bg-paper-3 px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
    >
      <div className="mx-auto max-w-6xl">
        {note ? (
          <StoryReveal className="mb-6" variant="soft">
            <StoryHandwrittenNote text={note} />
          </StoryReveal>
        ) : null}
        <StoryReveal>
          <StorySerifHeadline lines={lines} accent={accent} align="left" />
        </StoryReveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {projects.map(({ project, outcome }, index) => (
              <StoryReveal key={project.slug} delay={index * 0.06}>
                <ProjectProofCard project={project} outcome={outcome} />
              </StoryReveal>
            ))}
          </div>
          <StoryReveal delay={0.12} className="lg:sticky lg:top-24 lg:self-start">
            {brief}
          </StoryReveal>
        </div>
      </div>
    </section>
  )
}

interface ProofGridChapterProps {
  id?: string
  lines: string[]
  accent: string
  note?: string
  footnote?: string
  projects: Array<{ project: PortfolioProject; outcome: string }>
  footerLink?: { href: string; label: string }
}

export function ProofGridChapter({
  id,
  lines,
  accent,
  note,
  footnote,
  projects,
  footerLink,
}: ProofGridChapterProps) {
  return (
    <section
      id={id}
      className="bg-paper-3 px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
    >
      <div className="mx-auto max-w-6xl">
        {note ? (
          <StoryReveal className="mb-6" variant="soft">
            <StoryHandwrittenNote text={note} />
          </StoryReveal>
        ) : null}
        <StoryReveal>
          <StorySerifHeadline lines={lines} accent={accent} align="left" />
        </StoryReveal>
        {footnote ? (
          <StoryReveal delay={0.06}>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-story-note)] text-lg text-muted md:text-xl">
              {footnote}
            </p>
          </StoryReveal>
        ) : null}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {projects.map(({ project, outcome }, index) => (
            <StoryReveal key={project.slug} delay={index * 0.06}>
              <ProjectProofCard project={project} outcome={outcome} />
            </StoryReveal>
          ))}
        </div>
        {footerLink ? (
          <StoryReveal className="mt-10 text-center md:mt-12" delay={0.15}>
            <Link
              href={footerLink.href}
              className="inline-flex rounded-full border border-rule bg-paper px-6 py-3 font-body text-sm text-ink transition-colors duration-[var(--dur-short)] hover:bg-paper-2"
            >
              {footerLink.label}
            </Link>
          </StoryReveal>
        ) : null}
      </div>
    </section>
  )
}

interface SplitMockChapterProps {
  id?: string
  lines: string[]
  accent: string
  note?: string
  children: React.ReactNode
  reverse?: boolean
}

export function SplitMockChapter({
  id,
  lines,
  accent,
  note,
  children,
  reverse = false,
}: SplitMockChapterProps) {
  return (
    <section
      id={id}
      className="bg-paper-2 px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
    >
      <div
        className={cn(
          'mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16',
          reverse && 'md:[&>div:first-child]:order-2'
        )}
      >
        <div>
          {note ? <StoryHandwrittenNote text={note} className="mb-6" /> : null}
          <StoryReveal>
            <StorySerifHeadline lines={lines} accent={accent} align="left" />
          </StoryReveal>
        </div>
        <StoryReveal delay={0.1}>{children}</StoryReveal>
      </div>
    </section>
  )
}

interface CollageChapterProps {
  id?: string
  lines: string[]
  accent: string
  subline?: string
  children?: React.ReactNode
}

export function CollageChapter({ id, lines, accent, subline, children }: CollageChapterProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-paper px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
    >
      <div className="mx-auto max-w-5xl text-center">
        <StoryReveal>
          <StorySerifHeadline lines={lines} accent={accent} />
        </StoryReveal>
        {subline ? (
          <StoryReveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-story-note)] text-2xl text-muted">
              {subline}
            </p>
          </StoryReveal>
        ) : null}
        {children ? <StoryReveal className="mt-12">{children}</StoryReveal> : null}
      </div>
    </section>
  )
}

interface FloatingCardChapterProps {
  id?: string
  label: string
  title: string
  body: string
  pills?: string[]
  media?: React.ReactNode
  href?: string
}

export function FloatingCardChapter({
  id,
  label,
  title,
  body,
  pills,
}: FloatingCardChapterProps) {
  return (
    <section
      id={id}
      className="relative bg-paper-3 px-6 py-16 pb-[calc(var(--story-nav-offset)+3rem)] md:py-20"
    >
      <div className="relative mx-auto max-w-lg">
        <StoryReveal className="w-full rounded-[var(--radius-story-card)] bg-paper p-8 shadow-[var(--shadow-story-float)] md:p-10">
          <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-muted">{label}</p>
          <h3 className="mt-4 font-body text-2xl font-medium leading-snug text-ink md:text-3xl">{title}</h3>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-2">{body}</p>
          {pills?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {pills.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-rule bg-paper-2 px-3 py-1 font-body text-xs text-ink-2"
                >
                  {pill}
                </li>
              ))}
            </ul>
          ) : null}
        </StoryReveal>
      </div>
    </section>
  )
}

interface FaqRiskChapterProps {
  id?: string
  lines: string[]
  accent: string
  principles: ReadonlyArray<{ title: string; description: string }>
  faq: React.ReactNode
}

export function FaqRiskChapter({ id, lines, accent, principles, faq }: FaqRiskChapterProps) {
  return (
    <section id={id} className="bg-paper pb-[var(--story-nav-offset)]">
      <div className="border-b border-rule px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <StoryReveal>
            <StorySerifHeadline lines={lines} accent={accent} align="left" />
          </StoryReveal>
          <ul className="mt-10 divide-y divide-rule border-y border-rule">
            {principles.map((p, index) => (
              <StoryReveal key={p.title} delay={index * 0.04}>
                <li className="grid gap-2 py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10 md:py-6">
                  <p className="font-display text-sm font-bold text-ink md:text-base">{p.title}</p>
                  <p className="font-body text-sm leading-relaxed text-ink-2 md:text-base">
                    {p.description}
                  </p>
                </li>
              </StoryReveal>
            ))}
          </ul>
        </div>
      </div>
      {faq}
    </section>
  )
}
