"use client"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import { Separator } from "../../components/ui/separator"

// @component: Footer
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (section: string) => {
    window.scrollTo(0, 0)
  }

  // @return
  return (
    <footer className="w-full bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <img src="/images/logo.png" alt="Frontier Dental Clinic" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Your smile is our pride. Quality dental care at affordable prices in Kisaasi, Uganda.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Kisaasi, Kampala
                  <br />
                  Uganda
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+256123456789"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +256 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@frontierdentalclinic.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@frontierdentalclinic.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleLinkClick("home")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick("services")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleLinkClick("gallery")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => handleLinkClick("blog")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Blog
              </button>
              <button
                onClick={() => handleLinkClick("contact")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Legal and Office Hours Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Office Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Monday - Friday: 8am - 6pm</p>
              <p>Saturday: 9am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Legal</h4>
              <div className="flex flex-col space-y-1">
                <button className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                  Privacy Policy
                </button>
                <button className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section with Social Media and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {currentYear} Frontier Dental Clinic. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
