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
        <p className="text-[12px] font-mono text-primary tracking-widest uppercase mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </motion.div>
  )
}
