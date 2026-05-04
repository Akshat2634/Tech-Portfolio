"use client"

import { createContext, useContext, useState, useCallback, useRef } from "react"
import { track } from "@vercel/analytics"
import ResumeModal from "./resume-modal"

type ResumeModalContextValue = {
  open: (source?: string) => void
  prefetch: () => void
}

const ResumeModalContext = createContext<ResumeModalContextValue | null>(null)

export function ResumeModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const prefetchedRef = useRef(false)

  const open = useCallback((source = "unknown") => {
    track("resume_view", { source })
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])

  const prefetch = useCallback(() => {
    if (prefetchedRef.current) return
    prefetchedRef.current = true
    const link = document.createElement("link")
    link.rel = "prefetch"
    link.as = "document"
    link.href = "/AkshatSahu_Resume.pdf"
    document.head.appendChild(link)
  }, [])

  return (
    <ResumeModalContext.Provider value={{ open, prefetch }}>
      {children}
      <ResumeModal open={isOpen} onClose={close} />
    </ResumeModalContext.Provider>
  )
}

export function useResumeModal(): ResumeModalContextValue {
  const ctx = useContext(ResumeModalContext)
  if (!ctx) {
    throw new Error("useResumeModal must be used within a ResumeModalProvider")
  }
  return ctx
}
