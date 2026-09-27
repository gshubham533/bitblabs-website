import type { Config } from 'tailwindcss'

/** Extra quarter-rem steps the Habitline layout relies on (Tailwind 3 lacks them by default). */
const hlSpacing = Object.fromEntries(
  [
    1.25, 1.75, 3.25, 4.5, 5.5, 6.5, 7.5, 8.5, 8.75, 12.5, 13, 15, 17.5, 18, 22, 22.5, 25, 30, 32.5, 34, 35,
    37.5, 42, 45, 46, 50, 54, 55, 62, 62.5, 68, 70, 72.5, 75, 84, 85, 88, 90, 92, 95, 97, 100, 106,
    110, 112, 114, 120, 125, 128, 138, 142, 144, 148, 156, 160, 175, 180, 200,
  ].map((n) => [String(n), `${n / 4}rem`])
)

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: hlSpacing,
      maxWidth: {
        hl: '75rem',
      },
      colors: {
        'hl-bg': '#f7f7f7',
        hl: {
          orange: '#ff4c00',
          green: '#12a70a',
          blue: '#0022ff',
          pink: '#ff00a1',
          azure: '#0059ff',
          violet: '#9000ff',
          red: '#ff0000',
          teal: '#0283a7',
        },
        elevated: '#0c0c0c',
        surface: '#141414',
        canvas: '#f5f6f8',
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          soft: 'rgba(37, 99, 235, 0.1)',
        },
        accent: {
          DEFAULT: '#7c3aed',
          soft: 'rgba(124, 58, 237, 0.12)',
        },
        dark: {
          900: '#050505',
          800: '#0c0c0c',
          700: '#141414',
          600: '#1c1c1c',
          500: '#27272a',
        },
      },
      fontFamily: {
        sans: ['var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
        display: ['var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
        body: ['var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
        editorial: ['var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
        garamond: ['var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
        caslon: ['var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
        headline: ['var(--font-stack-headline)', 'var(--font-google-sans-flex)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      fontSize: {
        'display-sm': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['7.5rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee-vertical': 'marqueeVertical var(--duration, 30s) linear infinite',
        'x-slider': 'xSlider var(--slider-duration, 45s) linear infinite',
        float: 'float 6s ease-in-out infinite',
        'hl-marquee': 'hlMarquee 40s linear infinite',
        'hl-marquee-left': 'hlMarquee 65s linear infinite',
        'hl-marquee-right': 'hlMarqueeRight 65s linear infinite',
        'hl-swap-1': 'hlSwap1 8s infinite',
        'hl-swap-2': 'hlSwap2 8s infinite',
        'hl-swap-3': 'hlSwap3 8s infinite',
        'hl-swap-4': 'hlSwap4 8s infinite',
        'hl-pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marqueeVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        xSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        hlMarquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        hlMarqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        hlSwap1: { '0%, 22%': { opacity: '1' }, '25%, 100%': { opacity: '0' } },
        hlSwap2: { '0%, 22%': { opacity: '0' }, '25%, 47%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        hlSwap3: { '0%, 47%': { opacity: '0' }, '50%, 72%': { opacity: '1' }, '75%, 100%': { opacity: '0' } },
        hlSwap4: { '0%, 72%': { opacity: '0' }, '75%, 97%': { opacity: '1' }, '100%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}

export default config
