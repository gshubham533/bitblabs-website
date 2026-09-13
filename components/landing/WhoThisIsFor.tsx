import { WHO_THIS_IS_FOR } from '@/lib/landing'
import { InnerCard } from '@/components/landing/InnerCard'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function WhoThisIsFor() {
  return (
    <SectionFrame id="who" eyebrow="Who this is for" title={WHO_THIS_IS_FOR.headline}>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <InnerCard>
          <p className="font-heading text-sm font-medium text-zinc-900">{WHO_THIS_IS_FOR.intro}</p>
          <ul className="mt-6 space-y-4">
            {WHO_THIS_IS_FOR.ideal.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand" aria-hidden>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                <p className="font-body text-base leading-relaxed text-zinc-600 md:text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </InnerCard>
        <InnerCard className="h-fit">
          <p className="font-body text-base leading-relaxed text-zinc-600 md:text-lg">
            {WHO_THIS_IS_FOR.notFit}
          </p>
        </InnerCard>
      </div>
    </SectionFrame>
  )
}
