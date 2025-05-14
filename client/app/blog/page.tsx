"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Agents in Enterprise Environments",
    excerpt:
      "Explore how AI agents are transforming enterprise operations, from customer service to internal workflows and decision-making processes.",
    image: "/placeholder.svg?key=san9y",
    date: "2023-11-15",
    readTime: "8 min read",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?key=md161",
      role: "AI Research Director",
    },
    category: "Enterprise",
    tags: ["AI Agents", "Enterprise", "Digital Transformation"],
    featured: true,
  },
  {
    id: 2,
    title: "Building Effective Chatbots for Customer Support",
    excerpt:
      "Learn the best practices for designing and implementing customer support chatbots that provide real value and improve customer satisfaction.",
    image: "/placeholder.svg?key=6okgr",
    date: "2023-11-08",
    readTime: "6 min read",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?key=ht299",
      role: "Customer Experience Lead",
    },
    category: "Chatbots",
    tags: ["Chatbots", "Customer Support", "UX Design"],
    featured: false,
  },
  {
    id: 3,
    title: "The Role of Large Language Models in Modern AI Solutions",
    excerpt:
      "Dive deep into how large language models are powering the latest generation of AI agents and transforming what's possible in natural language processing.",
    image: "/placeholder.svg?key=ewrj0",
    date: "2023-10-25",
    readTime: "10 min read",
    author: {
      name: "Dr. James Wilson",
      avatar: "/placeholder.svg?key=ebupv",
      role: "AI Researcher",
    },
    category: "Technology",
    tags: ["LLMs", "NLP", "Machine Learning"],
    featured: true,
  },
  {
    id: 4,
    title: "Implementing AI Agents in Healthcare: Challenges and Opportunities",
    excerpt:
      "An examination of how AI agents are being used in healthcare settings, the unique challenges they face, and the tremendous opportunities they present.",
    image: "/placeholder.svg?key=qecfe",
    date: "2023-10-18",
    readTime: "9 min read",
    author: {
      name: "Dr. Emily Rodriguez",
      avatar: "/placeholder.svg?key=0stea",
      role: "Healthcare AI Specialist",
    },
    category: "Healthcare",
    tags: ["Healthcare", "AI Ethics", "Medical Technology"],
    featured: false,
  },
  {
    id: 5,
    title: "The Ethics of AI: Building Responsible AI Agents",
    excerpt:
      "A discussion on the ethical considerations in AI development and how to ensure AI agents are designed with fairness, transparency, and accountability.",
    image: "/ai-ethics-concept.png",
    date: "2023-10-10",
    readTime: "7 min read",
    author: {
      name: "Dr. David Kim",
      avatar: "/placeholder.svg?key=zpdhh",
      role: "AI Ethics Advisor",
    },
    category: "AI Ethics",
    tags: ["Ethics", "Responsible AI", "AI Governance"],
    featured: false,
  },
  {
    id: 6,
    title: "Measuring ROI: The Business Case for AI Agents",
    excerpt:
      "How to calculate and demonstrate the return on investment for implementing AI agents in your business operations.",
    image: "/placeholder.svg?key=fwdzj",
    date: "2023-09-28",
    readTime: "5 min read",
    author: {
      name: "Jennifer Patel",
      avatar: "/placeholder.svg?key=2d70b",
      role: "Business Strategy Director",
    },
    category: "Business",
    tags: ["ROI", "Business Strategy", "AI Implementation"],
    featured: false,
  },
]

const categories = [
  "All",
  "Enterprise",
  "Chatbots",
  "Technology",
  "Healthcare",
  "AI Ethics",
  "Business",
  "Case Studies",
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by search query
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filter by category
    const matchesCategory = activeCategory === "All" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
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
            <h1 className="text-4xl font-bold tracking-tight">AI Insights Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the latest insights, trends, and best practices in AI agents, chatbots, and enterprise AI
              solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-8">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="relative h-64 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      <h3 className="text-xl font-bold">{post.title}</h3>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
                      .slice(0, 10)
                      .map((tag) => (
                        <Badge key={tag} variant="outline" className="cursor-pointer">
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Subscribe</h3>
                  <p className="text-sm text-muted-foreground">
                    Get the latest articles and insights delivered to your inbox
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="latest">
                <div className="flex justify-start mb-6">
                  <TabsList>
                    <TabsTrigger value="latest">Latest</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="latest" className="space-y-6">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="overflow-hidden hover:border-primary/50 transition-colors">
                          <div className="flex flex-col md:flex-row">
                            <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6 flex-1">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <Badge variant="secondary">{post.category}</Badge>
                                <span>•</span>
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span>•</span>
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                              <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                              </Link>
                              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                    <Image
                                      src={post.author.avatar || "/placeholder.svg"}
                                      alt={post.author.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <span className="text-sm font-medium">{post.author.name}</span>
                                </div>
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/blog/${post.id}`}>
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium mb-2">No articles found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search or filter criteria to find what you're looking for
                      </p>
                      <Button
                        onClick={() => {
                          setSearchQuery("")
                          setActiveCategory("All")
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="popular" className="space-y-6">
                  {/* For demo purposes, we'll just show the same posts in a different order */}
                  {filteredPosts.length > 0 ? (
                    [...filteredPosts].reverse().map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="overflow-hidden hover:border-primary/50 transition-colors">
                          <div className="flex flex-col md:flex-row">
                            <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6 flex-1">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <Badge variant="secondary">{post.category}</Badge>
                                <span>•</span>
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span>•</span>
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                              <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                              </Link>
                              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                    <Image
                                      src={post.author.avatar || "/placeholder.svg"}
                                      alt={post.author.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <span className="text-sm font-medium">{post.author.name}</span>
                                </div>
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/blog/${post.id}`}>
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium mb-2">No articles found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search or filter criteria to find what you're looking for
                      </p>
                      <Button
                        onClick={() => {
                          setSearchQuery("")
                          setActiveCategory("All")
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Stay Updated with AI Insights</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive the latest articles, insights, and updates on AI technology
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="Your email address" type="email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
