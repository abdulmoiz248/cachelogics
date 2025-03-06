"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion,useInView } from "framer-motion"

export default function ContactForm() {
  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 })
  return (
    <section
    ref={contactRef}
    className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
  >
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          Get in Touch
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          Let&apos;s Build the Next Product Together
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to start your AI journey? Contact us today to discuss how we can help transform your business.
        </p>
      </motion.div>

      <motion.form
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
          <Input
            placeholder="Your name"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
          <Input
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Phone</label>
          <Input
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Company</label>
          <Input
            placeholder="Your company"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
          <Textarea
            placeholder="Tell us about your project"
            className="w-full h-32 rounded-lg border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-md px-8 py-6 rounded-lg text-base flex items-center gap-2">
              Submit <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.form>
    </div>
  </section>

  )
}
