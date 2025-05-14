import { NextResponse } from "next/server"
import { getAllAgents } from "@/lib/agent-service"

export async function GET() {
  try {
    // Use the public URL for API calls
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://ec2-65-2-141-117.ap-south-1.compute.amazonaws.com"

    // Make the API call
    const response = await fetch(`${apiUrl}/api/v1/agent`)

    if (!response.ok) {
      throw new Error(`Failed to fetch agents: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {

    // Fallback to mock data
    const agents = await getAllAgents()

    return NextResponse.json({ agents })
  }
}
