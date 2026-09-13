import Link from 'next/link'
import { cn } from '@/lib/utils'

type CtaVariant = 'primary' | 'ghost'
type CtaState = 'default' | 'loading' | 'error' | 'success'

interface CtaLinkProps {
  href: string
  children: React.ReactNode
  variant?: CtaVariant
  external?: boolean
  className?: string
  state?: CtaState
  disabled?: boolean
}

export function CtaLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
  state = 'default',
  disabled = false,
}: CtaLinkProps) {
  const classes = cn(
    variant === 'primary' ? 'btn-primary' : 'btn-ghost',
    className
  )

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {children}
      </span>
    )
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        data-state={state === 'default' ? undefined : state}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} data-state={state === 'default' ? undefined : state}>
      {children}
    </Link>
  )
}
