"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"

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
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={staggerItem}>
              <div className="border border-border rounded-xl p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{edu.degree}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-[11px] font-mono font-medium tracking-wide">
                        GPA {edu.gpa}
                      </span>
                    </div>

                    {edu.details.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-[15px] text-muted-foreground flex gap-2">
                            <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
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
