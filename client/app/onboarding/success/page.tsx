"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
        </div>

        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6 mx-auto">
              <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight">Request Submitted Successfully!</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you for your submission. Our team will review your request and get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <Card className="border border-gray-200 dark:border-gray-800 bg-transparent">
            <CardHeader>
              <CardTitle className="text-xl">What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Review",
                    description: "Our team will review your request and requirements.",
                  },
                  {
                    title: "Contact",
                    description: "A member of our team will contact you to discuss your needs in more detail.",
                  },
                  {
                    title: "Setup",
                    description: "We'll set up your solution and provide you with access instructions.",
                  },
                  {
                    title: "Support",
                    description: "Our support team will be available to help you get started and answer any questions.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild>
                  <Link href="/marketplace">Explore More Solutions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}