"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"

const degreeConfig: Record<string, {
  gradient: string
  badge: string
  badgeColor: string
}> = {
  "Master of Science in Computer Science": {
    gradient: "from-primary to-accent",
    badge: "MS · Graduate",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  "Bachelor of Engineering in Information Technology": {
    gradient: "from-accent/70 to-primary/50",
    badge: "BE · Undergraduate",
    badgeColor: "bg-accent/10 text-accent border-accent/20",
  },
}

export default function Education() {
  const educationData = [
    {
      institution: "Stevens Institute of Technology",
      degree: "Master of Science in Computer Science",
      location: "Hoboken, NJ",
      period: "September 2023 — May 2025",
      gpa: "3.9/4",
      details: ["Web & Media Graduate Assistant at Hanlon Financial Systems Center"],
    },
    {
      institution: "Manipal University Jaipur",
      degree: "Bachelor of Engineering in Information Technology",
      location: "Jaipur, India",
      period: "July 2019 — July 2023",
      gpa: "8.62/10",
      details: [],
    },
  ]

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading title="Education" subtitle="Academic background" />

        <motion.div
          className="space-y-6 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {educationData.map((edu, index) => {
            const config = degreeConfig[edu.degree]
            return (
              <motion.div key={index} variants={staggerItem}>
                <div className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary/20 transition-colors duration-200 group">
                  {/* Top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${config.gradient}`} />

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 shrink-0 group-hover:from-primary/25 transition-all duration-200">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Institution + degree badge */}
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 className="text-lg font-semibold tracking-tight text-foreground">{edu.institution}</h3>
                          <span className={`shrink-0 px-2 py-0.5 rounded-md border text-[10px] font-mono tracking-wide ${config.badgeColor}`}>
                            {config.badge}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.degree}</p>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {edu.location}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-mono font-medium border border-accent/20">
                            GPA {edu.gpa}
                          </span>
                        </div>

                        {/* Detail bullets */}
                        {edu.details.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-border/50 space-y-1.5">
                            {edu.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2.5 text-[14px] text-muted-foreground">
                                <Star className="h-3 w-3 text-primary/50 shrink-0" />
                                {detail}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
