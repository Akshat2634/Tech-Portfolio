"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import SectionHeading from "./section-heading"
import { Code, Database, BrainCircuit, LayoutGrid, MessageSquare, Server, Cloud } from "lucide-react"
import { ease } from "@/lib/animations"

const skillCategories = [
  {
    name: "Languages",
    icon: Code,
    color: "from-primary/15 to-primary/5",
    iconColor: "text-primary bg-primary/10",
    skills: [
      { name: "Python",     core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: false },
      { name: "Java",       core: false },
      { name: "Go",         core: false },
      { name: "SQL",        core: false },
      { name: "C/C++",      core: false },
    ],
  },
  {
    name: "AI & ML",
    icon: BrainCircuit,
    color: "from-accent/15 to-accent/5",
    iconColor: "text-accent bg-accent/10",
    skills: [
      { name: "RAG",                       core: true },
      { name: "Hybrid Search",             core: true },
      { name: "Cross-Encoder Reranking",   core: true },
      { name: "AI Agents",                 core: true },
      { name: "Multi-Agent Orchestration", core: true },
      { name: "MCP",                       core: true },
      { name: "LLM Evaluation",            core: true },
      { name: "Guardrails",                core: false },
      { name: "Prompt Engineering",        core: false },
      { name: "NLP",                       core: false },
    ],
  },
  {
    name: "AI Frameworks",
    icon: LayoutGrid,
    color: "from-accent/15 to-primary/10",
    iconColor: "text-accent bg-accent/10",
    skills: [
      { name: "LangGraph",               core: true },
      { name: "DeepAgents",              core: true },
      { name: "LangChain",               core: true },
      { name: "DeepEval",                core: true },
      { name: "RAGAS",                   core: true },
      { name: "Langfuse",                core: true },
      { name: "LlamaIndex",              core: false },
      { name: "Microsoft 365 Agents SDK",core: false },
    ],
  },
  {
    name: "Backend & Frontend",
    icon: Server,
    color: "from-primary/15 via-accent/10 to-primary/5",
    iconColor: "text-primary bg-primary/10",
    skills: [
      { name: "FastAPI",     core: true },
      { name: "Next.js",     core: true },
      { name: "React",       core: true },
      { name: "Node.js",     core: false },
      { name: "Express.js",  core: false },
      { name: "Spring Boot", core: false },
      { name: "Angular",     core: false },
    ],
  },
  {
    name: "LLMs",
    icon: MessageSquare,
    color: "from-primary/15 via-accent/10 to-primary/5",
    iconColor: "text-primary bg-primary/10",
    skills: [
      { name: "OpenAI GPT",         core: true },
      { name: "Claude (Anthropic)", core: true },
      { name: "Gemini (Google)",    core: false },
      { name: "LLaMA (Meta AI)",    core: false },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    color: "from-primary/10 to-accent/15",
    iconColor: "text-primary bg-primary/10",
    skills: [
      { name: "PostgreSQL",    core: true },
      { name: "pgvector",      core: true },
      { name: "Redis",         core: true },
      { name: "Elasticsearch", core: true },
      { name: "Qdrant",        core: false },
      { name: "LanceDB",       core: false },
      { name: "Supabase",      core: false },
      { name: "MySQL",         core: false },
      { name: "MongoDB",       core: false },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-accent/10 to-primary/15",
    iconColor: "text-accent bg-accent/10",
    skills: [
      { name: "AWS",            core: true },
      { name: "Azure",          core: true },
      { name: "Docker",         core: true },
      { name: "GitHub Actions", core: true },
      { name: "Git",            core: false },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const active = skillCategories[activeCategory]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with" />

        {/* Tab navigation */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8 justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            const isActive = activeCategory === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  ${isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "glass-thin text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.name}
              </button>
            )
          })}
        </motion.div>

        {/* Animated category panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease }}
            className="glass relative p-8 rounded-2xl"
          >
            {/* Per-category tint overlay (frost + tint coexist) */}
            <div
              className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${active.color} opacity-40 pointer-events-none`}
            />

            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl ${active.iconColor}`}>
                <active.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{active.name}</h3>
                <p className="text-xs text-muted-foreground font-mono">
                  {active.skills.length} skills
                </p>
              </div>
            </div>

            {/* Skills — two-tier visual */}
            <div className="flex flex-wrap gap-2">
              {active.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-200
                    ${skill.core
                      ? "bg-primary/15 text-primary border border-primary/25 font-semibold"
                      : "glass-thin text-foreground/80"
                    }`}
                >
                  {skill.name}
                  {skill.core && (
                    <span className="ml-1.5 text-[9px] font-mono text-primary/70 uppercase tracking-wider">
                      core
                    </span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
