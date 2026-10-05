import Image from 'next/image'
import { OFFER_STATS } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { IconCalendar } from '../icons'
import { toneText } from '../tokens'
import { TrackedBookLink } from '../TrackedBookLink'
import { BookRollButton, Eyebrow } from '../ui'

/** `padTop` restores the spacing the results section normally provides when that section is hidden. */
export function OfferStats({ padTop }: { padTop?: boolean }) {
  return (
    <section
      id="offer"
      className={cn(
        'relative scroll-mt-28 overflow-hidden pb-20 md:pb-25 lg:pb-46',
        padTop ? 'pt-25 lg:pt-50' : 'pt-4'
      )}
    >
      <div className="hl-container">
        <div className="mb-2 text-center">
          <Eyebrow className="mb-3.5">{OFFER_STATS.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-medium text-zinc-900 md:text-4xl lg:text-5xl">
            {OFFER_STATS.headlineTop}
            <br /> {OFFER_STATS.headlineBottom}
          </h2>
        </div>

        <div className="relative z-20 mb-7.5 flex flex-col items-center justify-center">
          <div className="relative items-center md:inline-flex">
            <p className="font-headline text-6xl font-black leading-none tracking-normal text-hl-orange drop-shadow-[0_10px_15px_rgba(255,76,0,0.25)] md:text-[100px] lg:text-[120px]">
              {OFFER_STATS.price}
            </p>
            <div className="mt-2 whitespace-nowrap rounded-2xl bg-white px-3 py-2 shadow-xl md:absolute md:-right-24 md:top-20 md:mt-1 md:rotate-[8deg] md:px-5">
              <p className="text-xs font-bold text-zinc-800 md:text-sm">{OFFER_STATS.badge}</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-100 flex-col items-center justify-start md:h-138">
          <div className="relative h-75 w-full overflow-hidden md:h-125 lg:h-138">
            <Image
              src="/images/redesign/metrics-sphere.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 75rem, 100vw"
              className="object-cover object-top [mask-image:radial-gradient(ellipse_55%_60%_at_50%_58%,black_60%,transparent_100%)]"
            />
          </div>
          <Image
            src="/images/redesign/clouds.webp"
            alt=""
            width={1220}
            height={319}
            className="pointer-events-none absolute -left-20 bottom-40 right-0 z-20 h-auto w-full md:bottom-30 lg:bottom-2"
            aria-hidden
          />
          <Image
            src="/images/redesign/clouds.webp"
            alt=""
            width={1220}
            height={319}
            className="pointer-events-none absolute -left-7.5 bottom-20 right-0 z-20 w-full object-cover md:-bottom-25 md:h-112 lg:-bottom-50"
            aria-hidden
          />
        </div>

        <div className="relative z-40 mx-auto -mt-50 grid grid-cols-2 items-start gap-6 text-center md:-mt-60 md:max-w-3xl md:grid-cols-3 lg:-mt-0 lg:gap-17.5">
          {OFFER_STATS.stats.map((stat, i) => (
            <div key={stat.label} className={cn('flex flex-col items-center', i === 2 && 'col-span-2 md:col-span-1')}>
              <div className="flex items-baseline gap-1">
                <p className="font-headline text-3xl font-medium tracking-normal text-zinc-900 md:text-5xl lg:text-7xl">
                  {stat.value}
                </p>
                {'unit' in stat && stat.unit ? (
                  <span
                    className={cn(
                      'font-headline text-xl font-medium md:text-3xl lg:text-4xl',
                      toneText[stat.unitTone ?? 'violet']
                    )}
                  >
                    {stat.unit}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm font-semibold leading-tight text-zinc-800 md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="relative z-40 mx-auto mt-12 flex max-w-xl flex-col items-center text-center md:mt-16">
          <h3 className="text-2xl font-medium text-zinc-900 md:text-3xl">{OFFER_STATS.buildTitle}</h3>
          <p className="mt-2.5 text-base text-zinc-600 md:text-lg">{OFFER_STATS.buildBody}</p>
          <BookRollButton
            location="offer"
            variant="black"
            icon={<IconCalendar className="size-5" />}
            className="mt-6"
          >
            {OFFER_STATS.cta}
          </BookRollButton>
          <TrackedBookLink
            location="offer_pay"
            intent="paid"
            className="mt-4 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
          >
            {OFFER_STATS.payCta}
          </TrackedBookLink>
        </div>
        <p className="relative z-40 mt-6 text-center text-sm text-zinc-500">{OFFER_STATS.footnote}</p>
      </div>
    </section>
  )
}
