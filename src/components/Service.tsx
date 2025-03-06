import React from 'react'
import { motion ,useInView} from 'framer-motion'
import { Card3D } from './Card3D'
import { Button } from '../components/ui/button'
import { ArrowRight } from 'lucide-react'



export default function Service() {
    const servicesRef = React.useRef(null)
    const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  return (
    <section ref={servicesRef} className="py-20 dark:bg-gray-950">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          Our Expertise
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Services We Offer</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive AI solutions tailored to your business needs, from development to deployment and beyond.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Center card */}
        <motion.div
          className="col-span-1 md:col-start-2 md:row-start-1 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
          }}
        >
          <Card3D className="h-full">
            <div className="bg-gradient-to-br from-navy-900 to-blue-900 dark:from-blue-900 dark:to-indigo-900 text-white p-8 rounded-2xl shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h3 className="font-bold text-xl mb-3">AI Development</h3>
              <p className="text-blue-100/80 mb-6">
                Custom AI solutions tailored to your business needs with state-of-the-art algorithms and models.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-white/30 text-black hover:bg-transparent w-full rounded-lg flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </Card3D>
        </motion.div>

        {/* Left top card */}
        <motion.div
          className="col-span-1 md:col-start-1 md:row-start-1"
          initial={{ opacity: 0, x: -30 }}
          animate={servicesInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="h-full">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 rounded-2xl shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 flex items-center justify-center">
                <span className="font-bold text-xl">ML</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Advanced ML models for data analysis and predictive insights that drive business decisions.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="w-full rounded-lg flex items-center justify-center gap-2 dark:text-white dark:border-gray-600"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </Card3D>
        </motion.div>

        {/* Right top card */}
        <motion.div
          className="col-span-1 md:col-start-3 md:row-start-1"
          initial={{ opacity: 0, x: 30 }}
          animate={servicesInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="h-full">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 rounded-2xl shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 flex items-center justify-center">
                <span className="font-bold text-xl">DA</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Data Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Turn your data into actionable insights with comprehensive analytics solutions.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="w-full rounded-lg flex items-center justify-center gap-2 dark:text-white dark:border-gray-600"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </Card3D>
        </motion.div>

        {/* Bottom row cards */}
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="h-full">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 rounded-2xl shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 flex items-center justify-center">
                <span className="font-bold text-xl">CV</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Computer Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Image recognition and processing solutions for automated visual insights.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="w-full rounded-lg flex items-center justify-center gap-2 dark:text-white dark:border-gray-600"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </Card3D>
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="h-full">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 rounded-2xl shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 flex items-center justify-center">
                <span className="font-bold text-xl">NLP</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Natural Language</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Text analysis and language processing for understanding customer sentiment and needs.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="w-full rounded-lg flex items-center justify-center gap-2 dark:text-white dark:border-gray-600"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </Card3D>
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <Card3D className="h-full">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 rounded-2xl shadow-lg h-full">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 flex items-center justify-center">
                <span className="font-bold text-xl">RL</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Reinforcement Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Advanced decision-making systems that learn and improve over time.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="w-full rounded-lg flex items-center justify-center gap-2 dark:text-white dark:border-gray-600"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  </section>

  )
}
