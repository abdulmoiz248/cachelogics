import React from 'react'
import { motion } from 'framer-motion'

export default function Partners() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 100 },
        },
      }
    
    
    
  return (
    <section className="py-12 border-b border-gray-200 dark:border-gray-800 dark:bg-gray-950">
    <div className="container mx-auto px-4">
      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center text-blue-600 dark:text-blue-400"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></div>
          <span className="font-medium">Microsoft</span>
        </motion.div>
        <motion.div
          className="flex items-center text-gray-700 dark:text-gray-300"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-5 h-5 rounded-full bg-gray-700 dark:bg-gray-300 mr-2"></div>
          <span className="font-medium">GitHub</span>
        </motion.div>
        <motion.div
          className="flex items-center text-blue-500"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-5 h-5 rounded-full bg-blue-500 mr-2"></div>
          <span className="font-medium">Foundation</span>
        </motion.div>
        <motion.div
          className="flex items-center text-orange-500"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-5 h-5 rounded-full bg-orange-500 mr-2"></div>
          <span className="font-medium">Runtime</span>
        </motion.div>
        <motion.div
          className="flex items-center text-red-500"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-5 h-5 rounded-full bg-red-500 mr-2"></div>
          <span className="font-medium">DataStore</span>
        </motion.div>
        <motion.div
          className="flex items-center text-purple-600"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-5 h-5 rounded-full bg-purple-600 mr-2"></div>
          <span className="font-medium">Serverless</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
  )
}
