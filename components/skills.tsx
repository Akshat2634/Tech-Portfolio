"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Code, Database, BrainCircuit, LayoutGrid, MessageSquare } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-4.5 w-4.5" />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Go", "C/C++", "SQL", "HTML", "JSP", "Servlets", "CSS", "JSON", "XML"],
    },
    {
      name: "AI and ML",
      icon: <BrainCircuit className="h-4.5 w-4.5" />,
      skills: ["RAG", "NLP", "Prompt Engineering"],
    },
    {
      name: "Large Language Models",
      icon: <MessageSquare className="h-4.5 w-4.5" />,
      skills: ["OpenAI GPT", "Claude (Anthropic)", "Gemini (Google)", "LLaMA (Meta AI)"],
    },
    {
      name: "Frameworks and Libraries",
      icon: <LayoutGrid className="h-4.5 w-4.5" />,
      skills: [
        "LangChain", "LangGraph", "LlamaIndex", "DeepEval", "FastAPI", "RESTful APIs", "Node.js", "Express.js",
        "Next.js", "Spring Boot", "Spring MVC", "Angular", "Streamlit", "Azure Bot Framework",
      ],
    },
    {
      name: "Databases and DevOps",
      icon: <Database className="h-4.5 w-4.5" />,
      skills: ["AWS", "Azure", "Supabase", "LanceDB", "Qdrant", "PostgreSQL", "MySQL", "MongoDB", "Git", "GitHub", "Jenkins"],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={staggerItem} className="h-full">
              <div className="border border-border rounded-xl p-5 bg-card hover:border-primary/30 transition-colors duration-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-muted text-foreground">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-muted text-[12px] font-medium text-muted-foreground"
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
