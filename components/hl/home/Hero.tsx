import Image from 'next/image'
import { HERO } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { IconArrowDown, IconCircleCheck, IconClock, IconSparkles } from '../icons'
import { KeyIcon } from '../tokens'
import { BookRollButton, RollButton } from '../ui'

const statusTone = {
  green: 'bg-hl-green text-white',
  orange: 'bg-amber-500 text-white',
  red: 'bg-hl-red/90 text-white',
  violet: 'bg-gradient-to-r from-hl-violet to-hl-pink text-white',
} as Record<string, string>

export function Hero() {
  const { board, leftCard, rightCard } = HERO
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-34 md:pt-40 lg:pt-52">
      <Image
        src="/images/redesign/hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <div className="hl-container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 pe-2 backdrop-blur-md">
            <span className="rounded-full bg-black px-2 py-px text-base font-medium text-white">{HERO.badgeTag}</span>
            <span className="text-sm text-white">{HERO.badgeText}</span>
          </div>

          <h1 className="mb-5 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:mb-7.5 lg:text-[76px]">
            {HERO.headlineTop}
            <br className="hidden md:block" /> {HERO.headlineBottom}
          </h1>

          <p className="mb-6 max-w-2xl text-lg leading-normal text-white md:text-xl lg:mb-10">{HERO.subhead}</p>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-5">
            <BookRollButton location="hero" variant="white" shape="pill">
              {HERO.primaryCta}
            </BookRollButton>
            <RollButton
              href="#how-it-works"
              variant="glass"
              shape="pill"
              icon={<IconArrowDown className="size-4 md:size-6" />}
            >
              {HERO.secondaryCta}
            </RollButton>
          </div>

          <div
            className="relative mt-6 flex w-full max-w-5xl items-start justify-center gap-8 md:mt-16 md:gap-5 lg:mt-20 lg:gap-10"
            aria-label={HERO.illustrationLabel}
          >
            {/* Left floating card */}
            <div className="absolute left-0 top-8 z-10 flex size-35 flex-col items-center justify-center gap-3 rounded-3xl border border-white/15 bg-zinc-900/70 p-4 text-white shadow-2xl backdrop-blur-xl md:left-6 lg:left-32 lg:size-40">
              <span className="flex size-10 items-center justify-center rounded-full bg-hl-orange shadow-lg lg:size-12">
                <IconClock className="size-5 lg:size-6" />
              </span>
              <p className="text-center text-sm font-medium leading-tight lg:text-base">
                {leftCard.title}
                <br />
                <span className="text-lg font-semibold lg:text-xl">{leftCard.value}</span>
              </p>
            </div>

            {/* Main dashboard (replaces the phone) */}
            <div className="relative mt-34 h-144 w-75 overflow-hidden rounded-[2rem] border-4 border-white/10 bg-zinc-900/80 text-left text-white shadow-2xl backdrop-blur-xl md:mt-0 lg:w-90">
              <div className="flex items-center justify-between px-5 pt-4 text-[11px] text-white/70">
                <span>{board.time}</span>
                <span className="flex gap-1" aria-hidden>
                  <span className="size-1.5 rounded-full bg-white/50" />
                  <span className="size-1.5 rounded-full bg-white/50" />
                  <span className="size-1.5 rounded-full bg-white/50" />
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 px-5 pb-4 pt-5">
                <div>
                  <p className="text-lg font-semibold leading-tight">{board.title}</p>
                  <p className="text-xs text-white/60">{board.subtitle}</p>
                </div>
                <span className="whitespace-nowrap rounded-md border border-white/15 bg-black/60 px-2 py-1 text-[11px] font-medium">
                  {board.badge}
                </span>
              </div>
              <div className="space-y-2.5 px-3.5">
                {board.rows.map((row) => (
                  <div
                    key={row.title}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      {row.done ? (
                        <IconCircleCheck className="size-4 shrink-0 text-hl-green" />
                      ) : row.tone === 'violet' ? (
                        <IconSparkles className="size-4 shrink-0 text-fuchsia-300" />
                      ) : (
                        <span className="size-4 shrink-0 rounded-full bg-white/25" />
                      )}
                      <div>
                        <p className="text-sm font-medium leading-tight">{row.title}</p>
                        <p className="text-[11px] text-white/55">{row.meta}</p>
                      </div>
                    </div>
                    <span className={cn('rounded-md px-1.5 py-0.5 text-[10px] font-semibold', statusTone[row.tone])}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="px-5 pt-4 text-[11px] text-white/45">{HERO.illustrationLabel}</p>
            </div>

            {/* Right floating card */}
            <div className="absolute right-0 top-8 z-10 w-50 rounded-3xl border border-white/15 bg-zinc-900/70 p-4 text-white shadow-2xl backdrop-blur-xl md:bottom-60 lg:right-14 lg:w-60">
              <p className="text-center text-sm font-medium leading-tight lg:text-base">
                {rightCard.title}
                <br />
                <span className="text-white/70">{rightCard.subtitle}</span>
              </p>
              <div className="mt-3.5 flex justify-center gap-3">
                {rightCard.items.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1.5">
                    <span className="flex size-9 items-center justify-center rounded-full bg-white text-zinc-900 lg:size-10">
                      <KeyIcon name={item.icon} className="size-4.5" />
                    </span>
                    <span className="text-[11px] font-medium text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-20 h-18 w-full bg-hl-bg md:h-40" aria-hidden />
      <div
        className="absolute -bottom-7.5 z-20 h-70 w-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_22%,rgba(247,247,247,0.55)_40%,#f7f7f7_62%)] md:h-100 lg:h-110"
        aria-hidden
      />
    </section>
  )
}
