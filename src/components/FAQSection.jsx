"use client"

import { useRef,useState } from "react"
import {FAQItem} from "@/components/Faq"
import { useInView,motion } from "framer-motion"

const faqData = [
  { question: "What AI technologies do you specialize in?", answer: "We specialize in machine learning, deep learning, NLP, computer vision, and reinforcement learning." },
  { question: "How long does it take to implement an AI solution?", answer: "Timelines vary but typically range from 2-6 months." },
  { question: "Do you offer ongoing support after implementation?", answer: "Yes, we provide maintenance, updates, and performance monitoring." }
]

export default function FAQ() {
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 })
  const [openFAQ, setOpenFAQ] = useState(null)
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  return (
    <section
          ref={faqRef}
          className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
                Questions & Answers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our AI solutions and services
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </motion.div>
          </div>
        </section>

  )
}
