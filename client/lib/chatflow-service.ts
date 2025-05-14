import type { Chatflow } from "./types"
import {
  getChatflowFromAPI,
  getAllChatflowsFromAPI,
  getFeaturedChatflowsFromAPI,
  getChatflowsByCategoryFromAPI,
} from "@/lib/api-client"

export async function getAllChatflows(params?: Record<string, string>): Promise<Chatflow[]> {
  try {
    const chatflows = await getAllChatflowsFromAPI(params)

    if (!chatflows || !Array.isArray(chatflows)) {
      return []
    }

    return chatflows
  } catch (error) {
    throw error
  }
}

export async function getChatflow(slug: string): Promise<Chatflow | null> {
  try {
    const chatflow = await getChatflowFromAPI(slug)

    if (!chatflow) {
      return null
    }

    return chatflow
  } catch (error) {
    throw error
  }
}

export async function getFeaturedChatflows(): Promise<Chatflow[]> {
  try {
    const featuredChatflows = await getFeaturedChatflowsFromAPI()

    if (!featuredChatflows || !Array.isArray(featuredChatflows)) {
      return []
    }

    return featuredChatflows
  } catch (error) {
    throw error
  }
}

export async function getPopularChatflows(): Promise<Chatflow[]> {
  try {
    const allChatflows = await getAllChatflowsFromAPI()

    if (!allChatflows || !Array.isArray(allChatflows)) {
      return []
    }

    return allChatflows
      .sort((a, b) => {
        return (b.metadata?.reviewCount || 0) - (a.metadata?.reviewCount || 0)
      })
      .slice(0, 5)
  } catch (error) {
    throw error
  }
}

export async function getNewChatflows(): Promise<Chatflow[]> {
  try {
    const allChatflows = await getAllChatflowsFromAPI()

    if (!allChatflows || !Array.isArray(allChatflows)) {
      return []
    }

    return allChatflows
      .sort((a, b) => {
        return new Date(b.metadata.updatedAt).getTime() - new Date(a.metadata.updatedAt).getTime()
      })
      .slice(0, 5)
  } catch (error) {
    throw error
  }
}

export async function getChatflowsByCategory(category: string): Promise<Chatflow[]> {
  try {
    const categoryChatflows = await getChatflowsByCategoryFromAPI(category)

    if (!categoryChatflows || !Array.isArray(categoryChatflows)) {
      return []
    }

    return categoryChatflows
  } catch (error) {
    throw error
  }
}

export async function getRelatedChatflows(flowIds: string[]): Promise<Chatflow[]> {
  try {
    const allChatflows = await getAllChatflowsFromAPI()

    if (!allChatflows || !Array.isArray(allChatflows)) {
      return []
    }

    return allChatflows.filter((flow) => flowIds.includes(flow.id)).slice(0, 3)
  } catch (error) {
    throw error
  }
}
