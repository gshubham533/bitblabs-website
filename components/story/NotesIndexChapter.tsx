'use client'

import Link from 'next/link'
import { StoryHandwrittenNote, StoryReveal } from '@/components/story/StoryReveal'
import type { CaseStudy } from '@/lib/data'

interface NotesIndexChapterProps {
  id?: string
  studies: CaseStudy[]
}

export function NotesIndexChapter({ id = 'notes', studies }: NotesIndexChapterProps) {
  return (
    <section
      id={id}
      className="bg-paper px-6 py-16 md:py-24 pb-[calc(var(--story-nav-offset)+3rem)]"
    >
      <div className="mx-auto max-w-4xl">
        <StoryReveal className="mb-8" variant="soft">
          <StoryHandwrittenNote text="reading list" />
        </StoryReveal>

        <ul className="divide-y divide-rule border-y border-rule">
          {studies.map((study, index) => (
            <StoryReveal key={study.slug} delay={Math.min(index * 0.03, 0.24)}>
              <li>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block py-5 transition-colors duration-[var(--dur-short)] hover:bg-paper-2/50 md:py-6"
                >
                  <p className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    {study.category} · {study.readTime}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-story-serif)] text-xl leading-[1.1] text-ink md:text-2xl">
                    {study.title}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-2 md:text-base">
                    {study.description}
                  </p>
                </Link>
              </li>
            </StoryReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
