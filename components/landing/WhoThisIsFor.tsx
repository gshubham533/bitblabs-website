import { WHO_THIS_IS_FOR } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function WhoThisIsFor() {
  return (
    <SectionFrame id="who" eyebrow="Who this is for" title={WHO_THIS_IS_FOR.headline}>
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
        <div className="rounded-4xl bg-zinc-50 p-6 md:p-8">
          <p className="font-heading text-sm font-medium text-zinc-900">{WHO_THIS_IS_FOR.intro}</p>
          <ul className="mt-6 space-y-4">
            {WHO_THIS_IS_FOR.ideal.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
                <p className="font-body text-base leading-relaxed text-zinc-600 md:text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-4xl bg-zinc-50 p-6 md:p-8">
          <p className="font-body text-base leading-relaxed text-zinc-600 md:text-lg">
            {WHO_THIS_IS_FOR.notFit}
          </p>
        </aside>
      </div>
    </SectionFrame>
  )
}
