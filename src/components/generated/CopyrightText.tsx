"use client"

import { motion } from "framer-motion"

// @component: CopyrightText
export const CopyrightText = () => {
  // @return
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay: 0.3,
      }}
      className="text-center"
    >
      <p className="text-sm text-muted-foreground">
        <span>© 2025 Frontier Dental. Designed  by Senra Technologies.</span>
      </p>
    </motion.div>
  )
}
