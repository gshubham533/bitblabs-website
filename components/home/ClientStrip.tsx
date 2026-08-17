import { HOME_CLIENTS } from '@/lib/home'

export function ClientStrip() {
  return (
    <section className="border-b border-zinc-200 px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500">
          Teams we have built for
        </p>
        <ul className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-4 md:mt-10 md:gap-x-12">
          {HOME_CLIENTS.map((name) => (
            <li
              key={name}
              className="font-display text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl md:text-4xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
