'use client'

import { useState } from 'react'
import { STRATEGY_FAQ } from '@/lib/strategy'
import { cn } from '@/lib/utils'

interface StrategyFaqProps {
  embedded?: boolean
}

export function StrategyFaq({ embedded = false }: StrategyFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id={embedded ? undefined : 'faq'}
      className={cn(
        'page-x',
        embedded ? 'py-12 md:py-16' : 'border-t border-rule py-16 md:py-24'
      )}
    >
      <div className="page-max">
        <h2 className="font-[family-name:var(--font-story-serif)] text-[length:var(--text-story-chapter)] font-normal text-ink">
          Questions
        </h2>
        <ul className="mt-8 divide-y divide-rule border-y border-rule md:mt-10">
          {STRATEGY_FAQ.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <li key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-[family-name:var(--font-story-serif)] text-base font-normal text-ink md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      'mt-1 shrink-0 font-body text-xl leading-none text-muted transition-transform duration-[var(--dur-micro)] ease-out',
                      isOpen && 'rotate-45'
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-[var(--dur-short)] ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[42rem] pb-5 font-body text-base leading-relaxed text-ink-2">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
