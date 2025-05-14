import { NextResponse } from "next/server"
import { chatflows } from "@/lib/chatflows"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get("featured")
  const category = searchParams.get("category")
  const ids = searchParams.get("ids")

  let filteredChatflows = [...chatflows]

  // Filter by featured
  if (featured === "true") {
    filteredChatflows = filteredChatflows.filter((chatflow) => chatflow.metadata.featured)
  }

  // Filter by category
  if (category) {
    filteredChatflows = filteredChatflows.filter(
      (chatflow) => chatflow.category.toLowerCase() === category.toLowerCase(),
    )
  }

  // Filter by IDs
  if (ids) {
    const idArray = ids.split(",")
    filteredChatflows = filteredChatflows.filter((chatflow) => idArray.includes(chatflow.id))
  }

  return NextResponse.json(filteredChatflows)
}
