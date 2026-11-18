'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { BOOKING_HASH, BOOK_LABEL, contact, nav, primaryNav } from '@/lib/content';
import { Cta, RollLabel } from './Roll';
import { D, STAGGER, prefersReducedMotion, setupGsap } from '@/lib/gsap';

const SUFFIXES = ['studio', 'ai', 'web', 'products'];

export function Logo({ onClick }: { onClick?: () => void }) {
  const words = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | null>(null);
  const idx = useRef(0);

  const step = useCallback(() => {
    const el = words.current;
    if (!el) return;
    idx.current = (idx.current + 1) % SUFFIXES.length;
    const { gsap } = setupGsap();
    gsap.to(el.firstElementChild, { yPercent: -100 * idx.current, duration: D.title });
  }, []);

  const start = () => {
    if (prefersReducedMotion() || timer.current) return;
    timer.current = window.setInterval(step, 1000);
  };
  const stop = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
    idx.current = 0;
    const el = words.current?.firstElementChild;
    if (el) {
      const { gsap } = setupGsap();
      gsap.to(el, { yPercent: 0, duration: D.title, delay: 0.25 });
    }
  };

  useEffect(() => () => stop(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <a
      href="/#top"
      className="logo"
      aria-label="BitBLabs, back to top"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo__mark" src="/brand/mark.png" alt="" width={36} height={36} />
      <span className="logo__word">
        BitBLabs
        <span className="logo__suffix" aria-hidden="true">
          .
          <span className="logo__words" ref={words}>
            <span style={{ display: 'block' }}>
              {SUFFIXES.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </span>
          </span>
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const header = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Scroll state + theme detection (which section sits under the header line).
  useEffect(() => {
    let raf = 0;
    const probeY = 76;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 80);
      const darks = document.querySelectorAll<HTMLElement>('main [data-theme="dark"], footer[data-theme="dark"]');
      let dark = false;
      darks.forEach((s) => {
        const r = s.getBoundingClientRect();
        // ignore small dark elements (e.g. the reel once it sits in its slot)
        if (r.width < window.innerWidth * 0.5) return;
        if (r.top <= probeY && r.bottom > probeY) dark = true;
      });
      setTheme(dark ? 'dark' : 'light');
      const foot = document.querySelector('footer');
      setHidden(!!foot && foot.getBoundingClientRect().top < 150);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hero enter: nav labels "print" in, character by character (opacity keyframes .25/.5/.75/1).
  useEffect(() => {
    const el = header.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = setupGsap();
    el.classList.add('is-printing');
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.logo, .nav a, .header__right .cta', el);
      items.forEach((item, i) => {
        const chars = item.querySelectorAll('.roll__a .roll__c');
        const delay = 0.05 + i * 0.15;
        if (chars.length) {
          gsap.fromTo(
            chars,
            { opacity: 0 },
            {
              keyframes: [{ opacity: 0.25 }, { opacity: 0.5 }, { opacity: 0.75 }, { opacity: 1 }],
              duration: D.arrow,
              stagger: STAGGER.chars,
              ease: 'soft',
              delay,
            },
          );
        } else {
          gsap.fromTo(item, { opacity: 0 }, { opacity: 1, duration: D.paragraph, delay });
        }
      });
      gsap.delayedCall(0.05 + items.length * 0.15 + 0.5, () => {
        el.classList.remove('is-printing');
        gsap.set(el.querySelectorAll('.roll__c'), { clearProps: 'opacity' });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  // Menu timeline: black panel wipes in from the right, items rise line by line.
  useEffect(() => {
    const m = menu.current;
    if (!m) return;
    const { gsap } = setupGsap();
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(m, { visibility: 'visible' })
        .fromTo(m, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: D.default })
        .fromTo(
          '.menu__item',
          { yPercent: 100, rotate: 6, opacity: 0, transformOrigin: '0% 100%' },
          { yPercent: 0, rotate: 0, opacity: 1, duration: D.default, stagger: STAGGER.reveal },
          0.22,
        )
        .fromTo('.menu__fade', { opacity: 0 }, { opacity: 1, duration: D.paragraph }, 0.45);
    }, m);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const t = tl.current;
    if (!t) return;
    const lenis = window.__lenis;
    if (open) {
      lenis?.stop();
      t.timeScale(1).play();
      (menu.current?.querySelector('.menu__close') as HTMLElement | null)?.focus();
    } else {
      t.timeScale(1.6).reverse();
      lenis?.start();
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header
        ref={header}
        className={`header ${scrolled ? 'is-scrolled' : ''} ${hidden && !open ? 'is-hidden' : ''}`}
        data-theme={theme}
      >
        <Logo />
        <nav className="nav" aria-label="Primary">
          {primaryNav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className="roll"
              style={{ '--d': `${(primaryNav.length - i) * 30}ms` } as CSSProperties}
            >
              <RollLabel text={n.label} />
            </a>
          ))}
        </nav>
        <div className="header__right">
          <Cta href={BOOKING_HASH} arrow={false} external={false}>
            {BOOK_LABEL}
          </Cta>
          <button
            ref={menuBtn}
            className="menu-btn roll label"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <RollLabel text="Menu" />
          </button>
        </div>
      </header>

      <div
        ref={menu}
        id="site-menu"
        className="menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        data-theme="dark"
      >
        <div className="menu__top">
          <Logo onClick={close} />
          <button className="menu__close label" onClick={close}>
            Close
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M1 1l10 10M11 1 1 11" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
        <ul className="menu__list">
          {[...nav, { label: BOOK_LABEL, href: BOOKING_HASH }].map((n, i) => (
            <li key={n.href} className="menu__item">
              <small>({String(i + 1).padStart(2, '0')})</small>
              <a
                href={n.href}
                onClick={close}
                {...(n.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu__bottom body-xs menu__fade">
          <span>{contact.location}. Accepting new projects.</span>
          <a className="cta label cta--noarrow" href={contact.emailHref}>
            {contact.email}
          </a>
        </div>
      </div>
    </>
  );
}
