"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Copy, Check, Terminal } from "lucide-react"
import Link from "next/link"
import { staggerContainer, staggerItem } from "@/lib/animations"

const techColors: Record<string, string> = {
  "FastAPI":          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "LangGraph":        "bg-primary/10 text-primary border-primary/20",
  "OpenAI APIs":      "bg-primary/10 text-primary border-primary/20",
  "OpenAI GPT-4.1":   "bg-primary/10 text-primary border-primary/20",
  "PostgreSQL":       "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "LanceDB":          "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Redis":            "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  "Next.js":          "bg-foreground/8 text-foreground border-border",
  "React":            "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "Python":           "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  "Node.js":          "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "Express.js":       "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20",
  "Chart.js":         "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "JavaScript":       "bg-yellow-400/10 text-yellow-600 dark:text-yellow-300 border-yellow-400/20",
}

function CliBlock() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npx claude-roi").then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="rounded-xl overflow-hidden border border-orange-500/20 mb-5">
      {/* Terminal chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex items-center gap-1.5 ml-2">
          <Terminal className="h-3 w-3 text-zinc-500" />
          <span className="text-[10px] font-mono text-zinc-500">bash</span>
        </div>
      </div>

      {/* Command row */}
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 bg-zinc-950">
        <div className="flex items-center gap-2 font-mono text-[13px] min-w-0">
          <span className="text-orange-400 shrink-0">$</span>
          <span className="text-orange-300 font-semibold tracking-wide">npx claude-roi</span>
          <span className="inline-block w-[7px] h-[14px] bg-orange-400/70 ml-0.5 cursor-blink shrink-0" />
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy command"
          className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-mono transition-all duration-200 bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40"
        >
          {copied ? (
            <><Check className="h-3 w-3" /> Copied!</>
          ) : (
            <><Copy className="h-3 w-3" /> Copy</>
          )}
        </button>
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: "CodeLens AI",
      tagline: "Agent Productivity-to-Cost Correlator" as string | undefined,
      cliCommand: "npx claude-roi" as string | undefined,
      period: "February 2026",
      description:
        "Analyzes whether your AI coding agent is actually shipping code by correlating Claude Code token usage with git commits. Reads local session files, matches with git history by timestamp, and generates an ROI dashboard — zero config.",
      features: [
        "Cost per Commit: calculates token expenses per AI-assisted commit to surface the true dollar cost of each code change.",
        "Line Survival Rate: tracks the percentage of AI-written code still present after 24 hours, distinguishing genuine contributions from throwaway drafts.",
        "Orphaned Sessions: detects unproductive Claude Code sessions with no matching git activity, highlighting wasted spend.",
      ],
      technologies: ["Node.js", "Express.js", "Chart.js", "JavaScript"],
      github: "https://github.com/Akshat2634/Codelens-AI",
      demo: null,
      color: "from-orange-500/15 via-orange-500/5 to-transparent",
      accentColor: "text-orange-500",
      borderColor: "border-orange-500/20",
      bulletColor: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "PitchPilot AI",
      tagline: undefined as string | undefined,
      cliCommand: undefined as string | undefined,
      period: "March 2025 — May 2025",
      description:
        "AI-powered investor pitch analyzer and coach that evaluates pitch decks and provides strategic feedback using multi-agent workflows.",
      features: [
        "Developed PitchPilot, an AI-driven platform for investor pitch analysis using FastAPI, LangGraph, and OpenAI APIs, orchestrating multi-agent workflows with persistent state management to evaluate pitch decks on clarity, differentiation, and scalability.",
        "Engineered an AI coaching system using LangGraph's multi-step reasoning to simulate investor Q&A, generate strategic feedback, and surface recommendations based on Y Combinator pitch heuristics.",
        "Architected a type-safe backend with PostgreSQL and Prisma ORM, incorporated Supabase Storage, and deployed an OCR-enabled document pipeline for extracting content from PDF, PPTX, and DOCX formats.",
      ],
      technologies: ["FastAPI", "LangGraph", "OpenAI APIs", "PostgreSQL", "Prisma ORM", "Supabase Storage", "OCR"],
      github: "https://github.com/Akshat2634/PitchPilot-AI-Powered-Investor-Deck-Analyzer-Coach",
      demo: null,
      color: "from-primary/15 via-primary/5 to-transparent",
      accentColor: "text-primary",
      borderColor: "border-primary/20",
      bulletColor: "bg-primary/10 text-primary",
    },
    // {
    //   title: "DocuChat AI",
    //   tagline: undefined as string | undefined,
    //   cliCommand: undefined as string | undefined,
    //   period: "January 2025 — February 2025",
    //   description:
    //     "Enterprise-grade AI-powered document intelligence platform that transforms documents into intelligent, conversational knowledge bases using advanced RAG technology.",
    //   features: [
    //     "Developed DocuChat AI, an enterprise-grade AI-powered document intelligence platform using FastAPI, LanceDB, and OpenAI GPT-4.1, enabling natural language conversations with documents through cutting-edge RAG technology.",
    //     "Architected a robust vector search system with LanceDB and Redis-backed conversation persistence, supporting multi-format document processing (PDF, DOCX, PPTX, TXT) with real-time chat capabilities and user session isolation.",
    //     "Built a modern Next.js 15 frontend with React 19, Tailwind CSS, and Framer Motion animations, featuring drag-and-drop file upload, live progress tracking, and responsive chat interface with enterprise-level security.",
    //     "Implemented advanced document chunking strategies, OpenAI text embeddings, and function calling capabilities to optimize retrieval accuracy and response quality.",
    //   ],
    //   technologies: ["FastAPI", "LanceDB", "OpenAI GPT-4.1", "Redis", "Next.js", "React", "Python"],
    //   github: "https://github.com/Akshat2634/DocuChat-AI",
    //   demo: "https://docu-chat-ai-self.vercel.app",
    //   color: "from-accent/15 via-accent/5 to-transparent",
    //   accentColor: "text-accent",
    //   borderColor: "border-accent/20",
    //   bulletColor: "bg-accent/10 text-accent",
    // },
  ]

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading title="Projects" subtitle="Recent work" />

        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={staggerItem}>
              <div className={`border ${project.borderColor} rounded-2xl overflow-hidden bg-card group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}>

                {/* Gradient header */}
                <div className={`px-6 pt-6 pb-5 bg-gradient-to-br ${project.color}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className={`text-[10px] font-mono tracking-widest uppercase mb-2 ${project.accentColor} opacity-60`}>
                        Project 0{index + 1}
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">{project.title}</h3>
                        {project.demo && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/15 text-accent text-[10px] font-mono tracking-wider border border-accent/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Live
                          </span>
                        )}
                      </div>
                      {project.tagline && (
                        <p className={`text-[11px] font-mono mt-1 ${project.accentColor} opacity-70`}>
                          {project.tagline}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground font-mono mt-1">{project.period}</p>
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-border hover:border-primary/30 hover:bg-primary/5">
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="icon" className="h-9 w-9 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 border-0 shadow-none">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {project.cliCommand && <CliBlock />}

                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-md flex items-center justify-center ${project.bulletColor}`}>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium border ${techColors[tech] ?? "bg-muted text-muted-foreground border-border"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
