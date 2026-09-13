import { cn } from '@/lib/utils'

export function InnerCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(15,23,42,0.05)] ring-1 ring-zinc-100/80 md:p-8',
        className
      )}
    >
      {children}
    </div>
  )
}
