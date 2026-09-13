import Image from 'next/image'

/** Glossy folded-plane sculpture. Decorative only. */
export function HeroSculpture() {
  return (
    <div className="relative mx-auto flex h-44 w-44 items-center justify-center overflow-hidden sm:h-52 sm:w-52 md:h-60 md:w-60">
      <Image
        src="/images/bitblabs-hero-sculpture.webp"
        alt=""
        width={720}
        height={720}
        priority
        className="h-full w-full object-contain"
      />
    </div>
  )
}
