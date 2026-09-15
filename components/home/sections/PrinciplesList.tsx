import { SoftReveal } from '@/components/home/motion'
import { PRINCIPLES } from '@/lib/landing'
import { WorkflowDiagram } from '@/components/home/visuals/WorkflowDiagram'
import { cn } from '@/lib/utils'

export function PrinciplesList() {
  return (
    <section id="principles" className="bb-home-section">
      <div className="bb-home-container">
        <SoftReveal>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
            {PRINCIPLES.headline}
          </h2>
        </SoftReveal>

        <div className="mt-12 space-y-10">
          {PRINCIPLES.items.map((item, index) => {
            const reverse = index % 2 === 1
            return (
              <SoftReveal key={item.title} delay={index * 0.05}>
                <article
                  className={cn(
                    'grid items-center gap-6 lg:grid-cols-2 lg:gap-12',
                    reverse && 'lg:[&>*:first-child]:order-2'
                  )}
                >
                  <div>
                    <p className="font-mono text-xs text-[var(--bb-ink-muted)]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--bb-ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                  <WorkflowDiagram
                    compact
                    variant={index === 0 ? 'fragmented' : 'connected'}
                    nodes={
                      index === 0
                        ? [
                            { label: 'Task', tone: 'amber' },
                            { label: 'Gap', tone: 'amber' },
                            { label: 'Broken rest', tone: 'muted' },
                          ]
                        : index === 2
                          ? [
                              { label: 'System', tone: 'mint' },
                              { label: 'Human review', tone: 'brand' },
                              { label: 'Escalate', tone: 'brand' },
                            ]
                          : [
                              { label: 'Your tools', tone: 'brand' },
                              { label: 'Your rules', tone: 'brand' },
                              { label: 'Working system', tone: 'mint' },
                            ]
                    }
                  />
                </article>
              </SoftReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
