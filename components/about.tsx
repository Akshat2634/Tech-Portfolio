"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeading from "./section-heading"
import Image from "next/image"
import { ease } from "@/lib/animations"

const stats = [
  { value: 2, suffix: "+", label: "Years Building", decimals: 0 },
  { value: 100, suffix: "+", label: "Autonomous AI Agents", decimals: 0 },
  { value: 10, suffix: "k+", label: "Enterprise Users Impacted", decimals: 0 },
  { value: 3.9, suffix: "", label: "GPA · MS CS", decimals: 1 },
]

function useCountUp(target: number, decimals: number, shouldStart: boolean, duration = 1800, delay = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const timeout = setTimeout(() => {
      const startTime = performance.now()
      const step = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic for satisfying deceleration
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(parseFloat((eased * target).toFixed(decimals)))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay)

    return () => clearTimeout(timeout)
  }, [shouldStart, target, duration, delay, decimals])

  return value
}

function StatCard({
  value,
  suffix,
  label,
  decimals,
  index,
  isInView,
}: {
  value: number
  suffix: string
  label: string
  decimals: number
  index: number
  isInView: boolean
}) {
  const count = useCountUp(value, decimals, isInView, 1800, index * 200)
  const displayValue = decimals > 0 ? count.toFixed(decimals) : count.toString()

  return (
    <motion.div
      className="relative text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease }}
    >
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground tabular-nums">
          {displayValue}
        </span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-semibold text-primary">{suffix}</span>
        )}
      </div>
      <div className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mt-2">
        {label}
      </div>
    </motion.div>
  )
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden ring-1 ring-border">
              <Image
                src="/images/profile.png"
                alt="Akshat Sahu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground mb-4">
              Software Engineer
            </h3>

            <p className="text-[15px] leading-relaxed text-muted-foreground">
              I&apos;m a Software Engineer with a Master&apos;s in Computer Science, passionate about building and startups. I specialize in production-grade AI agent systems at scale — designing multi-agent orchestration platforms, RAG pipelines, and MCP-driven tool integrations with LangGraph, vector databases (LanceDB, Qdrant), Python, FastAPI, and LangChain. At Future Path AI, I&apos;ve architected autonomous enterprise agents for Fortune 500 clients in pharma and financial services, delivering measurable gains in retrieval accuracy, evaluation rigor, and ticket resolution efficiency.
            </p>
          </motion.div>
        </div>

        {/* Impact numbers — bold, minimal, animated */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 py-10 border-t border-b border-border"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
              index={index}
              isInView={statsInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
