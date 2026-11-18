'use client';

import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '@/lib/gsap';

/**
 * Hero illustration of an offer-acceptance call, the first workflow we
 * automated at Natsoft. Scripted (and labelled as such), not a customer
 * transcript. Drawn the way a voice engineer reads a call: two speaker
 * tracks on one timeline, the response gap, and the fields pulled out live.
 */
type Turn = { who: 'agent' | 'caller'; start: number; end: number; text: string };

const TURNS: Turn[] = [
  { who: 'agent', start: 0, end: 4.6, text: 'Hi Priya, this is the hiring team. Your offer letter went out today. Do you have a minute?' },
  { who: 'caller', start: 5.1, end: 7.6, text: 'Yes, I saw it. I had a question about the joining date.' },
  { who: 'agent', start: 7.9, end: 11.8, text: 'Of course. It says the 3rd. Shall I request a later date for you?' },
  { who: 'caller', start: 12.4, end: 13.9, text: 'The 10th would be easier.' },
  { who: 'agent', start: 14.2, end: 18.4, text: 'Done. I’ve logged it, and your recruiter will confirm by email today.' },
];

const FIELDS: { k: string; v: string; at: number }[] = [
  { k: 'Sentiment', v: 'Positive', at: 7.6 },
  { k: 'Joining date', v: '3rd → 10th', at: 13.9 },
  { k: 'Outcome', v: 'Change logged', at: 18.4 },
  { k: 'CRM', v: 'Record + transcript synced', at: 19.2 },
];

const TOTAL = 19.5; // timeline width in seconds
const END = 19.4; // when the call is fully played
const HOLD = 5; // seconds to rest on the finished call before looping
const TICKS_PER_SEC = 9;

const pct = (s: number) => `${Math.round((s / TOTAL) * 10000) / 100}%`;
const rand = (i: number, seed: number) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const clock = (s: number) => `00:${String(Math.floor(Math.min(s, 18.4))).padStart(2, '0')}`;

/** Deterministic speech-like envelope for one turn. */
const ticksFor = (t: Turn, seed: number) => {
  const n = Math.max(6, Math.round((t.end - t.start) * TICKS_PER_SEC));
  return Array.from({ length: n }, (_, k) => {
    const x = (k + 0.5) / n;
    const env = Math.pow(Math.sin(Math.PI * x), 0.45);
    const h = Math.round(18 + env * 82 * (0.35 + 0.65 * rand(k, seed)));
    return { h, at: t.start + x * (t.end - t.start) };
  });
};
const TRACK = TURNS.map((t, i) => ticksFor(t, i + 1));

export function CallDemo() {
  const [t, setT] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setT(END);
      return;
    }
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    if (root.current) io.observe(root.current);
    let last = performance.now();
    const id = window.setInterval(() => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      if (!visible || document.hidden) return;
      setT((v) => (v + dt > END + HOLD ? 0 : v + dt));
    }, 100);
    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, []);

  const head = Math.min(t, END);
  const current = TURNS.findIndex((x) => head >= x.start && head < x.end);

  return (
    <div
      className="vcall"
      ref={root}
      role="img"
      aria-label="Illustration of an AI voice call: the agent and a candidate take turns, the agent replies in about 300 milliseconds, and the joining-date change is written to the CRM."
    >
      <div className="vcall__top" aria-hidden="true">
        <span className="vcall__rec">
          <i className={current >= 0 ? 'is-on' : ''} /> Offer acceptance
        </span>
        <span className="vcall__meta">
          EN · <b>{clock(head)}</b> / 00:18
        </span>
      </div>

      {/* Two speaker tracks on one timeline */}
      <div className="vcall__tl" aria-hidden="true">
        {(['agent', 'caller'] as const).map((who) => (
          <div className="vcall__lane" key={who}>
            <span className="vcall__lane-k">{who === 'agent' ? 'Agent' : 'Caller'}</span>
            <div className={`vcall__track vcall__track--${who}`}>
              {TURNS.map((turn, i) =>
                turn.who !== who ? null : (
                  <div key={i} className="vcall__turn" style={{ left: pct(turn.start), width: pct(turn.end - turn.start) }}>
                    {TRACK[i].map((k, j) => (
                      <span key={j} className={k.at <= head ? 'is-played' : ''} style={{ height: `${k.h}%` }} />
                    ))}
                  </div>
                ),
              )}
              {who === 'agent' &&
                TURNS.map((turn, i) => {
                  const prev = TURNS[i - 1];
                  if (turn.who !== 'agent' || !prev) return null;
                  return (
                    <span
                      key={`g${i}`}
                      className={`vcall__gap${head >= turn.start ? ' is-on' : ''}`}
                      style={{ left: pct(prev.end), width: pct(turn.start - prev.end) }}
                    >
                      <em>0.3s</em>
                    </span>
                  );
                })}
            </div>
          </div>
        ))}
        <div className="vcall__axis">
          <span className="vcall__lane-k" />
          <div>
            {[0, 5, 10, 15].map((s) => (
              <span key={s} style={{ left: pct(s) }}>
                {s}s
              </span>
            ))}
          </div>
        </div>
        <div className="vcall__playhead-wrap">
          <span className="vcall__playhead" style={{ left: pct(head) }} />
        </div>
      </div>

      {/* Transcript, typeset rather than bubbled */}
      <ol className="vcall__script" aria-hidden="true">
        {TURNS.map((turn, i) => {
          const state = head >= turn.end ? 'past' : i === current ? 'now' : 'next';
          const words = turn.text.split(' ');
          const spoken =
            state === 'past' ? words.length : state === 'now' ? Math.ceil(((head - turn.start) / (turn.end - turn.start)) * words.length) : 0;
          return (
            <li key={i} className={`vcall__line is-${state} vcall__line--${turn.who}`}>
              <span className="vcall__who">
                {turn.who === 'agent' ? 'Agent' : 'Priya'}
                {turn.who === 'agent' && i > 0 && <small>+0.3s</small>}
              </span>
              <p>
                {words.map((w, j) => (
                  <span key={j} className={j < spoken ? 'is-said' : ''}>
                    {w}{' '}
                  </span>
                ))}
              </p>
            </li>
          );
        })}
      </ol>

      {/* Fields the agent fills while it listens */}
      <div className="vcall__out" aria-hidden="true">
        <p className="vcall__out-h">Captured during the call</p>
        <dl>
          {FIELDS.map((f) => (
            <div key={f.k} className={head >= f.at ? 'is-on' : ''}>
              <dt>{f.k}</dt>
              <dd>{head >= f.at ? f.v : '—'}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="vcall__note">Scripted example of a Natvoiz flow · illustration</p>
    </div>
  );
}
