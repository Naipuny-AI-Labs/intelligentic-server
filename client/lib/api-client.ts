import axios from "axios"
import type { Agent, Chatflow } from "./types"

// Get the API URL from environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://ec2-65-2-141-117.ap-south-1.compute.amazonaws.com"

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 15000, // 15 seconds timeout
  headers: {
    "Content-Type": "application/json",
    "x-request-from": "internal",
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

// Agent API functions
export async function getAllAgentsFromAPI(params?: Record<string, string>): Promise<Agent[]> {
  try {
    const response = await apiClient.get("/api/v1/agent", { params })
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getAgentFromAPI(slug: string): Promise<Agent | null> {
  try {
    const response = await apiClient.get(`/api/v1/agent/${slug}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getFeaturedAgentsFromAPI(): Promise<Agent[]> {
  try {
    const response = await apiClient.get("/api/v1/agent", { params: { featured: "true" } })
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getAgentsByCategoryFromAPI(category: string): Promise<Agent[]> {
  try {
    const response = await apiClient.get("/api/v1/agent", { params: { category } })
    return response.data
  } catch (error) {
    throw error
  }
}

// Chatflow API functions
export async function getAllChatflowsFromAPI(params?: Record<string, string>): Promise<Chatflow[]> {
  try {
    const response = await apiClient.get("/api/v1/chatflow", { params })
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getChatflowFromAPI(slug: string): Promise<Chatflow | null> {
  try {
    const response = await apiClient.get(`/api/v1/chatflow/${slug}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getFeaturedChatflowsFromAPI(): Promise<Chatflow[]> {
  try {
    const response = await apiClient.get("/api/v1/chatflow", { params: { featured: "true" } })
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getChatflowsByCategoryFromAPI(category: string): Promise<Chatflow[]> {
  try {
    const response = await apiClient.get("/api/v1/chatflow", { params: { category } })
    return response.data
  } catch (error) {
    throw error
  }
}

// User onboarding API function
export async function onboardUserAPI(data: any): Promise<any> {
  try {
    const response = await apiClient.post("/api/v1/onboarduser", data)
    return response.data
  } catch (error) {
    throw error
  }
}
