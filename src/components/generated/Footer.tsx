"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Separator } from "../../../components/ui/separator"
import { Button } from "../../../components/ui/button"

// @component: Footer
export const Footer = () => {
  // @return
  return (
    <footer className="w-full bg-gray-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content - Three Columns */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Brand/Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Frontier Dental Clinic" className="h-16 w-auto" />
              </div>
              <p className="text-foreground leading-relaxed max-w-sm">
                Committed to providing accessible and affordable dental excellence in Kisaasi, Uganda. Your smile is our
                pride.
              </p>
            </motion.div>

            {/* Column 2: Connect (Quick Links + Contact Info) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Quick Links */}
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#about"
                      className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>About Us</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>Services</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>Gallery</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-4">Contact Information</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="tel:+256706884113"
                      className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-3 group"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+256706 884113</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@frontierdentaluganda.com"
                      className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-3 group break-all"
                    >
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>info@frontierdentaluganda.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Column 3: Visit Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-foreground font-semibold text-xl">Visit Us Now</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Our Clinic Location</p>
                    <p className="text-foreground leading-relaxed">
                      Kisaasi, Uganda
                      <br />
                      Modern, fully-equipped dental facility
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7354154218024!2d32.59845568885497!3d0.36936180000000307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb07d12fe20d%3A0x2e5ff9a965ba823f!2sFrontier%20Dental%20Clinic!5e0!3m2!1sen!2sug!4v1765701217275!5m2!1sen!2sug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all group">
                    Get Directions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <p className="text-sm text-muted-foreground">
                  Open Monday-Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-border" />

        {/* Bottom Section: Copyright & Social Media */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-foreground text-sm">
              © {new Date().getFullYear()} Frontier Dental Clinic. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
