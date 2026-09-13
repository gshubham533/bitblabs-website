import Link from 'next/link'
import { PROOF } from '@/lib/landing'
import { InnerCard } from '@/components/landing/InnerCard'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function ProofHighlights() {
  return (
    <SectionFrame id="proof" eyebrow="Proof">
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {PROOF.cases.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="block h-full">
              <InnerCard className="h-full transition-shadow hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
                <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl">
                  {item.name}
                </h3>
                {item.body ? (
                  <p className="mt-3 font-body text-base leading-relaxed text-zinc-500 md:text-lg">
                    {item.body}
                  </p>
                ) : null}
              </InnerCard>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl font-display text-2xl font-medium tracking-tight text-zinc-950 md:text-3xl">
        {PROOF.closing}
      </p>
    </SectionFrame>
  )
}
