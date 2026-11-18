'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion, setupGsap } from '@/lib/gsap';

/** ~2,000 ms → ~300 ms, drawn to scale and filled as it scrolls into view. */
export function LatencyBars() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = setupGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lat__fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power3.out',
          stagger: 0.35,
          scrollTrigger: { trigger: el, start: 'top 75%', once: true },
        },
      );
      const n = el.querySelector<HTMLElement>('[data-count]');
      if (n) {
        const o = { v: 2000 };
        gsap.to(o, {
          v: 300,
          duration: 2.2,
          ease: 'power3.out',
          delay: 0.4,
          scrollTrigger: { trigger: el, start: 'top 75%', once: true },
          onUpdate: () => {
            n.textContent = `~${Math.round(o.v / 10) * 10}`;
          },
        });
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div className="lat" ref={root}>
      <div className="lat__big">
        <b data-count>~300</b>
        <span>ms per response</span>
      </div>
      <div className="lat__rows">
        <div className="lat__row">
          <span className="lat__label">Before</span>
          <span className="lat__track">
            <span className="lat__fill lat__fill--before" style={{ width: '100%' }} />
          </span>
          <span className="lat__val">~2,000 ms</span>
        </div>
        <div className="lat__row">
          <span className="lat__label">After</span>
          <span className="lat__track">
            <span className="lat__fill lat__fill--after" style={{ width: '15%' }} />
          </span>
          <span className="lat__val">~300 ms</span>
        </div>
      </div>
      <p className="lat__src">Measured end to end on Natvoiz at Natsoft: roughly an 85% reduction.</p>
    </div>
  );
}
