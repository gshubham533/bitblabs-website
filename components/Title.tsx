import type { ReactNode } from 'react';

/**
 * Display heading built from explicit lines so each one can rise from its
 * own mask. `label` is the accessible text.
 */
export function Title({
  as: Tag = 'h2',
  lines,
  label,
  className = '',
  now,
  delay,
  id,
}: {
  as?: 'h1' | 'h2' | 'p';
  lines: ReactNode[];
  label: string;
  className?: string;
  now?: boolean;
  delay?: number;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={className}
      aria-label={label}
      data-s="lines"
      {...(now ? { 'data-now': '' } : {})}
      {...(delay ? { 'data-delay': String(delay) } : {})}
    >
      {lines.map((l, i) => (
        <span className="line" key={i} aria-hidden="true">
          <span className="line-inner">{l}</span>
        </span>
      ))}
    </Tag>
  );
}

export const Dot = () => <span className="dot" />;

/** Small label above a section; its text matches the nav item that links here. */
export function Eyebrow({ children, n, still }: { children: ReactNode; n?: string; still?: boolean }) {
  return (
    <p className="eyebrow" {...(still ? {} : { 'data-s': 'fade' })}>
      {n ? <span className="eyebrow__n">({n})</span> : null}
      <span className="eyebrow__slash">/</span> {children}
    </p>
  );
}
