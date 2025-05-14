"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  Check,
  Star,
  ArrowUpDown,
  Building2,
  Shield,
  Server,
  Users,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { getAllAgents, getCategories } from "@/lib/agents"
import type { Agent } from "@/lib/agents"

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("featured")
  const [viewOption, setViewOption] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Enterprise-focused industries
  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Technology",
    "Telecommunications",
    "Government",
    "Energy",
    "Transportation",
    "Education",
  ]

  // Enterprise-focused deployment options
  const deploymentOptions = ["Cloud", "On-Premise", "Hybrid"]

  useEffect(() => {
    const allAgents = getAllAgents()
    const allCategories = getCategories()
    setAgents(allAgents)
    setFilteredAgents(allAgents)
    setCategories(allCategories)
  }, [])

  useEffect(() => {
    let result = [...agents]

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (agent) =>
          agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.capabilities.some((cap) => cap.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((agent) => selectedCategories.includes(agent.category))
    }

    // Filter by industries (simulated - in a real app, agents would have industry tags)
    if (selectedIndustries.length > 0) {
      // This is a placeholder - in a real app, you'd filter based on actual industry data
      // For now, we'll just keep all agents to simulate the filter
    }

    // Sort results
    switch (sortOption) {
      case "relevance":
        // In a real app, you'd have a relevance algorithm
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case "newest":
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
        break
      default: // featured
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    setFilteredAgents(result)
  }, [agents, searchQuery, selectedCategories, selectedIndustries, sortOption])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry],
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedIndustries([])
    setSortOption("featured")
  }

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-4">
              <Building2 className="h-4 w-4" />
              <span>Enterprise Solutions</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight">Enterprise-Grade AI Solutions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover powerful AI solutions designed specifically for enterprise needs, with advanced security,
              scalability, and integration capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8 flex-1">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with filters */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                    <Filter className="h-4 w-4 mr-2" />
                    {showFilters ? "Hide" : "Show"}
                  </Button>
                </div>

                <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                  <Accordion type="single" collapsible defaultValue="categories">
                    <AccordionItem value="categories">
                      <AccordionTrigger className="text-sm font-medium">Solution Categories</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 mt-2">
                          {categories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={`category-${category}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => toggleCategory(category)}
                              />
                              <Label htmlFor={`category-${category}`} className="text-sm">
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="industries">
                      <AccordionTrigger className="text-sm font-medium">Industries</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 mt-2">
                          {industries.map((industry) => (
                            <div key={industry} className="flex items-center space-x-2">
                              <Checkbox
                                id={`industry-${industry}`}
                                checked={selectedIndustries.includes(industry)}
                                onCheckedChange={() => toggleIndustry(industry)}
                              />
                              <Label htmlFor={`industry-${industry}`} className="text-sm">
                                {industry}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="deployment">
                      <AccordionTrigger className="text-sm font-medium">Deployment Options</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 mt-2">
                          {deploymentOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox id={`deployment-${option}`} />
                              <Label htmlFor={`deployment-${option}`} className="text-sm">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="features">
                      <AccordionTrigger className="text-sm font-medium">Enterprise Features</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-sso" />
                            <Label htmlFor="feature-sso" className="text-sm">
                              Single Sign-On (SSO)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-compliance" />
                            <Label htmlFor="feature-compliance" className="text-sm">
                              Compliance Certifications
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-api" />
                            <Label htmlFor="feature-api" className="text-sm">
                              API Access
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="feature-sla" />
                            <Label htmlFor="feature-sla" className="text-sm">
                              SLA Guarantees
                            </Label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search enterprise solutions by name, capability, or industry..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredAgents.length}</span> enterprise
                  solutions
                </div>

                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ArrowUpDown className="h-3.5 w-3.5 mr-1" />
                        Sort by:{" "}
                        {sortOption
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSortOption("featured")}>
                        <Star className="h-4 w-4 mr-2" />
                        Featured
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortOption("relevance")}>
                        <FileText className="h-4 w-4 mr-2" />
                        Relevance
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortOption("rating")}>
                        <Star className="h-4 w-4 mr-2" />
                        Highest Rated
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div className="hidden sm:block">
                    <Button
                      variant={viewOption === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewOption("grid")}
                      className="rounded-r-none"
                    >
                      Grid
                    </Button>
                    <Button
                      variant={viewOption === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewOption("list")}
                      className="rounded-l-none"
                    >
                      List
                    </Button>
                  </div>
                </div>
              </div>

              {filteredAgents.length === 0 ? (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No solutions found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              ) : (
                <>
                  {viewOption === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {filteredAgents.map((agent) => (
                        <EnterpriseCard key={agent.id} agent={agent} />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 mt-6">
                      {filteredAgents.map((agent) => (
                        <EnterpriseListItem key={agent.id} agent={agent} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="mb-2">Enterprise Solutions</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Need a Custom Solution?</h2>
              <p className="text-lg text-muted-foreground">
                Our enterprise team can work with you to create a tailored AI solution that meets your specific business
                requirements, security needs, and integration challenges.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom integrations with your existing systems",
                  "Dedicated support and account management",
                  "On-premises deployment options",
                  "Custom SLAs and security requirements",
                  "Volume licensing for large organizations",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link href="/enterprise">Contact Sales</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-background to-primary/5 rounded-lg border p-8 flex items-center justify-center">
                <div className="text-center space-y-4 max-w-md">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Enterprise Solutions</h3>
                  <p className="text-muted-foreground">Tailored AI solutions for your organization's specific needs</p>

                  <div className="pt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Advanced Security</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Server className="h-4 w-4 text-primary" />
                      <span>On-Premise Options</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Team Management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>Custom Contracts</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

interface EnterpriseCardProps {
  agent: Agent
}

function EnterpriseCard({ agent }: EnterpriseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Card className="overflow-hidden h-full border-primary/10 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative">
            <div className="h-40 bg-gradient-to-r from-primary/10 to-purple-500/10 flex items-center justify-center">
              <Building2 className="h-16 w-16 text-primary" />
            </div>
            {agent.new && <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">New</Badge>}
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">{agent.name}</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium ml-1">{agent.rating}</span>
              </div>
            </div>

            <Badge variant="secondary" className="mb-3">
              {agent.category}
            </Badge>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{agent.description}</p>

            <div className="space-y-1 mb-4">
              {agent.capabilities.slice(0, 3).map((capability, index) => (
                <div key={index} className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{capability}</span>
                </div>
              ))}
              {agent.capabilities.length > 3 && (
                <div className="text-sm text-primary hover:underline cursor-pointer">
                  +{agent.capabilities.length - 3} more capabilities
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex gap-2">
                <Button asChild className="flex-1">
                  <Link href={`/onboarding/${agent.slug}`}>Try Demo</Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={`/agents/${agent.slug}`}>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface EnterpriseListItemProps {
  agent: Agent
}

function EnterpriseListItem({ agent }: EnterpriseListItemProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-48 h-32 bg-gradient-to-r from-primary/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="h-12 w-12 text-primary" />
            </div>

            <div className="p-6 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{agent.name}</h3>
                    {agent.new && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
                  </div>
                  <div className="flex items-center mt-1">
                    <Badge variant="secondary" className="mr-2">
                      {agent.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium ml-1">{agent.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-background/50">
                    Enterprise-Ready
                  </Badge>
                  <Badge variant="outline" className="bg-background/50">
                    SOC 2
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {agent.capabilities.slice(0, 4).map((capability, index) => (
                  <Badge key={index} variant="outline" className="bg-background/50">
                    {capability}
                  </Badge>
                ))}
                {agent.capabilities.length > 4 && (
                  <Badge variant="outline" className="bg-background/50">
                    +{agent.capabilities.length - 4} more
                  </Badge>
                )}
              </div>

              <div className="flex gap-2">
                <Button asChild>
                  <Link href={`/onboarding/${agent.slug}`}>Try Demo</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/agents/${agent.slug}`}>View Details</Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={`/agents/${agent.slug}/whitepaper`}>
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
