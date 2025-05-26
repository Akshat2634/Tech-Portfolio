"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: string }[]>([])

  useEffect(() => {
    let idCounter = 0

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)
      
      // Make cursor visible on first mouse movement
      if (!isVisible) {
        setIsVisible(true)
      }
      
      // Add to trail with unique ID
      setTrail(prev => {
        idCounter += 1
        const uniqueId = `${Date.now()}-${idCounter}-${Math.random().toString(36).substr(2, 9)}`
        const newTrail = [...prev, { ...newPosition, id: uniqueId }]
        // Keep only last 8 trail points
        return newTrail.slice(-8)
      })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Add event listeners for hoverable elements
    const hoverableElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    )

    hoverableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)

      hoverableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isVisible])

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(point => {
        const timestamp = parseInt(point.id.split('-')[0])
        return Date.now() - timestamp < 500
      }))
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  // Don't render cursor until mouse has moved
  if (!isVisible) {
    return null
  }

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-[9997]"
          style={{
            x: point.x - 4,
            y: point.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ 
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] shadow-lg"
        style={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          background: isHovering 
            ? "linear-gradient(45deg, #8b5cf6, #ec4899)" 
            : "linear-gradient(45deg, #3b82f6, #8b5cf6)",
          boxShadow: isHovering 
            ? "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)"
            : "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />

      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          borderColor: isHovering 
            ? "rgba(139, 92, 246, 0.8)" 
            : "rgba(59, 130, 246, 0.8)",
          boxShadow: isHovering 
            ? "0 0 15px rgba(139, 92, 246, 0.3)"
            : "0 0 15px rgba(59, 130, 246, 0.3)",
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.6 : 1,
          opacity: isHovering ? 1 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      />

      {/* Pulse effect on click */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 border-2 border-white rounded-full pointer-events-none z-[9996]"
          style={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </>
  )
} 