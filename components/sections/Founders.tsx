'use client'

import { founders } from '@/lib/founders'

interface FoundersProps {
  accent?: string
}

export function Founders({ accent: _accent }: FoundersProps) {
  return (
    <section id="founders" className="border-t border-rule bg-paper px-6 py-20 text-ink md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto w-full max-w-[87.5rem]">
        <h2 className="max-w-3xl font-display text-[length:var(--text-display-s)] font-bold text-ink">
          The team behind BitBLabs
        </h2>
        <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-2">
          We build custom AI systems around real workflows, from first conversation through production.
        </p>

        <ul className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
          {founders.map((founder) => (
            <li key={founder.id} className="min-w-0 border-t border-rule pt-6">
              <h3 className="font-display text-2xl font-bold text-ink">{founder.name}</h3>
              <p className="mt-1 font-body text-sm text-muted">{founder.role}</p>
              <p className="mt-4 font-body text-base leading-relaxed text-ink-2">{founder.bio}</p>
              <a
                href={founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-body text-sm text-ink"
              >
                LinkedIn
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
