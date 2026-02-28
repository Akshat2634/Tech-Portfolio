"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { ease } from "@/lib/animations"
import { useState, useEffect } from "react"

const roles = ["Software Engineer", "AI Systems Builder", "Multi-Agent Architect"]

function useTypewriter(words: string[], typingSpeed = 75, deletingSpeed = 45, pause = 2200) {
  const [displayed, setDisplayed] = useState(words[0])
  const [wordIdx, setWordIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      setDisplayed(words[0])
      return
    }

    const current = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pause, enabled])

  return { displayed, enabled }
}

export default function Hero() {
  const { displayed: roleText, enabled: typewriterEnabled } = useTypewriter(roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute -top-40 -left-32 w-[580px] h-[580px] rounded-full bg-primary/10 blur-[110px] animate-float-orb pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[480px] h-[480px] rounded-full bg-accent/[0.08] blur-[100px] animate-float-orb-2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[280px] h-[280px] rounded-full bg-primary/[0.06] blur-[80px] animate-float-orb-slow pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:26px_26px] opacity-35 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left: main content */}
          <div className="text-center lg:text-left">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium tracking-wide border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-none gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              Akshat Sahu
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              className="mt-5 h-8 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              <span className="text-lg md:text-xl font-mono text-muted-foreground tracking-wide">
                {roleText}
              </span>
              {typewriterEnabled && (
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle cursor-blink" />
              )}
            </motion.div>

            {/* One-liner */}
            <motion.p
              className="mt-4 text-[15px] text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
            >
              Building production-grade AI agent systems. Specializing in multi-agent orchestration, RAG pipelines, and enterprise AI.
            </motion.p>

            {/* Social links + Resume CTA */}
            <motion.div
              className="mt-8 flex items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
            >
              <Link href="https://github.com/akshat2634" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-border hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-200">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="https://linkedin.com/in/akshat2634" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-border hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-200">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="mailto:akshatsahu2634@gmail.com">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-border hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-200">
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>

              <div className="w-px h-6 bg-border mx-1" />

              <Link
                href="https://drive.google.com/file/d/192o047jClbKZ0vEDSFlkJrTJqOOuBSgL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-primary to-accent/80 hover:from-primary/90 hover:to-accent/70 text-white h-10 px-6 text-sm font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-200">
                  View Resume
                  <ArrowUpRight className="h-4 w-4 ml-1.5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: decorative code card (lg+ only) */}
          <motion.div
            className="hidden lg:block shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            <div className="relative w-64 rounded-2xl border border-border/70 bg-card/70 backdrop-blur-md p-5 shadow-2xl shadow-primary/[0.08]">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-2 text-[10px] font-mono text-muted-foreground/60">engineer.ts</span>
              </div>

              {/* Code content */}
              <div className="space-y-1 font-mono text-[12px] leading-relaxed">
                <p><span className="text-accent">const</span> <span className="text-primary">engineer</span> <span className="text-muted-foreground/70">= {"{"}</span></p>
                <p className="pl-4"><span className="text-muted-foreground/60">name:</span> <span className="text-foreground">&quot;Akshat&quot;</span><span className="text-muted-foreground/70">,</span></p>
                <p className="pl-4"><span className="text-muted-foreground/60">focus:</span> <span className="text-foreground">&quot;AI Agents&quot;</span><span className="text-muted-foreground/70">,</span></p>
                <p className="pl-4"><span className="text-muted-foreground/60">stack:</span> <span className="text-muted-foreground/70">[</span></p>
                <p className="pl-8"><span className="text-accent">&quot;Multi-Agentic Workflows&quot;</span><span className="text-muted-foreground/70">,</span></p>
                <p className="pl-8"><span className="text-accent">&quot;DeepAgents&quot;</span><span className="text-muted-foreground/70">,</span></p>
                <p className="pl-8"><span className="text-accent">&quot;LangGraph&quot;</span><span className="text-muted-foreground/70">,</span></p>
                <p className="pl-8"><span className="text-accent">&quot;RAG&quot;</span><span className="text-muted-foreground/70">,</span></p>
                <p className="pl-8"><span className="text-accent">&quot;MCP&quot;</span></p>
                <p className="pl-4"><span className="text-muted-foreground/70">],</span></p>
                <p className="pl-4"><span className="text-muted-foreground/60">degree:</span> <span className="text-foreground">&quot;MS CS&quot;</span><span className="text-muted-foreground/70">,</span></p>
                <p className="pl-4"><span className="text-muted-foreground/60">gpa:</span> <span className="text-primary font-semibold">3.9</span></p>
                <p><span className="text-muted-foreground/70">{"}"}</span></p>
              </div>

              {/* Glow accents */}
              <div className="absolute -top-px -right-px w-20 h-20 bg-primary/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-px -left-px w-16 h-16 bg-accent/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, ease }}
      >
        <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
