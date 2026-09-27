import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  return (
    <Link href="/" aria-label="BitBlabs home" className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src="/logos/bitblabs-logo-1.svg"
        alt=""
        width={44}
        height={44}
        className={size === 'lg' ? 'size-11' : 'size-7.5 md:size-8'}
      />
      <span
        className={cn(
          'font-headline font-semibold tracking-tight text-zinc-900',
          size === 'lg' ? 'text-3xl' : 'text-xl md:text-2xl'
        )}
      >
        BitBlabs
      </span>
    </Link>
  )
}
