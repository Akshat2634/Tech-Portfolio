"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Network,
  Briefcase,
  Braces,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useResumeModal } from "./resume-modal-provider"
import { MotionToggle, usePortfolioMotion } from "./motion-preferences"

export default function Hero() {
  const { open, prefetch } = useResumeModal()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)
  const { enabled } = usePortfolioMotion()
  return (
    <section
      id="home"
      ref={ref}
      className="system-hero"
      data-playing={enabled && inView}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-editorial">
        <div className="hero-copy">
          <p className="system-eyebrow">
            <span className="status-dot" /> Available for opportunities
          </p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Akshat Sahu
          </motion.h1>
          <p className="hero-statement">
            AI engineer.
            <br />
            <span>Builder at heart.</span>
          </p>
          <p className="hero-description">
            I build autonomous agents and developer tools. Currently an AI
            engineer at Intapp; previously a founding AI engineer at FuturePath
            AI. Here’s a little about me and the things I’ve built.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#projects">
                View my work <ArrowDown size={16} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => open("hero")}
              onMouseEnter={prefetch}
              onFocus={prefetch}
            >
              View Resume <ArrowUpRight size={16} />
            </Button>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/akshat2634"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/akshat2634"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:akshatsahu2634@gmail.com" aria-label="Email Akshat">
              <Mail size={18} />
            </a>
            <span>SOFTWARE ENGINEER · AI & AGENTS</span>
          </div>
        </div>
        <div
          className="orbital-scene"
          aria-label="Akshat Sahu, AI engineer at Intapp"
          role="img"
        >
          <div className="orbital-halo" />
          <div className="orbital-track track-one">
            <span />
          </div>
          <div className="orbital-track track-two">
            <span />
          </div>
          <div className="orbital-track track-three">
            <span />
          </div>
          <div className="orbital-core">
            <div className="hero-profile-image">
              <Image
                src="/images/portrait-lake.jpeg"
                alt="Akshat Sahu"
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>
            <span>AKSHAT SAHU</span>
            <small>Engineer. Builder. Curious human.</small>
          </div>
          <div className="orbit-label orbit-knowledge">
            <Briefcase size={19} />
            <div>
              <span>CURRENTLY / INTAPP</span>
              <strong>AI Engineer</strong>
            </div>
          </div>
          <div className="orbit-label orbit-agents">
            <Network size={19} />
            <div>
              <span>PREVIOUSLY / FUTUREPATH AI</span>
              <strong>Founding AI Engineer</strong>
            </div>
          </div>
          <div className="orbit-label orbit-tools">
            <Braces size={19} />
            <div>
              <span>WHAT I BUILD</span>
              <strong>Agents &amp; developer tools</strong>
            </div>
          </div>
          <span className="orbital-coordinate coordinate-top">
            A LITTLE ABOUT ME
          </span>
          <span className="orbital-coordinate coordinate-bottom">
            IDEAS, CODE, AND CURIOSITY
          </span>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-line" /> More about me <ArrowDown size={14} />
        </a>
        <MotionToggle />
      </div>
    </section>
  )
}
