"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bot, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Agent } from "@/lib/types"

interface AgentCardProps {
  agent: Agent
  featured?: boolean
}

export function AgentCard({ agent, featured = false }: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Extract metadata from agent or use defaults
  const metadata = agent.metadata || {
    rating: agent.rating || 0,
    reviewCount: agent.reviewCount || 0,
    featured: agent.featured || featured,
    new: agent.new || false,
    popular: agent.popular || false,
  }

  // Use the appropriate image source
  const imageSrc = agent.media?.thumbnail || agent.image || "/abstract-user.png"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full w-full"
    >
      <Card
        className={`h-full w-full overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 ${
          isHovered ? "shadow-lg dark:shadow-primary/5 scale-[1.02]" : ""
        }`}
      >
        <CardContent className=" pt-3">
          <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold break-words line-clamp-2">{agent.name}</h3>
            {/* {metadata.rating > 0 && (
              <div className="flex items-center">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">
                  {metadata.rating.toFixed(1)}
                  {metadata.reviewCount > 0 && <span className="text-muted-foreground"> ({metadata.reviewCount})</span>}
                </span>
              </div>
            )} */}
          </div>
          <p className="text-sm sm:text-base line-clamp-3 h-[4.5em] text-muted-foreground">
            {agent.shortDescription || agent.description}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2 h-32 overflow-hidden">
            {agent.capabilities?.slice(0, 3).map((capability, index) => (
              <Badge key={index} variant="outline" className="text-xs  bg-primary/5">
                {capability}
              </Badge>
            ))}
            {agent.capabilities?.length > 3 && (
              <Badge variant="outline" className="text-xs sm:text-sm bg-primary/5">
                +{agent.capabilities.length - 3} more
              </Badge>
            )}
          </div>
          {agent.price && (
            <div className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">
              ${agent.price.toFixed(2)} <span className="text-xs sm:text-sm text-muted-foreground">/ month</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 border-t border-gray-100 bg-gray-50/50 p-2 sm:p-3 dark:border-gray-800 dark:bg-gray-900/50">
          <Button asChild size={'sm'} variant="outline" className="w-full text-sm sm:text-base">
            <Link href={`/agents/${agent.slug}`}>View Details</Link>
          </Button>
          <Button asChild size={'sm'} className="w-full text-sm sm:text-base">
            <Link href={`/onboarding/${agent.id}?type=agent`}>
              <Bot className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Try Agent
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
