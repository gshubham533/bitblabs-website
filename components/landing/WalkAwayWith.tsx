import { WALK_AWAY } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function WalkAwayWith() {
  return (
    <SectionFrame id="deliverable" eyebrow="What you walk away with">
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {WALK_AWAY.items.map((item, index) => (
          <li key={item.title} className="rounded-4xl bg-zinc-50 p-6">
            <p className="font-heading text-xs uppercase tracking-[0.18em] text-brand">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-zinc-950">
              {item.title}
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-zinc-600">{item.body}</p>
          </li>
        ))}
      </ol>
    </SectionFrame>
  )
}
