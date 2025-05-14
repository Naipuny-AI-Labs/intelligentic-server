export interface Example {
  title: string
  description: string
  userQuery: string
  agentResponse: string
}

export interface DocumentationItem {
  title: string
  description: string
  url: string
}

export interface UseCase {
  title: string
  description: string
  icon: string
}

export interface TechnicalSpecs {
  techStackSupport: string
  workflowAutomation: string
  documentationFormat: string
  iterativeFeedback: string
}

export interface Documentation {
  gettingStarted: DocumentationItem
  apiReference: DocumentationItem
  tutorials: DocumentationItem
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

export interface PricingInfo {
  amount: number
  currency: string
  interval: string
  features: string[]
}

export interface Metadata {
  featured: boolean
  popular: boolean
  new: boolean
  rating: number
  reviewCount: number
  createdAt: string
  updatedAt: string
}

export interface Screenshot {
  url: string
  alt: string
  caption: string
}

export interface Video {
  url: string
  thumbnail: string
  duration: number
}

export interface Media {
  thumbnail: string
  banner: string
  logo: string
  screenshots: Screenshot[]
  video: Video
}

export interface Integration {
  apiEndpoint: string
  sdkSupport: string[]
  webhooks: boolean
  oauth: boolean
}

export interface Requirements {
  dataFormats: string[]
  minDataSize: string
  maxDataSize: string
  supportedPlatforms: string[]
}

export interface Chatflow {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  category: string
  capabilities: string[]
  useCases: UseCase[]
  technicalSpecs: TechnicalSpecs
  documentation: Documentation
  examples: Example[]
  testimonials: Testimonial[]
  relatedFlows: string[]
  pricing: PricingInfo
  metadata: Metadata
  media: Media
  integration: Integration
  requirements: Requirements
}

export interface Agent {
  id: string
  slug: string
  name: string
  description: string
  shortDescription?: string
  category: string
  capabilities: string[]
  useCases?: UseCase[]
  technicalSpecs?: TechnicalSpecs
  documentation?: Documentation
  examples?: Example[]
  testimonials?: Testimonial[]
  relatedAgents?: string[]
  pricing?: PricingInfo
  metadata?: Metadata
  media?: Media
  integration?: Integration
  requirements?: Requirements
  rating?: number
  reviewCount?: number
  featured?: boolean
  new?: boolean
  popular?: boolean
  image?: string
  price?: number
  chatflowId?: string
  apiHost?: string
}

export interface OnboardingFormData {
  id: string
  usecase: string
  companysize: string
  industry: string
  companyname: string
  name: string
  email: string
  designation: string
  phone: string
  requirements: string
  dataprivacy: boolean
  marketingconsent: boolean
  createdDate: string
  updatedAt?: string
  updatedDate?: string
  status: string
  requestType: string
  agentids: string[]
}
