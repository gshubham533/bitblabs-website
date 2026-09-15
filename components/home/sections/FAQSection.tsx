'use client'

import { BookButton } from '@/components/home/BookButton'
import { SoftReveal } from '@/components/home/motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/home/ui/Accordion'
import { trackEvent } from '@/lib/analytics'
import { FAQ } from '@/lib/landing'

export function FAQSection() {
  return (
    <section id="faq" className="bb-home-section">
      <div className="bb-home-container grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <SoftReveal>
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.08] tracking-tight">
              {FAQ.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--bb-ink-muted)]">
              Still unsure? The session is designed to answer the questions that matter before you
              spend on the wrong build.
            </p>
            <div className="mt-6">
              <BookButton location="faq" className="group">
                {FAQ.supportCta}
              </BookButton>
            </div>
          </div>
        </SoftReveal>

        <SoftReveal delay={0.08}>
          <Accordion
            type="single"
            collapsible
            defaultValue={FAQ.items[0]?.id}
            className="rounded-[1.75rem] border border-[var(--bb-line)] bg-white"
            onValueChange={(value) => {
              if (value) trackEvent('faq_open', { question_id: value })
            }}
          >
            {FAQ.items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SoftReveal>
      </div>
    </section>
  )
}
