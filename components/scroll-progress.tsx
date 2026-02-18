"use client"

import { useEffect, useState, useCallback } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const updateScrollProgress = useCallback(() => {
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = Math.min((scrollPx / winHeightPx) * 100, 100)
    setScrollProgress(scrolled)
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [updateScrollProgress])

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[60]">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
