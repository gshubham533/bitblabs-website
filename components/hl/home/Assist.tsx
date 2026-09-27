import { ASSIST } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { IconCircleCheck, IconSparkles, IconUserCheck } from '../icons'
import { AppWindow } from '../mockups'
import { KeyIcon, toneBg } from '../tokens'
import { Eyebrow, RollButton } from '../ui'

export function Assist() {
  const w = ASSIST.window
  return (
    <section id="how-it-works" className="scroll-mt-28 pb-25 lg:pb-50">
      <div className="hl-container">
        <div className="mb-20 grid grid-cols-1 items-center gap-7.5 md:grid-cols-2">
          <div>
            <Eyebrow className="mb-2.5">{ASSIST.eyebrow}</Eyebrow>
            <h2 className="mb-2.5 text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              {ASSIST.headlineTop}
              <br className="hidden md:block" /> {ASSIST.headlineBottom}
            </h2>
            <p className="mb-6 max-w-lg text-base leading-normal text-zinc-500 md:text-lg md:leading-relaxed">{ASSIST.body}</p>
            <RollButton href="#session" variant="black">
              {ASSIST.cta}
            </RollButton>
          </div>

          <div
            className="group relative mx-auto flex h-100 w-full items-center justify-center overflow-hidden rounded-2xl bg-[url('/images/redesign/assist-sky.webp')] bg-cover bg-center shadow-2xl md:aspect-video lg:aspect-[4/3] lg:h-142 lg:max-w-4xl"
            aria-label={ASSIST.illustrationLabel}
          >
            <div className="absolute -right-24 top-10 md:top-20 lg:-right-16">
              <AppWindow className="w-72 -rotate-[14deg] lg:w-80" title={w.subtitle}>
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold">{w.title}</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-hl-violet to-hl-pink px-2 py-0.5 text-[10px] font-semibold text-white">
                      <IconSparkles className="size-3" />
                      {w.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {w.rows.map((row) => (
                      <div
                        key={row.title}
                        className={cn(
                          'flex items-center justify-between rounded-xl border px-3 py-2.5',
                          row.state === 'done' && 'border-green-300 bg-green-100',
                          row.state === 'human' && 'border-dashed border-hl-azure bg-white',
                          row.state === 'todo' && 'border-zinc-200 bg-white'
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {row.state === 'done' ? (
                            <IconCircleCheck className="size-4 text-hl-green" />
                          ) : row.state === 'human' ? (
                            <IconUserCheck className="size-4 text-hl-azure" />
                          ) : (
                            <span className="size-4 rounded-full bg-zinc-200" />
                          )}
                          <div>
                            <p className="text-xs font-semibold">{row.title}</p>
                            <p className="text-[10px] text-zinc-500">{row.meta}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-zinc-400">{row.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AppWindow>
            </div>

            <div className="absolute left-6 top-12 z-30 hidden flex-col gap-4 md:left-12 md:top-20 lg:flex">
              {ASSIST.suggestions.map((s, i) => (
                <div
                  key={s.title}
                  className={cn(
                    'animate-float w-48 rounded-2xl p-3.5 shadow-xl md:w-64',
                    i === 1 && 'ms-2 md:ms-4',
                    'dark' in s && s.dark ? 'bg-zinc-900 text-white' : 'bg-white/85 text-zinc-900 backdrop-blur'
                  )}
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <p className="text-sm font-medium md:text-base">{s.title}</p>
                  <span
                    className={cn(
                      'mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium',
                      'dark' in s && s.dark ? 'bg-hl-green/25 text-green-300' : 'bg-zinc-200 text-zinc-700'
                    )}
                  >
                    {s.action}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute bottom-20 left-40 z-30 hidden animate-hl-pulse-slow lg:block">
              <span className="flex size-18 items-center justify-center rounded-2xl bg-gradient-to-br from-hl-violet to-hl-pink text-white shadow-inner">
                <IconSparkles className="size-8" />
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-2.5 md:gap-7.5 lg:grid-cols-4">
          {ASSIST.cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5"
            >
              <span className={cn('flex size-12.5 items-center justify-center rounded-full text-white', toneBg[card.tone])}>
                <KeyIcon name={card.icon} className="size-5" />
              </span>
              <div>
                <h3 className="mb-2.5 text-xl font-medium text-zinc-900 md:text-2xl">{card.title}</h3>
                <p className="text-sm leading-normal text-zinc-700 md:text-lg">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
