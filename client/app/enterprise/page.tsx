"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Building2, Shield, Server, Users, FileText, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function EnterprisePage() {
  const { toast } = useToast()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    message: "",
    interests: {
      agents: false,
      chatbots: false,
      customSolutions: false,
      integration: false,
      training: false,
    },
    contactPreference: "email",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    toast({
      title: "Request submitted",
      description: "Our enterprise team will contact you within 24 hours.",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (interest: keyof typeof formData.interests) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: !prev.interests[interest],
      },
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }))
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-4">
              <Building2 className="h-4 w-4" />
              <span>Enterprise Solutions</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">AI Solutions for Enterprise</h1>
            <p className="text-xl text-muted-foreground">
              Powerful, secure, and customizable AI solutions designed for enterprise needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Contact Sales</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Enterprise-Grade Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our enterprise solutions come with advanced features designed for large organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Advanced Security",
                description:
                  "Enterprise-grade security with SSO, role-based access control, and compliance with industry standards.",
              },
              {
                icon: <Server className="h-10 w-10" />,
                title: "Deployment Options",
                description:
                  "Choose between cloud, on-premises, or hybrid deployment options to meet your security requirements.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Team Management",
                description: "Comprehensive team management with user roles, permissions, and activity monitoring.",
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: "Custom Contracts",
                description:
                  "Flexible contracts with custom SLAs, support options, and pricing models tailored to your needs.",
              },
              {
                icon: <Building2 className="h-10 w-10" />,
                title: "Dedicated Support",
                description: "24/7 dedicated support with a named account manager and priority issue resolution.",
              },
              {
                icon: <ArrowRight className="h-10 w-10" />,
                title: "Custom Integrations",
                description:
                  "Custom integrations with your existing systems, including CRM, ERP, and other enterprise software.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Enterprise Use Cases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how enterprises across industries are leveraging our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Financial Services",
                description:
                  "AI agents for fraud detection, risk assessment, and customer service automation, helping financial institutions reduce costs and improve customer satisfaction.",
                image: "/placeholder.svg?key=dphsz",
                tags: ["Fraud Detection", "Risk Assessment", "Customer Service"],
              },
              {
                title: "Healthcare",
                description:
                  "AI solutions for patient triage, medical record analysis, and administrative task automation, helping healthcare providers deliver better care while reducing administrative burden.",
                image: "/placeholder.svg?key=ly1pg",
                tags: ["Patient Triage", "Medical Records", "Administrative Tasks"],
              },
              {
                title: "Manufacturing",
                description:
                  "AI agents for predictive maintenance, quality control, and supply chain optimization, helping manufacturers reduce downtime and improve efficiency.",
                image: "/placeholder.svg?key=cbqdf",
                tags: ["Predictive Maintenance", "Quality Control", "Supply Chain"],
              },
              {
                title: "Retail",
                description:
                  "AI solutions for inventory management, customer insights, and personalized recommendations, helping retailers increase sales and improve customer experience.",
                image: "/placeholder.svg?key=72cqp",
                tags: ["Inventory Management", "Customer Insights", "Recommendations"],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden border shadow-sm"
              >
                <div className="relative h-64 w-full">
                  <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Trusted by Enterprises</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our enterprise customers have to say about our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The AI agents have transformed our customer service operations, reducing response times by 60% and increasing customer satisfaction scores.",
                author: "Sarah Johnson",
                role: "CTO, Global Financial Services",
                image: "/placeholder.svg?key=qv2g3",
              },
              {
                quote:
                  "The deployment flexibility and security features made it easy to integrate the AI solutions into our existing infrastructure while meeting our strict compliance requirements.",
                author: "Michael Chen",
                role: "CIO, Healthcare Systems Inc.",
                image: "/placeholder.svg?key=rcbgb",
              },
              {
                quote:
                  "The custom AI agents developed for our manufacturing processes have helped us reduce downtime by 35% and improve quality control efficiency.",
                author: "Emily Rodriguez",
                role: "VP of Operations, Advanced Manufacturing",
                image: "/placeholder.svg?key=6uao6",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border shadow-sm"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="mb-2">Contact Us</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch with Our Enterprise Team</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form and our enterprise team will get back to you within 24 hours to discuss your specific
                needs and how we can help.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">enterprise@intelligentic.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-muted-foreground">123 AI Boulevard, San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Inquiry</CardTitle>
                  <CardDescription>
                    Tell us about your organization and what you're looking to achieve with AI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-medium">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your inquiry has been submitted. Our enterprise team will contact you within 24 hours.
                      </p>
                      <Button
                        className="mt-4"
                        onClick={() => {
                          setFormSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            phone: "",
                            employees: "",
                            message: "",
                            interests: {
                              agents: false,
                              chatbots: false,
                              customSolutions: false,
                              integration: false,
                              training: false,
                            },
                            contactPreference: "email",
                          })
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Company Inc."
                            required
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="employees">Company Size</Label>
                        <Input
                          id="employees"
                          name="employees"
                          placeholder="e.g., 100-500 employees"
                          value={formData.employees}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-3">
                        <Label>I'm interested in:</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="agents"
                              checked={formData.interests.agents}
                              onCheckedChange={() => handleCheckboxChange("agents")}
                            />
                            <Label htmlFor="agents" className="text-sm">
                              AI Agents
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="chatbots"
                              checked={formData.interests.chatbots}
                              onCheckedChange={() => handleCheckboxChange("chatbots")}
                            />
                            <Label htmlFor="chatbots" className="text-sm">
                              Chatbots
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="customSolutions"
                              checked={formData.interests.customSolutions}
                              onCheckedChange={() => handleCheckboxChange("customSolutions")}
                            />
                            <Label htmlFor="customSolutions" className="text-sm">
                              Custom Solutions
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="integration"
                              checked={formData.interests.integration}
                              onCheckedChange={() => handleCheckboxChange("integration")}
                            />
                            <Label htmlFor="integration" className="text-sm">
                              Enterprise Integration
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="training"
                              checked={formData.interests.training}
                              onCheckedChange={() => handleCheckboxChange("training")}
                            />
                            <Label htmlFor="training" className="text-sm">
                              Training & Support
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>Preferred contact method:</Label>
                        <RadioGroup
                          value={formData.contactPreference}
                          onValueChange={handleRadioChange}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email-contact" />
                            <Label htmlFor="email-contact">Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="phone-contact" />
                            <Label htmlFor="phone-contact">Phone</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your specific needs and challenges..."
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Inquiry
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Common questions about our enterprise solutions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What deployment options are available for enterprise customers?",
                answer:
                  "We offer cloud-based, on-premises, and hybrid deployment options for our enterprise customers. Our team will work with you to determine the best deployment model based on your security requirements, existing infrastructure, and organizational policies.",
              },
              {
                question: "How do you handle data security and privacy?",
                answer:
                  "We implement enterprise-grade security measures including encryption at rest and in transit, role-based access control, and regular security audits. We are compliant with major security standards including SOC 2, GDPR, and HIPAA. We also offer data residency options for organizations with specific geographic requirements.",
              },
              {
                question: "Can your AI solutions integrate with our existing systems?",
                answer:
                  "Yes, our enterprise solutions are designed to integrate seamlessly with your existing systems. We offer pre-built integrations with popular enterprise software and can develop custom integrations for proprietary systems. Our team will work with you to ensure smooth integration with your CRM, ERP, knowledge bases, and other business-critical systems.",
              },
              {
                question: "What kind of support do enterprise customers receive?",
                answer:
                  "Enterprise customers receive 24/7 priority support with guaranteed response times based on issue severity. You'll be assigned a dedicated account manager who will serve as your primary point of contact. We also offer implementation support, training sessions for your team, and regular check-ins to ensure you're getting the most value from our solutions.",
              },
              {
                question: "How are enterprise licenses structured?",
                answer:
                  "Our enterprise licensing is flexible and can be structured based on your specific needs. Options include per-user licensing, unlimited user licensing with usage caps, or custom arrangements. We offer volume discounts for larger deployments and can work with your procurement team to align with your budgeting cycles.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="border p-6 rounded-lg hover:border-primary/50 hover:bg-muted/20 transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Business with AI?</h2>
            <p className="text-lg text-muted-foreground">
              Contact our enterprise team today to discuss your specific needs and how our AI solutions can help you
              achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Contact Sales</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/agents">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
