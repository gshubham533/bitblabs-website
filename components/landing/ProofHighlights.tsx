import Link from 'next/link'
import { PROOF } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function ProofHighlights() {
  return (
    <SectionFrame id="proof" eyebrow="Proof" tone="dark">
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {PROOF.cases.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="block h-full rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-colors hover:border-white/25 md:p-8"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                {item.name}
              </h3>
              {item.body ? (
                <p className="mt-3 font-body text-base leading-relaxed text-zinc-400 md:text-lg">
                  {item.body}
                </p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-12 max-w-3xl font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
        {PROOF.closing}
      </p>
    </SectionFrame>
  )
}
