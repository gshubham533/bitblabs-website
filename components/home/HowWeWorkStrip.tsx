import { HOME_PROCESS_STEPS } from '@/lib/home'

export function HowWeWorkStrip() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
          How we work
        </p>
        <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-12">
          {HOME_PROCESS_STEPS.map((step) => (
            <li key={step.number}>
              <p className="font-heading text-xs uppercase tracking-[0.18em] text-zinc-400">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-zinc-950 md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-zinc-500 md:text-lg">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
