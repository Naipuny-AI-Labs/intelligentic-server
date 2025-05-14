import { NextResponse } from "next/server"
import { getChatflowFromAPI } from "@/lib/api-client"
import { chatflows } from "@/lib/chatflows"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug

  try {
    // First try to get from external API
    const chatflow = await getChatflowFromAPI(slug)

    if (chatflow) {
      return NextResponse.json(chatflow)
    }
  } catch (error) {
    // Continue to fallback
  }

  // Fallback to mock data
  const mockChatflow = chatflows.find((flow) => flow.slug === slug)

  if (!mockChatflow) {
    return new NextResponse(JSON.stringify({ error: "Chatflow not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  return NextResponse.json(mockChatflow)
}
