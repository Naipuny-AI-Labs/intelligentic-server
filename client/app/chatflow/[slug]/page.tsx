import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Code,
  ExternalLink,
  MessageCircle,
  Play,
  Star,
  Users,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getChatflow } from "@/lib/chatflow-service"
import { getRelatedChatflows } from "@/lib/chatflow-service"
import type { Chatflow } from "@/lib/types"

interface ChatflowPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ChatflowPageProps): Promise<Metadata> {
  try {
    const chatflow = await getChatflow(params.slug)

    if (!chatflow) {
      return {
        title: "Chatbot Not Found",
        description: "The requested chatbot could not be found.",
      }
    }

    return {
      title: `${chatflow.name} | AI Marketplace`,
      description: chatflow.shortDescription,
    }
  } catch (error) {
    return {
      title: "AI Marketplace - Chatbot",
      description: "Explore our AI chatbot solutions.",
    }
  }
}

export default async function ChatflowPage({ params }: ChatflowPageProps) {
  try {
    const chatflow = await getChatflow(params.slug)

    if (!chatflow) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/10 dark:border-red-800/30">
            <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-medium text-red-700 dark:text-red-400 mb-2">Chatbot Not Found</h2>
            <p className="text-red-600 dark:text-red-300 mb-4">
              We couldn't find the chatbot you're looking for. It may have been removed or the URL might be incorrect.
            </p>
            <Button asChild>
              <Link href="/marketplace?tab=chatbots">Browse All Chatbots</Link>
            </Button>
          </div>
        </div>
      )
    }

    // Safely get related chatflows with error handling
    let relatedChatflows: Chatflow[] = []
    try {
      // Check if relatedFlows exists and is an array before trying to join
      const relatedFlowIds = Array.isArray(chatflow.relatedFlows) ? chatflow.relatedFlows : []
      relatedChatflows = await getRelatedChatflows(relatedFlowIds)
    } catch (error) {
      // Continue with empty related chatflows
    }

    return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 pt-4 pb-12 ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-teal-500/10 text-teal-600 border border-teal-500/20 hover:bg-teal-500/20"
                  >
                    {chatflow.category}
                  </Badge>
                  {chatflow.metadata.new && <Badge className="bg-green-500 text-white hover:bg-green-600">New</Badge>}
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{chatflow.name}</h1>
                <p className="text-xl text-muted-foreground">{chatflow.shortDescription}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{chatflow.metadata.rating}</span>
                    <span className="ml-1 text-muted-foreground">({chatflow.metadata.reviewCount} reviews)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button size="lg" asChild>
                    <Link href={`/onboarding/chatflow/${chatflow.slug}`}>
                      Try This Chatbot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href={chatflow.documentation.gettingStarted.url}>
                      Documentation
                      <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted/50">
                {chatflow.media.video ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={
                        chatflow.media.video.thumbnail ||
                        "/placeholder.svg?height=720&width=1280&query=AI+chatbot+interface" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg"
                      }
                      alt={`${chatflow.name} video thumbnail`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" variant="outline" className="rounded-full h-16 w-16 bg-background/80">
                        <Play className="h-8 w-8" />
                        <span className="sr-only">Play video</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={chatflow.media.banner || "/placeholder.svg?height=720&width=1280&query=AI+chatbot+interface"}
                    alt={chatflow.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2 space-y-10">
                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                    <TabsTrigger
                      value="overview"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      Features
                    </TabsTrigger>
                    <TabsTrigger
                      value="examples"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      Examples
                    </TabsTrigger>
                    <TabsTrigger
                      value="documentation"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                    >
                      Documentation
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="pt-6">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight">About this Chatbot</h2>
                        <p className="mt-4 text-muted-foreground">{chatflow.description}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold tracking-tight">Use Cases</h3>
                        <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
                          {chatflow.useCases.map((useCase, index) => (
                            <Card key={index} className="bg-muted/50">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{useCase.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <CardDescription>{useCase.description}</CardDescription>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold tracking-tight">Technical Specifications</h3>
                        <div className="grid gap-4 mt-4 sm:grid-cols-2">
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Tech Stack Support</span>
                            <span className="mt-1">{chatflow.technicalSpecs.techStackSupport}</span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Workflow Automation</span>
                            <span className="mt-1">{chatflow.technicalSpecs.workflowAutomation}</span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Documentation Format</span>
                            <span className="mt-1">{chatflow.technicalSpecs.documentationFormat}</span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Iterative Feedback</span>
                            <span className="mt-1">{chatflow.technicalSpecs.iterativeFeedback}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold tracking-tight">Integration</h3>
                        <div className="grid gap-4 mt-4 sm:grid-cols-2">
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">API Endpoint</span>
                            <span className="mt-1 font-mono text-sm">{chatflow.integration.apiEndpoint}</span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">SDK Support</span>
                            <span className="mt-1">{chatflow.integration.sdkSupport.join(", ")}</span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Webhooks</span>
                            <span className="mt-1">
                              {chatflow.integration.webhooks ? "Supported" : "Not supported"}
                            </span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">OAuth</span>
                            <span className="mt-1">{chatflow.integration.oauth ? "Supported" : "Not supported"}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold tracking-tight">Requirements</h3>
                        <div className="grid gap-4 mt-4 sm:grid-cols-2">
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Data Formats</span>
                            <span className="mt-1">{chatflow.requirements.dataFormats.join(", ")}</span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Data Size</span>
                            <span className="mt-1">
                              {chatflow.requirements.minDataSize} - {chatflow.requirements.maxDataSize}
                            </span>
                          </div>
                          <div className="flex flex-col p-4 border rounded-lg">
                            <span className="text-sm font-medium text-muted-foreground">Supported Platforms</span>
                            <span className="mt-1">{chatflow.requirements.supportedPlatforms.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="pt-6">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
                        <div className="grid gap-4 mt-6 sm:grid-cols-2">
                          {chatflow.capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="mt-1 rounded-full bg-primary/10 p-1">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">{capability}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold tracking-tight">Screenshots</h3>
                        <div className="grid gap-6 mt-4 md:grid-cols-2">
                          {chatflow.media.screenshots.map((screenshot, index) => (
                            <div key={index} className="overflow-hidden rounded-lg border">
                              <div className="relative aspect-video">
                                <Image
                                  src={
                                    screenshot.url ||
                                    "/placeholder.svg?height=720&width=1280&query=AI+chatbot+interface" ||
                                    "/placeholder.svg"
                                  }
                                  alt={screenshot.alt}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              {screenshot.caption && (
                                <div className="p-3 text-sm text-muted-foreground">{screenshot.caption}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="examples" className="pt-6">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight">Usage Examples</h2>
                        <p className="mt-2 text-muted-foreground">
                          See how this chatbot can be used in real-world scenarios.
                        </p>
                      </div>

                      <div className="space-y-6">
                        {chatflow.examples.map((example, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle>{example.title}</CardTitle>
                              <CardDescription>{example.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="rounded-lg bg-muted p-4">
                                <div className="mb-2 text-sm font-medium">User Query:</div>
                                <div className="text-muted-foreground">{example.userQuery}</div>
                              </div>
                              <div className="rounded-lg bg-primary/5 p-4">
                                <div className="mb-2 text-sm font-medium">Chatbot Response:</div>
                                <div className="text-muted-foreground">{example.agentResponse}</div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="documentation" className="pt-6">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight">Documentation</h2>
                        <p className="mt-2 text-muted-foreground">
                          Resources to help you implement and use this chatbot effectively.
                        </p>
                      </div>

                      <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                          <CardHeader>
                            <CardTitle>{chatflow.documentation.gettingStarted.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4">
                              {chatflow.documentation.gettingStarted.description}
                            </CardDescription>
                            <Button variant="outline" asChild className="w-full">
                              <Link href={chatflow.documentation.gettingStarted.url}>
                                View Guide
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>{chatflow.documentation.apiReference.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4">
                              {chatflow.documentation.apiReference.description}
                            </CardDescription>
                            <Button variant="outline" asChild className="w-full">
                              <Link href={chatflow.documentation.apiReference.url}>
                                View API Docs
                                <Code className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>{chatflow.documentation.tutorials.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4">
                              {chatflow.documentation.tutorials.description}
                            </CardDescription>
                            <Button variant="outline" asChild className="w-full">
                              <Link href={chatflow.documentation.tutorials.url}>
                                View Tutorials
                                <BookOpen className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Testimonials */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">What Users Are Saying</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {chatflow.testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-muted/50">
                        <CardContent className="pt-6">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="italic mb-4">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Related Chatflows */}
                {relatedChatflows.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4">Related Chatbots</h3>
                    <div className="space-y-4">
                      {relatedChatflows.map((relatedFlow) => (
                        <Link
                          key={relatedFlow.id}
                          href={`/chatflow/${relatedFlow.slug}`}
                          className="flex items-center p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center mr-3">
                            <MessageCircle className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">{relatedFlow.name}</h4>
                            <p className="text-sm text-muted-foreground truncate">{relatedFlow.shortDescription}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to transform your workflow?</h2>
                <p className="text-xl text-muted-foreground">
                  Get started with {chatflow.name} today and see the difference it makes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:w-auto justify-center">
                <Button size="lg" asChild>
                  <Link href={`/onboarding/chatflow/${chatflow.slug}`}>
                    Try This Chatbot
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Contact Sales
                    <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  } catch (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/10 dark:border-red-800/30">
          <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-red-700 dark:text-red-400 mb-2">Error Loading Chatbot</h2>
          <p className="text-red-600 dark:text-red-300 mb-4">
            We encountered an error while loading this chatbot. Please try again later.
          </p>
          <Button asChild>
            <Link href="/marketplace?tab=chatbots">Browse All Chatbots</Link>
          </Button>
        </div>
      </div>
    )
  }
}
