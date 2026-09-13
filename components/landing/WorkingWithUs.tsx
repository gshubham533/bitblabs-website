import { WORKING_WITH_US } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function WorkingWithUs() {
  return (
    <SectionFrame id="trust" eyebrow="Working with us" tone="muted">
      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {WORKING_WITH_US.items.map((item) => (
          <li key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-zinc-600 md:text-lg">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </SectionFrame>
  )
}
