'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { D, STAGGER, prefersReducedMotion, setupGsap } from '@/lib/gsap';

declare global {
  interface Window {
    __lenis?: Lenis;
    __motionReady?: boolean;
  }
}

/**
 * Attribute-driven reveal presets, mirroring nk.studio's js-s-* classes:
 *  data-s="lines"   display titles built from .line > .line-inner (yPercent 100 + rotate 10 → 0)
 *  data-s="para"    paragraphs rise softly
 *  data-s="fade"    opacity
 *  data-s="up"      opacity + 24px rise
 *  data-s="blur"    children un-blur in sequence (blur 15 → 0)
 *  data-s="stagger" children rise in sequence
 *  data-s="image"   mask-appear (y 48, 2s) + inner [data-parallax] scrubbed parallax
 *  data-s="xscroll" element slides horizontally with scroll
 * Add data-now to play on load (hero) and data-delay="0.3" to offset.
 */
export function Motion() {
  useEffect(() => {
    const { gsap, ScrollTrigger } = setupGsap();
    const html = document.documentElement;

    if (prefersReducedMotion()) {
      html.classList.remove('js');
      html.classList.add('reduced');
      window.__motionReady = true;
      return;
    }

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href*="#"]');
      if (!a) return;
      const url = new URL(a.getAttribute('href') || '', window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const id = url.hash;
      const target = id === '#top' ? 0 : document.querySelector<HTMLElement>(id);
      if (target === null) return;
      e.preventDefault();
      lenis.scrollTo(target, { duration: 1.6 });
      history.replaceState(null, '', id === '#top' ? window.location.pathname : id);
    };
    document.addEventListener('click', onClick);

    let ctx: ReturnType<typeof gsap.context> | undefined;
    let cancelled = false;

    const init = () => {
      const st = (el: Element, extra: ScrollTrigger.Vars = {}) =>
        el.hasAttribute('data-now') ? undefined : { trigger: el, start: 'top 90%', once: true, ...extra };
      const delay = (el: HTMLElement) => parseFloat(el.dataset.delay || '0');

      gsap.utils.toArray<HTMLElement>('[data-s="lines"]').forEach((el) => {
        const inners = el.querySelectorAll('.line-inner');
        gsap.fromTo(
          inners,
          { yPercent: 100, rotate: 10, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: D.default,
            stagger: STAGGER.reveal,
            delay: delay(el),
            scrollTrigger: st(el),
          },
        );
      });

      // Paragraphs: a single soft rise. (Line-splitting every paragraph made the page feel slow.)
      gsap.utils.toArray<HTMLElement>('[data-s="para"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: D.default, delay: delay(el), scrollTrigger: st(el) },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-s="fade"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          { opacity: 1, duration: D.title, delay: delay(el), scrollTrigger: st(el) },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-s="up"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: D.default, delay: delay(el), scrollTrigger: st(el) },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-s="blur"]').forEach((el) => {
        gsap.fromTo(
          el.children,
          { opacity: 0, filter: 'blur(15px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: D.default,
            stagger: STAGGER.scrub,
            delay: delay(el),
            scrollTrigger: st(el),
            clearProps: 'filter',
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-s="stagger"]').forEach((el) => {
        gsap.fromTo(
          el.children,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: D.default,
            stagger: STAGGER.scrub,
            delay: delay(el),
            scrollTrigger: st(el),
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-s="image"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: D.story, delay: delay(el), scrollTrigger: st(el, { start: 'top 80%' }) },
        );
        const p = el.querySelector<HTMLElement>('[data-parallax]');
        if (p) {
          // "soft": framed content (cards) drifts without zooming, so the frame stays intact.
          const soft = p.dataset.parallax === 'soft';
          gsap.fromTo(
            p,
            soft ? { scale: 1, yPercent: -3 } : { scale: 1.17, yPercent: -7 },
            {
              yPercent: soft ? 3 : 7,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>('[data-s="xscroll"]').forEach((el) => {
        gsap.fromTo(
          el,
          { x: 0 },
          {
            x: () => -Math.max(0, el.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      window.__motionReady = true;
      window.dispatchEvent(new Event('motion:ready'));
    };

    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx = gsap.context(init);
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      cancelled = true;
      document.removeEventListener('click', onClick);
      window.removeEventListener('load', onLoad);
      ctx?.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
