import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"

// Initialize fonts
const _plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Frontier Dental Clinic | Affordable Dentist in Kisaasi, Kampala",
  description:
    "Frontier Dental Clinic - Top-rated dental clinic in Kisaasi, Kampala. Offering professional teeth whitening (UGX 50,000), root canals (UGX 450,000), consultations, and restorative care.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "dentist in Kampala",
    "dental clinic Kisaasi",
    "affordable teeth whitening Uganda",
    "root canal cost Kampala",
    "Frontier Dental Clinic",
    "dental services Kampala",
    "affordable dental care Uganda",
    "Kisaasi dentist",
  ],
  canonical: "https://frontierdentaluganda.com",
  openGraph: {
    title: "Frontier Dental Clinic Uganda | Quality & Affordable Dental Care in Kampala",
    description:
      "Accessible dental excellence in Kisaasi, Uganda. Root canals, teeth whitening, consultations, and emergency dental services.",
    url: "https://frontierdentaluganda.com",
    type: "website",
    locale: "en_UG",
    siteName: "Frontier Dental Clinic",
    images: [
      {
        url: "https://frontierdentaluganda.com/logo.png",
        width: 500,
        height: 500,
        alt: "Frontier Dental Clinic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Dental Clinic | Quality & Affordable Dental Care in Kampala",
    description:
      "Accessible dental excellence in Kisaasi, Uganda. Root canals, teeth whitening, consultations, and emergency dental services.",
    images: ["https://frontierdentaluganda.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Frontier Dental Clinic",
              url: "https://frontierdentaluganda.com",
              telephone: "+256706884113",
              email: "info@frontierdentaluganda.com",
              priceRange: "UGX 50,000 - UGX 450,000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kisaasi",
                addressLocality: "Kampala",
                addressCountry: "UG",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
