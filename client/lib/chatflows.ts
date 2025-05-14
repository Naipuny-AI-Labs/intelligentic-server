import type { Chatflow } from "./types"

export const chatflows: Chatflow[] = [
  {
    id: "chatflow1",
    slug: "customer-support-workflow",
    name: "Customer Support Workflow",
    description:
      "Automate customer support with an intelligent workflow that handles common queries and routes complex issues to the right team members.",
    shortDescription: "Automate customer support with an intelligent workflow",
    category: "support",
    capabilities: ["Query Resolution", "Ticket Routing", "Knowledge Base Integration", "Sentiment Analysis"],
    useCases: [],
    technicalSpecs: {
      techStackSupport: "",
      workflowAutomation: "",
      documentationFormat: "",
      iterativeFeedback: "",
    },
    documentation: {
      gettingStarted: { title: "", description: "", url: "" },
      apiReference: { title: "", description: "", url: "" },
      tutorials: { title: "", description: "", url: "" },
    },
    examples: [],
    testimonials: [],
    relatedFlows: [],
    pricing: {
      amount: 0,
      currency: "USD",
      interval: "month",
      features: [],
    },
    metadata: {
      featured: false,
      popular: false,
      new: false,
      rating: 0,
      reviewCount: 0,
      createdAt: "",
      updatedAt: "",
    },
    media: {
      thumbnail: "",
      banner: "",
      logo: "",
      screenshots: [],
      video: {
        url: "",
        thumbnail: "",
        duration: 0,
      },
    },
    integration: {
      apiEndpoint: "",
      sdkSupport: [],
      webhooks: false,
      oauth: false,
    },
    requirements: {
      dataFormats: [],
      minDataSize: "",
      maxDataSize: "",
      supportedPlatforms: [],
    },
  },
  {
    id: "chatflow2",
    slug: "data-enrichment-pipeline",
    name: "Data Enrichment Pipeline",
    description:
      "Enhance your customer data with additional information from multiple sources, improving your analytics and personalization capabilities.",
    shortDescription: "Enhance your customer data with additional information",
    category: "data",
    capabilities: ["Data Enrichment", "Entity Resolution", "Data Validation", "API Integration"],
    useCases: [],
    technicalSpecs: {
      techStackSupport: "",
      workflowAutomation: "",
      documentationFormat: "",
      iterativeFeedback: "",
    },
    documentation: {
      gettingStarted: { title: "", description: "", url: "" },
      apiReference: { title: "", description: "", url: "" },
      tutorials: { title: "", description: "", url: "" },
    },
    examples: [],
    testimonials: [],
    relatedFlows: [],
    pricing: {
      amount: 0,
      currency: "USD",
      interval: "month",
      features: [],
    },
    metadata: {
      featured: false,
      popular: false,
      new: false,
      rating: 0,
      reviewCount: 0,
      createdAt: "",
      updatedAt: "",
    },
    media: {
      thumbnail: "",
      banner: "",
      logo: "",
      screenshots: [],
      video: {
        url: "",
        thumbnail: "",
        duration: 0,
      },
    },
    integration: {
      apiEndpoint: "",
      sdkSupport: [],
      webhooks: false,
      oauth: false,
    },
    requirements: {
      dataFormats: [],
      minDataSize: "",
      maxDataSize: "",
      supportedPlatforms: [],
    },
  },
]

export function getChatflowBySlug(slug: string): Chatflow | undefined {
  return chatflows.find((chatflow) => chatflow.slug === slug)
}
