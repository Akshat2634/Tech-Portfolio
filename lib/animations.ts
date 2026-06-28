import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"

export const ease = [0.25, 0.46, 0.45, 0.94] as const

export const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

/**
 * glassReveal — the liquid-glass entrance: each pane "focuses into" existence,
 * fading + rising while a soft blur resolves to sharp, like a lens settling.
 * Use on card grids in place of staggerItem (pair with staggerContainer).
 */
export const glassReveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease },
  },
}

/**
 * Reduced-motion-aware glassReveal. framer-motion animations are JS-driven and
 * are NOT stopped by the global prefers-reduced-motion CSS rule, so we gate the
 * blur/travel here: reduced-motion users get a plain, quick opacity fade.
 */
export function useGlassReveal() {
  const reduce = useReducedMotion()
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }
  return glassReveal
}

/**
 * useGlassSheen — the signature interactive light. Attach the returned ref to a
 * `.glass-sheen` element; a soft specular glow tracks the pointer across it.
 *
 * Hard guards (per the design spec): bails entirely on touch (pointer: coarse)
 * and on prefers-reduced-motion; binds pointermove ONLY while hovered; rAF-
 * throttled; writes only the --mx/--my CSS vars (no React re-render, no layout
 * thrash beyond one cached rect per hover). Cap usage to ≤6 elements site-wide.
 */
export function useGlassSheen<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === "undefined" || !window.matchMedia) return
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    let rect: DOMRect | null = null
    let raf = 0
    let nextX = 50
    let nextY = 50

    const apply = () => {
      raf = 0
      el.style.setProperty("--mx", `${nextX}%`)
      el.style.setProperty("--my", `${nextY}%`)
    }

    const onMove = (e: PointerEvent) => {
      if (!rect) rect = el.getBoundingClientRect()
      nextX = ((e.clientX - rect.left) / rect.width) * 100
      nextY = ((e.clientY - rect.top) / rect.height) * 100
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onEnter = () => {
      rect = el.getBoundingClientRect()
      el.dataset.active = "true"
      el.addEventListener("pointermove", onMove)
    }

    const onLeave = () => {
      el.removeEventListener("pointermove", onMove)
      el.dataset.active = "false"
      rect = null
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    el.addEventListener("pointerenter", onEnter)
    el.addEventListener("pointerleave", onLeave)

    return () => {
      el.removeEventListener("pointerenter", onEnter)
      el.removeEventListener("pointerleave", onLeave)
      el.removeEventListener("pointermove", onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}
