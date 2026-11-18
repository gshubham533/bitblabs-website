import type { CSSProperties, ReactNode } from 'react';

/** Splits a label into per-character spans so CSS can stagger the roll. */
export function Chars({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <>
      {Array.from(text).map((c, i) => (
        <span key={i} className="roll__c" style={{ '--i': i + offset } as CSSProperties}>
          {c}
        </span>
      ))}
    </>
  );
}

/**
 * nk-style hover: the regular label rolls up character by character while a
 * bold copy, led by the accent slash, rolls in from below.
 */
export function RollLabel({ text }: { text: string }) {
  return (
    <>
      <span className="roll__label" aria-hidden="true">
        <span className="roll__slash">/</span>
        {/* both copies share one grid cell inside a clipping mask: same baseline, no layout shift */}
        <span className="roll__mask">
          <span className="roll__a">
            <Chars text={text} />
          </span>
          <span className="roll__b">
            <Chars text={text} />
          </span>
        </span>
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}

export function Arrow() {
  return (
    <svg className="cta__arrow" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

type CtaProps = {
  href: string;
  children: string;
  arrow?: boolean;
  className?: string;
  external?: boolean;
  extra?: ReactNode;
};

export function Cta({ href, children, arrow = true, className = '', external }: CtaProps) {
  const ext = external ?? href.startsWith('http');
  return (
    <a
      href={href}
      className={`roll cta label ${arrow ? '' : 'cta--noarrow'} ${className}`}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <RollLabel text={children} />
      {arrow && <Arrow />}
    </a>
  );
}
