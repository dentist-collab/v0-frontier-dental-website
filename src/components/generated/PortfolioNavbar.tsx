"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface PortfolioNavbarProps {
  currentPage?: "home" | "services" | "blog" | "contact" | "gallery"
  setCurrentPage?: (page: "home" | "services" | "blog" | "contact" | "gallery") => void
}

const navigationLinks = [
  {
    name: "Services",
    id: "services",
  },
  {
    name: "Gallery",
    id: "gallery",
  },
  {
    name: "Blog",
    id: "blog",
  },
  {
    name: "Contact",
    id: "contact",
  },
] as any[]

// @component: PortfolioNavbar
export const PortfolioNavbar = ({ currentPage = "home", setCurrentPage }: PortfolioNavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLinkClick = (pageId: string) => {
    closeMobileMenu()
    if (setCurrentPage) {
      setCurrentPage(pageId as "home" | "services" | "blog" | "contact" | "gallery")
    }
    window.scrollTo(0, 0)
  }

  // @return
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleLinkClick("home")}
              className="flex items-center hover:opacity-90 transition-opacity duration-200"
            >
              <img src="/images/logo.png" alt="Frontier Dental Clinic" className="h-12 w-auto" />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-200 relative group ${
                    currentPage === link.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  <span>{link.name}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      currentPage === link.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => handleLinkClick("contact")}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <span>Book Appointment</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
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
              ease: "easeInOut",
            }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left py-3 text-lg font-medium transition-colors duration-200 ${
                    currentPage === link.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  <span>{link.name}</span>
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all duration-200"
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
