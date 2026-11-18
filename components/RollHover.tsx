'use client';

import { useEffect } from 'react';

/**
 * Adds `is-leaving` to a `.roll` link for the length of its mouse-out roll, so
 * the exit keeps travelling upward (see `.roll.is-leaving` in globals.css).
 * One delegated listener covers every roll link on the page.
 */
export function RollHover() {
  useEffect(() => {
    const timers = new WeakMap<Element, number>();

    const onOut = (e: MouseEvent) => {
      const roll = (e.target as Element | null)?.closest?.('.roll');
      if (!roll) return;
      const to = e.relatedTarget as Node | null;
      if (to && roll.contains(to)) return; // still inside the link
      const chars = roll.querySelectorAll('.roll__a .roll__c').length;
      const ms = 420 + chars * 16 + 60;
      roll.classList.add('is-leaving');
      window.clearTimeout(timers.get(roll));
      timers.set(roll, window.setTimeout(() => roll.classList.remove('is-leaving'), ms));
    };

    const onOver = (e: MouseEvent) => {
      const roll = (e.target as Element | null)?.closest?.('.roll');
      if (!roll || !roll.classList.contains('is-leaving')) return;
      window.clearTimeout(timers.get(roll));
      roll.classList.remove('is-leaving');
    };

    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseover', onOver);
    return () => {
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return null;
}
