import { SOCIAL_PROOF } from '@/lib/landing'
import { Chip } from '@/components/landing/Chip'
import { SectionFrame } from '@/components/landing/SectionFrame'

export function SocialProofStrip() {
  return (
    <SectionFrame>
      <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
        {SOCIAL_PROOF.label}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {SOCIAL_PROOF.clients.map((name) => (
          <li key={name}>
            <Chip className="px-4 py-2 font-display text-base font-medium text-zinc-950 md:text-lg">
              {name}
            </Chip>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-zinc-600 md:text-lg">
        {SOCIAL_PROOF.note}
      </p>
    </SectionFrame>
  )
}
