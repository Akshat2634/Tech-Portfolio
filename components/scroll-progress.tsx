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

    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial calculation
    updateScrollProgress()

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [updateScrollProgress])

  return (
    <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200/50 dark:bg-gray-800/50 z-50 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out will-change-transform"
        style={{ 
          width: `${scrollProgress}%`,
          transform: `translateZ(0)` // Hardware acceleration
        }}
      />
    </div>
  )
} 