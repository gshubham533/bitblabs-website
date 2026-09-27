'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { STORIES } from '@/lib/landing'
import { IconArrowRight, IconChevronLeft, IconChevronRight } from '../icons'
import { Eyebrow } from '../ui'

type Clip = (typeof STORIES.clips)[number]

/** Muted loop that only plays while on screen. */
function ClipVideo({ clip }: { clip: Clip }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.4 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={clip.video}
      poster={clip.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      className="absolute inset-0 size-full object-cover"
    />
  )
}

function ClipCard({ clip }: { clip: Clip }) {
  const external = clip.href.startsWith('http')
  const linkClass =
    'inline-flex items-center gap-1.5 rounded-sm bg-white/20 px-2 py-1 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/30'
  const linkBody = (
    <>
      {STORIES.linkLabel}
      <IconArrowRight className="size-3.5" />
    </>
  )

  return (
    <div data-slide className="group relative h-106 w-84 shrink-0 snap-center overflow-hidden rounded-2xl bg-zinc-900">
      <ClipVideo clip={clip} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      <div className="absolute left-5 right-5 top-5 z-20 text-start">
        <p className="text-base font-semibold leading-none text-white">{clip.project}</p>
        <p className="mt-1.5 text-sm text-white/70">{clip.industry}</p>
      </div>
      <div className="absolute inset-x-5 bottom-5 z-20 text-start">
        <p className="mb-3.5 text-base font-medium leading-snug text-white">{clip.summary}</p>
        {external ? (
          <a href={clip.href} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={`${STORIES.linkLabel}: ${clip.project}`}>
            {linkBody}
          </a>
        ) : (
          <Link href={clip.href} className={linkClass} aria-label={`${STORIES.linkLabel}: ${clip.project}`}>
            {linkBody}
          </Link>
        )}
      </div>
    </div>
  )
}

/** Project clip slider. Footage shows each project's industry; captions say what BitBlabs built. */
export function Stories() {
  const track = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-slide]')
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 336) + 30), behavior: 'smooth' })
  }

  useEffect(() => {
    const el = track.current
    const second = el?.querySelectorAll<HTMLElement>('[data-slide]')[1]
    if (!el || !second) return
    el.scrollTo({ left: second.offsetLeft - (el.clientWidth - second.offsetWidth) / 2, behavior: 'instant' })
  }, [])

  return (
    <section className="relative overflow-hidden pb-25">
      <div className="hl-container">
        <div className="mx-auto mb-8 text-center md:mb-12.5">
          <Eyebrow className="mb-2.5">{STORIES.eyebrow}</Eyebrow>
          <h2 className="mb-2.5 text-2xl font-semibold tracking-normal md:text-4xl lg:text-5xl">
            {STORIES.headlineTop}
            <br /> {STORIES.headlineBottom}
          </h2>
          <p className="mt-4 text-base text-zinc-600 md:text-lg">{STORIES.sub}</p>
        </div>

        <div className="relative">
          <div
            ref={track}
            className="flex snap-x snap-mandatory gap-7.5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="w-[calc(50%-10.5rem)] shrink-0 max-md:hidden" aria-hidden />
            {STORIES.clips.map((clip) => (
              <ClipCard key={clip.id} clip={clip} />
            ))}
            <div className="w-[calc(50%-10.5rem)] shrink-0 max-md:hidden" aria-hidden />
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollBy(-1)}
              className="flex size-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-800 transition hover:bg-hl-green hover:text-white"
            >
              <IconChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollBy(1)}
              className="flex size-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-800 transition hover:bg-hl-green hover:text-white"
            >
              <IconChevronRight className="size-6" />
            </button>
          </div>

          <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-106 w-37.5 bg-gradient-to-r from-hl-bg to-transparent md:block" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-106 w-37.5 bg-gradient-to-l from-hl-bg to-transparent md:block" />
        </div>
      </div>
    </section>
  )
}
