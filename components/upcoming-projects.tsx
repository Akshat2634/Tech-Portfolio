"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ExternalLink, 
  Github, 
  Zap, 
  Code2, 
  Sparkles, 
  X, 
  Rocket,
  Calendar,
  Star
} from "lucide-react"
import Link from "next/link"

export default function UpcomingProjects() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  // Show the component after a delay for a smoother page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Show notification every 10 seconds after orb appears
  useEffect(() => {
    if (isVisible) {
      const showNotificationCycle = () => {
        setShowNotification(true)
        // Auto-hide notification after 4 seconds
        setTimeout(() => setShowNotification(false), 4000)
      }

      // Show first notification after 3 seconds
      const initialTimer = setTimeout(showNotificationCycle, 3000)
      
      // Then show notification every 10 seconds
      const intervalTimer = setInterval(showNotificationCycle, 10000)
      
      return () => {
        clearTimeout(initialTimer)
        clearInterval(intervalTimer)
      }
    }
  }, [isVisible])

  const upcomingProjects = [
  {
      title: "PitchPilot AI",
      status: "In Development",
      progress: 85,
      description: "AI-powered investor pitch analyzer and coach using multi-agentic workflows to evaluate pitch decks and provide strategic feedback",
      tech: ["FastAPI", "LangGraph", "OpenAI", "PostgreSQL", "Prisma ORM", "Supabase", "Multi-Agent"],
      expectedLaunch: "Soon", 
      features: ["Multi-agent workflows", "Investor Q&A simulation", "OCR pipeline", "Strategic feedback"],
      github: "https://github.com/Akshat2634/PitchPilot-AI-Powered-Investor-Deck-Analyzer-Coach",
      demo: null,
      isPublic: true
    },
    {
      title: "DocuChat AI",
      status: "Released",
      progress: 100,
      description: "Enterprise-grade AI-powered document intelligence platform that transforms documents into intelligent, conversational knowledge bases using advanced RAG (Retrieval-Augmented Generation) technology",
      tech: ["FastAPI", "LanceDB", "OpenAI GPT-4.1", "Redis", "Next.js", "React", "Python"],
      expectedLaunch: "Live Now",
      features: ["Multi-format document processing", "Vector search with LanceDB", "Persistent conversations", "Enterprise-level security"],
      github: "https://github.com/Akshat2634/DocuChat-AI",
      demo: "https://docu-chat-ai-self.vercel.app",
      isPublic: true
    },
    
    {
      title: "RecruitIQ",
      status: "Released",
      progress: 100,
      description: "Modular, graph-based AI workflow for automating recruitment processes using LangGraph and multi-agent collaboration for intelligent candidate screening",
      tech: ["LangGraph", "OpenAI", "Python", "Streamlit", "Multi-Agent AI"],
      expectedLaunch: "Live Now",
      features: ["Experience classification", "Skill matching", "Response automation", "Multi-agent workflow"],
      github: "https://github.com/Akshat2634/RecruitIQ",
      demo: "https://recruitiq.streamlit.app/",
      isPublic: true
    },
    
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Released": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "In Development": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Beta Testing": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Prototype": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Subtle Notification Popup */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed right-24 top-1/2 -translate-y-1/2 z-[9994]"
            initial={{ opacity: 0, x: 30, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="relative">
              {/* Glass morphism speech bubble */}
              <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-400/15 dark:via-purple-400/15 dark:to-pink-400/15 border border-blue-300/30 dark:border-blue-400/20 px-4 py-3 rounded-2xl shadow-2xl text-sm font-medium whitespace-nowrap">
                <div className="flex items-center text-gray-900 dark:text-white">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold">
                    Check this out!
                  </span>
                  <span className="ml-1">✨</span>
                </div>
                
                {/* Enhanced inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 dark:from-blue-300/10 dark:via-purple-300/10 dark:to-pink-300/10 pointer-events-none" />
                
                {/* Subtle animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              {/* Enhanced glass arrow pointing to the orb */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-1">
                <div className="w-0 h-0 border-l-6 border-l-blue-400/40 dark:border-l-blue-300/30 border-y-4 border-y-transparent backdrop-blur-sm" />
                <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-500/60 dark:border-l-blue-400/40 border-y-2 border-y-transparent" />
              </div>
              
              {/* Enhanced pulsing dot with more vibrant colors */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.4, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(236, 72, 153, 0.6)",
                    "0 0 0 10px rgba(236, 72, 153, 0)",
                    "0 0 0 0 rgba(236, 72, 153, 0)"
                  ],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Lab Button */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[9995]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={() => setIsExpanded(true)}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glowing orb */}
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 p-[2px] shadow-lg"
            animate={{
              rotate: 360,
              boxShadow: [
                "0 0 15px rgba(59, 130, 246, 0.3), 0 0 25px rgba(59, 130, 246, 0.1)",
                "0 0 20px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.15)",
                "0 0 15px rgba(236, 72, 153, 0.3), 0 0 25px rgba(236, 72, 153, 0.1)",
                "0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.15)"
              ]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Inner content */}
            <div className="w-full h-full rounded-full bg-white/90 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
              {/* Animated background sparkles */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Code2 className="w-6 h-6 text-gray-700 dark:text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 backdrop-blur-md bg-gray-900/80 dark:bg-gray-700/80 text-white text-sm rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700/50"
            initial={{ x: 10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <Sparkles className="w-4 h-4 inline mr-2" />
            Project Portfolio
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-l-gray-900/80 dark:border-l-gray-700/80 border-y-4 border-y-transparent" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-2xl border border-white/30 dark:border-gray-700/30 [&_*]:!cursor-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="relative p-6 backdrop-blur-md bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border-b border-white/20 dark:border-gray-700/30">
                <motion.button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 transition-colors !cursor-pointer border border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center mb-2">
                    <Rocket className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                      Project Showcase
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Latest innovations and cutting-edge solutions
                  </p>
                </motion.div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="p-6 overflow-y-auto max-h-[60vh] backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {upcomingProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border-white/30 dark:border-gray-700/30">
                        <CardContent className="p-0">
                                                      {/* Project Header */}
                            <div className="p-4 backdrop-blur-md bg-gradient-to-r from-white/40 to-gray-50/40 dark:from-gray-800/40 dark:to-gray-700/40 border-b border-white/20 dark:border-gray-700/20">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {project.title}
                              </h3>
                              <Badge className={`${getStatusColor(project.status)} border`}>
                                {project.status}
                              </Badge>
                            </div>

                            {/* Progress bar */}
                            <div className="mb-3">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {project.progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                <motion.div
                                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${project.progress}%` }}
                                  transition={{ delay: 0.3 * (index + 1), duration: 1 }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Project Content */}
                          <div className="p-4">
                            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                              {project.description}
                            </p>

                            {/* Expected Launch */}
                            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm">Expected: {project.expectedLaunch}</span>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Key Features:
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {project.features.map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {project.tech.map((tech, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                              {project.isPublic && (
                                <Button asChild size="sm" className="flex-1 !cursor-pointer">
                                  <Link href={project.github} target="_blank" className="!cursor-pointer">
                                    <Github className="w-4 h-4 mr-2" />
                                    View Code
                                  </Link>
                                </Button>
                              )}
                              {project.demo ? (
                                <Button asChild size="sm" className="flex-1 !cursor-pointer" variant="outline">
                                  <Link href={project.demo} target="_blank" className="!cursor-pointer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                  </Link>
                                </Button>
                              ) : project.status !== "Released" && (
                                <Button size="sm" className="flex-1 !cursor-not-allowed" disabled variant="outline">
                                  <Zap className="w-4 h-4 mr-2" />
                                  Coming Soon
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* See More Projects Button */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="!cursor-pointer backdrop-blur-md bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-pink-600/80 hover:from-blue-700/90 hover:via-purple-700/90 hover:to-pink-700/90 text-white border border-white/20 shadow-lg"
                  >
                    <Link 
                      href="https://github.com/Akshat2634" 
                      target="_blank" 
                      className="!cursor-pointer flex items-center"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Explore Full Portfolio
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 