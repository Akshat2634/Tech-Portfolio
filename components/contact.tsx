"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Send, Loader2 } from "lucide-react"
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
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-[12px] font-mono text-primary tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
            Let&apos;s work together
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <a
            href="mailto:akshatsahu2634@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/50 transition-all text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>
          <a
            href="https://linkedin.com/in/akshat2634"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/50 transition-all text-sm text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-[13px] font-medium text-foreground mb-1.5 block">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                disabled={isSubmitting}
                className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-lg h-11"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[13px] font-medium text-foreground mb-1.5 block">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                disabled={isSubmitting}
                className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-lg h-11"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-[13px] font-medium text-foreground mb-1.5 block">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              required
              disabled={isSubmitting}
              className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-lg min-h-[140px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 rounded-lg font-medium transition-colors"
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
              className="p-3 bg-accent/10 border border-accent/20 text-accent rounded-lg text-sm text-center"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg text-sm text-center"
            >
              Something went wrong. Please try again or email me directly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
