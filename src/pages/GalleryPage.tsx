"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "../../components/ui/dialog"
import { Card } from "../../components/ui/card"
import { X } from "lucide-react"

interface GalleryItem {
  id: string
  image: string
  title: string
  category: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "/images/img-3298.jpeg",
    title: "Our Dental Hygienist",
    category: "Staff Portraits",
    description: "Professional dental hygienist providing expert patient care at Frontier Dental Clinic",
  },
  {
    id: "2",
    image: "/images/img-3316.jpeg",
    title: "Dr. Rosemary (DDS)",
    category: "Staff Portraits",
    description: "Our experienced dentist dedicated to providing quality dental care",
  },
  
  {
    id: "4",
    image: "/images/img-3312.jpeg",
    title: "Dental Support Staff",
    category: "Staff Portraits",
    description: "Friendly and professional team members supporting patient care",
  },
  {
    id: "5",
    image: "/images/img-3330.jpeg",
    title: "Modern Treatment Room",
    category: "Clinic Interior & Equipment",
    description: "State-of-the-art dental operatory equipped with latest technology",
  },
  {
    id: "6",
    image: "/images/img-3331.jpeg",
    title: "Advanced Dental Equipment",
    category: "Clinic Interior & Equipment",
    description: "Professional-grade equipment for comprehensive dental treatments",
  },
  {
    id: "7",
    image: "/images/img-3332.jpeg",
    title: "Treatment Room with City View",
    category: "Clinic Interior & Equipment",
    description: "Comfortable treatment environment with natural light and views",
  },
  {
    id: "8",
    image: "/images/img-3301.jpeg",
    title: "Waiting Area",
    category: "Clinic Interior & Equipment",
    description: "Comfortable and welcoming reception area for our patients",
  },
  {
    id: "9",
    image: "/images/img-3303.jpeg",
    title: "Clinic Signage",
    category: "Clinic Interior & Equipment",
    description: "Frontier Dental Clinic - Your smile is our pride",
  },
  {
    id: "10",
    image: "/images/img-3333.jpeg",
    title: "Professional Treatment",
    category: "Clinical Services",
    description: "Expert dental care provided by our experienced team",
  },
]

export const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Frontier Dental Clinic's modern facilities, expert team, and commitment to your smile.
          </p>
        </div>

        {/* Gallery Grid - Responsive columns: 1 on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden bg-muted h-64">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-primary font-medium mb-2">{item.category}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 border-0 bg-black/80 backdrop-blur-sm">
          {selectedImage && (
            <div className="relative w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 bg-background/20 hover:bg-background/40 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="bg-foreground/5 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-primary font-medium mb-2">{selectedImage.category}</p>
                <p className="text-sm text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
