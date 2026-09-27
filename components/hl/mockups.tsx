import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Laptop frame used where the template shows a phone. Screen content is passed as children. */
export function Laptop({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <div className="rounded-t-[1.1rem] border border-zinc-700 bg-zinc-900 p-[2.2%] pb-[2.6%] shadow-2xl md:rounded-t-[1.6rem]">
        <div className="mx-auto mb-[1.2%] size-1.5 rounded-full bg-zinc-700" aria-hidden />
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white md:rounded-lg">{children}</div>
      </div>
      <div className="relative mx-[-6%] h-3 rounded-b-2xl bg-gradient-to-b from-zinc-300 to-zinc-400 shadow-xl md:h-4" aria-hidden>
        <div className="absolute left-1/2 top-0 h-1.5 w-1/6 -translate-x-1/2 rounded-b-lg bg-zinc-500/60" />
      </div>
    </div>
  )
}

/** Browser/dashboard window chrome. */
export function AppWindow({
  children,
  className,
  dark,
  title,
}: {
  children: ReactNode
  className?: string
  dark?: boolean
  title?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl border shadow-2xl',
        dark ? 'border-white/15 bg-zinc-900/75 text-white backdrop-blur-xl' : 'border-zinc-200 bg-white text-zinc-900',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-1.5 border-b px-4 py-3',
          dark ? 'border-white/10' : 'border-zinc-100'
        )}
      >
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {title ? (
          <span className={cn('ms-3 truncate text-xs font-medium', dark ? 'text-white/60' : 'text-zinc-400')}>
            {title}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  )
}

/** Progress ring drawn in SVG (replaces the template's ring icons). */
export function Ring({
  progress,
  size = 80,
  stroke = 7,
  from,
  to,
  children,
  className,
}: {
  progress: number
  size?: number
  stroke?: number
  from: string
  to: string
  children?: ReactNode
  className?: string
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const id = `ring-${from.replace('#', '')}-${to.replace('#', '')}-${size}`
  return (
    <div className={cn('relative flex items-center justify-center', className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}
