import Link from 'next/link'

export function WorkProjectLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  const className = 'btn-primary'

  const children = (
    <>
      <span>{label}</span>
      <span aria-hidden className="text-[0.85em] leading-none">
        →
      </span>
    </>
  )

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
