import { useEffect, useRef } from "react"
import { usePortfolioMotion } from "@/components/motion-preferences"

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
 * glassReveal — each pane fades and rises into place using compositor properties.
 * Use on card grids in place of staggerItem (pair with staggerContainer).
 */
export const glassReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

/**
 * Honor both the site toggle and system preference for JS-driven reveals.
 */
export function useGlassReveal() {
  const { enabled } = usePortfolioMotion()
  if (!enabled) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { duration: 0 } },
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
  const { enabled } = usePortfolioMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled || typeof window === "undefined" || !window.matchMedia) return
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
      el.dataset.active = "false"
      el.removeEventListener("pointerenter", onEnter)
      el.removeEventListener("pointerleave", onLeave)
      el.removeEventListener("pointermove", onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [enabled])

  return ref
}
