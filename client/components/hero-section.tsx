"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bot, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-background/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[30%] aspect-square bg-brand-secondary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
      </div>

      <div className="container px-4 md:px-6 py-10 md:py-14 flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary backdrop-blur-sm mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI-Powered Solutions for Every Need</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary leading-[1.15] mb-4">
              Discover & Deploy
              <br />
              Advanced AI Solutions
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Explore our marketplace of intelligent AI agents and chatflows designed to transform your business
              operations and customer experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row flex-wrap gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-primary to-brand-secondary border-0 text-white hover:opacity-90"
            >
              <Link href="/marketplace">
                <Bot className="mr-2 h-5 w-5" />
                Try AI Agent
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 backdrop-blur-sm">
              <Link href="/marketplace?tab=chatbots">
                <MessageCircle className="mr-2 h-5 w-5" />
                Try Chatbot
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="backdrop-blur-sm">
              <Link href="/onboarding/build">
                <Sparkles className="mr-2 h-5 w-5" />
                Build  AI Agent
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Featured Solutions Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-5xl mt-8 md:mt-16 backdrop-blur-sm"
        >
          <div className="relative p-1 rounded-xl bg-transparent">
            <div className="relative bg-transparent rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-transparent h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      <Bot className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1 text-gray-900 dark:text-gray-100">AI Agents</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Specialized-AI solutions for business tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-transparent h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      <MessageCircle className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1 text-gray-900 dark:text-gray-100">Chatbots</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Conversational workflows for engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-transparent h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      <Sparkles className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1 text-gray-900 dark:text-gray-100">Custom Solutions</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tailor-made AI built for your needs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 md:px-8 md:pb-8 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-5">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-transparent border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden"
                      >
                        <Bot className="h-4 w-4 text-gray-800 dark:text-gray-200" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-gray-100">25+</span> AI solutions
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Powered by Intelligentic AI</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div ref={scrollRef} />
    </section>
  )
}
