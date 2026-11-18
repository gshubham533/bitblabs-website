'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

let registered = false;

/**
 * Motion tokens lifted from nk.studio's bundle:
 *  - every named ease is cubic-bezier(0.18, 1, 0.32, 1)
 *  - durations: arrow .22, paragraph .42, card .52, title .6, hero .66, default .72, storytelling 2
 *  - staggers: reveal .07, scrub .1, chars .02
 */
export const D = {
  arrow: 0.22,
  paragraph: 0.42,
  card: 0.52,
  title: 0.6,
  hero: 0.66,
  default: 0.72,
  story: 2,
};
export const STAGGER = { reveal: 0.07, scrub: 0.1, chars: 0.02 };
export const EASE = 'soft';

export function setupGsap() {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create('soft', 'M0,0 C0.18,1 0.32,1 1,1');
    gsap.defaults({ ease: 'soft' });
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger };
