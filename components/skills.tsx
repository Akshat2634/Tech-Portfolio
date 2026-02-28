"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeading from "./section-heading"
import { Code, Database, BrainCircuit, LayoutGrid, MessageSquare } from "lucide-react"
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
      { name: "C/C++",      core: false },
      { name: "SQL",        core: false },
      { name: "HTML",       core: false },
      { name: "JSP",        core: false },
      { name: "Servlets",   core: false },
      { name: "CSS",        core: false },
      { name: "JSON",       core: false },
      { name: "XML",        core: false },
    ],
  },
  {
    name: "AI & ML",
    icon: BrainCircuit,
    color: "from-accent/15 to-accent/5",
    iconColor: "text-accent bg-accent/10",
    skills: [
      { name: "RAG",                    core: true },
      { name: "Multi-Agent Systems",    core: true },
      { name: "Agentic AI",             core: true },
      { name: "Agentic Workflows",      core: true },
      { name: "Prompt Engineering",     core: true },
      { name: "Vector Search",          core: true },
      { name: "MLOps",                  core: true },
      { name: "AI Observability",       core: false },
      { name: "Contextual Retrieval",   core: false },
      { name: "Reranking",              core: false },
      { name: "Hallucination Detection",core: false },
      { name: "NLP",                    core: false },
      { name: "Text Embeddings",        core: false },
    ],
  },
  {
    name: "LLMs",
    icon: MessageSquare,
    color: "from-primary/15 via-accent/10 to-primary/5",
    iconColor: "text-primary bg-primary/10",
    skills: [
      { name: "OpenAI GPT",       core: true },
      { name: "Claude (Anthropic)", core: true },
      { name: "Gemini (Google)",  core: false },
      { name: "LLaMA (Meta AI)",  core: false },
    ],
  },
  {
    name: "Frameworks",
    icon: LayoutGrid,
    color: "from-accent/15 to-primary/10",
    iconColor: "text-accent bg-accent/10",
    skills: [
      { name: "LangGraph",          core: true },
      { name: "DeepAgents",         core: true },
      { name: "LangChain",          core: true },
      { name: "DeepEval",           core: true },
      { name: "FastAPI",            core: true },
      { name: "LlamaIndex",         core: false },
      { name: "RESTful APIs",       core: false },
      { name: "Node.js",            core: false },
      { name: "Express.js",         core: false },
      { name: "Next.js",            core: false },
      { name: "Spring Boot",        core: false },
      { name: "Spring MVC",         core: false },
      { name: "Angular",            core: false },
      { name: "Streamlit",          core: false },
      { name: "Azure Bot Framework",core: false },
    ],
  },
  {
    name: "Databases & DevOps",
    icon: Database,
    color: "from-primary/10 to-accent/15",
    iconColor: "text-primary bg-primary/10",
    skills: [
      { name: "LanceDB",    core: true },
      { name: "Qdrant",     core: true },
      { name: "DuckDB",     core: true },
      { name: "AWS",        core: false },
      { name: "Azure",      core: false },
      { name: "Supabase",   core: false },
      { name: "PostgreSQL", core: false },
      { name: "MySQL",      core: false },
      { name: "MongoDB",    core: false },
      { name: "Git",        core: false },
      { name: "GitHub",     core: false },
      { name: "Jenkins",    core: false },
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
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
            className={`p-8 rounded-2xl border border-border bg-gradient-to-br ${active.color}`}
          >
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
                  className={`px-3 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-200 border
                    ${skill.core
                      ? "bg-primary/15 text-primary border-primary/25 font-semibold"
                      : "bg-background/60 text-muted-foreground border-border"
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
