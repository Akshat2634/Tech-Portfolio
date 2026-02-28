"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeading from "./section-heading"
import Image from "next/image"
import { ease } from "@/lib/animations"
import { Clock, BrainCircuit, Users, GraduationCap, Code, Database, Layers } from "lucide-react"

const stats = [
  { value: 2,   suffix: "+",  label: "Years Building",             decimals: 0, icon: Clock },
  { value: 100, suffix: "+",  label: "Autonomous AI Agents",       decimals: 0, icon: BrainCircuit },
  { value: 10,  suffix: "k+", label: "Enterprise Users Impacted",  decimals: 0, icon: Users },
  { value: 3.9, suffix: "",   label: "GPA · MS CS",                decimals: 1, icon: GraduationCap },
]

const whatIDo = [
  { icon: BrainCircuit, label: "Multi-Agent Orchestration Platforms" },
  { icon: Database,     label: "RAG Pipelines & Vector Databases" },
  { icon: Layers,       label: "Enterprise AI Systems at Scale" },
  { icon: Code,         label: "FastAPI · LangGraph · Python · TypeScript" },
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
  icon: Icon,
}: {
  value: number
  suffix: string
  label: string
  decimals: number
  index: number
  isInView: boolean
  icon: React.ElementType
}) {
  const count = useCountUp(value, decimals, isInView, 1800, index * 200)
  const displayValue = decimals > 0 ? count.toFixed(decimals) : count.toString()

  return (
    <motion.div
      className="relative text-center group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease }}
    >
      <div className="mx-auto mb-3 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-4xl md:text-5xl font-bold tracking-tight gradient-text tabular-nums">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Profile image with gradient border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Decorative dot grid accents */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:8px_8px] opacity-30 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[radial-gradient(hsl(var(--accent))_1px,transparent_1px)] [background-size:6px_6px] opacity-25 -z-10" />

              {/* Gradient border wrapper */}
              <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-primary/60 via-primary/20 to-accent/60 shadow-xl shadow-primary/10">
                <div className="relative w-full aspect-square rounded-[13px] overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="Akshat Sahu"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-lg text-xs font-mono z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="text-foreground font-medium">Available for hire</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
              Software Engineer
            </h3>
            <p className="text-sm text-primary font-mono mb-5">
              Founding Engineer @ Future Path AI
            </p>

            <p className="text-[15px] leading-7 text-muted-foreground mb-6">
              I&apos;m a Software Engineer with a Master&apos;s in Computer Science, passionate about building and startups. I specialize in production-grade AI agent systems at scale — designing multi-agent orchestration platforms, RAG pipelines, and MCP-driven tool integrations with LangGraph, vector databases (LanceDB, Qdrant), Python, FastAPI, and LangChain. At Future Path AI, I&apos;ve architected autonomous enterprise agents for Fortune 500 clients in pharma and financial services, delivering measurable gains in retrieval accuracy, evaluation rigor, and ticket resolution efficiency.
            </p>

            {/* What I Do */}
            <div className="space-y-2.5">
              {whatIDo.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-[14px] text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 py-10 px-6 border border-border rounded-2xl bg-card/50 shadow-sm"
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
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
