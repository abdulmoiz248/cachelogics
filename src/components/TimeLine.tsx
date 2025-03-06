import React from 'react'
import { motion,useInView } from 'framer-motion'
import {TimelineItem} from './TimelineItem'
import { useRef } from 'react'

export default function TimeLine() {
    const timelineRef = useRef(null)
    const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 })

  return (
    <section
    ref={timelineRef}
    className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
  >
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={timelineInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          Our Journey
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Evolution of Cache Logic</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From startup to industry leader, our journey of innovation and excellence
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto px-4">
        <TimelineItem
          year="2015"
          title="Foundation"
          description="Cache Logic was founded with a mission to make AI accessible for businesses of all sizes."
          isLast={false}
        />
        <TimelineItem
          year="2017"
          title="First Enterprise Client"
          description="Secured our first Fortune 500 client and delivered a transformative AI solution."
          isLast={false}
        />
        <TimelineItem
          year="2019"
          title="Global Expansion"
          description="Opened offices in Europe and Asia to better serve our growing international client base."
          isLast={false}
        />
        <TimelineItem
          year="2021"
          title="Platform Launch"
          description="Launched our proprietary AI development platform, accelerating client implementation timelines."
          isLast={false}
        />
        <TimelineItem
          year="2023"
          title="Industry Recognition"
          description="Recognized as a leader in AI solutions by major industry analysts and publications."
          isLast={true}
        />
      </div>
    </div>
  </section>

  )
}
