'use client'

import {
  ProductSpotlight,
  type ProductSpotlightProps,
} from '@/components/sections/ProductSpotlight'

type RyftProductSpotlightProps = Pick<
  ProductSpotlightProps,
  'className' | 'style' | 'embedded' | 'stackContinuation'
>

const RYFT_IMAGES = [
  {
    src: '/ryft-slide-hero.png',
    alt: 'Ryft hero: workout tracker built by friends, with progress and squad app screens',
  },
  {
    src: '/ryft-slide-progress.png',
    alt: 'Ryft gamification: XP, levels, streaks, badges, and personal records',
  },
  {
    src: '/ryft-slide-features.png',
    alt: 'Ryft features: workout builder, tracking, progress, live sessions, and smart rest timer',
  },
] as const

export function RyftProductSpotlight(props: RyftProductSpotlightProps) {
  return (
    <ProductSpotlight
      id="product-ryft"
      name="Ryft"
      tagline="The workout tracker built by friends, for friends"
      description="Build routines, log workouts, earn XP and PRs, and stay consistent with your squad. Lightweight tracking with social accountability."
      liveUrl="https://ryft.bitblabs.com/"
      imageSrc={RYFT_IMAGES[0].src}
      imageAlt={RYFT_IMAGES[0].alt}
      images={[...RYFT_IMAGES]}
      imageAspect="1024/490"
      showHeadline={false}
      layout="mirrored"
      {...props}
    />
  )
}
