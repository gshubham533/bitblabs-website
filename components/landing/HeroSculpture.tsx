/** Abstract glossy folded-plane sculpture. Decorative only. */
export function HeroSculpture() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
      <svg
        viewBox="0 0 480 480"
        className="relative h-full w-full motion-safe:animate-float"
        fill="none"
      >
        <defs>
          <linearGradient id="ribbon-a" x1="40" y1="80" x2="420" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#93c5fd" />
            <stop offset="0.45" stopColor="#2563eb" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="ribbon-b" x1="420" y1="60" x2="80" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dbeafe" />
            <stop offset="0.4" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#172554" />
          </linearGradient>
          <linearGradient id="ribbon-c" x1="80" y1="400" x2="400" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eff6ff" />
            <stop offset="0.35" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="white" stopOpacity="0.7" />
            <stop offset="0.4" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#1e3a8a" floodOpacity="0.22" />
          </filter>
        </defs>

        <path
          d="M92 168c38-62 132-92 214-62 58 22 96 62 78 112-16 44-72 54-124 36 42 28 68 74 42 116-30 48-112 58-168 18-62-44-80-132-42-220Z"
          fill="url(#ribbon-a)"
          filter="url(#soft)"
          opacity="0.96"
        />
        <path
          d="M318 96c54 18 92 70 84 128-8 54-52 86-108 92 36 38 40 96 4 128-40 36-118 28-156-18-28-34-24-86 12-118-62 8-108-28-116-84-10-68 52-128 128-140 46-8 110 0 152 12Z"
          fill="url(#ribbon-b)"
          opacity="0.92"
        />
        <path
          d="M156 292c46 54 132 70 188 28 38-28 52-78 24-112-22-28-68-32-104-8 28-46 18-102-24-128-48-30-118-8-142 48-22 50 2 118 58 172Z"
          fill="url(#ribbon-c)"
          opacity="0.88"
        />
        <path
          d="M168 148c46-18 110-8 148 28"
          stroke="url(#sheen)"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M214 236c38 16 86 22 128 6"
          stroke="url(#sheen)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </div>
  )
}
