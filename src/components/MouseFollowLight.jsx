import { useEffect, useState } from "react"

import {
  motion,

  useMotionTemplate,
  useSpring,

} from "framer-motion"

export const MouseFollowLight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
      const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
  
      window.addEventListener("mousemove", updateMousePosition)
  
      return () => {
        window.removeEventListener("mousemove", updateMousePosition)
      }
    }, [])
  
    const springConfig = { damping: 40, stiffness: 300 }
    const mouseX = useSpring(mousePosition.x, springConfig)
    const mouseY = useSpring(mousePosition.y, springConfig)
  
    return (
      <motion.div
        className="spotlight fixed inset-0 pointer-events-none z-30 opacity-40"
        style={{
          background: useMotionTemplate`radial-gradient(circle 400px at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
    )
  }
  