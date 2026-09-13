import { HOME_WORKFLOWS } from '@/lib/home'

export function WorkflowsGrid() {
  return (
    <section className="page-x py-16 md:py-24">
      <div className="page-max grid items-start gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <h2 className="font-display text-[length:var(--text-display-s)] font-bold text-ink">
            Workflows we take on
          </h2>
          <p className="mt-4 max-w-[32rem] font-body text-base leading-relaxed text-ink-2 md:text-lg">
            One operational process at a time — the ones off-the-shelf tools cannot hold.
          </p>
        </div>
        <ul className="min-w-0 divide-y border-y border-rule md:col-span-7">
          {HOME_WORKFLOWS.map((item) => (
            <li key={item.title} className="grid gap-1 py-6 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] md:gap-8 md:py-7">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                {item.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-ink-2">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
