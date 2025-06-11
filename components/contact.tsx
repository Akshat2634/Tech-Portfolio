"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/xqapyvve', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                      <a href="mailto:akshatsahu2634@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        akshatsahu2634@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                      <a href="tel:+12012757594" className="text-blue-600 dark:text-blue-400 hover:underline">
                        +1 (201) 275-7594
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">Hoboken, New Jersey</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/akshat2634"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="https://github.com/akshat2634"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" required disabled={isSubmitting} />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="Subject" required disabled={isSubmitting} />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    disabled={isSubmitting}
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
                    <div className="p-3 bg-green-100 border border-green-200 text-green-800 rounded-md text-sm">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

