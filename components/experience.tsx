"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Calendar, MapPin } from "lucide-react"
import { ease, staggerContainer, staggerItem } from "@/lib/animations"

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
          className="space-y-8 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={staggerItem} className="relative">
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 bottom-0 hidden md:flex flex-col items-center" style={{ width: '20px', marginLeft: '-30px' }}>
                <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              <div className="border border-border rounded-xl p-6 bg-card hover:bg-muted/30 transition-colors duration-200">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{exp.title}</h3>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-[15px] text-muted-foreground leading-relaxed flex gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-muted text-[11px] font-mono font-medium text-muted-foreground tracking-wide uppercase hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
