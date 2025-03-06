"use client"

import { motion,useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import {Button} from "./ui/button"

export default function Products() {
  const productsRef = useRef(null)
  const productsInView = useInView(productsRef, { once: true, amount: 0.2 })
  return (
    <section ref={productsRef} className="py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
                Case Studies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Products We Have Worked On</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore our portfolio of successful AI implementations that have transformed businesses across
                industries.
              </p>
            </motion.div>

            <div className="space-y-24">
              {/* Product 1 */}
              <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium">
                    Analytics Platform
                  </div>
                  <h3 className="font-bold text-2xl md:text-3xl dark:text-white">Product #1</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    An AI-powered analytics platform that helps businesses understand customer behavior and optimize
                    their marketing strategies with real-time insights and predictive modeling.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-md flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  className="border rounded-xl p-3 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/project.png"
                    alt="Product 1 screenshot"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Product 2 */}
              <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium">
                    Predictive Maintenance
                  </div>
                  <h3 className="font-bold text-2xl md:text-3xl dark:text-white">Product #2</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A machine learning solution for predictive maintenance that helps manufacturing companies reduce
                    downtime and maintenance costs through early detection of equipment issues.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-md flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  className="border rounded-xl p-3 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/project.png"
                    alt="Product 2 screenshot"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Product 3 */}
              <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium">
                    Customer Service
                  </div>
                  <h3 className="font-bold text-2xl md:text-3xl dark:text-white">Product #3</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    An NLP-based customer service automation platform that improves response times and customer
                    satisfaction through intelligent routing and automated responses.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-md flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  className="border rounded-xl p-3 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/project.png"
                    alt="Product 3 screenshot"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

  )
}
