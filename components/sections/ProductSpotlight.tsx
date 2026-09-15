'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

const IMAGE_ASPECT = '1024/493'
const IMAGE_SIZES = '(max-width: 768px) 70vw, 920px'
const DEFAULT_CAROUSEL_INTERVAL_MS = 4200
const CAROUSEL_TRANSITION_MS = 780

export interface ProductSpotlightImage {
  src: string
  alt: string
}

export interface ProductSpotlightProps {
  className?: string
  style?: CSSProperties
  /** When true, omits outer section padding (parent already provides rhythm). */
  embedded?: boolean
  /** When true, skips the top divider used when stacking after another product. */
  stackContinuation?: boolean
  id?: string
  name: string
  tagline: string
  description: string
  liveUrl: string
  imageSrc: string
  imageAlt: string
  /** Optional carousel slides; falls back to a single `imageSrc` when omitted. */
  images?: ProductSpotlightImage[]
  /** Auto-advance interval in ms when multiple images are provided. */
  carouselIntervalMs?: number
  imageAspect?: string
  /** @deprecated Ignored — war-room surface has no glow washes. */
  glowGradient?: string
  ctaLabel?: string
  /** "Made at BitBlabs" headline. Defaults to true. */
  showHeadline?: boolean
  /** @deprecated Ignored — war-room surface has no WebGL shader. */
  showWave?: boolean
  /** @deprecated Ignored — war-room surface has no video wash. */
  backgroundVideoSrc?: string
  /**
   * Desktop composition.
   * `default`: copy left, screenshot right.
   * `mirrored`: screenshot left, copy right.
   */
  layout?: 'default' | 'mirrored'
}

function ProductHeadline({ className }: { className?: string }) {
  return (
    <h2
      className={cn(
        'font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold uppercase leading-[1] tracking-[0.04em] text-[var(--bb-ink)]',
        className
      )}
    >
      Made at BitBlabs
    </h2>
  )
}

type CarouselDirection = 'left' | 'right'

const carouselSlideVariants = {
  enter: (direction: CarouselDirection) => ({
    x: direction === 'left' ? '-100%' : '100%',
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: CarouselDirection) => ({
    x: direction === 'left' ? '100%' : '-100%',
    opacity: 1,
  }),
}

const carouselFadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

function ProductScreenshot({
  className,
  images,
  imageAspect,
  carouselIntervalMs = DEFAULT_CAROUSEL_INTERVAL_MS,
}: {
  className?: string
  images: ProductSpotlightImage[]
  imageAspect: string
  carouselIntervalMs?: number
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<CarouselDirection>('left')
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const isCarousel = images.length > 1
  const activeImage = images[activeIndex] ?? images[0]
  const slideVariants = prefersReducedMotion ? carouselFadeVariants : carouselSlideVariants

  useEffect(() => {
    if (!isCarousel || paused) return

    const id = window.setInterval(() => {
      setDirection((current) => (current === 'left' ? 'right' : 'left'))
      setActiveIndex((current) => (current + 1) % images.length)
    }, carouselIntervalMs)

    return () => window.clearInterval(id)
  }, [carouselIntervalMs, images.length, isCarousel, paused])

  return (
    <figure
      className={cn('w-full min-w-0', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div
        className="relative w-full overflow-hidden rounded-[0.85rem] border border-[var(--bb-rail)] bg-[var(--bb-surface)] shadow-[var(--bb-chip-shadow)]"
        style={{ aspectRatio: imageAspect }}
        role={isCarousel ? 'region' : undefined}
        aria-roledescription={isCarousel ? 'carousel' : undefined}
        aria-label={isCarousel ? 'Product screenshots' : undefined}
      >
        {isCarousel ? (
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={activeImage.src}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: prefersReducedMotion ? 0.35 : CAROUSEL_TRANSITION_MS / 1000,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                unoptimized
                className="object-cover object-top"
                sizes={IMAGE_SIZES}
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              unoptimized
              className="object-cover object-top"
              sizes={IMAGE_SIZES}
              priority
            />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[rgba(20,24,32,0.06)]" />
      </div>
      <span className="sr-only">{activeImage?.alt}</span>
    </figure>
  )
}

function ProductPanel({
  className,
  name,
  tagline,
  description,
  liveUrl,
  ctaLabel,
}: {
  className?: string
  name: string
  tagline: string
  description: string
  liveUrl: string
  ctaLabel: string
}) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h3 className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1] tracking-[0.02em] text-[var(--bb-ink)]">
        {name}
      </h3>
      <p className="font-[family-name:var(--font-barlow-condensed)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
        {tagline}
      </p>
      <p className="max-w-prose text-base leading-relaxed text-[var(--bb-ink-muted)]">
        {description}
      </p>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bb-btn-primary mt-2 w-fit"
      >
        {ctaLabel}
        <span aria-hidden>↗</span>
      </a>
    </div>
  )
}

export function ProductSpotlight({
  className,
  style,
  embedded = false,
  stackContinuation = false,
  id,
  name,
  tagline,
  description,
  liveUrl,
  imageSrc,
  imageAlt,
  images,
  carouselIntervalMs = DEFAULT_CAROUSEL_INTERVAL_MS,
  imageAspect = IMAGE_ASPECT,
  ctaLabel = 'Live Page',
  showHeadline = true,
  layout = 'default',
}: ProductSpotlightProps) {
  const mirrored = layout === 'mirrored'
  const screenshotImages =
    images && images.length > 0 ? images : [{ src: imageSrc, alt: imageAlt }]
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'relative w-full',
        !stackContinuation && 'border-t border-[var(--bb-line)]',
        embedded ? 'bb-home-section' : 'px-6 py-16 md:px-12 lg:px-16',
        className
      )}
      style={style}
    >
      <div className={cn(embedded ? 'bb-home-container' : 'mx-auto max-w-[var(--bb-max)]')}>
        {showHeadline ? <ProductHeadline className="mb-8 md:mb-10" /> : null}

        <div className="bb-panel overflow-hidden p-5 sm:p-7 lg:p-8">
          <div
            className={cn(
              'flex flex-col gap-8 md:items-center md:gap-12 lg:gap-16',
              mirrored ? 'md:flex-row-reverse' : 'md:flex-row'
            )}
          >
            <ProductPanel
              className="min-w-0 md:flex-1 md:max-w-[min(100%,34rem)]"
              name={name}
              tagline={tagline}
              description={description}
              liveUrl={liveUrl}
              ctaLabel={ctaLabel}
            />
            <ProductScreenshot
              className="md:w-[min(58%,42rem)] md:flex-none lg:w-[min(60%,48rem)]"
              images={screenshotImages}
              imageAspect={imageAspect}
              carouselIntervalMs={carouselIntervalMs}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
