"use client"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

const SECTIONS = ["about", "experience", "education", "skills", "projects", "contact"] as const

export default function SectionViewTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const seen = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (seen.has(id)) continue
          seen.add(id)
          track("section_view", { section: id })
          observer.unobserve(entry.target)
        }
      },
      // Fire when ~40% of the section is visible — avoids registering a "view"
      // for sections the user just blew past while scrolling fast.
      { threshold: 0.4 }
    )

    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
