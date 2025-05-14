export interface Agent {
  id: string
  slug: string
  name: string
  description: string
  category: string
  capabilities: string[]
  rating?: number
  reviewCount?: number
  featured?: boolean
  new?: boolean
  popular?: boolean
  image?: string
  price?: number
}

// Sample agents data
export const agents: Agent[] = [
  {
    id: "data-analyzer",
    slug: "data-analyzer",
    name: "Data Analyzer",
    description: "Transform raw data into actionable insights with advanced analytics and visualization capabilities.",
    category: "Data Analysis",
    capabilities: [
      "Pattern recognition",
      "Anomaly detection",
      "Trend analysis",
      "Data visualization",
      "Predictive analytics",
    ],
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    popular: true,
    price: 49.99,
  },
  {
    id: "content-creator",
    slug: "content-creator",
    name: "Content Creator",
    description:
      "Generate high-quality content for blogs, social media, and marketing materials tailored to your brand voice.",
    category: "Content Generation",
    capabilities: [
      "Blog writing",
      "Social media posts",
      "Email newsletters",
      "Product descriptions",
      "SEO optimization",
    ],
    rating: 4.7,
    reviewCount: 98,
    featured: true,
    price: 39.99,
  },
  {
    id: "customer-support",
    slug: "customer-support",
    name: "Customer Support",
    description: "Provide 24/7 customer support with intelligent responses and seamless human handoff when needed.",
    category: "Customer Service",
    capabilities: [
      "FAQ answering",
      "Ticket classification",
      "Sentiment analysis",
      "Multi-language support",
      "Human handoff",
    ],
    rating: 4.6,
    reviewCount: 156,
    featured: true,
    price: 59.99,
  },
  {
    id: "code-assistant",
    slug: "code-assistant",
    name: "Code Assistant",
    description: "Accelerate development with code generation, debugging assistance, and documentation creation.",
    category: "Development",
    capabilities: ["Code generation", "Bug detection", "Code optimization", "Documentation", "API integration"],
    rating: 4.9,
    reviewCount: 87,
    featured: true,
    price: 69.99,
  },
  {
    id: "research-assistant",
    slug: "research-assistant",
    name: "Research Assistant",
    description:
      "Conduct comprehensive research, summarize findings, and identify key insights across various sources.",
    category: "Research",
    capabilities: [
      "Literature review",
      "Data collection",
      "Source verification",
      "Summary generation",
      "Citation management",
    ],
    rating: 4.5,
    reviewCount: 62,
    new: true,
    price: 44.99,
  },
  {
    id: "workflow-automator",
    slug: "workflow-automator",
    name: "Workflow Automator",
    description: "Streamline business processes by automating repetitive tasks and creating efficient workflows.",
    category: "Automation",
    capabilities: [
      "Process mapping",
      "Task automation",
      "Integration",
      "Performance tracking",
      "Bottleneck identification",
    ],
    rating: 4.7,
    reviewCount: 43,
    new: true,
    price: 79.99,
  },
  {
    id: "personal-assistant",
    slug: "personal-assistant",
    name: "Personal Assistant",
    description: "Your AI personal assistant that helps manage schedules, reminders, and daily tasks.",
    category: "Productivity",
    capabilities: ["Calendar management", "Task reminders", "Email drafting", "Meeting scheduling", "Note taking"],
    rating: 4.6,
    reviewCount: 215,
    popular: true,
    price: 19.99,
  },
  {
    id: "social-media-manager",
    slug: "social-media-manager",
    name: "Social Media Manager",
    description: "Manage your social media presence with content creation, scheduling, and analytics.",
    category: "Marketing",
    capabilities: [
      "Content creation",
      "Post scheduling",
      "Engagement analytics",
      "Trend monitoring",
      "Audience insights",
    ],
    rating: 4.4,
    reviewCount: 78,
    price: 49.99,
  },
  {
    id: "financial-advisor",
    slug: "financial-advisor",
    name: "Financial Advisor",
    description: "Get AI-powered financial advice, budget planning, and investment recommendations.",
    category: "Finance",
    capabilities: [
      "Budget planning",
      "Investment analysis",
      "Expense tracking",
      "Financial forecasting",
      "Tax optimization",
    ],
    rating: 4.7,
    reviewCount: 56,
    price: 89.99,
  },
  {
    id: "legal-assistant",
    slug: "legal-assistant",
    name: "Legal Assistant",
    description: "AI-powered legal research, document analysis, and contract review assistance.",
    category: "Legal",
    capabilities: [
      "Legal research",
      "Contract review",
      "Document analysis",
      "Case summarization",
      "Legal writing assistance",
    ],
    rating: 4.8,
    reviewCount: 32,
    price: 99.99,
  },
  {
    id: "healthcare-advisor",
    slug: "healthcare-advisor",
    name: "Healthcare Advisor",
    description:
      "AI assistant for healthcare professionals to aid in research, patient management, and medical information.",
    category: "Healthcare",
    capabilities: [
      "Medical research",
      "Patient data analysis",
      "Treatment recommendations",
      "Medical literature review",
      "Health record management",
    ],
    rating: 4.9,
    reviewCount: 47,
    price: 99.99,
  },
  {
    id: "education-tutor",
    slug: "education-tutor",
    name: "Education Tutor",
    description: "Personalized AI tutor for students across various subjects and educational levels.",
    category: "Education",
    capabilities: [
      "Subject tutoring",
      "Homework assistance",
      "Exam preparation",
      "Concept explanation",
      "Learning progress tracking",
    ],
    rating: 4.6,
    reviewCount: 128,
    price: 29.99,
  },
]

// Helper function to determine if we should use mock data
function useMockData(): boolean {
  // Always use mock data in client components or if explicitly set
  return (
    process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true" ||
    typeof window !== "undefined" ||
    !process.env.NEXT_PUBLIC_API_URL
  )
}

export async function getAllAgents(params?: Record<string, string>): Promise<Agent[]> {
  // Always use mock data in client components for now
  // This ensures we don't have fetch errors in the client
  return Promise.resolve(agents)
}

export function getFeaturedAgents(): Agent[] {
  return agents.filter((agent) => agent.featured)
}

export function getPopularAgents(): Agent[] {
  return agents.filter((agent) => agent.popular)
}

export function getNewAgents(): Agent[] {
  return agents.filter((agent) => agent.new)
}

export function getAgentsByCategory(category: string): Agent[] {
  return agents.filter((agent) => agent.category === category)
}

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((agent) => agent.slug === slug)
}

export function getCategories(): string[] {
  const categories = new Set(agents.map((agent) => agent.category))
  return Array.from(categories)
}

export function getRelatedAgents(category: string, excludeId: string): Agent[] {
  return agents.filter((agent) => agent.category === category && agent.id !== excludeId).slice(0, 3)
}
