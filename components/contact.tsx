"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Send, Loader2, ArrowUpRight } from "lucide-react"
import { ease } from "@/lib/animations"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch("https://formspree.io/f/xqapyvve", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setIsError(true)
        setTimeout(() => setIsError(false), 5000)
      }
    } catch {
      setIsError(true)
      setTimeout(() => setIsError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-start">

          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease }}
          >
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">
              Let&apos;s build something together.
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              <a
                href="mailto:akshatsahu2634@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-muted/50 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-sm font-medium text-foreground truncate">akshatsahu2634@gmail.com</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </a>

              <a
                href="https://linkedin.com/in/akshat2634"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-muted/50 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground">akshat2634</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </a>
            </div>

            {/* Decorative quote card */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-primary/8 to-accent/8 border border-primary/10">
              <p className="text-[13px] text-muted-foreground font-mono leading-relaxed">
                &ldquo;I&apos;m particularly interested in early-stage AI infrastructure, multi-agent systems, and founding engineering roles.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[13px] font-semibold text-foreground tracking-tight block">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                  className="bg-background border-border h-12 rounded-xl focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary transition-all duration-200 placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[13px] font-semibold text-foreground tracking-tight block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  disabled={isSubmitting}
                  className="bg-background border-border h-12 rounded-xl focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary transition-all duration-200 placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[13px] font-semibold text-foreground tracking-tight block">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                required
                disabled={isSubmitting}
                className="bg-background border-border rounded-xl min-h-[140px] focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary transition-all duration-200 placeholder:text-muted-foreground/50"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-accent/80 hover:from-primary/90 hover:to-accent/70 text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-accent/10 border border-accent/20 text-accent rounded-xl text-sm text-center"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {isError && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl text-sm text-center"
              >
                Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
