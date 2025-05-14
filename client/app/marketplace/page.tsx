"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Bot,
  BrainCircuit,
  Briefcase,
  Code,
  Filter,
  MessageCircle,
  HeartPulse,
  LineChart,
  MessageSquare,
  Palette,
  Search,
  Sparkles,
  AlertTriangle,
  RefreshCw,
  Server,
  SearchXIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { getAllAgents } from "@/lib/agent-service"
import { getAllChatflows } from "@/lib/chatflow-service"
import { AgentCard } from "@/components/agent-card"
import { ChatflowCard } from "@/components/chatflow-card"
import type { Agent, Chatflow } from "@/lib/types"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function MarketplacePage() {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get("tab") === "chatbots" ? "chatbots" : "ai-agents"

  const [activeTab, setActiveTab] = useState(initialTab)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState("grid")

  const [agents, setAgents] = useState<Agent[]>([])
  const [chatflows, setChatflows] = useState<Chatflow[]>([])
  const [isLoadingAgents, setIsLoadingAgents] = useState(true)
  const [isLoadingChatflows, setIsLoadingChatflows] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isRetrying, setIsRetrying] = useState(false)
  const [apiStatus, setApiStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // Generic filter function
  const filterItems = <T extends { category?: string; name: string; description: string }>(
    items: T[],
    category: string,
    query: string
  ): T[] => {
    return items.filter((item) => {
      // Filter by category
      if (category !== "all" && item.category?.toLowerCase() !== category.toLowerCase()) {
        return false;
      }
  
      // Filter by search query
      if (
        query &&
        !item.name.toLowerCase().includes(query.toLowerCase()) &&
        !item.description.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }
  
      return true;
    });
  };
  const getCategoryNamesFromAgents = async () => {
    try {
      const agents = await getAllAgents();
      const chatflows = await getAllChatflows();
      
      // Create a Set to store unique category names from both agents and chatflows
      const categoryNames = new Set<string>();
  
      // Process agents
      agents.forEach(agent => {
        if (agent.category) {
          categoryNames.add(agent.category.toLowerCase());
        }
      });
  
      // Process chatflows
      chatflows.forEach(chatflow => {
        if (chatflow.category) {
          categoryNames.add(chatflow.category.toLowerCase());
        }
      });
  
      // Convert Set to array and sort alphabetically
      const categories = Array.from(categoryNames).sort();
      categories.unshift("all"); // Add 'all' at the beginning
  
      return categories;
    } catch (error) {
      return ["all"]; // Return at least 'all' as fallback
    }
  };
  
  // Initialize categories inside the component using useEffect
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await getCategoryNamesFromAgents();
      setCategories(cats);
    };
    fetchCategories();
  }, []);
  
  const fetchData = async () => {
    // Reset state
    setIsLoadingAgents(true)
    setIsLoadingChatflows(true)
    setError(null)
    setApiStatus("loading")

    // Fetch agents
    try {
      const agentData = await getAllAgents()


      if (!agentData || !Array.isArray(agentData)) {
        setError("Failed to load AI agents. API returned invalid data.")
        setAgents([])
      } else {
        setAgents(agentData.map(agent => ({
          ...agent,
          category: agent.category?.toLowerCase()
        })));
      }

      setIsLoadingAgents(false)
    } catch (err) {
      setError("Failed to load AI agents. Please try again later.")
      setAgents([])
      setIsLoadingAgents(false)
      setApiStatus("error")
    }

    // Fetch chatflows
    try {
      const chatflowData = await getAllChatflows()


      if (!chatflowData || !Array.isArray(chatflowData)) {
        if (!error) {
          setError("Failed to load chatbots. API returned invalid data.")
        }
        setChatflows([])
      } else {
        setChatflows(chatflowData.map(chatflow => ({
          ...chatflow,
          category: chatflow.category?.toLowerCase()
        })));
      }

      setIsLoadingChatflows(false)
    } catch (err) {
      if (!error) {
        setError("Failed to load chatbots. Please try again later.")
      }
      setChatflows([])
      setIsLoadingChatflows(false)
      setApiStatus("error")
    }

    // If we got here without errors, set status to success
    if (!error) {
      setApiStatus("success")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRetry = () => {
    setIsRetrying(true)
    fetchData().finally(() => {
      setIsRetrying(false)
    })
  }

  // Use the generic filter function for both agents and chatflows
  const filteredAgents = filterItems(agents, activeCategory, searchQuery)
  const filteredChatflows = filterItems(chatflows, activeCategory, searchQuery)

  return (
    <main className="flex min-h-screen flex-col ">
      {/* API Status Indicator */}
      {apiStatus === "loading" && (
        <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center z-50">
          <Server className="h-4 w-4 mr-2 animate-pulse" />
          <span>Connecting to API...</span>
        </div>
      )}

      {apiStatus === "success" && agents.length > 0 && chatflows.length > 0 && (
        <motion.div
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Server className="h-4 w-4 mr-2" />
          <span>Agents fetched successfully</span>
        </motion.div>
      )}

      <section>
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Product Type Tabs */}
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center mb-8">
            <TabsList className="grid w-full h-full  max-w-md grid-cols-2 p-2 transition-all">
  <TabsTrigger
    value="ai-agents"
    className="flex items-center justify-center gap-2 px-4 py-2  font-medium text-muted-foreground transition-all duration-200 ease-in-out
              hover:bg-muted/50 hover:text-foreground
              data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow data-[state=active]:scale-[1.02]"
  >
    <Bot className="h-4 w-4 text-brand-primary transition-all duration-200" />
    <span>AI Agents</span>
  </TabsTrigger>

  <TabsTrigger
    value="chatbots"
    className="flex items-center justify-center gap-2 px-4 py-2  font-medium text-muted-foreground transition-all duration-200 ease-in-out
              hover:bg-muted/50 hover:text-foreground
              data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow data-[state=active]:scale-[1.02]"
  >
    <MessageCircle className="h-4 w-4 text-teal-500 transition-all duration-200" />
    <span>Chatbots</span>
  </TabsTrigger>
</TabsList>

            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar with filters */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <div className="lg:sticky  space-y-6 bg-card/50 backdrop-blur-sm p-1 px-3 rounded-xl border">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm md:text-2xl p-2 font-medium">Filters</h2>
                    <Button
                      variant="ghost"
                      size="sm" 
                      className="lg:hidden text-primary"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      {showFilters ? "Hide" : "Show"}
                    </Button>
                  </div>

                  <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium mb-3">Categories</h3>
                      <div className="space-y-3">
  {categories.map((category) => (
    <RadioGroup key={category} value={activeCategory} onValueChange={setActiveCategory} className="space-y-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value={category}
          id={category}
          className="h-4 w-4"
        />
        <Label htmlFor={category} className="text-sm cursor-pointer capitalize">
          {category}
        </Label>
      </div>
    </RadioGroup>
  ))}
</div>
                    </div>

                    <Button
                      className="w-full"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setActiveCategory("all")
                        setSearchQuery("")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="relative flex-1 mr-4">
                    
                    <Input
                      type="search"
                      placeholder="Search marketplace..."
                      className="pl-9 bg-background/50 backdrop-blur-sm border-2"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="inline-flex items-center rounded-md border border-input bg-background p-1">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="px-2.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                      </svg>
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="px-2.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="8" x2="21" y1="6" y2="6" />
                        <line x1="8" x2="21" y1="12" y2="12" />
                        <line x1="8" x2="21" y1="18" y2="18" />
                        <line x1="3" x2="3" y1="6" y2="6" />
                        <line x1="3" x2="3" y1="12" y2="12" />
                        <line x1="3" x2="3" y1="18" y2="18" />
                      </svg>
                    </Button>
                  </div>
                </div>

                {error && (
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 p-4 rounded-lg mb-6 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p>{error}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-amber-100 dark:bg-amber-900/50 border-amber-200 dark:border-amber-800"
                        onClick={handleRetry}
                        disabled={isRetrying}
                      >
                        {isRetrying ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Retrying...
                          </>
                        ) : (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Retry
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                <TabsContent value="ai-agents">
                  <div className="text-sm text-muted-foreground mb-4">
                    Showing{" "}
                    <span className="font-medium text-foreground">
                      {isLoadingAgents ? "..." : filteredAgents.length}
                    </span>{" "}
                    AI Agents
                  </div>

                  {isLoadingAgents ? (
                    viewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="rounded-lg border-2 border-gray-200 dark:border-gray-800 overflow-hidden"
                          >
                            <div className="p-6 space-y-4">
                              <div className="flex items-center gap-3">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <Skeleton className="h-6 w-32" />
                              </div>
                              <Skeleton className="h-4 w-20 mt-2" />
                              <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                              </div>
                              <div className="pt-4">
                                <Skeleton className="h-10 w-full" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="rounded-lg border overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                              <Skeleton className="w-full md:w-48 h-40" />
                              <div className="flex-1 p-6 space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                  <Skeleton className="h-6 w-32" />
                                  <Skeleton className="h-5 w-16 rounded-full" />
                                </div>
                                <div className="space-y-2">
                                  <Skeleton className="h-4 w-full" />
                                  <Skeleton className="h-4 w-full" />
                                </div>
                                <div className="flex gap-2">
                                  <Skeleton className="h-10 w-24" />
                                  <Skeleton className="h-10 w-28" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  ) : filteredAgents.length > 0 ? (
                    viewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredAgents.map((agent, index) => (
                          <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <AgentCard agent={agent} />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {filteredAgents.map((agent, index) => (
                          <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-card border-2 border-gray-200 dark:border-gray-800 dark:bg-black/50 rounded-lg overflow-hidden shadow-sm"
                          >
                            <div className="p-6">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h3 className="font-medium text-lg">{agent.name}</h3>
                                <Badge
                                  variant="secondary"
                                  className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/20"
                                >
                                  {agent.category}
                                </Badge>
                                {agent.metadata?.new && (
                                  <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground mb-4">{agent.description}</p>
                              <div className="flex flex-wrap gap-1 mb-4">
                                {agent.capabilities?.slice(0, 3).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {agent.capabilities?.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{agent.capabilities.length - 3} more
                                  </Badge>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <Button
                                  asChild
                                  size="sm"
                                  className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-90"
                                >
                                  <Link href={`/onboarding/agent/${agent.slug}`}>Try Demo</Link>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={`/agents/${agent.slug}`}>View Details</Link>
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="text-center py-16 bg-card/50 backdrop-blur-sm rounded-xl border">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <Bot className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No AI Agents found</h3>
                      <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                        {apiStatus === "error"
                          ? "There was an error connecting to the API. Please try again later."
                          : "Try adjusting your search or filter criteria to find what you're looking for"}
                      </p>
                      <Button
                        onClick={() => {
                          setActiveCategory("all")
                          setSearchQuery("")
                          if (apiStatus === "error") {
                            handleRetry()
                          }
                        }}
                      >
                        {apiStatus === "error" ? "Retry Connection" : "Reset Filters"}
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="chatbots">
                  <div className="text-sm text-muted-foreground mb-4">
                    Showing{" "}
                    <span className="font-medium text-foreground">
                      {isLoadingChatflows ? "..." : filteredChatflows.length}
                    </span>{" "}
                    Chatbots
                  </div>

                  {isLoadingChatflows ? (
                    viewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="rounded-lg border-2 border-gray-200 dark:border-gray-800 overflow-hidden"
                          >
                            <Skeleton className="h-40 w-full" />
                            <div className="p-6 space-y-4">
                              <div className="flex items-center justify-between">
                                <Skeleton className="h-6 w-32" />
                                <Skeleton className="h-5 w-10 rounded-full" />
                              </div>
                              <Skeleton className="h-5 w-24 rounded-full" />
                              <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                              </div>
                              <div className="pt-4 border-t border-dashed space-y-3">
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="rounded-lg border overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                              <Skeleton className="w-full md:w-48 h-40" />
                              <div className="flex-1 p-6 space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                  <Skeleton className="h-6 w-32" />
                                  <Skeleton className="h-5 w-16 rounded-full" />
                                </div>
                                <div className="space-y-2">
                                  <Skeleton className="h-4 w-full" />
                                  <Skeleton className="h-4 w-full" />
                                </div>
                                <div className="flex gap-2">
                                  <Skeleton className="h-10 w-24" />
                                  <Skeleton className="h-10 w-28" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  ) : filteredChatflows.length > 0 ? (
                    viewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredChatflows.map((chatflow, index) => (
                          <motion.div
                            key={chatflow.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <ChatflowCard chatflow={chatflow} />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {filteredChatflows.map((chatflow, index) => (
                          <motion.div
                            key={chatflow.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-card border-2 border-gray-200 dark:border-gray-800 dark:bg-black/50 rounded-lg overflow-hidden shadow-sm"
                          >
                            <div className="flex flex-col md:flex-row">
                              <div className="flex-1 p-6">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <h3 className="font-medium text-lg">{chatflow.name}</h3>
                                  <Badge
                                    variant="secondary"
                                    className="bg-teal-500/10 text-teal-600 border border-teal-500/20 hover:bg-teal-500/20"
                                  >
                                    {chatflow.category}
                                  </Badge>
                                  {chatflow.metadata?.new && (
                                    <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                                  )}
                                </div>
                                <p className="text-muted-foreground mb-4">{chatflow.shortDescription}</p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                  {chatflow.capabilities?.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                  {chatflow.capabilities?.length > 3 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{chatflow.capabilities.length - 3} more
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <Button asChild size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                                    <Link href={`/onboarding/chatflow/${chatflow.slug}`}>Try Chatbot</Link>
                                  </Button>
                                  <Button variant="outline" size="sm" asChild>
                                    <Link href={`/chatflow/${chatflow.slug}`}>View Details</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="text-center py-16 bg-card/50 backdrop-blur-sm rounded-xl border">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <MessageCircle className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No Chatbots found</h3>
                      <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                        {apiStatus === "error"
                          ? "There was an error connecting to the API. Please try again later."
                          : "Try adjusting your search or filter criteria to find what you're looking for"}
                      </p>
                      <Button
                        onClick={() => {
                          setActiveCategory("all")
                          setSearchQuery("")
                          if (apiStatus === "error") {
                            handleRetry()
                          }
                        }}
                      >
                        {apiStatus === "error" ? "Retry Connection" : "Reset Filters"}
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
