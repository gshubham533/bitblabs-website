'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { prefersReducedMotion, setupGsap } from '@/lib/gsap';
import { Cta } from './Roll';
import { Eyebrow } from './Title';

// Most visual screens first: they land in the band's centre.
const WALL = [
  'hf-vendor', 'dpp-consumer', 'cc-dashboard', 'axion-portfolio', 'nv-designer', 'dpp-dashboard',
  'hf-orders', 'nv-analytics', 'axion-kpi', 'cc-course', 'dpp-products', 'hf-wallet',
  'nv-flows', 'axion-screen3', 'cc-branding', 'dpp-passports', 'hf-trade-inquiries', 'nv-conversation',
  'axion-screen2', 'cc-students', 'dpp-my-brand', 'hf-login', 'nv-dashboard', 'axion-screen4',
  'dpp-news-feed', 'cc-login',
];
const CYCLE = [
  { src: 'dpp-dashboard', name: 'DigiProPass' },
  { src: 'hf-vendor', name: 'Healthy Fasal' },
  { src: 'nv-designer', name: 'Natvoiz' },
  { src: 'axion-portfolio', name: 'Axion Plan' },
  { src: 'cc-dashboard', name: 'Course Companion' },
];
const COLS = 6;

/**
 * Full-bleed state: a tilted 3D wall of real product screens, columns drifting
 * in opposite directions. Slot state: one screen at a time, cycling products.
 * The Reel timeline drives `--tilt` and the hand-off between the two.
 */
function ProductWall() {
  const cols = Array.from({ length: COLS }, (_, c) => WALL.filter((_, i) => i % COLS === c));
  return (
    <>
      <div className="wall">
        <div className="wall__plane">
          {cols.map((col, c) => (
            <div
              className="wall__col"
              key={c}
              style={{ '--dur': `${46 + (c % 3) * 9}s`, '--dir': c % 2 ? 'reverse' : 'normal' } as CSSProperties}
            >
              <div className="wall__track">
                {/* two copies per half so each half covers the tilted plane; track loops at -50% */}
                {[...col, ...col, ...col, ...col].map((src, i) => (
                  <figure className="wall__card" key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/brand/wall/${src}.webp`} alt="" loading={i < col.length * 2 ? 'eager' : 'lazy'} />
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="wall__shade" />
      </div>
      <div className="cycle">
        {CYCLE.map((s, i) => (
          <figure className="cycle__item" key={s.src} style={{ '--i': i, '--n': CYCLE.length } as CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/brand/wall/${s.src}.webp`} alt="" />
            <figcaption>{s.name}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

function offsetWithin(el: HTMLElement, ancestor: HTMLElement) {
  let x = 0;
  let y = 0;
  let n: HTMLElement | null = el;
  while (n && n !== ancestor) {
    x += n.offsetLeft;
    y += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}

export function Lattice({ id }: { id: string }) {
  return (
    <svg aria-hidden="true" className="lattice-svg" width="100%" height="100%">
      <defs>
        <pattern id={id} width="180" height="311.77" patternUnits="userSpaceOnUse">
          <path
            d="M0 0 L180 311.77 M180 0 L0 311.77 M90 0 L180 155.88 L90 311.77 L0 155.88 Z M0 155.88 H180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id={`${id}-fade`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-fade)`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} mask={`url(#${id}-mask)`} />
    </svg>
  );
}

/**
 * The hero reel: a full-bleed band that, once pinned, scrubs down into the
 * slot beside "Go" while the headline lines rise in around it.
 */
export function Reel() {
  const pin = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const slot = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const p = pin.current;
    const m = media.current;
    const s = slot.current;
    if (!p || !m || !s) return;
    const { gsap } = setupGsap();
    const lines = p.querySelectorAll('.line-inner');
    const after = p.querySelectorAll('.reel__lede, .reel__cta, .eyebrow');
    const grid = p.querySelector('.reel__grid');

    const wall = m.querySelector('.wall');
    const cycle = m.querySelector('.cycle');

    if (prefersReducedMotion()) {
      const r = offsetWithin(s, p);
      gsap.set(m, { top: r.y, left: r.x, width: r.w, height: r.h });
      gsap.set(grid, { opacity: 1 });
      gsap.set(wall, { opacity: 0 });
      gsap.set(cycle, { opacity: 1 });
      return;
    }

    let ctx: ReturnType<typeof gsap.context> | undefined;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const startBox = () => {
          const g = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gutter')) || 70;
          const w = p.clientWidth - g * 2;
          return { left: g, top: 0, width: w, height: Math.min(window.innerHeight * 0.76, w * 0.6) };
        };
        const end = () => offsetWithin(s, p);

        gsap.set(lines, { yPercent: 100, rotate: 10, opacity: 0, transformOrigin: '0% 100%' });
        gsap.set(after, { opacity: 0, y: 24 });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: p,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: 0.4,
            invalidateOnRefresh: true,
            refreshPriority: 10,
          },
        });

        tl.fromTo(
          m,
          {
            left: () => startBox().left,
            top: () => startBox().top,
            width: () => startBox().width,
            height: () => startBox().height,
          },
          {
            left: () => end().x,
            top: () => end().y,
            width: () => end().w,
            height: () => end().h,
            ease: 'power2.inOut',
            duration: 1,
          },
          0,
        )
          // the wall flattens out of its tilt as it shrinks, then hands over
          // to the single-screen product cycle that lives in the slot
          .fromTo(wall, { '--tilt': 1 }, { '--tilt': 0.1, duration: 1, ease: 'power2.inOut' }, 0)
          .fromTo(wall, { opacity: 1 }, { opacity: 0, duration: 0.22 }, 0.76)
          .fromTo(cycle, { opacity: 0 }, { opacity: 1, duration: 0.22 }, 0.72)
          .fromTo(grid, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.15)
          .to(lines, { yPercent: 0, rotate: 0, opacity: 1, stagger: 0.12, duration: 0.5, ease: 'soft' }, 0.45)
          .to(after, { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: 'soft' }, 0.85)
          .to({}, { duration: 0.15 });
      }, p);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="reel" aria-labelledby="reel-title">
      <div className="reel__pin" ref={pin}>
        <div className="reel__grid">
          <Lattice id="reel-lattice" />
        </div>
        <div className="reel__content wrap">
          <Eyebrow still>Domain</Eyebrow>
          <h2 id="reel-title" className="display-xl" aria-label="Learn the domain.">
            <span className="line" aria-hidden="true">
              <span className="line-inner">
                Learn
                <span className="reel__slot" ref={slot} />
              </span>
            </span>
            <span className="line" aria-hidden="true">
              <span className="line-inner">
                the domain<span className="dot" />
              </span>
            </span>
          </h2>
          <p className="reel__lede body-md">
            Founders bring the expertise. We sit with it until the logic is right, from investment-banking
            models and EU product regulation to farm logistics and university policy, then turn it into
            software people actually use.
          </p>
          <div className="reel__cta">
            <Cta href="#work">See the work</Cta>
          </div>
        </div>
        <div
          className="reel__media"
          ref={media}
          data-theme="dark"
          role="img"
          aria-label="A wall of real product screens from DigiProPass, Healthy Fasal, Natvoiz, Axion Plan and Course Companion"
        >
          <ProductWall />
        </div>
      </div>

    </section>
  );
}
