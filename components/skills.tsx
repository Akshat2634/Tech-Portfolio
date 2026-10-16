"use client"

import { useState } from "react"
import { motion } from "motion/react"
import SectionHeading from "./section-heading"
import { StackConstellation } from "./section-visuals"
import { usePortfolioMotion } from "./motion-preferences"
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
  const { enabled } = usePortfolioMotion()
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
                aria-pressed={isActive}
                aria-controls="skills-panel"
                onClick={() => setActiveCategory(idx)}
                className={`relative isolate min-h-11 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  ${isActive
                    ? "text-foreground"
                    : "glass-thin text-muted-foreground hover:text-foreground"
                  }`}
              >
                {isActive && <motion.span className="skill-active-pill" layoutId={enabled ? "skill-active-pill" : undefined} transition={{ type: "spring", stiffness: 350, damping: 32 }} aria-hidden="true" />}
                <Icon className="h-3.5 w-3.5" />
                {cat.name}
              </button>
            )
          })}
        </motion.div>

        {/* Animated category panel */}
        <motion.div
          id="skills-panel"
          role="region"
          aria-label={`${active.name} skills`}
          initial={enabled ? { opacity: 0, y: 10 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: enabled ? 0.25 : 0, ease }}
          className="skills-panel glass relative p-6 md:p-8 rounded-2xl"
        >
          {/* Per-category tint overlay (frost + tint coexist) */}
          <div
            className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${active.color} opacity-40 pointer-events-none`}
          />

          <motion.div
            key={`skills-content-${active.name}`}
            className="skills-content"
            initial={enabled ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            transition={{ duration: enabled ? .2 : 0 }}
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

            <p className="skill-panel-intro">A layer of the stack I build with. Core tools are marked below.</p>
            {/* Skills — two-tier visual */}
            <div className="flex flex-wrap gap-2">
              {active.skills.map((skill, index) => (
                <motion.span
                  initial={enabled ? { opacity: 0, y: 8 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .25, delay: enabled ? index * .025 : 0 }}
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
                </motion.span>
              ))}
            </div>
          </motion.div>
          <StackConstellation
            key={`skills-map-${active.name}`}
            name={active.name}
            skills={active.skills.map(skill => skill.name)}
            icon={active.icon}
          />
        </motion.div>
      </div>
    </section>
  )
}
