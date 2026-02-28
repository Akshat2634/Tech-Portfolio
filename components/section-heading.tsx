"use client"

import { motion } from "framer-motion"
import { ease } from "@/lib/animations"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
    >
      {subtitle && (
        <p className={`text-[11px] font-mono text-primary tracking-[0.2em] uppercase mb-3 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
          <span className="inline-block w-6 h-px bg-primary/50" />
          {subtitle}
          <span className="inline-block w-6 h-px bg-primary/50" />
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <div className={`mt-4 ${center ? "flex justify-center" : ""}`}>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>
    </motion.div>
  )
}
