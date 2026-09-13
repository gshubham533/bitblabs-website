'use client'

import type { ReactNode } from 'react'

interface CaseStudyExitTransitionProps {
  caseStudy: ReactNode
  afterProcess?: ReactNode
  accent?: string
}

export function CaseStudyExitTransition({
  caseStudy,
  afterProcess,
}: CaseStudyExitTransitionProps) {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {caseStudy}
      {afterProcess}
    </main>
  )
}
