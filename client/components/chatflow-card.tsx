import Link from "next/link"
import { MessageCircle, MessageSquare, Sparkles, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Chatflow } from "@/lib/types"

interface ChatflowCardProps {
  chatflow: Chatflow
}

export function ChatflowCard({ chatflow }: ChatflowCardProps) {
  return (
    <Card className="overflow-hidden h-full border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg line-clamp-2 h-[3.5em]">{chatflow.name}</h3>
            {/* {chatflow.metadata?.new && (
              <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
            )} */}
          </div>

          <Badge
            variant="secondary"
            className="mb-3 self-start bg-teal-500/10 text-teal-600 border border-teal-500/20 hover:bg-teal-500/20"
          >
            {chatflow.category}
          </Badge>

          <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3 h-[4em]">{chatflow.shortDescription}</p>

          <div className="space-y-1 mb-4">
            {chatflow.capabilities?.slice(0, 3).map((capability, index) => (
              <div key={index} className="flex items-center text-sm">
                <svg
                  className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-muted-foreground">{capability}</span>
              </div>
            ))}
            {chatflow.capabilities?.length > 3 && (
              <div className="text-sm text-teal-600 hover:underline cursor-pointer">
                +{chatflow.capabilities.length - 3} more capabilities
              </div>
            )}
          </div>
          <div className="pt-4 border-t border-border mt-auto">
            {/* {chatflow.pricing?.amount ? (
              <div className="mb-4 flex justify-between items-center w-full">
                <div>
                  <span className="text-lg font-bold">${chatflow.pricing.amount}</span>
                  <span className="text-sm text-muted-foreground">/{chatflow.pricing.interval || "month"}</span>
                </div>
                {chatflow.metadata?.popular && (
                  <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                    Popular
                  </Badge>
                )}
              </div>
            ) : null} */}

            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild size="sm" className="flex-1 bg-teal-500 hover:bg-teal-600 text-white h-8 py-2 text-xs">
                <Link className="px-3" href={`/chatflow/${chatflow.slug}`}>
                  <Sparkles className="mx-1 h-3 w-3" />
                  View Details
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="flex-1 h-8 text-xs py-2">
                <Link href={`/onboarding/${chatflow.id}?type=chatflow`}>
                  <MessageSquare className="mr-1 h-3 w-3" />
                  Try Chatbot
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
