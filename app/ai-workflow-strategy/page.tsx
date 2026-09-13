import { redirect } from 'next/navigation'

/** Sales page folded into `/` — keep route file so Next still resolves nested apply paths. */
export default function AiWorkflowStrategyRedirect() {
  redirect('/')
}
