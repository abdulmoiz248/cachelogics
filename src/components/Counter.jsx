import { useEffect, useRef, useState } from "react"

import {

  useInView,

} from "framer-motion"
export const CounterAnimation = ({ end, duration = 2, decimals = 0 }) => {
    const [count, setCount] = useState(0)
    const nodeRef = useRef(null)
    const inView = useInView(nodeRef, { once: true })
  
    useEffect(() => {
      if (inView) {
        let startTime
        let animationFrame
  
        const updateCount = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = timestamp - startTime
          const percentage = Math.min(progress / (duration * 1000), 1)
  
          setCount(percentage * end)
  
          if (progress < duration * 1000) {
            animationFrame = requestAnimationFrame(updateCount)
          }
        }
  
        animationFrame = requestAnimationFrame(updateCount)
  
        return () => cancelAnimationFrame(animationFrame)
      }
    }, [inView, end, duration])
  
    return <span ref={nodeRef}>{count.toFixed(decimals)}</span>
  }