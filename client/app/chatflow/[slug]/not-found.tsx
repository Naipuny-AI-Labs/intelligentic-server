import Link from "next/link"
import { FlowerIcon as Flow, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatflowNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-8">
        <Flow className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Workflow Not Found</h1>
      <p className="text-muted-foreground text-lg max-w-md mb-8">
        We couldn't find the workflow you're looking for. It might have been removed or the URL might be incorrect.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild>
          <Link href="/marketplace">
            <Search className="mr-2 h-4 w-4" />
            Browse Marketplace
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  )
}
