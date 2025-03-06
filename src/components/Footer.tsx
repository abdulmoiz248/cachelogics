"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
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
  )
}
