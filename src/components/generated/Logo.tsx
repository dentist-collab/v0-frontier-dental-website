"use client"

import { motion } from "framer-motion"

// @component: Logo
export const Logo = () => {
  // @return
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.2,
      }}
      className="flex items-center space-x-3 cursor-pointer"
    >
      <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-background rounded-sm"></div>
      </div>
      <h2 className="text-2xl font-bold text-foreground font-sans">
        <span>Frontier</span>
      </h2>
    </motion.div>
  )
}
