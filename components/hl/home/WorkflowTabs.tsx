'use client'

import Image from 'next/image'
import { useRef, useState, type KeyboardEvent } from 'react'
import { WORKFLOWS } from '@/lib/landing'
import { cn } from '@/lib/utils'
import { img, KeyIcon, OwnerIcon, ownerBg } from '../tokens'
import { Eyebrow } from '../ui'

export function WorkflowTabs() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = WORKFLOWS.tabs.length
    let next = -1
    if (e.key === 'ArrowRight') next = (i + 1) % n
    if (e.key === 'ArrowLeft') next = (i - 1 + n) % n
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = n - 1
    if (next >= 0) {
      e.preventDefault()
      setActive(next)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <section id="workflows" className="relative scroll-mt-28">
      <div className="hl-dot-grid pointer-events-none absolute inset-0 z-0 opacity-60" aria-hidden />
      <div className="hl-container relative z-10">
        <div className="rounded-2xl bg-white p-8.5 text-center lg:p-25">
          <Eyebrow className="mb-3.5">{WORKFLOWS.eyebrow}</Eyebrow>
          <h2 className="mb-8 text-2xl font-medium leading-[1.1] tracking-normal text-zinc-900 md:mb-12.5 md:text-4xl lg:text-5xl">
            {WORKFLOWS.headlineTop}
            <br className="hidden md:block" /> {WORKFLOWS.headlineBottom}
          </h2>

          <div role="tablist" aria-label="Workflow types" className="mb-7.5 flex flex-wrap justify-center gap-2.5 md:gap-5">
            {WORKFLOWS.tabs.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`wf-tab-${tab.id}`}
                aria-selected={active === i}
                aria-controls={`wf-panel-${tab.id}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  'inline-flex items-center gap-x-2.5 rounded-xl border px-5 py-2.5 text-base font-medium transition-all md:text-lg',
                  active === i
                    ? 'border-zinc-800 bg-zinc-100 text-zinc-900'
                    : 'border-zinc-200 bg-zinc-100 text-zinc-500 hover:text-zinc-700'
                )}
              >
                <KeyIcon name={tab.icon} className="size-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative mx-auto mt-8 max-w-5xl">
            {WORKFLOWS.tabs.map((tab, i) => (
              <div
                key={tab.id}
                id={`wf-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`wf-tab-${tab.id}`}
                hidden={active !== i}
                className="transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-zinc-200/50">
                  <Image
                    src={img(tab.image)}
                    alt={tab.alt}
                    width={1280}
                    height={720}
                    sizes="(min-width: 1024px) 64rem, 100vw"
                    className="h-92 w-full object-cover lg:h-138"
                  />
                  <div className="absolute bottom-2 right-2 w-70 rounded-3xl border border-white/10 bg-zinc-900/60 p-3.5 text-left backdrop-blur-md md:bottom-4 md:right-4 md:w-100 md:p-5 lg:bottom-8 lg:right-8 lg:p-7.5">
                    <p className="mb-3.5 text-sm font-medium tracking-normal text-zinc-300 md:mb-5 md:text-lg">{tab.text}</p>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">{WORKFLOWS.flowLabel}</p>
                    <ol className="space-y-1.5 md:space-y-2">
                      {tab.flow.map((step, n) => (
                        <li key={step.label} className="relative flex items-center gap-2.5">
                          {n < tab.flow.length - 1 ? (
                            <span className="absolute left-2.5 top-5 h-2 w-px bg-white/20 md:left-3 md:top-6" aria-hidden />
                          ) : null}
                          <span
                            className={cn(
                              'flex size-5 shrink-0 items-center justify-center rounded-full text-white md:size-6',
                              ownerBg[step.owner]
                            )}
                          >
                            <OwnerIcon owner={step.owner} className="size-2.5 md:size-3" />
                          </span>
                          <span className="text-sm font-medium text-white md:text-base">{step.label}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-12.5">
            <p className="mb-2.5 text-sm font-medium text-zinc-800">{WORKFLOWS.rhythmLabel}</p>
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-6.5">
              {WORKFLOWS.rhythm.map((tag) => (
                <span key={tag} className="text-sm font-medium text-zinc-900">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
