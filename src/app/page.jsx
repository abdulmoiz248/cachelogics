"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/HeroSection"
import Stats from "@/components/Stats"
import Testimonials from "@/components/TestimonialMain"
import FAQ from "@/components/FAQSection"
import Products from "@/components/Products"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import Partners from "@/components/Partners"
import Service from "@/components/Service"
import TimeLine from "@/components/TimeLine"
import TeamSection from "@/components/TeamSection"
import GlobalPresence from "@/components/GlobalPresence"
import CTABanner from "@/components/CTABanner"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Partners/>
        <Stats />
        <Service/>
        <TimeLine/>
        <Testimonials />
        <FAQ />
        <TeamSection/>
        <Products />
        <GlobalPresence/>
        <ContactForm />
      </main>

      {/* Footer */}
      <CTABanner/>
      <Footer />
    </div>
  )
}
