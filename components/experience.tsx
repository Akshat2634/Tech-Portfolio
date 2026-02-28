"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Calendar, MapPin, ChevronRight } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"

const coreSkills = new Set(["RAG", "LLMs", "LangGraph", "MCP", "FastAPI", "Python", "DeepEval"])

export default function Experience() {
  const experiences = [
    {
      title: "Founding Software Engineer",
      company: "Future Path AI",
      location: "Cupertino, CA",
      period: "January 2024 — Present",
      responsibilities: [
        "Architected core AI agent infrastructure powering an enterprise platform that autonomously resolves IT operations at scale — designing multimodal RAG pipelines with vector databases and contextual retrieval and reranking layers, delivering 30% improvement in retrieval accuracy across Fortune 500 clients in pharmaceutical and financial services.",
        "Built comprehensive evaluation frameworks using DeepEval to benchmark agent performance, RAG accuracy, and tool-use reliability across key metrics — including hallucination detection, faithfulness, contextual relevancy, and task completion rates — driving data-backed model selection and prompt optimization decisions.",
        "Developed a multi-agent orchestration platform leveraging LangGraph and the DeepAgents framework, enabling autonomous agents to reason, plan, and execute complex multi-step tasks with dynamic tool selection and adaptive skill composition across enterprise procurement and IT automation workflows.",
        "Designed an MCP orchestration layer integrating 10+ enterprise tools (ServiceNow, Kubernetes, Prometheus) with a modular skills architecture — powering chat agents on Microsoft Teams and ServiceNow ITSM that resolve end-user IT issues with seamless human handoff and real-time copilot assistance, reducing ticket resolution time by 60%.",
      ],
      skills: ["RAG", "LLMs", "DeepEval", "LangGraph", "MCP", "Vector Databases", "Kubernetes", "Microsoft Teams", "ServiceNow"],
    },
    {
      title: "Software Engineering Intern",
      company: "Nagarro",
      location: "Gurugram, India",
      period: "March 2023 — July 2023",
      responsibilities: [
        "Engineered a comprehensive Product Community Website leveraging Java, Spring Boot, Hibernate, MySQL, and Angular to deliver modular services for user registration, product browsing, and review management—boosting new user sign-ups by 50% through a scalable, event-driven architecture.",
        "Developed high-performance RESTful APIs using Java Spring Boot for secure user authentication, registration, product search, and review management. Optimized API workflows with microservices design and strategic caching, reducing 95th percentile response times by 30%.",
        "Integrated Hibernate ORM with MySQL to enforce secure and efficient data storage/retrieval for user and product information. Implemented advanced indexing and query optimization strategies, resulting in a 40% improvement in database query efficiency.",
        "Created interactive, responsive front-end interfaces using Angular that leverage dynamic content rendering and client-side caching, leading to a 25% increase in page views per user and improved session engagement.",
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
              variants={staggerItem}
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
              <div className="mb-8 relative border border-border rounded-xl overflow-hidden bg-card hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group">
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
                            : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
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
