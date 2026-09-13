import { cn } from '@/lib/utils'

export function Chip({
  children,
  tone = 'light',
  className,
}: {
  children: React.ReactNode
  tone?: 'light' | 'dark' | 'brand'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3.5 py-1.5 font-heading text-xs font-medium tracking-tight md:text-sm',
        tone === 'light' && 'bg-zinc-100 text-zinc-700',
        tone === 'dark' && 'bg-white/10 text-zinc-200',
        tone === 'brand' && 'bg-brand-soft text-brand-dark',
        className
      )}
    >
      {children}
    </span>
  )
}
