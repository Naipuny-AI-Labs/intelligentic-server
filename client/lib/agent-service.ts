import {
  getAgentFromAPI,
  getAllAgentsFromAPI,
  getFeaturedAgentsFromAPI,
  getAgentsByCategoryFromAPI,
} from "./api-client"
import type { Agent } from "./types"

export async function getAgent(slug: string): Promise<Agent | null> {
  try {
    const agent = await getAgentFromAPI(slug)

    if (!agent) {
      return null
    }

    return agent
  } catch (error) {
    throw error
  }
}

export async function getAllAgents(params?: Record<string, string>): Promise<Agent[]> {
  try {
    const agents = await getAllAgentsFromAPI(params)

    if (!agents || !Array.isArray(agents)) {
      return []
    }

    return agents
  } catch (error) {
    throw error
  }
}

export async function getFeaturedAgents(): Promise<Agent[]> {
  try {
    const featuredAgents = await getFeaturedAgentsFromAPI()

    if (!featuredAgents || !Array.isArray(featuredAgents)) {
      return []
    }

    return featuredAgents
  } catch (error) {
    throw error
  }
}

export async function getAgentsByCategory(category: string): Promise<Agent[]> {
  try {
    const categoryAgents = await getAgentsByCategoryFromAPI(category)

    if (!categoryAgents || !Array.isArray(categoryAgents)) {
      return []
    }

    return categoryAgents
  } catch (error) {
    throw error
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const allAgents = await getAllAgents()
    const categories = new Set(allAgents.map((agent) => agent.category))
    return Array.from(categories)
  } catch (error) {
    throw error
  }
}

export async function getRelatedAgents(category: string, excludeId: string): Promise<Agent[]> {
  try {
    const categoryAgents = await getAgentsByCategory(category)
    return categoryAgents.filter((agent) => agent.id !== excludeId).slice(0, 3)
  } catch (error) {
    throw error
  }
}
