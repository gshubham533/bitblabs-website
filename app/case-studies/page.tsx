import { StoryCaseStudiesIndex } from '@/components/showcase/StoryCaseStudiesIndex'
import { caseStudies } from '@/lib/data'

export default function CaseStudiesPage() {
  return <StoryCaseStudiesIndex studies={caseStudies} />
}
