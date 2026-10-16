"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Network,
  Target,
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
            Building AI coworkers.
            <br />
            Agents that <span>get work done.</span>
          </p>
          <p className="hero-description">
            AI Engineer at Intapp. Previously Founding AI Engineer at FuturePath
            AI. I build autonomous agents that plan, collaborate, and turn goals
            into completed work.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#systems">
                Meet the AI coworker <ArrowDown size={16} />
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
            <span>AI COWORKERS · AUTONOMOUS AGENTS</span>
          </div>
        </div>
        <div
          className="orbital-scene"
          aria-label="An orbital sculpture connecting goals, collaborating agents, and tools"
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
            <Network size={43} strokeWidth={1} />
            <span>AI COWORKER</span>
            <small>Intent → action</small>
          </div>
          <div className="orbit-label orbit-knowledge">
            <Target size={19} />
            <div>
              <span>01 / INTENT</span>
              <strong>A goal worth doing.</strong>
            </div>
          </div>
          <div className="orbit-label orbit-agents">
            <Network size={19} />
            <div>
              <span>02 / TEAMWORK</span>
              <strong>Agents, in sync.</strong>
            </div>
          </div>
          <div className="orbit-label orbit-tools">
            <Braces size={19} />
            <div>
              <span>03 / AUTONOMY</span>
              <strong>From plan to action.</strong>
            </div>
          </div>
          <span className="orbital-coordinate coordinate-top">
            SYSTEM / AS.01
          </span>
          <span className="orbital-coordinate coordinate-bottom">
            DESIGNED TO WORK TOGETHER
          </span>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#systems">
          <span className="scroll-line" /> Scroll to meet your AI coworker{" "}
          <ArrowDown size={14} />
        </a>
        <MotionToggle />
      </div>
    </section>
  )
}
