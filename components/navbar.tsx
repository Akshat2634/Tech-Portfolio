"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, FileText } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { useResumeModal } from "@/components/resume-modal-provider"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { open: openResume, prefetch: prefetchResume } = useResumeModal()

  const handleResumeClick = () => {
    setMobileMenuOpen(false)
    openResume("navbar_mobile")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = ["home", "about", "experience", "education", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (window.scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection("contact")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <>
      {/* Desktop nav — lg+ so the pill never overflows on tablets.
          motion owns BOTH x and y so its inline transform doesn't wipe Tailwind's centering. */}
      <motion.header
        className={cn(
          "fixed top-4 left-1/2 z-50 transition-[background-color,box-shadow] duration-300 hidden lg:block max-w-[calc(100vw-2rem)]",
          isScrolled
            ? "glass glass-strong rounded-full px-2 py-1.5"
            : "bg-transparent px-2 py-1.5"
        )}
        initial={{ x: "-50%", y: -20, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="flex items-center gap-1">
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-sm font-bold gradient-text px-3 py-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            AS
          </Link>

          <div className="w-px h-4 bg-border mx-1" />

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "px-3 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "bg-gradient-to-r from-primary/15 to-accent/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                )}
              >
                {link.name}
              </Link>
            )
          })}

          <div className="w-px h-4 bg-border mx-1" />

          <button
            onClick={() => openResume("navbar_desktop")}
            onMouseEnter={prefetchResume}
            onFocus={prefetchResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-full bg-gradient-to-r from-primary to-accent/80 text-white shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-200"
            aria-label="View resume"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </button>

          <ModeToggle />
        </nav>
      </motion.header>

      {/* Mobile + tablet nav (below lg) */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden transition-[background-color,box-shadow] duration-300",
          isScrolled
            ? "glass glass-strong rounded-none"
            : "bg-transparent"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-sm font-bold gradient-text"
          >
            AS
          </Link>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="h-9 w-9 rounded-lg"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="glass glass-strong rounded-none"
            >
              <div className="px-4 py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2.5 px-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={handleResumeClick}
                  onMouseEnter={prefetchResume}
                  onFocus={prefetchResume}
                  className="mt-2 mb-3 flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-accent/80 text-white shadow-md shadow-primary/20"
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
