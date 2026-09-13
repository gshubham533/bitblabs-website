import { cn } from '@/lib/utils'

interface StrategySplitSectionProps {
  id?: string
  title: string
  intro?: string
  reverse?: boolean
  className?: string
  children: React.ReactNode
  aside: React.ReactNode
}

export function StrategySplitSection({
  id,
  title,
  intro,
  reverse = false,
  className,
  children,
  aside,
}: StrategySplitSectionProps) {
  return (
    <section id={id} className={cn('page-x py-16 md:py-24', className)}>
      <div className="page-max">
        <div
          className={cn(
            'grid min-w-0 grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16',
            reverse && 'md:[&>div:first-child]:order-2'
          )}
        >
          <div className="min-w-0">
            <h2 className="font-display text-[length:var(--text-display-s)] font-bold leading-[0.95] text-ink">
              {title}
            </h2>
            {intro ? (
              <p className="mt-5 max-w-[36rem] font-body text-lg leading-relaxed text-ink-2">
                {intro}
              </p>
            ) : null}
            <div className="mt-8 min-w-0">{children}</div>
          </div>
          <div className="min-w-0">{aside}</div>
        </div>
      </div>
    </section>
  )
}
