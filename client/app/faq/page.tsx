"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      id: "general",
      label: "General",
      faqs: [
        {
          question: "What is INTELLIGENTIC.AI?",
          answer:
            "INTELLIGENTIC.AI is a platform that provides AI-powered agents and chatbots for various business use cases. Our technology helps businesses automate tasks, improve customer service, analyze data, and more through intelligent AI solutions.",
        },
        {
          question: "How can AI agents benefit my business?",
          answer:
            "AI agents can benefit your business in multiple ways: they can automate repetitive tasks, provide 24/7 customer support, analyze large volumes of data quickly, generate content, and help make data-driven decisions. This leads to improved efficiency, reduced costs, and enhanced customer experiences.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve a wide range of industries including e-commerce, healthcare, finance, education, retail, travel, real estate, and more. Our AI solutions are customizable and can be adapted to meet the specific needs of various business sectors.",
        },
        {
          question: "How do I get started with INTELLIGENTIC.AI?",
          answer:
            "Getting started is easy. You can browse our marketplace to find pre-built AI agents that match your needs, or contact us to discuss custom solutions. Once you've selected an agent, you can configure it to your specifications and integrate it with your existing systems.",
        },
        {
          question: "Do you offer a free trial?",
          answer:
            "Yes, we offer a free trial period for most of our AI agents and chatbots. This allows you to test the functionality and see the benefits before committing to a subscription. Visit our pricing page for more details on trial offerings.",
        },
      ],
    },
    {
      id: "pricing",
      label: "Pricing & Plans",
      faqs: [
        {
          question: "How is pricing structured?",
          answer:
            "Our pricing is structured based on usage tiers. We offer several plans including a free tier with limited features, standard tier for growing businesses, and premium/enterprise tiers for larger organizations with advanced needs. Each plan includes a specific number of interactions, and you can always upgrade as your needs grow.",
        },
        {
          question: "What happens if I exceed my plan limits?",
          answer:
            "If you exceed your plan's monthly interaction limits, you'll be charged for additional usage at the rate specified in your plan. We'll notify you as you approach your limit, giving you the opportunity to upgrade your plan if needed.",
        },
        {
          question: "Can I change my plan at any time?",
          answer:
            "Yes, you can upgrade your plan at any time. Upgrades take effect immediately. You can also downgrade your plan, which will take effect at the start of your next billing cycle.",
        },
        {
          question: "Do you offer custom pricing for large organizations?",
          answer:
            "Yes, we offer custom enterprise pricing for large organizations with specific requirements. Contact our sales team to discuss your needs and get a customized quote.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. For enterprise clients, we also offer invoice-based payment options. All payments are processed securely through our payment providers.",
        },
      ],
    },
    {
      id: "technical",
      label: "Technical",
      faqs: [
        {
          question: "How do I integrate an AI agent with my website?",
          answer:
            "Integration is simple. For website chatbots, we provide a JavaScript snippet that you can add to your site. For more complex integrations, we offer a comprehensive API and documentation. We also provide SDKs for popular programming languages and platforms.",
        },
        {
          question: "What programming languages and platforms do you support?",
          answer:
            "Our API can be used with any programming language that can make HTTP requests. We provide official SDKs for JavaScript/TypeScript, Python, Ruby, PHP, Java, and .NET. We also offer integrations with popular platforms like WordPress, Shopify, and major CRM systems.",
        },
        {
          question: "Is your platform compatible with mobile apps?",
          answer:
            "Yes, our platform works with both web and mobile applications. We provide SDKs for iOS and Android development, as well as React Native and Flutter for cross-platform development.",
        },
        {
          question: "Can I customize the AI's responses and behavior?",
          answer:
            "Absolutely. You can customize various aspects of our AI agents, including their response style, knowledge base, conversation flow, and integration with your business systems. You can also train them on your specific data to improve their performance in your domain.",
        },
        {
          question: "What kind of uptime and reliability do you offer?",
          answer:
            "We strive for 99.9% uptime for our services. Our infrastructure is distributed across multiple regions for redundancy, and we have comprehensive monitoring and alert systems in place. We also provide a status page where you can check our current service status and history.",
        },
      ],
    },
    {
      id: "data",
      label: "Data & Security",
      faqs: [
        {
          question: "How do you handle data security and privacy?",
          answer:
            "We take data security and privacy very seriously. All data is encrypted in transit and at rest. We follow industry best practices for security, including regular security audits and penetration testing. We also comply with relevant data protection regulations.",
        },
        {
          question: "Where is my data stored?",
          answer:
            "Your data is stored in secure cloud environments. We have data centers in multiple geographic regions, and you can choose where your data is stored based on your compliance requirements. For enterprise clients, we offer more granular control over data storage locations.",
        },
        {
          question: "Do you comply with GDPR, CCPA, and other privacy regulations?",
          answer:
            "Yes, we are compliant with major privacy regulations including GDPR (Europe), CCPA (California), and others. We provide the necessary tools and processes to help you maintain compliance in your use of our platform, including data access, deletion, and export features.",
        },
        {
          question: "Who owns the data generated through interactions with your AI?",
          answer:
            "You maintain ownership of all your data. We process and store this data solely to provide and improve our services to you. We do not sell your data or use it for purposes other than what's specified in our terms of service and privacy policy.",
        },
        {
          question: "How long do you retain conversation and interaction data?",
          answer:
            "By default, we retain conversation data for 12 months to allow for analysis and improvement of AI performance. However, you can configure custom retention policies based on your needs and compliance requirements. You can also manually delete data at any time.",
        },
      ],
    },
    {
      id: "support",
      label: "Support & Training",
      faqs: [
        {
          question: "What kind of customer support do you offer?",
          answer:
            "We offer multiple levels of support depending on your plan. All customers have access to our knowledge base, documentation, and community forums. Paid plans include email support, while premium and enterprise plans include priority support, phone support, and dedicated account managers.",
        },
        {
          question: "Do you offer training and onboarding?",
          answer:
            "Yes, we provide various training resources including documentation, video tutorials, and webinars. For enterprise clients, we offer personalized onboarding and training sessions. We also have a network of certified partners who can provide additional implementation and training services.",
        },
        {
          question: "How quickly can I expect a response from your support team?",
          answer:
            "Response times depend on your plan level. For standard plans, we aim to respond within 24 hours during business days. Premium plans receive responses within 12 hours, and enterprise plans with priority support can expect responses within 4 hours, 24/7.",
        },
        {
          question: "Is there a community or forum where I can connect with other users?",
          answer:
            "Yes, we have an active user community where you can ask questions, share ideas, and learn from other users. We also regularly host webinars and events where you can learn more about AI capabilities and best practices.",
        },
        {
          question: "Do you provide implementation services?",
          answer:
            "While we design our platform to be easy to implement, we do offer professional services for complex implementations. We also have a network of certified partners who can assist with implementation, customization, and integration projects.",
        },
      ],
    },
  ]

  const filteredFAQs =
    searchQuery.trim() === ""
      ? faqCategories
      : faqCategories
          .map((category) => ({
            ...category,
            faqs: category.faqs.filter(
              (faq) =>
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
          }))
          .filter((category) => category.faqs.length > 0)

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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
            <p className="mt-4 text-xl text-muted-foreground">Find answers to common questions about our AI platform</p>
            <div className="relative max-w-xl mx-auto mt-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="general">
            <TabsList className="flex justify-start mb-6 overflow-x-auto pb-2">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {(searchQuery.trim() === ""
                    ? category.faqs
                    : category.faqs.filter(
                        (faq) =>
                          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
                      )
                  ).map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left py-5">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="py-4 text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {searchQuery.trim() !== "" &&
                  category.faqs.filter(
                    (faq) =>
                      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
                  ).length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No results found for "{searchQuery}" in this category.</p>
                    </div>
                  )}
              </TabsContent>
            ))}
          </Tabs>

          {searchQuery.trim() !== "" && filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any FAQs matching "{searchQuery}". Try a different search term or ask us directly.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          )}

          <div className="mt-16 text-center py-10 border-t">
            <h3 className="text-xl font-medium mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              If you couldn't find the answer to your question, our support team is here to help.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
