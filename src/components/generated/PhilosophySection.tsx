"use client"

import { motion } from "framer-motion"
import { Brain, Target, Sparkles } from "lucide-react"
type PhilosophySectionProps = {
  className?: string
}
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
  },
}
const fadeInRight = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.6,
    delay: 0.2,
  },
}
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// @component: PhilosophySection
export const PhilosophySection = ({ className = "" }: PhilosophySectionProps) => {
  // @return
  return (
    <section className={`w-full flex items-center py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          

          <motion.div initial="initial" animate="animate" variants={fadeInRight} className="relative">
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
