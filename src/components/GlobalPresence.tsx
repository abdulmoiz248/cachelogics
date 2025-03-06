import React from 'react'
import { motion } from 'framer-motion'
import {Globe} from '../components/magicui/globe'
import {Card3D} from './Card3D'


export default function GlobalPresence() {
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
    <section className="py-20 bg-white dark:bg-gray-950">
    <div className="container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          Global Reach
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">We are WORLDWIDE</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Serving clients across the globe with innovative AI solutions
        </p>
      </motion.div>

      <motion.div
        className="relative h-64 md:h-80 mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-2xl"></div>
        






        <Globe/>
        {/* Animated location markers */}
       
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card3D className="h-full">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="font-bold text-xl mb-3 dark:text-white">United States</h3>
              <p className="text-gray-600 dark:text-gray-400">
                New York
                <br />
                San Francisco
              </p>
            </div>
          </Card3D>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card3D className="h-full">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="font-bold text-xl mb-3 dark:text-white">Europe</h3>
              <p className="text-gray-600 dark:text-gray-400">
                London
                <br />
                Berlin
              </p>
            </div>
          </Card3D>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card3D className="h-full">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="font-bold text-xl mb-3 dark:text-white">Asia Pacific</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Singapore
                <br />
                Tokyo
              </p>
            </div>
          </Card3D>
        </motion.div>
      </motion.div>
    </div>
  </section>

  )
}
