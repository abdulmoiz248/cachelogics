"use client"

import { motion ,useInView} from "framer-motion"
import { useRef } from "react"
import { TestimonialCard } from "@/components/Testimonial"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechNova Inc.",
    quote: "Cache Logic transformed our data analytics capabilities. Their AI solution helped us identify patterns we never would have seen otherwise.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Chen",
    role: "VP of Operations",
    company: "Global Manufacturing",
    quote: "The predictive maintenance system developed by Cache Logic reduced our downtime by 37% and saved us millions in operational costs.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Innovation",
    company: "HealthTech Solutions",
    quote: "Working with Cache Logic was seamless from start to finish. Their team's expertise in healthcare AI applications is unmatched.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  return (
    <section ref={testimonialsRef} className="py-20 bg-white dark:bg-gray-950">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          Client Feedback
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hear directly from businesses that have transformed their operations with our AI solutions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  )
}
