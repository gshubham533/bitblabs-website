import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--color-paper)',
        'paper-2': 'var(--color-paper-2)',
        'paper-3': 'var(--color-paper-3)',
        ink: 'var(--color-ink)',
        'ink-2': 'var(--color-ink-2)',
        muted: 'var(--color-muted)',
        rule: 'var(--color-rule)',
        'rule-2': 'var(--color-rule-2)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          ink: 'var(--color-accent-ink)',
          soft: 'var(--color-accent-soft)',
        },
        focus: 'var(--color-focus)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        heading: ['var(--font-body)'],
        body: ['var(--font-body)'],
      },
      fontSize: {
        'display-sm': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['7.5rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
        in: 'var(--ease-in)',
        'in-out': 'var(--ease-in-out)',
      },
      zIndex: {
        nav: '40',
        overlay: '50',
        modal: '60',
      },
    },
  },
  plugins: [],
}

export default config
