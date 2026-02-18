"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function Projects() {
  const projects = [
    {
      title: "PitchPilot AI",
      period: "March 2025 — May 2025",
      description:
        "AI-powered investor pitch analyzer and coach that evaluates pitch decks and provides strategic feedback using multi-agent workflows.",
      features: [
        "Developed PitchPilot, an AI-driven platform for investor pitch analysis using FastAPI, LangGraph, and OpenAI APIs, orchestrating multi-agent workflows with persistent state management to evaluate pitch decks on clarity, differentiation, and scalability.",
        "Architected a type-safe backend with PostgreSQL and Prisma ORM, incorporated Supabase Storage, and deployed an OCR-enabled document pipeline for extracting content from PDF, PPTX, and DOCX formats.",
        "Engineered an AI coaching system using LangGraph's multi-step reasoning to simulate investor Q&A, generate strategic feedback, and surface recommendations based on Y Combinator pitch heuristics.",
      ],
      technologies: ["FastAPI", "LangGraph", "OpenAI APIs", "PostgreSQL", "Prisma ORM", "Supabase Storage", "OCR"],
      github: "https://github.com/Akshat2634/PitchPilot-AI-Powered-Investor-Deck-Analyzer-Coach",
      demo: null,
    },
    {
      title: "DocuChat AI",
      period: "January 2025 — February 2025",
      description:
        "Enterprise-grade AI-powered document intelligence platform that transforms documents into intelligent, conversational knowledge bases using advanced RAG technology.",
      features: [
        "Developed DocuChat AI, an enterprise-grade AI-powered document intelligence platform using FastAPI, LanceDB, and OpenAI GPT-4.1, enabling natural language conversations with documents through cutting-edge RAG technology.",
        "Architected a robust vector search system with LanceDB and Redis-backed conversation persistence, supporting multi-format document processing (PDF, DOCX, PPTX, TXT) with real-time chat capabilities and user session isolation.",
        "Built a modern Next.js 15 frontend with React 19, Tailwind CSS, and Framer Motion animations, featuring drag-and-drop file upload, live progress tracking, and responsive chat interface with enterprise-level security.",
        "Implemented advanced document chunking strategies, OpenAI text embeddings, and function calling capabilities to optimize retrieval accuracy and response quality.",
      ],
      technologies: ["FastAPI", "LanceDB", "OpenAI GPT-4.1", "Redis", "Next.js", "React", "Python"],
      github: "https://github.com/Akshat2634/DocuChat-AI",
      demo: "https://docu-chat-ai-self.vercel.app",
    },
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
              <div className="border border-border rounded-xl overflow-hidden bg-card group hover:border-primary/20 transition-all duration-300">
                {/* Header */}
                <div className="px-6 pt-6 pb-4 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                        {project.demo && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono font-medium tracking-wider uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Live
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">{project.period}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-muted">
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-muted">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                  <div className="space-y-2 mb-5">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-2.5 text-[14px] text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-muted text-[11px] font-mono font-medium text-muted-foreground tracking-wide"
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
