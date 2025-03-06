import React from 'react'
import { motion,useInView } from 'framer-motion'
import Image from 'next/image'
import { Card3D } from './Card3D'
import { useRef } from 'react'



export default function Standout() {
    const standoutRef = useRef(null)
    const standoutInView = useInView(standoutRef, { once: true, amount: 0.2 })
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
    
      // Floating animation for cards
      const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }
    
  return (
    <section ref={standoutRef} className="py-20 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={standoutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          Our Approach
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">How does Cache Logic stand out?</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We bring together the best AI technologies and expertise to deliver solutions that drive real business
          outcomes and competitive advantage.
        </p>
      </motion.div>
      <motion.div
className="relative mb-16 flex justify-center"
initial={{ opacity: 0, y: 30 }}
animate={standoutInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.7, delay: 0.2 }}
>
{/* Background Gradient */}
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-900/20 dark:to-indigo-900/20 pointer-events-none"></div>

{/* Image Container */}
<div className="relative w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
<Image
src="/stand.png"
alt="Team collaboration"
width={800}
height={400}
className="w-full h-auto rounded-2xl shadow-xl"
/>

{/* Floating elements */}
<motion.div
className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
animate={floatingAnimation}
>
<div className="flex items-center gap-2">
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <span className="text-xs font-medium dark:text-white">Collaboration</span>
</div>
</motion.div>

<motion.div
className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
animate={{
  ...floatingAnimation,
  transition: {
    ...floatingAnimation.transition,
    delay: 0.5,
  },
}}
>
<div className="flex items-center gap-2">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <span className="text-xs font-medium dark:text-white">Innovation</span>
</div>
</motion.div>
</div>
</motion.div>


      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={standoutInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <Card3D className="h-full">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold">01</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Specialized AI Development Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team consists of AI specialists with deep domain knowledge across industries, ensuring
                tailored solutions.
              </p>
            </div>
          </Card3D>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card3D className="h-full">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold">02</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Built with Scale in Your Mind</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our solutions are designed to grow with your business needs and adapt to changing requirements
                seamlessly.
              </p>
            </div>
          </Card3D>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card3D className="h-full">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold">03</span>
              </div>
              <h3 className="font-bold text-xl mb-3 dark:text-white">Focused on the End Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We measure success by the tangible business outcomes our AI solutions deliver, not just technical
                metrics.
              </p>
            </div>
          </Card3D>
        </motion.div>
      </motion.div>
    </div>
  </section>

 
  )
}
