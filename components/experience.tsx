"use client"

import { motion } from "motion/react"
import SectionHeading from "./section-heading"
import { Calendar, MapPin, ChevronRight } from "lucide-react"
import { staggerContainer, useGlassReveal } from "@/lib/animations"

const coreSkills = new Set([
  "RAG", "Hybrid Search", "Cross-Encoder Reranking", "LangGraph", "DeepAgents",
  "MCP", "DeepEval", "RAGAS", "Langfuse", "pgvector", "FastAPI", "Python",
])

export default function Experience() {
  const reveal = useGlassReveal()
  const experiences = [
    {
      title: "Founding Software Engineer",
      company: "Future Path AI",
      location: "Cupertino, CA",
      period: "January 2024 — Present",
      responsibilities: [
        "Architected AI agent infrastructure for an enterprise platform autonomously resolving business and IT operations at Fortune 500 pharma and finance clients — built the multimodal RAG layer with hybrid retrieval (pgvector + BM25 via RRF), cross-encoder reranking, and a vendor-agnostic embedding layer over 10K+ documents.",
        "Built agent and RAG evaluation pipelines using DeepEval, RAGAS, and Langfuse — 200+ per-client test cases across tool-use reliability, task completion, faithfulness, and context precision — driving model selection and prompt iteration across OpenAI, Anthropic, and Gemini.",
        "Developed a multi-agent orchestration platform on LangGraph and DeepAgents with manifest-driven agent definitions (config-as-code) — leveraging planning loops, sub-agent delegation, and file-system context management to autonomously execute multi-step IT and business operations workflows.",
        "Architected an MCP orchestration layer spanning 80+ enterprise integrations (ServiceNow, Kubernetes, Splunk, Dynatrace, Azure, SAP, Salesforce) with multi-tenant credential injection and dynamic per-query skill selection — powering LangGraph autonomous AI and chat agents handling 100+ tickets daily across ITSM, observability, and ERP workflows.",
      ],
      skills: [
        "RAG", "Hybrid Search", "Cross-Encoder Reranking", "LangGraph", "DeepAgents",
        "MCP", "DeepEval", "RAGAS", "Langfuse", "pgvector", "FastAPI", "Python",
        "ServiceNow", "Kubernetes",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Nagarro",
      location: "Gurugram, India",
      period: "March 2023 — July 2023",
      responsibilities: [
        "Built a full-stack product community web application end-to-end using Java, Spring Boot, Hibernate, MySQL, and Angular, delivering modular services for user registration, product browsing, and review management.",
        "Designed and implemented RESTful APIs with Spring Boot for user authentication, product search, and review workflows, applying caching and connection pooling to optimize response latency.",
        "Engineered Hibernate ORM data models with MySQL — relational schema design, lazy loading, and indexed queries for product and review entities.",
        "Developed responsive Angular interfaces with component-based architecture, reactive forms, and client-side state management for product browsing and review submission flows.",
      ],
      skills: ["Java", "Spring Boot", "Hibernate", "MySQL", "Angular", "RESTful APIs"],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading title="Work Experience" subtitle="Professional journey" />

        <motion.div
          className="space-y-0 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={reveal}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 md:gap-6"
            >
              {/* Left rail: dot + connecting line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="relative mt-7 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-md shadow-primary/30 ring-4 ring-background" />
                  {index === 0 && (
                    <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  )}
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 mt-2 bg-gradient-to-b from-primary/40 to-border" />
                )}
              </div>

              {/* Card */}
              <div className="mb-8 relative glass glass-hover rounded-xl overflow-hidden transition-all duration-300 group">
                {/* Left edge accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${index === 0 ? "bg-gradient-to-b from-primary to-accent" : "bg-primary/30"}`} />

                <div className="pl-5 pr-6 pt-6 pb-5">
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                        {exp.company[0]}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold tracking-tight text-foreground leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-[13px] text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="text-right text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="mt-3 space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-[14px] text-muted-foreground leading-relaxed group/item">
                        <ChevronRight className="h-3.5 w-3.5 text-primary/50 mt-0.5 shrink-0 group-hover/item:text-primary transition-colors duration-200" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide uppercase cursor-default transition-colors
                          ${coreSkills.has(skill)
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "glass-thin text-foreground/80 hover:bg-primary/10 hover:text-primary"
                          }`}
                      >
                        {skill}
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
