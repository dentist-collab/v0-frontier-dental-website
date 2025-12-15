"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

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
          <h1 className="text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services or ready to book an appointment? Contact Frontier Dental Clinic in
            Kisaasi, Uganda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Location</h3>
                <p className="text-muted-foreground">Kisaasi, Uganda</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Visit our modern, fully-equipped dental clinic in the heart of Kisaasi.
            </p>
            <div className="w-full h-48 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7354154218024!2d32.59845568885497!3d0.36936180000000307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb07d12fe20d%3A0x2e5ff9a965ba823f!2sFrontier%20Dental%20Clinic!5e0!3m2!1sen!2sug!4v1765701217275!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Frontier Dental Clinic Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          

          {/* Clinic Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Phone</h3>
                  <a href="tel:+256706884113" className="text-muted-foreground hover:text-primary transition-colors">
                    +256706 884113
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Call us to schedule an appointment or ask questions about our services.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Email</h3>
                  <a
                    href="mailto:info@frontierdentaluganda.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    info@frontierdentaluganda.com
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Send us an email and we'll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-foreground mb-8">Office Hours</h2>

            <div className="space-y-6 bg-card rounded-2xl p-8 border border-border">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="w-full">
                  <h3 className="text-foreground font-semibold mb-4">Visit Us</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-foreground font-semibold mb-4">About Our Clinic</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Frontier Dental Clinic is committed to providing accessible and affordable dental excellence in
                  Kisaasi, Uganda. Our mission is to ensure every patient achieves and maintains a healthy, confident
                  smile without the burden of excessive cost.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a comprehensive range of services from routine check-ups and cleanings to advanced cosmetic
                  and restorative procedures, all at transparent, predictable pricing.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
