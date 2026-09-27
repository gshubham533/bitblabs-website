import Image from 'next/image'
import { INTRO } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { IconArrowDown, IconCalendar, IconChevronRight, IconSparkles } from '../icons'
import { Laptop } from '../mockups'
import { img, KeyIcon, toneBg } from '../tokens'
import { BookRollButton, RollButton } from '../ui'

const swap = ['animate-hl-swap-1', 'animate-hl-swap-2', 'animate-hl-swap-3', 'animate-hl-swap-4']

function MarqueeSet({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-5" aria-hidden={hidden}>
      {INTRO.marquee.map((item) => (
        <div key={item.label} className="contents">
          <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
            <span className={cn('flex size-7.5 shrink-0 items-center justify-center rounded-full text-white md:size-12.5', toneBg[item.tone])}>
              <KeyIcon name={item.icon} className="size-3.5 md:size-6" />
            </span>
            <span className="text-center text-sm font-medium text-zinc-800 md:text-base">{item.label}</span>
          </div>
          <Image
            src={img(item.image)}
            alt=""
            width={300}
            height={300}
            className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5"
          />
        </div>
      ))}
    </div>
  )
}

function WorkflowPipeline() {
  const { laptop } = INTRO
  return (
    <div className="flex h-full flex-col bg-zinc-50 p-[3.5%] text-left">
      <div className="mb-[3%] flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold text-zinc-900 md:text-base">{laptop.title}</p>
          <p className="text-[7px] text-zinc-500 md:text-xs">{laptop.subtitle}</p>
        </div>
        <span className="rounded-full bg-hl-orange px-1.5 py-0.5 text-[6px] font-semibold text-white md:px-2.5 md:py-1 md:text-[11px]">
          {laptop.note}
        </span>
      </div>
      <ol className="flex flex-1 items-stretch">
        {laptop.steps.map((step, i) => {
          const highlight = 'highlight' in step && step.highlight
          return (
            <li key={step.label} className="flex flex-1 items-center">
              <div
                className={cn(
                  'flex h-full w-full flex-col rounded-md bg-white p-[8%] shadow-sm ring-1 md:rounded-xl',
                  highlight ? 'ring-2 ring-hl-orange' : 'ring-zinc-100'
                )}
              >
                <span className="text-[5px] font-semibold text-zinc-400 md:text-[10px]">0{i + 1}</span>
                <span
                  className={cn(
                    'mt-[12%] flex size-3.5 items-center justify-center rounded-full text-white md:size-8',
                    toneBg[step.tone]
                  )}
                >
                  <KeyIcon name={step.icon} className="size-2 md:size-4" />
                </span>
                <span className="mt-[14%] text-[6px] font-semibold leading-tight text-zinc-900 md:text-[13px]">{step.label}</span>
                <span className="mt-[6%] text-[5px] leading-tight text-zinc-500 md:text-[10px]">{step.meta}</span>
              </div>
              {i < laptop.steps.length - 1 ? (
                <IconChevronRight className="mx-px size-2 shrink-0 text-zinc-400 md:mx-0.5 md:size-3.5" aria-hidden />
              ) : null}
            </li>
          )
        })}
      </ol>    </div>
  )
}

export function Intro() {
  return (
    <section className="relative pb-20 text-center lg:pb-50 lg:pt-6">
      <div className="hl-container">
        <div className="md:mb-15">
          <p className="mb-4 text-lg font-medium text-zinc-500 md:mb-5 md:text-2xl">{INTRO.lead}</p>
          <h2 className="mx-auto mb-10 max-w-5xl text-center text-3xl font-medium leading-tight tracking-tight text-black md:text-5xl">
            {INTRO.before}{' '}
            <span className="relative inline-flex h-6.5 w-12.5 overflow-hidden rounded-full align-middle md:h-11 md:w-22.5">
              {[1, 2, 3, 4].map((n, i) => (
                <Image
                  key={n}
                  src={img(`chip-${n}`)}
                  alt=""
                  fill
                  sizes="90px"
                  className={cn('object-cover', swap[i])}
                />
              ))}
            </span>{' '}
            {INTRO.middle}
            <span className="mx-1 inline-flex align-middle">
              <span className="flex size-7.5 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-hl-orange text-white shadow-lg md:size-15">
                <IconSparkles className="size-4 md:size-8" />
              </span>
            </span>{' '}
            {INTRO.after}
          </h2>
          <p className="mb-3.5 text-base font-medium text-zinc-500 md:text-xl lg:text-2xl">{INTRO.sub}</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            {INTRO.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-zinc-200 px-3.5 py-2 text-sm font-semibold text-zinc-800">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center overflow-hidden py-12 md:py-24">
          <div className="pointer-events-none absolute inset-y-0 -left-20 z-20 hidden w-37.5 bg-hl-bg blur-[20px] md:block" />
          <div className="pointer-events-none absolute inset-y-0 -right-20 z-20 hidden w-37.5 bg-hl-bg blur-[30px] md:block" />

          <div className="mt-10 overflow-hidden py-6 md:mt-20">
            <div className="flex w-max animate-hl-marquee-left gap-5">
              <MarqueeSet />
              <MarqueeSet hidden />
            </div>
          </div>
          <div className="overflow-hidden pb-6 md:mb-20">
            <div className="flex w-max animate-hl-marquee-right gap-5">
              <MarqueeSet />
              <MarqueeSet hidden />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            <Laptop className="w-[18rem] md:w-[38rem]">
              <WorkflowPipeline />
            </Laptop>
          </div>
        </div>

        <div className="mx-auto mt-4 flex flex-col items-center gap-y-5 md:mt-12 md:px-6">
          <p className="mb-2.5 w-full max-w-xl text-base leading-normal text-zinc-700 md:text-lg">{INTRO.body}</p>
          <div className="flex w-full flex-col justify-center gap-5 md:flex-row">
            <BookRollButton location="intro" variant="black" icon={<IconCalendar className="size-5" />}>
              {INTRO.primaryCta}
            </BookRollButton>
            <RollButton href="#how-it-works" variant="gray" icon={<IconArrowDown className="size-5" />}>
              {INTRO.secondaryCta}
            </RollButton>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block" aria-hidden>
        <Image
          src="/images/redesign/clouds.webp"
          alt=""
          width={1220}
          height={319}
          className="pointer-events-none absolute -bottom-100 left-0 right-0 -z-10 h-148 w-full object-cover opacity-90"
        />
      </div>
    </section>
  )
}
