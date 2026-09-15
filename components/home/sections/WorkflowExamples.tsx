'use client'

import { PanelSwap } from '@/components/home/motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/home/ui/Tabs'
import { WorkflowDiagram } from '@/components/home/visuals/WorkflowDiagram'
import { trackEvent } from '@/lib/analytics'
import { WORKFLOW_EXAMPLES } from '@/lib/landing'

export function WorkflowExamples() {
  type TabId = (typeof WORKFLOW_EXAMPLES.tabs)[number]['id']
  const defaultId = WORKFLOW_EXAMPLES.tabs[0].id

  return (
    <section id="examples" className="bb-home-section">
      <div className="bb-home-container">
        <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight">
          {WORKFLOW_EXAMPLES.headline}
        </h2>

        <Tabs
          defaultValue={defaultId}
          className="mt-10"
          onValueChange={(value) => {
            trackEvent('workflow_tab_select', { category: value as TabId })
          }}
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <TabsList aria-label="Workflow categories">
              {WORKFLOW_EXAMPLES.tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div>
              {WORKFLOW_EXAMPLES.tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="bb-panel p-5 sm:p-7">
                  <PanelSwap id={tab.id}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--bb-ink-muted)]">
                        Common workflows
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {tab.workflows.map((w) => (
                          <li
                            key={w}
                            className="rounded-md border border-[var(--bb-line)] bg-[var(--bb-canvas)] px-3 py-1.5 text-xs font-medium text-[var(--bb-ink)]"
                          >
                            {w}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 space-y-4">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                            Before
                          </p>
                          <WorkflowDiagram
                            animate
                            compact
                            variant="fragmented"
                            redrawKey={`${tab.id}-before`}
                            nodes={tab.before.map((label) => ({
                              label,
                              tone: 'amber' as const,
                            }))}
                          />
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                            After
                          </p>
                          <WorkflowDiagram
                            animate
                            compact
                            variant="connected"
                            redrawKey={`${tab.id}-after`}
                            nodes={tab.after.map((label, i, arr) => ({
                              label,
                              tone: (i === arr.length - 1 ? 'mint' : 'brand') as 'mint' | 'brand',
                            }))}
                          />
                        </div>
                      </div>
                    </div>
                  </PanelSwap>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>

        <div className="sr-only">
          {WORKFLOW_EXAMPLES.tabs.map((tab) => (
            <div key={`sr-${tab.id}`}>
              <h3>{tab.label}</h3>
              <p>Before: {tab.before.join(' → ')}</p>
              <p>After: {tab.after.join(' → ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
