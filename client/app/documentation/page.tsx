"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  ChevronRight,
  Book,
  Code,
  FileText,
  Settings,
  HelpCircle,
  Lightbulb,
  Zap,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about using our AI agents and chatbots
            </p>
            <div className="relative max-w-xl mx-auto mt-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Documentation Content */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Documentation</h3>
                  <nav className="space-y-1">
                    <Link
                      href="#getting-started"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <Book className="h-4 w-4" />
                      <span>Getting Started</span>
                    </Link>
                    <Link
                      href="#api-reference"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <Code className="h-4 w-4" />
                      <span>API Reference</span>
                    </Link>
                    <Link
                      href="#guides"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Guides</span>
                    </Link>
                    <Link
                      href="#configuration"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Configuration</span>
                    </Link>
                    <Link
                      href="#faq"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <HelpCircle className="h-4 w-4" />
                      <span>FAQ</span>
                    </Link>
                  </nav>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Resources</h3>
                  <nav className="space-y-1">
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Blog</span>
                    </Link>
                    <Link
                      href="/faq"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <HelpCircle className="h-4 w-4" />
                      <span>FAQ</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <Lightbulb className="h-4 w-4" />
                      <span>Examples</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <Zap className="h-4 w-4" />
                      <span>Tutorials</span>
                    </Link>
                  </nav>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find what you're looking for or have questions?
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="overview">
                <div className="flex justify-start mb-6 overflow-x-auto pb-2">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="agents">AI Agents</TabsTrigger>
                    <TabsTrigger value="chatbots">Chatbots</TabsTrigger>
                    <TabsTrigger value="api">API</TabsTrigger>
                    <TabsTrigger value="integrations">Integrations</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview" className="space-y-8">
                  <div id="getting-started" className="scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                    <p className="text-muted-foreground mb-6">
                      Welcome to the INTELLIGENTIC.AI documentation. This guide will help you get started with our AI
                      agents and chatbots platform.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>Quick Start Guide</CardTitle>
                          <CardDescription>Get up and running in minutes</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                            <li>Create an account or sign in</li>
                            <li>Choose an AI agent or chatbot from the marketplace</li>
                            <li>Configure the agent according to your needs</li>
                            <li>Deploy the agent to your website or application</li>
                            <li>Monitor performance and make adjustments as needed</li>
                          </ol>
                          <Button className="mt-4" asChild>
                            <Link href="/marketplace">
                              Browse Marketplace <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>System Requirements</CardTitle>
                          <CardDescription>Recommended specifications</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                            <li>Internet connection (minimum 1 Mbps)</li>
                            <li>For API usage: ability to make HTTPS requests</li>
                            <li>For website integration: ability to add JavaScript snippets</li>
                            <li>For mobile apps: iOS 12+ or Android 8+</li>
                          </ul>
                          <Button variant="outline" className="mt-4" asChild>
                            <Link href="#api-reference">
                              View API Requirements <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">Platform Overview</h3>
                    <p className="text-muted-foreground mb-4">
                      Our platform consists of several key components that work together to provide a comprehensive AI
                      solution:
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">AI Agents</h4>
                        <p className="text-sm text-muted-foreground">
                          Specialized AI models trained for specific tasks like customer support, data analysis, content
                          generation, and more. Agents can be customized and fine-tuned to your specific needs.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">Chatbots</h4>
                        <p className="text-sm text-muted-foreground">
                          Conversational interfaces that use AI agents to interact with users. Chatbots can be embedded
                          on websites, integrated with messaging platforms, or used in mobile apps.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">API</h4>
                        <p className="text-sm text-muted-foreground">
                          RESTful API that allows developers to integrate our AI capabilities into their own
                          applications. The API provides access to all agent functionalities and can be used for custom
                          integrations.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">Dashboard</h4>
                        <p className="text-sm text-muted-foreground">
                          Web-based interface for managing your AI agents, monitoring performance, analyzing
                          conversations, and configuring settings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="api-reference" className="scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                    <p className="text-muted-foreground mb-6">
                      Our API allows you to integrate AI agents and chatbots into your own applications. Here's a quick
                      overview of the main endpoints:
                    </p>

                    <div className="space-y-6">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-4 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Badge>GET</Badge>
                            <code className="text-sm">/api/v1/agents</code>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy("curl https://api.intelligentic.ai/v1/agents", "agents-get")}
                          >
                            {copied === "agents-get" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            Retrieve a list of all available AI agents.
                          </p>
                          <pre className="bg-muted/50 p-2 rounded text-xs overflow-x-auto">
                            {`// Example response
{
  "agents": [
    {
      "id": "agent-123",
      "name": "Customer Support Agent",
      "description": "Handles customer inquiries and support tickets",
      "categories": ["support", "customer-service"],
      "version": "1.0.0",
      "created_at": "2023-01-15T12:00:00Z"
    },
    {
      "id": "agent-456",
      "name": "Data Analyzer",
      "description": "Analyzes data and generates insights",
      "categories": ["analytics", "data-processing"],
      "version": "2.1.0",
      "created_at": "2023-02-20T15:30:00Z"
    }
  ],
  "count": 2,
  "total": 24,
  "page": 1,
  "pages": 12
}`}
                          </pre>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-4 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Badge>GET</Badge>
                            <code className="text-sm">/api/v1/agents/{"{agent_id}"}</code>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopy("curl https://api.intelligentic.ai/v1/agents/agent-123", "agent-get")
                            }
                          >
                            {copied === "agent-get" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            Retrieve detailed information about a specific agent.
                          </p>
                          <pre className="bg-muted/50 p-2 rounded text-xs overflow-x-auto">
                            {`// Example response
{
  "id": "agent-123",
  "name": "Customer Support Agent",
  "description": "Handles customer inquiries and support tickets",
  "categories": ["support", "customer-service"],
  "version": "1.0.0",
  "created_at": "2023-01-15T12:00:00Z",
  "capabilities": [
    "ticket_resolution",
    "product_information",
    "refund_processing"
  ],
  "configuration": {
    "response_time": "fast",
    "tone": "professional",
    "language": "en"
  }
}`}
                          </pre>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-4 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-500">POST</Badge>
                            <code className="text-sm">/api/v1/agents/{"{agent_id}"}/chat</code>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopy(
                                'curl -X POST https://api.intelligentic.ai/v1/agents/agent-123/chat -H "Content-Type: application/json" -d \'{"message": "Hello, I need help with my order"}\'',
                                "chat-post",
                              )
                            }
                          >
                            {copied === "chat-post" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            Send a message to an agent and receive a response.
                          </p>
                          <pre className="bg-muted/50 p-2 rounded text-xs overflow-x-auto">
                            {`// Example request
{
  "message": "Hello, I need help with my order",
  "conversation_id": "conv-789", // Optional, for continuing conversations
  "context": { // Optional additional context
    "order_id": "ORD-12345",
    "customer_tier": "premium"
  }
}

// Example response
{
  "response": "I'd be happy to help with your order. Could you please provide your order number so I can look it up?",
  "conversation_id": "conv-790",
  "agent_id": "agent-123",
  "created_at": "2023-03-10T14:22:10Z",
  "suggested_actions": [
    {
      "type": "provide_information",
      "description": "Provide order number"
    },
    {
      "type": "link",
      "description": "View order history",
      "url": "/account/orders"
    }
  ]
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="guides" className="scroll-mt-24 pt-8">
                    <h2 className="text-2xl font-bold mb-4">Guides</h2>
                    <p className="text-muted-foreground mb-6">
                      Learn how to implement and customize AI agents for various use cases with our step-by-step guides.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Website Integration</CardTitle>
                          <CardDescription>Add an AI chatbot to your website</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Learn how to integrate our AI chatbot widget into your website with just a few lines of
                            code.
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#">Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Custom Agent Training</CardTitle>
                          <CardDescription>Train an agent with your own data</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Learn how to train an AI agent with your custom data to provide specialized responses.
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#">Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>API Integration</CardTitle>
                          <CardDescription>Integrate with our API</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Learn how to use our API to integrate AI capabilities into your applications.
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#">Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Chatflow Creation</CardTitle>
                          <CardDescription>Design sophisticated conversation flows</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Learn how to create complex conversation flows for your AI chatbots.
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#">Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div id="configuration" className="scroll-mt-24 pt-8">
                    <h2 className="text-2xl font-bold mb-4">Configuration</h2>
                    <p className="text-muted-foreground mb-6">
                      Learn how to configure AI agents and chatbots to suit your specific needs.
                    </p>

                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Agent Configuration</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Agents can be configured with various parameters to control their behavior:
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                          <li>Response style (formal, casual, technical, friendly)</li>
                          <li>Knowledge base access (which data sources to use)</li>
                          <li>Language and localization settings</li>
                          <li>Response length and detail level</li>
                          <li>Fallback behavior for unknown questions</li>
                        </ul>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Chatbot Configuration</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Chatbots can be configured with various parameters to control their appearance and behavior:
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                          <li>Widget appearance (colors, size, position)</li>
                          <li>Greeting messages and default responses</li>
                          <li>Conversation flow logic</li>
                          <li>Integration with backend systems (CRM, ticketing, etc.)</li>
                          <li>Operating hours and availability settings</li>
                        </ul>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Integration Configuration</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Configure how AI agents integrate with your existing systems:
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                          <li>API authentication settings</li>
                          <li>Webhook configuration for event notifications</li>
                          <li>Data synchronization settings</li>
                          <li>Error handling and fallback procedures</li>
                          <li>Rate limiting and quota management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div id="faq" className="scroll-mt-24 pt-8">
                    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mb-6">
                      Find answers to commonly asked questions about our AI platform.
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">How does the pricing work?</h3>
                        <p className="text-sm text-muted-foreground">
                          We offer tiered pricing based on usage volume. You can start with a free tier to explore the
                          platform, then upgrade to a paid plan as your needs grow. Visit our{" "}
                          <Link href="/pricing" className="text-primary hover:underline">
                            pricing page
                          </Link>{" "}
                          for details.
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Can I customize the appearance of the chatbot?</h3>
                        <p className="text-sm text-muted-foreground">
                          Yes, you can fully customize the appearance of the chatbot widget to match your brand. This
                          includes colors, fonts, button styles, and position on the page.
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Do you offer multi-language support?</h3>
                        <p className="text-sm text-muted-foreground">
                          Yes, our AI agents support multiple languages. You can configure language settings for each
                          agent, and our platform can automatically detect and respond in the user's preferred language.
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">How secure is the platform?</h3>
                        <p className="text-sm text-muted-foreground">
                          We take security seriously. All data is encrypted in transit and at rest, and we comply with
                          industry standards for data protection. We also offer enterprise-grade security features for
                          businesses with strict compliance requirements.
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Can I integrate with my existing systems?</h3>
                        <p className="text-sm text-muted-foreground">
                          Yes, our platform offers integration with many popular systems including CRM platforms,
                          ticketing systems, e-commerce platforms, and more. We also provide a flexible API for custom
                          integrations.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-muted-foreground mb-4">
                        Didn't find what you're looking for? Check our complete{" "}
                        <Link href="/faq" className="text-primary hover:underline">
                          FAQ page
                        </Link>{" "}
                        or contact our support team.
                      </p>
                      <Button asChild>
                        <Link href="/contact">Contact Support</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="agents" className="space-y-8">
                  <h2 className="text-2xl font-bold mb-4">AI Agents Documentation</h2>
                  <p className="text-muted-foreground mb-6">
                    Learn about the different types of AI agents, their capabilities, and how to use them effectively.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Customer Support Agents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Handle customer inquiries, support tickets, and frequently asked questions.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Data Analysis Agents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Process and analyze data, generate insights, and create visualizations.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Content Generation Agents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Generate content for marketing, social media, email campaigns, and more.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="chatbots" className="space-y-8">
                  <h2 className="text-2xl font-bold mb-4">Chatbots Documentation</h2>
                  <p className="text-muted-foreground mb-6">
                    Learn how to create, deploy, and manage chatbots for various platforms and use cases.
                  </p>

                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Website Chatbots</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrate chatbots directly into your website to provide instant assistance to visitors.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Messaging Platform Chatbots</h3>
                      <p className="text-sm text-muted-foreground">
                        Deploy chatbots on messaging platforms like WhatsApp, Facebook Messenger, and Slack.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Mobile App Chatbots</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrate chatbots into your mobile applications for iOS and Android.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="api" className="space-y-8">
                  <h2 className="text-2xl font-bold mb-4">API Documentation</h2>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive documentation for our RESTful API, including authentication, endpoints, and examples.
                  </p>

                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Authentication</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Learn how to authenticate your API requests using API keys or OAuth.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">Learn More</Link>
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Rate Limiting</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Understand our rate limiting policies and how to handle rate limit errors.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">Learn More</Link>
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Error Handling</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Learn how to handle and troubleshoot API errors.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="integrations" className="space-y-8">
                  <h2 className="text-2xl font-bold mb-4">Integrations Documentation</h2>
                  <p className="text-muted-foreground mb-6">
                    Learn how to integrate our AI platform with other services and systems.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>CRM Integrations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Integrate with popular CRM platforms like Salesforce, HubSpot, and Zoho.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Helpdesk Integrations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Integrate with helpdesk systems like Zendesk, Freshdesk, and ServiceNow.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>E-commerce Integrations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Integrate with e-commerce platforms like Shopify, WooCommerce, and Magento.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Custom Integrations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Build custom integrations using our flexible API and webhooks.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
