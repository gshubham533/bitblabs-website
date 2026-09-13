import { FAQ } from '@/lib/landing'
import { InnerCard } from '@/components/landing/InnerCard'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function Faq() {
  return (
    <SectionFrame id="faq" eyebrow="FAQ">
      <dl className="mt-10 grid gap-4">
        {FAQ.items.map((item) => (
          <InnerCard
            key={item.question}
            className="md:grid md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.4fr)] md:gap-12"
          >
            <dt className="font-display text-xl font-semibold tracking-tight text-zinc-950">
              {item.question}
            </dt>
            <dd className="mt-3 font-body text-base leading-relaxed text-zinc-500 md:mt-0 md:text-lg">
              {item.answer}
            </dd>
          </InnerCard>
        ))}
      </dl>
    </SectionFrame>
  )
}
