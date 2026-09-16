'use client'

import { BookButton } from '@/components/home/BookButton'
import { BigNum, LabelGrid } from '@/components/home/ui/Editorial'
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
      <div className="bb-home-container">
        <LabelGrid>
          <div>
            <BigNum n="06" kicker="Answers" accent={3} />
            <h2 className="bb-display mt-4 text-[43px] max-sm:text-[34px]">{FAQ.headline}</h2>
            <div className="mt-8">
              <BookButton location="faq">{FAQ.supportCta}</BookButton>
            </div>
          </div>
          <div className="max-w-[760px] border-t border-[var(--bb-line)]">
            <Accordion
              type="single"
              collapsible
              defaultValue={FAQ.items[0]?.id}
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
          </div>
        </LabelGrid>
      </div>
    </section>
  )
}
