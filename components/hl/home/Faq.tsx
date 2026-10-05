'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import { FAQ } from '@/lib/landing'
import { BOOK_NAV_LABEL, CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { IconHeadset, IconMail, IconPlus } from '../icons'
import { BookRollButton, Eyebrow, RollButton } from '../ui'

export function Faq() {
  const [open, setOpen] = useState<string | null>(FAQ.items[0]?.id ?? null)

  return (
    <section id="faq" className="scroll-mt-28 py-6 md:pb-10 lg:py-25">
      <div className="hl-container">
        <div className="grid grid-cols-1 items-start gap-7.5 md:grid-cols-3 lg:grid-cols-12 lg:gap-25">
          <div className="col-span-1 space-y-10 lg:col-span-5 lg:space-y-20">
            <div className="space-y-4">
              <Eyebrow className="mb-2.5">{FAQ.eyebrow}</Eyebrow>
              <h2 className="text-2xl font-medium leading-normal tracking-normal text-zinc-950 md:text-4xl lg:text-5xl">
                {FAQ.headline}
              </h2>
            </div>
            <div className="space-y-6 rounded-2xl bg-white p-5 shadow-xl shadow-zinc-200/50 md:p-7.5">
              <span className="flex size-12.5 items-center justify-center rounded-full bg-hl-orange text-white shadow-lg">
                <IconHeadset className="size-6" />
              </span>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-1.5 text-xl font-medium text-zinc-950 md:text-2xl">{FAQ.contactTitle}</h3>
                  <a href={CONTACT_EMAIL_HREF} className="text-base text-zinc-600 underline-offset-4 hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  <RollButton href={CONTACT_EMAIL_HREF} variant="black" icon={<IconMail className="size-5" />}>
                    {FAQ.contactCta}
                  </RollButton>
                  <BookRollButton location="faq" variant="gray">
                    {BOOK_NAV_LABEL}
                  </BookRollButton>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-2.5 lg:col-span-7 lg:space-y-4">
            {FAQ.items.map((item) => {
              const isOpen = open === item.id
              return (
                <div
                  key={item.id}
                  className={cn(
                    'rounded-2xl border border-zinc-100 bg-white transition-all duration-300',
                    isOpen ? 'shadow-md' : 'shadow-sm'
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${item.id}`}
                      onClick={() => {
                        const next = isOpen ? null : item.id
                        setOpen(next)
                        if (next) trackEvent('faq_open', { question_id: next })
                      }}
                      className="inline-flex w-full items-center justify-between gap-4 p-3.5 text-start text-zinc-900 transition hover:text-zinc-500 lg:p-5"
                    >
                      <span className="text-base font-medium md:text-xl">{item.question}</span>
                      <span
                        className={cn(
                          'relative flex size-6.5 shrink-0 items-center justify-center rounded-full bg-zinc-200 transition-transform duration-300 md:size-8.5',
                          isOpen && 'rotate-45'
                        )}
                      >
                        <IconPlus className="size-3 text-zinc-800 md:size-5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-q-${item.id}`}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3.5 pb-3.5 text-base leading-normal text-zinc-500 md:text-lg md:leading-relaxed lg:px-5 lg:pb-5">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
