import { SoftReveal } from '@/components/home/motion'
import { DELIVERABLES } from '@/lib/landing'
import { WorkflowDiagram } from '@/components/home/visuals/WorkflowDiagram'
import { cn } from '@/lib/utils'

export function DeliverablesBento() {
  return (
    <section id="deliverables" className="bb-home-section pt-0">
      <div className="bb-home-container">
        <SoftReveal>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
            {DELIVERABLES.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--bb-ink-muted)] sm:text-lg">
            {DELIVERABLES.supporting}
          </p>
        </SoftReveal>

        <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.items.map((item, index) => (
            <SoftReveal
              key={item.title}
              delay={index * 0.04}
              className={cn(
                'h-full',
                item.size === 'lg' && 'sm:col-span-2 lg:row-span-2',
                item.size === 'md' && 'lg:col-span-2'
              )}
            >
              <article className="bb-card flex h-full flex-col p-5 sm:p-6">
                {item.size === 'lg' ? (
                  <div className="mb-4">
                    <WorkflowDiagram
                      compact
                      variant={index === 0 ? 'fragmented' : 'resolved'}
                      className="border-0 bg-[var(--bb-canvas)] p-3 shadow-none"
                      nodes={
                        index === 0
                          ? [
                              { label: 'Today', tone: 'amber' },
                              { label: 'Handoffs', tone: 'amber' },
                              { label: 'Gaps', tone: 'muted' },
                            ]
                          : [
                              { label: '30 days', tone: 'brand' },
                              { label: '60 days', tone: 'brand' },
                              { label: '90 days', tone: 'mint' },
                            ]
                      }
                    />
                  </div>
                ) : (
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--bb-ink-muted)]">
                    Deliverable
                  </p>
                )}
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--bb-ink-muted)]">{item.body}</p>
              </article>
            </SoftReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
