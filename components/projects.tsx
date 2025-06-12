"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "PitchPilot AI",
      period: "March 2025 — May 2025",
      description:
        "AI-powered investor pitch analyzer and coach that evaluates pitch decks and provides strategic feedback using multi-agent workflows.",
      features: [
        "Developed PitchPilot, an AI-driven platform for investor pitch analysis using FastAPI, LangGraph, and OpenAI APIs, orchestrating multi-agent workflows with persistent state management to evaluate pitch decks on clarity, differentiation, and scalability.",
        "Architected a type-safe backend with PostgreSQL and Prisma ORM, incorporated Supabase Storage, and deployed an OCR-enabled document pipeline for extracting content from PDF, PPTX, and DOCX formats.",
        "Engineered an AI coaching system using LangGraph's multi-step reasoning to simulate investor Q&A, generate strategic feedback, and surface recommendations based on Y Combinator pitch heuristics.",
      ],
      technologies: ["FastAPI", "LangGraph", "OpenAI APIs", "PostgreSQL", "Prisma ORM", "Supabase Storage", "OCR"],
      github: "https://github.com/Akshat2634/PitchPilot-AI-Powered-Investor-Deck-Analyzer-Coach",
      demo: null,
    },
    {
      title: "DocuChat AI",
      period: "January 2025 — February 2025",
      description:
        "Enterprise-grade AI-powered document intelligence platform that transforms documents into intelligent, conversational knowledge bases using advanced RAG technology.",
      features: [
        "Developed DocuChat AI, an enterprise-grade AI-powered document intelligence platform using FastAPI, LanceDB, and OpenAI GPT-4.1, enabling natural language conversations with documents through cutting-edge RAG (Retrieval-Augmented Generation) technology.",
        "Architected a robust vector search system with LanceDB and Redis-backed conversation persistence, supporting multi-format document processing (PDF, DOCX, PPTX, TXT) with real-time chat capabilities and user session isolation.",
        "Built a modern Next.js 15 frontend with React 19, Tailwind CSS, and Framer Motion animations, featuring drag-and-drop file upload, live progress tracking, and responsive chat interface with enterprise-level security.",
        "Implemented advanced document chunking strategies, OpenAI text embeddings, and function calling capabilities to optimize retrieval accuracy and response quality, delivering contextually relevant answers from large document collections with background cleanup tasks.",
      ],
      technologies: ["FastAPI", "LanceDB", "OpenAI GPT-4.1", "Redis", "Next.js", "React", "Python"],
      github: "https://github.com/Akshat2634/DocuChat-AI",
      demo: "https://docu-chat-ai-self.vercel.app",
    },
    // {
    //   title: "PawPal",
    //   period: "March 2024 — May 2024",
    //   description:
    //     "A full-stack web app connecting pet owners with pet care service providers for pet management and adoption.",
    //   features: [
    //     "Developed PawPal, a full-stack web app using Node.js, Express.js, and MongoDB connecting pet owners with pet care service providers for pet management and adoption.",
    //     "Implemented secure authentication and session management with bcrypt for password hashing and express-session for user sessions, protecting user and service provider data.",
    //     "Integrated ElasticEmail API for sending appointment confirmation emails with dynamic details and checklists, as well as enabling secure password recovery with one-time passwords (OTPs).",
    //     "Enhanced PawPal community engagement through appointment scheduling, post creation, commenting, and review features, facilitating communication and feedback loops.",
    //   ],
    //   technologies: ["Node.js", "Express.js", "MongoDB", "bcrypt", "ElasticEmail API"],
    //   github: "https://github.com/akshat2634/pawpal",
    //   demo: null,
    // },
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="Some of my recent work" />

        <motion.div
          ref={containerRef}
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover" className="h-full">
              <Card className="h-full overflow-hidden shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
                      animate={{
                        x: [0, 10, 0],
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
                      animate={{
                        x: [0, -10, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <h3 className="text-2xl font-bold text-white z-10">{project.title}</h3>
                  </motion.div>

                  <div className="p-6">
                    <motion.div
                      className="flex items-center text-gray-600 dark:text-gray-400 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.period}</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-700 dark:text-gray-300 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                      <motion.ul
                        className="space-y-2"
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 text-sm pl-4 border-l-2 border-gray-300 dark:border-gray-700"
                            variants={featureItemVariants}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800 hover:scale-105 transition-transform"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                            <Github className="h-4 w-4" />
                            GitHub
                          </Button>
                        </Link>
                      )}

                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button 
                            size="sm" 
                            className="gap-2 hover:scale-105 transition-all duration-300 backdrop-blur-md bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-pink-600/80 hover:from-blue-700/90 hover:via-purple-700/90 hover:to-pink-700/90 border border-white/20 text-white shadow-lg hover:shadow-xl backdrop-saturate-150"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

