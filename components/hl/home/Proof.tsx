import Image from 'next/image'
import { RESULTS } from '@/lib/landing'
import { QUOTES, RATING, RESULT_CARDS, visible, type ResultCard } from '@/lib/proof'
import { cn } from '@/lib/utils'
import { IconLinkedIn, IconStar } from '../icons'
import { RollIcon } from '../ui'

export function PlaceholderTag({ approved, className }: { approved: boolean; className?: string }) {
  if (approved) return null
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-dashed border-hl-orange bg-orange-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-hl-orange',
        className
      )}
    >
      Placeholder · needs approval
    </span>
  )
}

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn('flex gap-1.75 text-hl-orange', className)} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <IconStar key={i} className="size-4" />
      ))}
    </span>
  )
}

function ResultTile({ card, hidden }: { card: ResultCard; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="group relative flex h-75 w-95 shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128"
    >
      <Image src={card.image} alt="" fill sizes="380px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      <div className="relative z-10 space-y-2">
        <p className="whitespace-normal text-lg font-medium text-white">
          {card.name} <span className="text-sm font-medium opacity-50">— {card.role}</span>
        </p>
        <PlaceholderTag approved={card.approved} />
      </div>
      <div className="relative z-10 whitespace-normal">
        {card.figure ? <p className="mb-1 font-headline text-4xl font-black text-white">{card.figure}</p> : null}
        <p className={cn('font-medium leading-tight text-white', card.figure ? 'text-base' : 'text-lg')}>{card.result}</p>
      </div>
    </div>
  )
}

/** Portrait results marquee. Hidden in production until at least one card is approved. */
export function Results() {
  const cards = visible(RESULT_CARDS)
  if (cards.length === 0) return null
  const showRating = RATING.approved || cards.some((c) => !c.approved)
  return (
    <section className="py-25 lg:py-50">
      <div className="hl-container">
        <div className="mb-8 flex flex-col items-end justify-between gap-4 md:mb-12.5 md:flex-row md:gap-8">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:max-w-lg md:text-4xl lg:text-5xl">
            {RESULTS.headline}
          </h2>
          {showRating ? (
            <div className="flex flex-col items-start justify-start space-y-2.5 text-start md:items-end md:justify-end">
              <Stars />
              <p className="text-lg font-medium text-zinc-600">{RESULTS.trustLabel}</p>
              <PlaceholderTag approved={RATING.approved} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="relative flex gap-7.5 overflow-hidden">
        <div className="flex animate-hl-marquee gap-7.5 whitespace-nowrap py-4">
          {cards.map((card) => (
            <ResultTile key={card.id} card={card} />
          ))}
          {cards.map((card) => (
            <ResultTile key={`${card.id}-dup`} card={card} hidden />
          ))}
        </div>
      </div>
    </section>
  )
}

function Initials({ name }: { name: string }) {
  const letters = name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return (
    <span className="flex size-7.5 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-semibold text-white md:size-12 md:text-sm">
      {letters}
    </span>
  )
}

/** Masonry quote wall. Hidden in production until at least one quote is approved. */
export function QuoteWall() {
  const quotes = visible(QUOTES)
  if (quotes.length === 0) return null
  const columns: (typeof quotes)[] = [[], [], []]
  quotes.forEach((q, i) => columns[i % 3].push(q))

  return (
    <section className="relative overflow-hidden py-20 lg:py-40">
      <div className="hl-container">
        <div className="relative overflow-hidden lg:max-h-180">
          <div className="grid grid-cols-2 gap-3.5 md:gap-5 lg:grid-cols-3 lg:gap-7.5">
            {columns.map((col, ci) => (
              <div key={ci} className={cn('space-y-3.5 md:space-y-5 lg:space-y-7.5', ci === 1 && 'lg:pt-7.5', ci === 2 && 'col-span-2 lg:col-span-1')}>
                {col.map((q) => (
                  <figure key={q.id} className="flex flex-col justify-between rounded-2xl bg-zinc-200 p-2.5 md:p-7.5">
                    <PlaceholderTag approved={q.approved} className="mb-3 self-start" />
                    <blockquote className="mb-3.5 text-sm font-medium leading-snug text-zinc-800 md:mb-7.5 md:text-lg">
                      {q.quote}
                    </blockquote>
                    <figcaption className="flex items-center justify-between">
                      <div className="items-center gap-2.5 md:flex">
                        {q.avatar ? (
                          <Image src={q.avatar} alt="" width={48} height={48} className="size-7.5 rounded-full object-cover md:size-12" />
                        ) : (
                          <Initials name={q.name} />
                        )}
                        <div className="mt-1.25 md:mt-0">
                          <p className="text-sm font-medium leading-none text-zinc-900 md:text-lg">{q.name}</p>
                          <p className="mt-1 text-xs text-zinc-500 md:text-sm">{q.role}</p>
                        </div>
                      </div>
                      {q.link ? (
                        <a
                          href={q.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${q.name} on LinkedIn`}
                          className="group inline-flex size-5.5 items-center justify-center overflow-hidden rounded-full bg-white text-zinc-800 md:size-10"
                        >
                          <RollIcon>
                            <IconLinkedIn className="size-4" />
                          </RollIcon>
                        </a>
                      ) : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-hl-bg to-transparent lg:block" />
        </div>
      </div>
    </section>
  )
}
