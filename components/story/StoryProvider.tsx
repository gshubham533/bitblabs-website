'use client'

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

type StoryLenisContextValue = {
  lenis: Lenis | null
  scrollTo: (target: string | HTMLElement, options?: { offset?: number }) => void
}

const StoryLenisContext = createContext<StoryLenisContextValue>({
  lenis: null,
  scrollTo: () => {},
})

export function useStoryLenis() {
  return useContext(StoryLenisContext)
}

export function StoryProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setLenis(null)
      return
    }

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.15,
    })

    lenisRef.current = instance
    setLenis(instance)

    let frame = 0
    const raf = (time: number) => {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      lenisRef.current = null
      setLenis(null)
    }
  }, [])

  const scrollTo = useCallback((target: string | HTMLElement, options?: { offset?: number }) => {
    const offset = options?.offset ?? -24
    const instance = lenisRef.current

    if (typeof target === 'string') {
      const id = target.startsWith('#') ? target.slice(1) : target
      const el = document.getElementById(id)
      if (!el) return
      if (instance) {
        instance.scrollTo(el, { offset })
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }

    if (instance) {
      instance.scrollTo(target, { offset })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <StoryLenisContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </StoryLenisContext.Provider>
  )
}
