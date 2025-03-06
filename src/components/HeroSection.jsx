"use client"
import {ParticleBackground} from "@/components/ParticleBg"
import { motion, useScroll, useTransform ,useInView} from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, MousePointer } from "lucide-react"
import { useRef } from "react"

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
export default function Hero() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3])
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  const heroImageY = useTransform(scrollYProgress, [0, 0.1], [0, 50])
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  return (
    <motion.section
    ref={heroRef}
    className="relative bg-navy-900 dark:bg-gray-900 text-white py-20 md:py-28 lg:py-32 overflow-hidden"
    style={{ opacity: heroOpacity, scale: heroScale }}
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-navy-900 to-indigo-900 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900"></div>

    {/* Particle effect */}
    <ParticleBackground className="z-10" />

    {/* Animated background shapes */}
    <motion.div
      className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
    />
    <motion.div
      className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -20, 0],
        y: [0, 20, 0],
      }}
      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
            AI-Powered Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Fast-Tracking Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              AI Evolution
            </span>
          </h1>
          <p className="text-lg text-blue-100/80 max-w-lg">
            A powerful platform to accelerate your AI development and deployment with cutting-edge technology and
            expert guidance.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-lg shadow-lg shadow-blue-600/30 flex items-center gap-2 text-base">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-white/20 text-black hover:bg-white/10 px-8 py-6 rounded-lg flex items-center gap-2 text-base"
              >
                Watch Demo <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[400px] md:h-[450px] lg:h-[500px]"
          style={{ y: heroImageY }}
          initial={{ opacity: 0, x: 50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
          <Image
            src="/top.png"
            alt="AI Development Team"
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />
          {/* Floating elements */}
          <motion.div
            className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
            animate={floatingAnimation}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-black dark:text-white">AI Model Training</span>
            </div>
          </motion.div>
          <motion.div
            className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
            animate={{
              ...floatingAnimation,
              transition: {
                ...floatingAnimation.transition,
                delay: 1,
              },
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs font-medium dark:text-white">Real-time Analytics</span>
            </div>
          </motion.div>

          {/* Animated code block */}
          <motion.div
            className="absolute top-16 -right-10 bg-gray-900 p-3 rounded-lg shadow-lg text-xs text-green-400 font-mono max-w-[200px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-400 text-[10px]">model.py</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <span className="text-blue-400">def</span> train_model(data):
              <br />
              &nbsp;&nbsp;model = Sequential()
              <br />
              &nbsp;&nbsp;<span className="text-blue-400">return</span> model.fit(data)
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
    >
      <MousePointer className="w-6 h-6 text-blue-300/70" />
    </motion.div>
  </motion.section>

  )
}
