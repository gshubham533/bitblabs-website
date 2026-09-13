import { WALK_AWAY } from '@/lib/landing'
import { InnerCard } from '@/components/landing/InnerCard'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function WalkAwayWith() {
  return (
    <SectionFrame id="deliverable" eyebrow="What you walk away with">
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {WALK_AWAY.items.map((item, index) => (
          <li key={item.title}>
            <InnerCard className="h-full">
              <p className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft font-heading text-xs font-semibold text-brand">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-zinc-500">{item.body}</p>
            </InnerCard>
          </li>
        ))}
      </ol>
    </SectionFrame>
  )
}
