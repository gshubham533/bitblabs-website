import { WORKING_WITH_US } from '@/lib/landing'
import { InnerCard } from '@/components/landing/InnerCard'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function WorkingWithUs() {
  return (
    <SectionFrame id="trust" eyebrow="Working with us">
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {WORKING_WITH_US.items.map((item) => (
          <li key={item.title}>
            <InnerCard className="h-full">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-brand" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-zinc-500 md:text-lg">
                {item.body}
              </p>
            </InnerCard>
          </li>
        ))}
      </ul>
    </SectionFrame>
  )
}
