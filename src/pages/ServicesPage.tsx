"use client"

import { motion } from "framer-motion"
import { Smile, Sparkles, Zap, Shield, Heart, Wrench } from "lucide-react"

export const ServicesPage = () => {
  const services = [
    {
      title: "General & Preventative Care",
      description: "Routine check-ups, cleanings, and fillings to maintain optimal oral health.",
      icon: Shield,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Professional whitening, veneers, and smile enhancements with introductory pricing.",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Orthodontic Care",
      description: "Deep alignment solutions including clear aligner options with flexible payment plans.",
      icon: Smile,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Teeth Replacement",
      description: "Extractions, bridges, dentures, and cost-effective dental implant solutions.",
      icon: Zap,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Restorative Dentistry",
      description: "Crown treatments with various material options and transparent bundled pricing.",
      icon: Wrench,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Surgical Services",
      description: "Routine and surgical extractions with clear, single-fee pricing structure.",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="w-full pt-32 pb-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <h1 className="text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            At Frontier Dental Clinic, we provide comprehensive dental care at affordable prices without compromising
            quality. From preventative care to advanced cosmetic procedures, we're here for your smile.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <button className="mt-6 text-primary font-semibold hover:text-primary/80 transition-colors">
                  Learn More →
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-accent/10 rounded-2xl p-8 text-center border border-accent/20"
        >
          <h2 className="text-foreground mb-4">Why Choose Frontier Dental?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            We champion accessible and affordable dental excellence. Our model is built on efficiency, not cutting
            corners on quality. Every service is transparently priced and designed to make professional dental care
            accessible to everyone in Kisaasi, Uganda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold">
              Affordable Pricing
            </div>
            <div className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold">
              Expert Dentists
            </div>
            <div className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold">
              Flexible Payment Plans
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
