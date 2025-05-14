"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Bot, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card3d, Card3dShine } from "@/components/ui/3d-card"
import { Badge } from "@/components/ui/badge"
import { getAllAgents } from "@/lib/agent-service"
import { Agent } from "@/lib/types"

export function FeaturedAgents() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [agents, setAgents] = useState<Agent[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAllAgents()
        setAgents(data)
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }

    fetchAgents()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.clientWidth / 2 : current.clientWidth / 2
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <section className="py-8 sm:py-16 md:py-20 bg-gray-50 dark:bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" />
      <div className="absolute h-full w-full bg-gradient-to-b from-background/0 via-background/0 to-background/80 pointer-events-none -z-10" />

      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-8 md:mb-10 gap-2 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-foreground dark:to-foreground/70">
              Featured Agents
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-muted-foreground mt-1 sm:mt-2">
              Discover our most popular and powerful AI agents
            </p>
          </motion.div>
          <div className="flex items-center gap-2 mt 3 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="ghost" asChild className="group text-xs sm:text-sm">
              <Link href="/marketplace" className="flex items-center gap-1">
                View all
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        >
          {agents?.map((agent, index) => (
            <motion.div
              key={agent.id}
              className="min-w-[220px] xs:min-w-[280px] sm:min-w-[320px] md:min-w-[350px] snap-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card3d containerClassName="h-full">
                <div className="bg-white dark:bg-background border-2 border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden h-full p-3 sm:p-6 relative">
                  <Card3dShine />

                  <div className="flex items-center gap-2 mb-2 sm:mb-4">
                    <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                      <div className="h-7 w-7 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                        <Bot className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="font-semibold text-sm sm:text-lg">{agent.name}</h3>
                  </div>

                  <div className="mb-2 sm:mb-4 flex flex-wrap gap-1 sm:gap-2">
                    <Badge
                      variant="secondary"
                      className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/20"
                    >
                      {agent.category}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-6 00 dark:text-muted-foreground line-clamp-3 mb-2 sm:mb-4">
                    {agent.description}
                  </p>

                  <div className="space-y-0.5 sm:space-y-2 mb-2 sm:mb-4">
                    {agent.capabilities?.slice(0, 3).map((capability: string, index: number) => (
                      <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-brand-primary"></div>
                        <span className="text-gray-600 dark:text-muted-foreground">{capability}</span>
                      </div>
                    ))}
                    {agent.capabilities && agent.capabilities.length > 3 && (
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-muted-foreground">
                        +{agent.capabilities.length - 3} more capabilities
                      </div>
                    )}
                  </div>

                  <Button
                    className="w-full mt-auto text-xs sm:text-sm py-1.5 sm:py-2 bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 text-white shadow-sm group-hover:shadow-md transition-all"
                    asChild
                  >
                    <Link href={`/agents/${agent.slug}`}>
                      <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Try This Agent
                    </Link>
                  </Button>
                </div>
              </Card3d>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
