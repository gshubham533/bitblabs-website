import { HOME_WORKFLOWS } from '@/lib/home'

export function WorkflowsGrid() {
  return (
    <section className="border-b border-zinc-200 px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
          What we build
        </p>
        <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-12">
          {HOME_WORKFLOWS.map((item) => (
            <li key={item.title}>
              <h3 className="font-display text-2xl font-medium tracking-tight text-zinc-950 md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-zinc-500 md:text-lg">
                {item.line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
