"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    id: "what-is-nebra",
    question: "What is your commitment to quality despite your affordable prices?",
    answer:
      "Our lower prices result from efficient operations and smart procurement, not from cutting corners on quality. We use modern, safe equipment and materials that meet international standards. We prioritize high patient volume and pass the cost savings directly to you.",
  },
  {
    id: "how-it-works",
    question: "How much does a standard consultation or routine cleaning cost?",
    answer:
      "All consultations are at no-cost.",
  },
  {
    id: "who-for",
    question: "Do you accept local health insurance or corporate dental schemes?",
    answer:
      "Not yet, but we shall in the future.",
  },
  {
    id: "pricing",
    question: "How often should I really visit the dentist if I have budget concerns?",
    answer:
      "While the ideal is every six months, for budget-conscious patients, we recommend visiting at least once per year for a check-up and professional cleaning. This helps us spot small, inexpensive problems before they become big, costly emergencies..",
  },
  { 
    id: "mobile",
    question: "Is there a mobile app?",
    answer:
      "Yes! Nebra is available on iOS, Android, and web. Your intentions, reflections, and progress sync seamlessly across all devices so you can stay mindful wherever you are.",
  },
  {
    id: "data-privacy",
    question: "How is my data protected?",
    answer:
      "Your privacy is sacred to us. All data is encrypted end-to-end, stored securely, and never shared with third parties. You own your data and can export or delete it anytime.",
  },
  {
    id: "integrations",
    question: "Does Nebra integrate with other tools?",
    answer:
      "Yes, Nebra integrates with popular tools like Google Calendar, Notion, and Slack. We believe in working with your existing workflow, not replacing it entirely.",
  },
 {
    id: "support",
    question: "What kind of support do you offer?",
    answer:
      "We provide email support for all users, with priority support for Mindful and Teams plans. We also have a comprehensive help center, video tutorials, and a community forum for peer support.",
  }, 
] as any[]

// @component: FAQSection
export const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }
  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleAccordion(id)
    }
  }

  // @return
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            <span>Support</span>
          </p>
          <h2 className="text-5xl font-medium text-foreground mb-6 font-sans">
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span>Find clear answers about our affordable services, pricing, and quality commitment.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:bg-accent/50 transition-all duration-200"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset transition-colors duration-200"
                aria-expanded={openAccordion === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <div className="flex items-start justify-between">
                  <h6 className="text-xl font-semibold text-foreground pr-4 leading-tight font-sans">
                    <span>{faq.question}</span>
                  </h6>
                  <motion.div
                    animate={{
                      rotate: openAccordion === faq.id ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openAccordion === faq.id && (
                  <motion.div
                    id={`faq-content-${faq.id}`}
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        <span>{faq.answer}</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
