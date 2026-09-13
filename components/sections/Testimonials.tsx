'use client'

import { testimonials } from '@/lib/testimonials'

interface TestimonialsProps {
  accent?: string
  onlyId?: string
}

export function Testimonials({ accent: _accent, onlyId }: TestimonialsProps) {
  const quote = onlyId
    ? testimonials.find((item) => item.id === onlyId)
    : testimonials[0]

  if (!quote) return null

  return (
    <section id="testimonials" className="border-t border-rule bg-paper py-16 text-ink md:py-24">
      <div className="page-x page-max grid gap-8 md:grid-cols-12 md:gap-16">
        <p className="font-body text-sm text-muted md:col-span-4">From a shipped system</p>
        <figure className="min-w-0 md:col-span-8">
          <blockquote className="font-body text-xl leading-relaxed text-ink md:text-2xl">
            “{quote.quote}”
          </blockquote>
          <figcaption className="mt-5 font-body text-sm text-muted">
            {quote.name}
            {quote.role ? ` · ${quote.role}` : ''}
            {quote.company ? ` · ${quote.company}` : ''}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
