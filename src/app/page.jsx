"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  MousePointer,
  Sun,
  Moon,
  ArrowDown,
  Database,
  LineChart,
  BrainCircuit,
  Award,
  Star,
  Import,
} from "lucide-react"
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionTemplate,
  useSpring,
  AnimatePresence,
} from "framer-motion"

import {Card3D} from "@/components/Card3D"
import {CounterAnimation} from "@/components/Counter"
import {ParticleBackground} from "@/components/ParticleBg"
import {TestimonialCard} from "@/components/Testimonial"
import {TimelineItem} from "@/components/Timeline"
import {MouseFollowLight} from "@/components/MouseFollowLight"
import {FAQItem} from "@/components/FAQ"

import TeamSection from "@/components/TeamSection"
import { Globe } from "@/components/magicui/globe"
export default function LandingPage() {
 
  const [darkMode, setDarkMode] = useState(false)

  const [scrollProgress, setScrollProgress] = useState(0)

  const [openFAQ, setOpenFAQ] = useState(null)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const standoutRef = useRef(null)
  const productsRef = useRef(null)
  const teamRef = useRef(null)
  const statsRef = useRef(null)
  const timelineRef = useRef(null)
  const testimonialsRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

  // InView hooks for triggering animations
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const standoutInView = useInView(standoutRef, { once: true, amount: 0.2 })
  const productsInView = useInView(productsRef, { once: true, amount: 0.1 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  // Scroll animations
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3])
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  // Parallax effect for hero image
  const heroImageY = useTransform(scrollYProgress, [0, 0.1], [0, 50])

  // Update scroll progress for indicator
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => setScrollProgress(v))
    return () => unsubscribe()
  }, [scrollYProgress])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Staggered animation variants
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

  // FAQ data
  const faqData = [
    {
      question: "What AI technologies do you specialize in?",
      answer:
        "We specialize in machine learning, deep learning, natural language processing, computer vision, and reinforcement learning technologies, tailored to meet specific business needs.",
    },
    {
      question: "How long does it typically take to implement an AI solution?",
      answer:
        "Implementation timelines vary based on project complexity, but typically range from 2-6 months. We provide a detailed timeline during the initial consultation phase.",
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer:
        "Yes, we offer comprehensive support packages that include maintenance, updates, performance monitoring, and continuous improvement of your AI solutions.",
    },
    {
      question: "Can you work with our existing systems and infrastructure?",
      answer:
        "Absolutely. Our solutions are designed to integrate seamlessly with your existing infrastructure, whether on-premise, cloud-based, or hybrid environments.",
    },
    {
      question: "How do you ensure the security of AI implementations?",
      answer:
        "We implement robust security measures including data encryption, access controls, regular security audits, and compliance with industry standards like GDPR, HIPAA, and SOC 2.",
    },
  ]

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechNova Inc.",
      quote:
        "Cache Logic transformed our data analytics capabilities. Their AI solution helped us identify patterns we never would have seen otherwise.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing",
      quote:
        "The predictive maintenance system developed by Cache Logic reduced our downtime by 37% and saved us millions in operational costs.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Innovation",
      company: "HealthTech Solutions",
      quote:
        "Working with Cache Logic was seamless from start to finish. Their team's expertise in healthcare AI applications is unmatched.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div
      className={`flex flex-col min-h-screen ${darkMode ? "dark bg-gray-950" : "bg-gradient-to-b from-white to-gray-50"}`}
    >
      {/* Mouse follow light effect */}
      <MouseFollowLight />

      {/* Fixed scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Navigation */}
      <motion.header
        className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl tracking-tight">
              <span className="text-blue-600 dark:text-blue-400">CACHE</span>
              <span className="dark:text-white">LOGIC</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium relative group dark:text-gray-300">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-sm font-medium relative group dark:text-gray-300">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-sm font-medium relative group dark:text-gray-300">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-sm font-medium relative group dark:text-gray-300">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-sm font-medium relative group dark:text-gray-300">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ rotate: 15 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-md"
              >
                Sign In
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Partners Section */}
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

        {/* Stats Section - NEW */}
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

        {/* Services Section */}
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

        {/* Timeline Section  */}
        <section
          ref={timelineRef}
          className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Evolution of Cache Logic</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From startup to industry leader, our journey of innovation and excellence
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto px-4">
              <TimelineItem
                year="2015"
                title="Foundation"
                description="Cache Logic was founded with a mission to make AI accessible for businesses of all sizes."
                isLast={false}
              />
              <TimelineItem
                year="2017"
                title="First Enterprise Client"
                description="Secured our first Fortune 500 client and delivered a transformative AI solution."
                isLast={false}
              />
              <TimelineItem
                year="2019"
                title="Global Expansion"
                description="Opened offices in Europe and Asia to better serve our growing international client base."
                isLast={false}
              />
              <TimelineItem
                year="2021"
                title="Platform Launch"
                description="Launched our proprietary AI development platform, accelerating client implementation timelines."
                isLast={false}
              />
              <TimelineItem
                year="2023"
                title="Industry Recognition"
                description="Recognized as a leader in AI solutions by major industry analysts and publications."
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* How We Stand Out Section */}
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

       
        <section ref={testimonialsRef} className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
                Client Feedback
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Hear directly from businesses that have transformed their operations with our AI solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
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

        {/* FAQ Section*/}
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

        {/* Team Section */}
       <TeamSection/>
        {/* Global Presence Section */}
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

        {/* Contact Form Section */}
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
                Let's Build the Next Product Together
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
      </main>

      {/* CTA Banner */}
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

      {/* Footer */}
      <footer className="bg-navy-900 dark:bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="font-bold text-2xl mb-6">
                <span className="text-blue-400">CACHE</span> LOGIC
              </h3>
              <p className="text-blue-100/70 mb-6">
                Accelerating AI innovation for businesses worldwide with cutting-edge solutions and expert guidance.
              </p>
              <div className="flex space-x-3">
                <motion.button
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-blue-100/70">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4 text-blue-100/70">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-blue-100/70">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="pt-8 border-t border-white/10 text-sm text-blue-100/50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>&copy; {new Date().getFullYear()} Cache Logic. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

