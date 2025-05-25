"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: Date.now() }]
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
  }, [])

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(point => Date.now() - point.id < 500))
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-[9997]"
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
            ? "linear-gradient(45deg, #ff6b6b, #feca57)" 
            : "linear-gradient(45deg, #00d2ff, #3a47d5)",
          boxShadow: isHovering 
            ? "0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(254, 202, 87, 0.4)"
            : "0 0 20px rgba(0, 210, 255, 0.6), 0 0 40px rgba(58, 71, 213, 0.4)",
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
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
            ? "rgba(255, 107, 107, 0.8)" 
            : "rgba(0, 210, 255, 0.8)",
          boxShadow: isHovering 
            ? "0 0 15px rgba(255, 107, 107, 0.3)"
            : "0 0 15px rgba(0, 210, 255, 0.3)",
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 2.2 : 1,
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