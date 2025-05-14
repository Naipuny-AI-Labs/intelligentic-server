"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getCategories } from "@/lib/agent-service"

export function CategorySection() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await getCategories()
        setCategories(cats)
      } catch (error) {
      }
    }
    fetchCategories()
  }, [])

  return (
    <section className="py-8 sm:py-16 md:py-20 relative bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 -z-10" />

      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm bg-transparent text-primary border border-primary/20 mb-3 sm:mb-4"
          >
            <Bot className="mr-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>AI Categories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 sm:mb-4"
          >
            Browse by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-muted-foreground"
          >
            Explore our diverse collection of AI agents categorized by their specialized capabilities and use cases
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {categories.map((category, index) => {
            const delay = 0.2 + (index * 0.1)
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
                className="group backdrop-blur-sm bg-transparent border border-gray-200/50 dark:border-primary/10 rounded-xl p-3 sm:p-6 
                  transition-all duration-300 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-primary/20"
              >
                <div className="mb-2 sm:mb-4">
                  <h3 className="text-base sm:text-xl font-medium capitalize">
                    {category}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mb-3 sm:mb-5">
                  Explore AI agents specialized in {category.toLowerCase()}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm py-1.5 sm:py-2 border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 bg-transparent"
                  asChild
                >
                  <Link
                    href={`/marketplace?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center justify-center"
                  >
                    View All
                    <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </Link>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
