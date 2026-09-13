import { HOME_PROCESS_STEPS } from '@/lib/home'

export function HowWeWorkStrip() {
  return (
    <section id="how-we-work" className="page-x py-16 md:py-28">
      <div className="page-max grid items-start gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <h2 className="font-display text-[length:var(--text-display-s)] font-bold text-ink">
            How an engagement runs
          </h2>
          <p className="mt-4 max-w-[32rem] font-body text-base leading-relaxed text-ink-2 md:text-lg">
            A short loop from the broken process to a system your team can run.
          </p>
        </div>
        <ol className="min-w-0 divide-y border-y border-rule md:col-span-7">
          {HOME_PROCESS_STEPS.map((step) => (
            <li key={step.number} className="grid gap-2 py-6 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6 md:py-8">
              <p className="font-display text-sm font-bold text-accent">{step.number}</p>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-base leading-relaxed text-ink-2 md:text-lg">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
