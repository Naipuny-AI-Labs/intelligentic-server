import { NextResponse } from "next/server"
import { getAllChatflows } from "@/lib/chatflow-service"

export async function GET() {
  try {
    // Use the public URL for API calls
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://ec2-65-2-141-117.ap-south-1.compute.amazonaws.com"

    // Make the API call
    const response = await fetch(`${apiUrl}/api/v1/chatflow`)

    if (!response.ok) {
      throw new Error(`Failed to fetch chatflows: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      chatflows: data.chatflows || [],
    })
  } catch (error) {

    // Fallback to mock data
    const chatflows = await getAllChatflows()

    return NextResponse.json({
      success: true,
      chatflows,
      _fallback: true,
    })
  }
}
