"use client"

import { motion , useInView} from "framer-motion"
import { CounterAnimation } from "@/components/Counter"
import { Award, LineChart, BrainCircuit, Database } from "lucide-react"
import { useRef } from "react"

import {Card3D} from "@/components/Card3D"
export default function Stats() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })

  return (

    <section ref={statsRef} className="py-16 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          Our Impact
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Driving Measurable Results</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our AI solutions deliver tangible business outcomes and ROI across industries
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl h-full">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              <CounterAnimation end={98} />%
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Client Satisfaction</p>
          </Card3D>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl h-full">
            <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
              <LineChart className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">
              <CounterAnimation end={43} />%
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Average ROI Increase</p>
          </Card3D>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl h-full">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
              <BrainCircuit className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              <CounterAnimation end={120} />+
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">AI Models Deployed</p>
          </Card3D>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl h-full">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
              <CounterAnimation end={5} decimals={1} />
              TB
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Data Processed Daily</p>
          </Card3D>
        </motion.div>
      </div>
    </div>
  </section>

  )
}
