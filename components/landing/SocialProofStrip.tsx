import { SOCIAL_PROOF } from '@/lib/landing'
import { SectionFrame } from '@/components/landing/SectionFrame'
import { InnerCard } from '@/components/landing/InnerCard'

export function SocialProofStrip() {
  return (
    <SectionFrame>
      <p className="text-center font-heading text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
        {SOCIAL_PROOF.label}
      </p>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {SOCIAL_PROOF.clients.map((name) => (
          <li
            key={name}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-4 py-2 font-heading text-sm font-medium text-zinc-800 md:text-base"
          >
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
            {name}
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-10 max-w-3xl">
        <InnerCard className="text-center">
          <p className="font-body text-base leading-relaxed text-zinc-600 md:text-lg">
            {SOCIAL_PROOF.note}
          </p>
        </InnerCard>
      </div>
    </SectionFrame>
  )
}
