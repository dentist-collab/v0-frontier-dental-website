"use client"

import { useMemo, useState } from "react"
import type { Container, Theme } from "./settings/types"
import { PortfolioNavbar } from "./components/generated/PortfolioNavbar"
import { InnovateAIHero } from "./components/generated/InnovateAIHero"
import { PhilosophySection } from "./components/generated/PhilosophySection"
import { FeaturesGrid } from "./components/generated/FeaturesGrid"
import { FeaturesSection } from "./components/generated/FeaturesSection"
import { TestimonialsSection } from "./components/generated/TestimonialsSection"
import { PricingSection } from "./components/generated/PricingSection"
import { FAQSection } from "./components/generated/FAQSection"
import { Footer } from "./components/generated/Footer"
import { ServicesPage } from "./pages/ServicesPage"
import { BlogPage } from "./pages/BlogPage"
import { ContactPage } from "./pages/ContactPage"
import { GalleryPage } from "./pages/GalleryPage"

const theme: Theme = "light"
const container: Container = "none"

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "blog" | "contact" | "gallery">("home")

  function setTheme(theme: Theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  setTheme(theme)

  const generatedComponent = useMemo(() => {
    if (currentPage === "services") {
      return (
        <>
          <PortfolioNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <ServicesPage />
          <Footer />
        </>
      )
    } else if (currentPage === "blog") {
      return (
        <>
          <PortfolioNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <BlogPage />
          <Footer />
        </>
      )
    } else if (currentPage === "gallery") {
      return (
        <>
          <PortfolioNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <GalleryPage />
          <Footer />
        </>
      )
    } else if (currentPage === "contact") {
      return (
        <>
          <PortfolioNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <ContactPage />
          <Footer />
        </>
      )
    }

    // Home page (default)
  // Home page (default)
   const siteName = "Frontier Dental Clinic Uganda";
   
  return (
    <>
      <PortfolioNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <InnovateAIHero siteName={siteName} />
      <PhilosophySection />
      <FeaturesGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </>
  )
  }, [currentPage])

  if (container === "centered") {
    return <div className="h-full w-full flex flex-col items-center justify-center">{generatedComponent}</div>
  } else {
    return generatedComponent
  }
}

export default App
