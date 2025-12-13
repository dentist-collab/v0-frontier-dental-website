"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star, Brain, Heart, Sparkles, Moon, Calendar, Zap } from "lucide-react"
import type React from "react"

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals beginning their mindful journey",
    monthlyPrice: 12,
    yearlyPrice: 120,
    features: [
      {
        icon: Brain,
        text: "Daily intentions & focus sessions",
      },
      {
        icon: Calendar,
        text: "Basic energy planning",
      },
      {
        icon: Moon,
        text: "Evening reflections",
      },
      {
        icon: Heart,
        text: "Balance reminders",
      },
    ],
    popular: false,
  },
  {
    id: "professional",
    name: "Mindful",
    description: "Advanced features for sustainable productivity",
    monthlyPrice: 24,
    yearlyPrice: 240,
    features: [
      {
        icon: Brain,
        text: "Advanced focus analytics",
      },
      {
        icon: Calendar,
        text: "Smart energy-based scheduling",
      },
      {
        icon: Moon,
        text: "Detailed reflection insights",
      },
      {
        icon: Zap,
        text: "Custom workflows & templates",
      },
      {
        icon: Sparkles,
        text: "Priority support",
      },
      {
        icon: Star,
        text: "Integrations with your tools",
      },
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Teams",
    description: "Bring mindful productivity to your entire team",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      {
        icon: Brain,
        text: "Team intention alignment",
      },
      {
        icon: Calendar,
        text: "Collaborative energy planning",
      },
      {
        icon: Moon,
        text: "Team reflection sessions",
      },
      {
        icon: Zap,
        text: "Advanced team analytics",
      },
      {
        icon: Sparkles,
        text: "Dedicated success manager",
      },
      {
        icon: Star,
        text: "Custom onboarding & training",
      },
    ],
    popular: false,
  },
] as any[]

// @component: PricingSection
export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false)

  // @return
  return (
    null
  )
}
