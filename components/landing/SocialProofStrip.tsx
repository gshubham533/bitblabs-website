import { SOCIAL_PROOF } from '@/lib/landing'

export function SocialProofStrip() {
  return (
    <section className="border-y border-zinc-200 bg-white px-6 py-14 md:px-12 md:py-16 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
          {SOCIAL_PROOF.label}
        </p>
        <ul className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 md:gap-x-12">
          {SOCIAL_PROOF.clients.map((name) => (
            <li
              key={name}
              className="font-display text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-zinc-600 md:text-lg">
          {SOCIAL_PROOF.note}
        </p>
      </div>
    </section>
  )
}
