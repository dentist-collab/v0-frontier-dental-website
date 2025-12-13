"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Heart, Sparkles, Moon, ChevronRight } from "lucide-react"

type FeatureSectionProps = {
  className?: string
}
type Feature = {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  image: string
}
const features: Feature[] = [
  {
    id: 1,
    icon: <Brain className="w-7 h-7" />,
    title: "Intentional Focus",
    description:
      "Choose what matters most each day. Nebra helps you set clear intentions and stay aligned with your priorities, not just your to-do list.",
    image: "/images/brain-icon.png",
  },
  {
    id: 2,
    icon: <Heart className="w-7 h-7" />,
    title: "Energy Management",
    description:
      "Plan your work around your natural rhythms. Schedule deep work when you're most focused, and rest when you need it most.",
    image: "/images/heart-icon.png",
  },
  {
    id: 3,
    icon: <Sparkles className="w-7 h-7" />,
    title: "Mindful Transitions",
    description:
      "Gentle reminders help you shift between tasks with awareness. Take intentional breaks and maintain focus without burnout.",
    image: "/images/activity-icon.png",
  },
  {
    id: 4,
    icon: <Moon className="w-7 h-7" />,
    title: "Daily Reflection",
    description:
      "End each day with gratitude and insight. Track your progress, celebrate wins, and learn from your patterns.",
    image: "/images/moon-icon.png",
  },
]

// @component: FeaturesSection
export const FeaturesSection = ({ className = "" }: FeatureSectionProps) => {
  const [activeFeature, setActiveFeature] = useState(0)

  // Auto-rotate tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // @return
  return (
    <div className={`w-full py-24 px-6 ${className}`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        <div className="w-full max-w-2xl flex flex-col items-start gap-6">
          <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#F7F7F5] rounded-full">
            <span className="text-sm font-normal text-[#17100D]">How It Works</span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-black leading-tight tracking-tight">
              Work in rhythm with <br />
              your life
            </h2>

            <p className="text-xl font-normal text-[#898683] leading-relaxed tracking-tight max-w-[800px]">
              Frontier Dental adapts  with your budget, helping you find balance between productivity and peace.
            </p>
          </div>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors group"
          >
            <span className="text-[17px] font-medium text-black tracking-[-0.01em]">Explore Features</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 w-full">
          <div className="flex-1 aspect-square relative rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === activeFeature && (
                    <motion.img
                      key={feature.id}
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{
                        opacity: 0,
                        scale: 1.05,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    />
                  ),
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-1">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="cursor-pointer rounded-xl overflow-hidden relative"
                onClick={() => setActiveFeature(index)}
                initial={false}
                animate={{
                  height: activeFeature === index ? "auto" : "60px",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <div className="relative z-10 p-4">
                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="text-[#1A1816] flex-shrink-0">{feature.icon}</div>
                    <h5 className="text-[#1A1816] leading-snug tracking-tight">{feature.title}</h5>
                  </div>

                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-lg font-normal text-[#292421] leading-relaxed tracking-tight mt-2">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  initial={false}
                  animate={{
                    opacity: activeFeature === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
