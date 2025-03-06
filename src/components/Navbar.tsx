"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <motion.header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">CACHE LOGIC</Link>
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Services", "Products", "Contact"].map((item) => (
            <Link key={item} href="#" className="text-sm font-medium relative group">{item}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <motion.button onClick={toggleDarkMode} className="p-2 rounded-full">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          <Button size="sm">Sign In</Button>
        </div>
      </div>
    </motion.header>
  )
}