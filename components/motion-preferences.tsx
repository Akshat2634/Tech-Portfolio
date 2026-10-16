"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { MotionConfig, useReducedMotion } from "motion/react"
import { Pause, Play } from "lucide-react"

const MotionContext = createContext({
  enabled: false,
  ready: false,
  systemReduced: false,
  toggle: () => {},
})

export function MotionPreferences({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)
  // Match the server on the first client render, then apply browser preferences.
  const enabled = ready && !reduced && !paused
  const systemReduced = ready && !!reduced
  useEffect(() => {
    setPaused(localStorage.getItem("portfolio-motion") === "paused")
    setReady(true)
  }, [])
  function toggle() {
    setPaused((previous) => {
      localStorage.setItem("portfolio-motion", previous ? "playing" : "paused")
      return !previous
    })
  }
  return (
    <MotionContext.Provider value={{ enabled, ready, systemReduced, toggle }}>
      <MotionConfig reducedMotion={enabled ? "user" : "always"}>
        <div data-motion={enabled ? "on" : "off"}>{children}</div>
      </MotionConfig>
    </MotionContext.Provider>
  )
}

export function usePortfolioMotion() {
  return useContext(MotionContext)
}

export function MotionToggle() {
  const { enabled, ready, systemReduced, toggle } = usePortfolioMotion()
  return (
    <button
      className="motion-toggle"
      onClick={toggle}
      disabled={!ready || systemReduced}
      aria-label={
        systemReduced
          ? "Motion reduced by system preference"
          : enabled
            ? "Pause animations"
            : "Enable animations"
      }
      aria-pressed={!enabled}
    >
      {enabled ? <Pause size={13} /> : <Play size={13} />}
      <span>{enabled ? "Motion on" : "Motion off"}</span>
    </button>
  )
}
