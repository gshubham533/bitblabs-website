import { SESSION } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { IconBell, IconCircleCheck, IconSparkles } from '../icons'
import { AppWindow, Ring } from '../mockups'
import { KeyIcon, OwnerIcon, ownerBg, toneBg, toneHex, toneSoft } from '../tokens'
import { BookRollButton, Eyebrow } from '../ui'

function CheckpointsCard() {
  const c = SESSION.checkpoints
  const pills = [...c.pills, ...c.pills]
  return (
    <div className="overflow-hidden rounded-3xl bg-zinc-200">
      <div className="px-3.5 py-3.5 md:px-5 md:py-5 lg:px-10 lg:pb-12.5 lg:pt-10">
        <h3 className="mb-2.5 text-xl font-semibold text-zinc-800 md:text-2xl">{c.title}</h3>
        <p className="max-w-md text-lg text-zinc-600">{c.body}</p>
      </div>
      <div className="relative mb-7.5 overflow-hidden">
        <div className="mx-auto flex w-62 flex-col items-center rounded-lg bg-white px-4 pb-5 pt-7 shadow-sm md:min-h-75 md:w-100 md:px-6">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-hl-violet to-hl-pink text-white shadow-lg md:size-16">
            <IconSparkles className="size-7 md:size-8" />
          </span>
          <p className="mt-4 text-center text-base font-semibold text-zinc-900 md:text-lg">{c.cardTitle}</p>
          <p className="mt-1 text-center text-xs text-zinc-500 md:text-sm">{c.cardBody}</p>
          <div className="mt-5 flex items-start gap-2 md:gap-3">
            {c.steps.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-1.5">
                <span
                  className={cn(
                    'flex size-9 items-center justify-center rounded-full text-white md:size-11',
                    ownerBg[step.owner]
                  )}
                >
                  <OwnerIcon owner={step.owner} className="size-4 md:size-5" />
                </span>
                <span className="text-[10px] font-medium text-zinc-600 md:text-xs">{step.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 md:gap-4">
            {c.legend.map((item) => (
              <span key={item.owner} className="flex items-center gap-1.5 text-[10px] font-medium text-zinc-500 md:text-xs">
                <span className={cn('size-2 rounded-full', ownerBg[item.owner])} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-hl-marquee gap-5 pb-5 lg:pb-20">
          {pills.map((pill, i) => (
            <div
              key={`${pill.label}-${i}`}
              aria-hidden={i >= c.pills.length}
              className="flex items-center gap-3 rounded-full bg-white py-2.5 pe-5 ps-2.5"
            >
              <span className={cn('flex size-8 items-center justify-center rounded-full text-white', toneBg[pill.tone])}>
                <KeyIcon name={pill.icon} className="size-3.5" />
              </span>
              <span className="whitespace-nowrap text-sm font-medium text-zinc-800">{pill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MappedCard() {
  const m = SESSION.mapped
  return (
    <div className="flex flex-col gap-y-5 rounded-3xl bg-[url('/images/redesign/feature-planner.webp')] bg-cover bg-center p-3.5 md:p-5 lg:gap-y-12.5 lg:p-10">
      <div>
        <h3 className="mb-2.5 text-xl font-semibold text-white md:text-2xl">{m.title}</h3>
        <p className="text-lg text-zinc-300 lg:max-w-md">{m.body}</p>
      </div>
      <div className="w-full rounded-3xl border border-white/30 bg-black/10 text-white backdrop-blur-xl lg:max-w-xl">
        <div className="mb-7.5 flex items-start justify-between border-b border-white/30 p-5">
          <div>
            <p className="text-lg font-medium text-white">{m.cardTitle}</p>
            <p className="text-sm text-zinc-300">{m.cardSubtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-zinc-700 bg-black/60 px-3 py-1 text-sm font-bold">{m.badge}</span>
            <span className="text-sm font-medium text-zinc-300">{m.badgeLabel}</span>
          </div>
        </div>
        <div className="space-y-4 pb-5 pe-4 md:pe-10">
          {m.rows.map((row) => (
            <div key={row.title} className="flex items-stretch gap-4">
              <div className="relative flex w-16 flex-col items-end justify-center">
                <span className={cn('text-right text-sm font-bold leading-none', row.ok ? 'text-zinc-300' : 'text-white')}>
                  {row.time}
                </span>
              </div>
              <div
                className={cn(
                  'flex grow items-center justify-between rounded-xl border p-3.5',
                  row.ok ? 'border-hl-green/20 bg-hl-green/30' : 'border-zinc-700 bg-zinc-900'
                )}
              >
                <div className="flex items-center gap-2">
                  {row.ok ? (
                    <IconCircleCheck className="size-3.5 text-hl-green" />
                  ) : (
                    <span className="ms-0.5 size-2 rounded-full bg-hl-orange" />
                  )}
                  <span className="text-sm font-medium md:text-base">{row.title}</span>
                </div>
                <span className="text-xs text-zinc-200 md:text-sm">{row.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GroupedCard() {
  const g = SESSION.grouped
  return (
    <div className="lg:col-span-2">
      <div className="relative overflow-hidden rounded-2xl bg-black bg-[url('/images/redesign/feature-stacks.webp')] bg-cover bg-center p-3.5 md:p-5 lg:p-10">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex h-full flex-col justify-between">
            <div className="lg:max-w-md">
              <h3 className="mb-2.5 text-xl font-semibold leading-tight text-white md:text-2xl">{g.title}</h3>
              <p className="mb-5 text-base leading-relaxed text-zinc-400 md:mb-7.5 md:text-lg">{g.body}</p>
              <BookRollButton location="bento_handoffs" variant="white" shape="pill" className="md:py-3">
                {g.cta}
              </BookRollButton>
            </div>
            <p className="mt-5 text-sm text-zinc-500 md:mt-14">{g.footnote}</p>
          </div>

          <div className="relative flex items-end justify-center lg:justify-end">
            <AppWindow
              title={g.window.subtitle}
              className="z-30 -mb-68 w-full max-w-[24rem] pb-72 md:w-97"
            >
              <div className="p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-base font-semibold md:text-lg">{g.window.title}</p>
                  <span className="rounded-full bg-amber-400 px-2.5 py-1 text-[11px] font-semibold text-zinc-900">
                    {g.window.badge}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {g.window.groups.map((group) => (
                    <div key={group.label} className={cn('rounded-2xl border p-3 md:p-3.5', toneSoft[group.tone])}>
                      <span className={cn('inline-block rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-white', toneBg[group.tone])}>
                        {group.count}
                      </span>
                      <p className="mt-4 text-sm font-semibold text-zinc-900">{group.label}</p>
                      <p className="text-[11px] text-zinc-600">{group.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AppWindow>

            <div className="absolute left-0 top-20 z-30 w-40 rounded-2xl bg-white p-3 text-zinc-900 shadow-2xl md:top-25 md:w-48 lg:left-auto lg:right-[19rem]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold md:text-sm">{g.floating.title}</span>
                <span className="rounded-md bg-amber-400 px-1.5 py-0.5 text-[10px] font-semibold">{g.floating.badge}</span>
              </div>
              <ul className="space-y-1.5">
                {g.floating.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-1.5 text-[10px] font-medium md:text-[11px]">
                    {item.done ? (
                      <IconCircleCheck className="mt-px size-3 shrink-0 text-hl-green" />
                    ) : (
                      <span className="mt-px size-3 shrink-0 rounded-full bg-zinc-300" />
                    )}
                    <span className={item.done ? 'text-zinc-500 line-through' : ''}>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

function RoadmapCard() {
  const r = SESSION.roadmap
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[url('/images/redesign/feature-roadmap.webp')] bg-cover bg-center p-3.5 md:p-5 lg:p-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
      <div className="relative z-10">
        <div className="mb-6 max-w-2xl md:mb-12.5">
          <h3 className="mb-2.5 text-xl font-semibold leading-tight text-white md:text-2xl">{r.title}</h3>
          <p className="text-base leading-relaxed text-zinc-300 md:max-w-sm md:text-lg">{r.body}</p>
        </div>
        <div className="mx-auto max-w-5xl rounded-3xl bg-black/85 p-5 backdrop-blur-xl md:p-7.5">
          <h4 className="text-center text-base font-semibold text-white md:text-lg">{r.cardTitle}</h4>
          <div className="mt-7.5 grid grid-cols-3 items-center gap-3 text-center md:gap-7.5">
            {r.rings.map((ring) => {
              const large = 'large' in ring && ring.large
              return (
                <div key={ring.value} className="flex flex-col items-center">
                  <Ring
                    progress={ring.progress}
                    size={large ? 110 : 80}
                    stroke={large ? 9 : 7}
                    from={ring.tone === 'violet' ? '#e9d5ff' : '#fbbf24'}
                    to={toneHex[ring.tone]}
                  >
                    <span className="text-xl font-medium text-white">
                      {ring.value}
                      <span className="ms-0.5 text-xs text-white/70">d</span>
                    </span>
                  </Ring>
                  <p className="mt-3.5 text-sm text-zinc-300 md:text-lg">{ring.label}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-7.5 grid grid-cols-2 gap-2 md:gap-7.5">
          {r.stats.map((stat) => (
            <div key={stat.value} className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
              <div className="items-start gap-6 md:flex md:justify-between">
                <p className="whitespace-pre-line text-lg leading-snug text-white">{stat.label}</p>
                <p className="font-headline text-2xl font-semibold text-white md:text-3xl lg:text-4xl">{stat.value}</p>
              </div>
              <p className="mt-4 text-base text-zinc-400 md:mt-7.5 md:text-lg">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HonestCard() {
  const h = SESSION.honest
  return (
    <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-5 lg:p-10">
      <div className="absolute left-1/2 top-2/3 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="relative z-10">
        <div className="max-w-xl">
          <h3 className="mb-2.5 text-xl font-semibold leading-tight text-white md:text-2xl">{h.title}</h3>
          <p className="max-w-sm text-lg leading-relaxed text-zinc-300">{h.body}</p>
        </div>
        <div className="relative mt-16 flex justify-center pb-8 lg:mt-24">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="absolute -top-10 left-0 rotate-[-20deg] md:-left-4 md:-top-12">
              <span className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-white shadow-lg md:size-16">
                <IconBell className="size-6 md:size-8" />
                <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-hl-red text-xs font-bold text-white">
                  1
                </span>
              </span>
            </div>
            <p className="text-xs text-zinc-400">{h.meta}</p>
            <p className="mt-1 text-lg font-medium text-white">{h.cardTitle}</p>
            <p className="mt-1 text-sm text-zinc-400">{h.cardBody}</p>
            <div className="mt-5 grid grid-cols-[1.6fr_1fr] gap-2">
              <span className="rounded-lg bg-white py-2.5 text-center text-sm font-medium text-zinc-900">{h.accept}</span>
              <span className="rounded-lg bg-zinc-800 py-2.5 text-center text-sm font-medium text-white">{h.later}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SessionBento() {
  return (
    <section id="session" className="relative scroll-mt-28 pb-8 md:pb-25 lg:pb-50">
      <div className="hl-container">
        <div className="mb-12.5 grid grid-cols-1 items-center gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <div className="mb-3.5 inline-flex">
              <Eyebrow>{SESSION.eyebrow}</Eyebrow>
            </div>
            <h2 className="text-3xl font-medium leading-tight md:text-4xl lg:max-w-lg lg:text-5xl">{SESSION.headline}</h2>
          </div>
          <div>
            <p className="text-lg leading-normal text-zinc-600 md:float-end lg:max-w-md">{SESSION.lead}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
          <CheckpointsCard />
          <MappedCard />
          <GroupedCard />
          <RoadmapCard />
          <HonestCard />
        </div>
      </div>
    </section>
  )
}
