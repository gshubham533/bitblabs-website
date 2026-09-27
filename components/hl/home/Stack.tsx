import Image from 'next/image'
import { STACK, type StackItem } from '@/lib/landing'
import { Eyebrow } from '../ui'

const tileClass =
  'flex h-24 flex-col items-center justify-center gap-2.5 rounded-2xl bg-white px-2 text-center md:h-28'

function StackTile({ item }: { item: StackItem }) {
  if (!item.logo) {
    return (
      <li className={tileClass}>
        <span className="font-headline text-base font-semibold leading-tight tracking-tight text-zinc-700">
          {item.name}
        </span>
      </li>
    )
  }
  return (
    <li className={`group ${tileClass}`}>
      <Image
        src={`/logos/stack/${item.logo}.svg`}
        alt=""
        width={28}
        height={28}
        className="size-6 opacity-60 transition-opacity duration-300 group-hover:opacity-100 md:size-7"
      />
      <span className="text-xs font-medium leading-tight text-zinc-600">{item.name}</span>
    </li>
  )
}

export function Stack() {
  const lastGroup = STACK.groups.length - 1

  return (
    <section id="stack" className="scroll-mt-28 pt-25 lg:pt-40">
      <div className="hl-container">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-12.5 md:flex-row md:items-end md:gap-8">
          <div>
            <Eyebrow className="mb-3.5">{STACK.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              {STACK.headline}
            </h2>
          </div>
          <p className="text-lg font-medium text-zinc-600 md:max-w-md">{STACK.body}</p>
        </div>

        <div>
          {STACK.groups.map((group, gi) => (
            <div
              key={group.label}
              className="border-t border-zinc-200 py-6 lg:grid lg:grid-cols-[13rem_1fr] lg:gap-10 lg:py-8"
            >
              <h3 className="mb-3.5 text-base font-medium text-zinc-900 lg:mb-0 lg:pt-2">{group.label}</h3>
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-2.5">
                {group.items.map((item) => (
                  <StackTile key={item.name} item={item} />
                ))}
                {gi === lastGroup ? (
                  <li className="col-span-2 flex h-24 items-center justify-center rounded-2xl border border-dashed border-zinc-300 px-3 text-center text-sm font-medium text-zinc-900 md:h-28 md:text-base">
                    {STACK.anySystem}
                  </li>
                ) : null}
              </ul>
            </div>
          ))}
        </div>

        <p className="border-t border-zinc-200 pt-6 text-xs text-zinc-500">{STACK.footnote}</p>
      </div>
    </section>
  )
}
