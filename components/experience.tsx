"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import SectionHeading from "./section-heading"
import { CompanyLogo } from "./company-logo"
import { Calendar, MapPin, ChevronRight, ChevronDown } from "lucide-react"
import { experiences, coreSkills } from "@/lib/experience-data"
import { ease, staggerContainer, useGlassReveal } from "@/lib/animations"
import { cn } from "@/lib/utils"

export default function Experience() {
  const reveal = useGlassReveal()
  const prefersReduced = useReducedMotion()
  // The current role (index 0) starts open; the rest collapse for a scannable list.
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set([0]))

  const toggle = (index: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev)
      next.has(index) ? next.delete(index) : next.add(index)
      return next
    })

  const expandTransition = prefersReduced
    ? { duration: 0 }
    : {
        height: { duration: 0.4, ease },
        opacity: { duration: 0.3, ease, delay: 0.05 },
      }

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
          {experiences.map((exp, index) => {
            const isOpen = openSet.has(index)
            const isCurrent = index === 0
            const panelId = `exp-panel-${index}`
            const btnId = `exp-btn-${index}`

            return (
              <motion.div
                key={exp.slug}
                variants={reveal}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 md:gap-6"
              >
                {/* Left rail: dot + connecting line */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="relative mt-8 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                    {isCurrent && (
                      <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                    )}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-primary/30 to-transparent" />
                  )}
                </div>

                {/* Card — light chrome: thin glass, no accent bar */}
                <div className="mb-5 glass-thin rounded-2xl overflow-hidden transition-all duration-300 group hover:ring-1 hover:ring-primary/20">
                  {/* Summary — the always-visible, clickable trigger */}
                  <button
                    type="button"
                    id={btnId}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full text-left p-5 md:p-6 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                  >
                    <div className="flex items-start gap-4">
                      <CompanyLogo logo={exp.logo} company={exp.company} size={46} />

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold tracking-tight text-foreground leading-tight">
                              {exp.title}
                            </h3>
                            <p className="text-[13px] text-primary font-medium">{exp.company}</p>
                          </div>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Meta */}
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </div>

                        {/* One-line summary */}
                        <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">
                          {exp.summary}
                        </p>

                        {/* Impact chips */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {exp.impact.map((stat) => (
                            <span
                              key={stat}
                              className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[11px] font-mono font-medium border border-accent/15"
                            >
                              {stat}
                            </span>
                          ))}
                        </div>

                        {/* Expand affordance */}
                        <div className="mt-4 flex items-center gap-1.5 text-[12px] font-medium text-primary/80 group-hover:text-primary transition-colors">
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-300",
                              isOpen && "rotate-180",
                            )}
                          />
                          {isOpen ? "Hide details" : `View ${exp.responsibilities.length} highlights`}
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Detail — the expandable region */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={expandTransition}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-6 md:pl-[88px]">
                          <div className="border-t border-foreground/10 pt-4">
                            {/* Responsibilities */}
                            <ul className="space-y-3">
                              {exp.responsibilities.map((resp, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 text-[14px] text-muted-foreground leading-relaxed group/item"
                                >
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
                                  className={cn(
                                    "px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide uppercase cursor-default transition-colors",
                                    coreSkills.has(skill)
                                      ? "bg-primary/10 text-primary border border-primary/20"
                                      : "glass-thin text-foreground/80 hover:bg-primary/10 hover:text-primary",
                                  )}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
