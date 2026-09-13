import Image from 'next/image'

/** Glossy folded-plane sculpture. Decorative only. */
export function HeroSculpture() {
  return (
    <div className="relative mx-auto h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80" aria-hidden>
      <Image
        src="/images/bitblabs-hero-sculpture.png"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 16rem, 20rem"
        className="object-contain"
      />
    </div>
  )
}
