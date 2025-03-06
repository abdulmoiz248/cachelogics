import React from 'react'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
export default function CTABanner() {
  return (
    <motion.section
        className="bg-gradient-to-r from-black to-blue-900 dark:from-blue-900 dark:to-indigo-900 text-white py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Accelerating IT solutions for the modern world</h2>
            <p className="text-blue-100/80">Discover how our AI solutions can transform your business</p>
          </div>
          <motion.div className="mt-6 md:mt-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-navy-900 text-black dark:text-gray-900 hover:bg-gray-100 shadow-lg px-8 py-6 rounded-lg text-base flex items-center gap-2">
              Contact Us <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
  )
}
