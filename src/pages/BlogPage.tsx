"use client"

import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"

export const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Regular Dental Check-ups",
      excerpt:
        "Discover why visiting your dentist every six months is crucial for maintaining optimal oral health and preventing serious dental issues.",
      date: "January 15, 2024",
      author: "Dr. Sarah Mwangi",
      category: "Prevention",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Understanding Teeth Whitening: Professional vs. At-Home",
      excerpt:
        "Explore the differences between professional teeth whitening and over-the-counter solutions, and find out which option is right for you.",
      date: "January 10, 2024",
      author: "Dr. James Kiprotich",
      category: "Cosmetic",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Orthodontic Options: Clear Aligners vs. Traditional Braces",
      excerpt:
        "Learn about modern alignment solutions and how clear aligners can give you the smile you've always wanted with greater flexibility.",
      date: "January 5, 2024",
      author: "Dr. Grace Okonkwo",
      category: "Orthodontics",
      readTime: "8 min read",
    },
    {
      id: 4,
      title: "Implants vs. Dentures: Which is Right for You?",
      excerpt:
        "A comprehensive guide to teeth replacement options, weighing the benefits and considerations of dental implants and dentures.",
      date: "December 28, 2023",
      author: "Dr. Samuel Kipchoge",
      category: "Restorative",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "Common Dental Myths Debunked",
      excerpt:
        "Separate fact from fiction with our guide to common dental misconceptions and the truth about keeping your teeth healthy.",
      date: "December 20, 2023",
      author: "Dr. Sarah Mwangi",
      category: "Education",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Root Canals Explained: What You Need to Know",
      excerpt:
        "Understand the root canal procedure, why it's necessary, and how modern techniques make it a pain-free tooth-saving treatment.",
      date: "December 15, 2023",
      author: "Dr. James Kiprotich",
      category: "Restorative",
      readTime: "9 min read",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Prevention: "bg-green-100 text-green-800",
      Cosmetic: "bg-purple-100 text-purple-800",
      Orthodontics: "bg-blue-100 text-blue-800",
      Restorative: "bg-orange-100 text-orange-800",
      Education: "bg-pink-100 text-pink-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="w-full pt-32 pb-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <h1 className="text-foreground mb-4">Dental Health Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about oral health, dental treatments, and tips from our expert dentists at Frontier Dental
            Clinic.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4 flex items-center gap-2">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="text-foreground mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <button className="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors">
                  Read Article →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
