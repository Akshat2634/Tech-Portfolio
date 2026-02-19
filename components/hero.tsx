"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { ease } from "@/lib/animations"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium tracking-wide border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          Akshat Sahu
        </motion.h1>

        {/* Title */}
        <motion.p
          className="mt-4 text-lg md:text-xl font-mono text-muted-foreground tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          Software Engineer
        </motion.p>

        {/* One-liner */}
        <motion.p
          className="mt-3 text-[15px] text-muted-foreground max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
        >
          Building production-grade AI agent systems. Specializing in multi-agent orchestration, RAG pipelines, and enterprise AI.
        </motion.p>

        {/* Social links + Resume CTA */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
        >
          <Link href="https://github.com/akshat2634" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-lg border-border hover:border-primary/30 hover:bg-muted transition-all duration-200">
              <Github className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="https://linkedin.com/in/akshat2634" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-lg border-border hover:border-primary/30 hover:bg-muted transition-all duration-200">
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="mailto:akshatsahu2634@gmail.com">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-lg border-border hover:border-primary/30 hover:bg-muted transition-all duration-200">
              <Mail className="h-4 w-4" />
            </Button>
          </Link>

          <div className="w-px h-6 bg-border mx-1" />

          <Link
            href="https://drive.google.com/file/d/192o047jClbKZ0vEDSFlkJrTJqOOuBSgL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-5 text-sm font-medium rounded-lg transition-colors duration-200">
              View Resume
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, ease }}
      >
        <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
