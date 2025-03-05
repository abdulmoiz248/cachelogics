"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Twitter, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: "Faizan Ahmad",
    role: "Founder & CEO",
    description: "Former co-founder of Opendoor. Early staff at Apple and Google.",
    image: "/1.png",
    socials: true,
    large: true,
  },
  {
    name: "Abdullah Sarfaraz",
    role: "Co-Founder",
    image: "/2.png",
  },
  {
    name: "Annie Stanley",
    role: "Product Manager",
    image: "/3.png",
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            Our Team
          </div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our philosophy is simple — hire a team of diverse, passionate people and foster a 
            culture that empowers you to do your best work.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" className="rounded-full px-6">
              Read our principles
            </Button>
            <Button className="rounded-full px-6 bg-blue-900 hover:bg-blue-950 text-white">
              We're hiring!
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden ${
                member.large ? "md:row-span-2 h-full" : "h-[280px]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={member.large ? 800 : 400}
                height={member.large ? 600 : 400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-2xl">{member.name}</h3>
                    <p className="text-gray-200 mt-1">{member.role}</p>
                    {member.description && (
                      <p className="text-gray-300 text-sm mt-2 max-w-md">{member.description}</p>
                    )}
                    
                    {member.socials && (
                      <div className="flex gap-3 mt-4">
                        <button className="text-white hover:text-gray-200 transition-colors">
                          <Twitter size={20} />
                        </button>
                        <button className="text-white hover:text-gray-200 transition-colors">
                          <Linkedin size={20} />
                        </button>
                        <button className="text-white hover:text-gray-200 transition-colors">
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                            <span className="text-black text-xs font-bold">G</span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
