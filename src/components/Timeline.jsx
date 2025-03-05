import { useRef } from "react"

import {
  motion,

  useInView,
 
} from "framer-motion"
export const TimelineItem = ({ year, title, description, isLast }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })
  
    return (
      <motion.div
        ref={ref}
        className="flex gap-6"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          {!isLast && <div className="w-0.5 h-full bg-blue-600/20"></div>}
        </div>
        <div className="pb-10">
          <div className="font-bold text-blue-600">{year}</div>
          <h3 className="text-lg font-bold mt-1">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </motion.div>
    )
  }