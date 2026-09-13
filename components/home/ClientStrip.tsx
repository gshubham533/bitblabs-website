import { HOME_CLIENTS } from '@/lib/home'

export function ClientStrip() {
  return (
    <section className="page-x border-y border-rule py-8 md:py-10">
      <div className="page-max">
        <p className="font-body text-xs tracking-[0.04em] text-muted uppercase">
          Shipped with
        </p>
        <ul className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          {HOME_CLIENTS.map((name) => (
            <li key={name} className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
