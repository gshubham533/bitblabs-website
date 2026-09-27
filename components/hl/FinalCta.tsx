import Image from 'next/image'
import { FINAL_CTA } from '@/lib/landing'
import { CONTACT_EMAIL_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { IconCalendar, IconMail } from './icons'
import { Laptop } from './mockups'
import { toneBg } from './tokens'
import { BookRollButton, RollButton } from './ui'

function RoadmapScreen() {
  const l = FINAL_CTA.laptop
  return (
    <div className="flex h-full flex-col bg-zinc-900 p-[4%] text-left text-white">
      <div className="mb-[4%] flex items-center justify-between">
        <div>
          <p className="text-[7px] text-white/60 md:text-[10px] lg:text-xs">{l.greeting}</p>
          <p className="text-[9px] font-semibold md:text-sm lg:text-base">{l.name}</p>
        </div>
        <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[6px] font-medium md:px-2 md:text-[9px] lg:text-[10px]">
          Example
        </span>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-[3%]">
        {l.phases.map((phase) => (
          <div key={phase.label} className="rounded-md bg-white p-[7%] text-zinc-900 md:rounded-xl">
            <span className={cn('inline-block rounded px-1 py-px text-[5px] font-semibold text-white md:text-[8px] lg:text-[9px]', toneBg[phase.tone])}>
              {phase.label}
            </span>
            <p className="mt-[10%] text-[7px] font-semibold md:text-[11px] lg:text-xs">{phase.title}</p>
            <ul className="mt-[6%] space-y-[6%]">
              {phase.items.map((item) => (
                <li key={item} className="rounded bg-zinc-100 px-1 py-0.5 text-[5px] leading-tight text-zinc-600 md:px-1.5 md:py-1 md:text-[8px] lg:text-[9px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden pb-8 pt-20 lg:pt-30">
      <div className="hl-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-3 md:gap-0">
          <div className="order-1 flex flex-col items-center text-center md:me-10 md:text-left lg:items-start">
            <h2 className="text-2xl font-medium tracking-tight text-zinc-900 lg:text-4xl">{FINAL_CTA.headline}</h2>
            <p className="mt-2.5 text-lg text-zinc-600 lg:mt-5">{FINAL_CTA.body}</p>
            <div className="relative z-40 mt-3.5 flex flex-col gap-4 lg:mt-8">
              <BookRollButton
                location="final_cta"
                variant="black"
                icon={<IconCalendar className="size-5" />}
                className="px-3.5 text-sm lg:px-8.5 lg:text-base"
              >
                {FINAL_CTA.primaryCta}
              </BookRollButton>
              <RollButton
                href={CONTACT_EMAIL_HREF}
                variant="gray"
                icon={<IconMail className="size-5" />}
                className="px-3.5 text-sm lg:px-8.5 lg:text-base"
              >
                {FINAL_CTA.secondaryCta}
              </RollButton>
            </div>
          </div>

          <div className="order-3 flex justify-center md:order-2">
            <Laptop className="relative z-10 w-full max-w-[22rem] md:max-w-60 lg:max-w-[26rem]">
              <RoadmapScreen />
            </Laptop>
          </div>

          <div className="order-2 flex flex-col items-center md:order-3 md:ms-10 lg:items-end">
            <div className="text-center md:text-start lg:max-w-xl">
              <h3 className="mb-5 text-2xl font-medium tracking-tight text-zinc-900 lg:text-4xl">{FINAL_CTA.qrTitle}</h3>
              <div className="relative z-30 inline-block rounded-2xl bg-white p-2 shadow-2xl">
                <div className="flex items-center justify-center rounded-2xl bg-zinc-200 p-2">
                  <Image
                    src="/images/redesign/qr-book.svg"
                    alt="QR code that opens the BitBlabs strategy session booking page"
                    width={184}
                    height={184}
                    className="size-36 lg:size-46"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-18 left-0 top-auto z-20 h-30 w-full bg-hl-bg blur-[20px] md:h-40 md:blur-[35px] lg:-bottom-30 lg:h-55" />
      </div>
      <Image
        src="/images/redesign/clouds.webp"
        alt=""
        width={1220}
        height={319}
        aria-hidden
        className="pointer-events-none absolute -bottom-12.5 -left-25 -z-10 h-72.5 w-[54.5rem] object-cover"
      />
      <Image
        src="/images/redesign/clouds.webp"
        alt=""
        width={1220}
        height={319}
        aria-hidden
        className="pointer-events-none absolute -bottom-25 right-25 z-0 h-72.5 w-[56rem] translate-x-1/2 object-cover"
      />
    </section>
  )
}
