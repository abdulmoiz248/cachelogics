import {  useState } from "react"


import {
  motion,

} from "framer-motion"
import { cn } from "@/lib/utils"

export const Card3D = ({ className, children }) => {
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
  
    const handleMouseMove = (e) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
  
      setRotateX(rotateX)
      setRotateY(rotateY)
    }
  
    const handleMouseLeave = () => {
      setRotateX(0)
      setRotateY(0)
    }
  
    return (
      <motion.div
        className={cn("relative transition-all duration-200 ease-out", className)}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    )
  }