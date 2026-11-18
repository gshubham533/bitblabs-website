'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { BOOKING_EMBED_URL, BOOKING_URL, contact } from '@/lib/content';
import { D, STAGGER, prefersReducedMotion, setupGsap } from '@/lib/gsap';
import { Dot } from './Title';

const BOOK_SELECTORS = 'a[href="#book"], a[href="/#book"]';

const AGENDA = [
  'The workflow you want to fix, and where it breaks today',
  'What a build would look like, and what it would replace',
  'Timeline, team and an honest yes or no on fit',
];

/**
 * Booking sheet. Dark aside in the site's type, TidyCal on the right.
 * Opens like the menu overlay: scrim fades, panel wipes up, aside lines rise.
 */
export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const closing = useRef(false);
  const openRef = useRef(false);
  openRef.current = open;
  const titleId = useId();

  const openModal = useCallback(() => {
    setMounted(true);
    setOpen(true);
  }, []);

  const finishClose = useCallback(() => {
    closing.current = false;
    setOpen(false);
    if (window.location.hash === '#book') {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const requestClose = useCallback(() => {
    const el = dialog.current;
    if (!el || closing.current) return;
    closing.current = true;
    if (prefersReducedMotion()) return finishClose();
    const { gsap } = setupGsap();
    gsap
      .timeline({ onComplete: finishClose })
      .to(el.querySelector('.book-modal__panel'), { yPercent: 4, opacity: 0, duration: D.arrow * 1.4, ease: 'power2.in' })
      .to(el.querySelector('.book-modal__scrim'), { opacity: 0, duration: D.arrow }, '<0.05');
  }, [finishClose]);

  // Any "#book" link anywhere opens the sheet.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.(BOOK_SELECTORS);
      if (!link) return;
      e.preventDefault();
      openModal();
    };
    document.addEventListener('click', onClick);
    if (window.location.hash === '#book') openModal();
    return () => document.removeEventListener('click', onClick);
  }, [openModal]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const lenis = window.__lenis;
    if (!open) {
      if (el.open) el.close();
      document.documentElement.classList.remove('is-booking');
      lenis?.start();
      return;
    }
    if (!el.open) el.showModal();
    document.documentElement.classList.add('is-booking');
    lenis?.stop();
    closeBtn.current?.focus({ preventScroll: true });

    if (prefersReducedMotion()) return;
    const { gsap } = setupGsap();
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo('.book-modal__scrim', { opacity: 0 }, { opacity: 1, duration: D.paragraph })
        .fromTo(
          '.book-modal__panel',
          { opacity: 1, yPercent: 0, clipPath: 'inset(100% 0% 0% 0% round 16px)' },
          { clipPath: 'inset(0% 0% 0% 0% round 16px)', duration: D.default, clearProps: 'clipPath' },
          0.05,
        )
        .fromTo(
          '.book-modal__rise',
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: D.default, stagger: STAGGER.reveal },
          0.25,
        )
        .fromTo('.book-modal__fade', { opacity: 0 }, { opacity: 1, duration: D.paragraph, stagger: STAGGER.reveal }, 0.45);
    }, el);
    return () => ctx.revert();
  }, [open]);

  useEffect(() => () => document.documentElement.classList.remove('is-booking'), []);

  return (
    <dialog
      ref={dialog}
      className="book-modal"
      aria-labelledby={titleId}
      onCancel={(e) => {
        e.preventDefault();
        requestClose();
      }}
      // Chrome may close natively on Esc despite preventDefault; keep state in sync.
      onClose={() => {
        if (openRef.current) finishClose();
      }}
    >
      <div className="book-modal__scrim" onClick={requestClose} aria-hidden="true" />

      <div className="book-modal__panel">
        <aside className="book-modal__aside" data-theme="dark">
          <div>
            <p className="eyebrow book-modal__fade">
              <span className="eyebrow__slash">/</span> Book a call
            </p>
            <h2 id={titleId} className="book-modal__title">
              <span className="book-modal__mask">
                <span className="book-modal__rise">Let’s find</span>
              </span>
              <span className="book-modal__mask">
                <span className="book-modal__rise">
                  the fit
                  <Dot />
                </span>
              </span>
            </h2>
            <p className="book-modal__lede book-modal__fade">
              Pick a slot that suits you. Bring the process that eats your team’s day, and we’ll tell you straight
              whether we’re the right people to build it.
            </p>
          </div>

          <div className="book-modal__agenda book-modal__fade">
            <p className="book-modal__k">On the call</p>
            <ol>
              {AGENDA.map((a, i) => (
                <li key={a}>
                  <small>({String(i + 1).padStart(2, '0')})</small>
                  {a}
                </li>
              ))}
            </ol>
          </div>

          <div className="book-modal__contact book-modal__fade">
            <p className="book-modal__k">Prefer email?</p>
            <a href={contact.emailHref}>{contact.email}</a>
          </div>
        </aside>

        <section className="book-modal__main" aria-label="Choose a time">
          <header className="book-modal__bar">
            <p className="book-modal__k">
              <span className="book-modal__k-m">
                <span className="eyebrow__slash">/</span> Book a call ·{' '}
              </span>
              Choose a time
            </p>
            <div className="book-modal__bar-r">
              <a className="book-modal__ext" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                New tab ↗
              </a>
              <button ref={closeBtn} type="button" className="book-modal__close label" onClick={requestClose}>
                Close
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M1 1l10 10M11 1 1 11" strokeWidth="1.6" />
                </svg>
              </button>
            </div>
          </header>

          <div className={`book-modal__frame${loaded ? ' is-loaded' : ''}`}>
            <div className="book-modal__loading" aria-hidden={loaded}>
              <span>Loading calendar</span>
              <i />
            </div>
            {mounted ? (
              <iframe
                title="Book a call with BitBLabs"
                src={BOOKING_EMBED_URL}
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setLoaded(true)}
              />
            ) : null}
          </div>
        </section>
      </div>
    </dialog>
  );
}
