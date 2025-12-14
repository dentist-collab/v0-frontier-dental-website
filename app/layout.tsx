import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, Geist_Mono } from "next/font/google"

// Initialize fonts
const _inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Frontier Dental Clinic - Affordable Dental Care in Kisaasi, Uganda",
  description:
    "Expert dental services in Kisaasi, Uganda. Affordable prices, high-quality care. From general dentistry to cosmetic procedures. Book your appointment today.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
