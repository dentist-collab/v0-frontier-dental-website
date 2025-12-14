"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "../../components/ui/card"

interface PricingItem {
  serviceName: string
  price: string
}

const pricingData: PricingItem[] = [
  { serviceName: "Consultation", price: "50,000" },
  { serviceName: "Extractions", price: "50,000" },
  { serviceName: "Cementation (Filling)", price: "100,000 - 150,000" },
  { serviceName: "Scaling and Polishing", price: "150,000" },
  { serviceName: "Replacement (Removable Dentures)", price: "150,000" },
  { serviceName: "Surgical Extraction", price: "250,000" },
  { serviceName: "Teeth Whitening by Veneers", price: "500,000" },
  { serviceName: "Crowns per tooth", price: "800,000" },
  { serviceName: "PMF Bridge", price: "800,000" },
  { serviceName: "Root Canal Treatment + Crown", price: "950,000" },
  { serviceName: "Zirconia Crown", price: "1,000,000" },
]

export const MobilePricingList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
      {pricingData.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-4 flex justify-between items-center">
              <span className="font-medium text-foreground">{item.serviceName}</span>
              <span className="font-bold text-primary text-lg whitespace-nowrap ml-4">{item.price} UGX</span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
