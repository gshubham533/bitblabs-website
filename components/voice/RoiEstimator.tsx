'use client';

import { useId, useState } from 'react';

/**
 * Buyer-side estimate. The only number we supply is the 35–45% reduction in
 * manual follow-ups measured at Natsoft; everything else is the buyer's input.
 */
const LOW = 0.35;
const HIGH = 0.45;

const CURRENCIES = {
  INR: { symbol: '₹', rate: 400, locale: 'en-IN' },
  USD: { symbol: '$', rate: 25, locale: 'en-US' },
} as const;
type Cur = keyof typeof CURRENCIES;

function Field({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  const id = useId();
  return (
    <div className="roi__field">
      <label htmlFor={id}>
        <span>{label}</span>
        <output htmlFor={id}>
          {prefix}
          {value.toLocaleString('en-IN')}
          {suffix}
        </output>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ['--p' as string]: `${((value - min) / (max - min)) * 100}%` }}
      />
      <small>{hint}</small>
    </div>
  );
}

export function RoiEstimator() {
  const [cur, setCur] = useState<Cur>('USD');
  const [calls, setCalls] = useState(3000);
  const [minutes, setMinutes] = useState(6);
  const [rate, setRate] = useState<number>(CURRENCIES.USD.rate);
  const c = CURRENCIES[cur];

  const hours = (calls * minutes) / 60;
  const fmt = (n: number) =>
    `${c.symbol}${Math.round(n).toLocaleString(c.locale)}`;
  const savedHours = [hours * LOW, hours * HIGH];
  const savedMonth = savedHours.map((h) => h * rate);
  const savedYear = savedMonth.map((m) => m * 12);

  const switchCur = (next: Cur) => {
    setCur(next);
    setRate(CURRENCIES[next].rate);
  };

  return (
    <div className="roi">
      <div className="roi__inputs">
        <div className="roi__cur" role="radiogroup" aria-label="Currency">
          {(Object.keys(CURRENCIES) as Cur[]).map((k) => (
            <button key={k} type="button" role="radio" aria-checked={cur === k} className={cur === k ? 'is-on' : ''} onClick={() => switchCur(k)}>
              {k}
            </button>
          ))}
        </div>
        <Field
          label="Follow-up calls your team makes each month"
          hint="Confirmations, reminders, qualification, feedback calls."
          value={calls}
          onChange={setCalls}
          min={200}
          max={50000}
          step={100}
        />
        <Field
          label="Minutes per call, including dialing and notes"
          hint="Count retries and the CRM update afterwards."
          value={minutes}
          onChange={setMinutes}
          min={2}
          max={30}
          step={1}
          suffix=" min"
        />
        <Field
          label="Loaded cost of an agent hour"
          hint="Salary plus overhead, per hour."
          value={rate}
          onChange={setRate}
          min={cur === 'INR' ? 100 : 5}
          max={cur === 'INR' ? 3000 : 120}
          step={cur === 'INR' ? 50 : 1}
          prefix={c.symbol}
        />
      </div>

      <div className="roi__out" aria-live="polite">
        <p className="roi__lead">If voice AI removes 35–45% of that manual work, as it did at Natsoft:</p>
        <div className="roi__big">
          <span>Saved per year</span>
          <b>
            {fmt(savedYear[0])} – {fmt(savedYear[1])}
          </b>
        </div>
        <dl className="roi__grid">
          <div>
            <dt>Team hours freed / month</dt>
            <dd>
              {Math.round(savedHours[0]).toLocaleString('en-IN')} – {Math.round(savedHours[1]).toLocaleString('en-IN')}
            </dd>
          </div>
          <div>
            <dt>Cost saved / month</dt>
            <dd>
              {fmt(savedMonth[0])} – {fmt(savedMonth[1])}
            </dd>
          </div>
          <div>
            <dt>Manual calling today</dt>
            <dd>{Math.round(hours).toLocaleString('en-IN')} hrs / month</dd>
          </div>
        </dl>
        <p className="roi__fine">
          An estimate from your inputs and one measured result, not a quote or a guarantee. Your number depends on your
          workflow, and we work it out properly in discovery.
        </p>
      </div>
    </div>
  );
}
