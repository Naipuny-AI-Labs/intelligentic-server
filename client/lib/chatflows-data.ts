import type { Chatflow } from "./types"

export const chatflows: Chatflow[] = [
  {
    id: "cf001",
    slug: "customer-support-bot",
    name: "Customer Support Bot",
    description:
      "An intelligent chatbot designed to handle customer inquiries, troubleshoot common issues, and escalate complex problems to human agents when necessary. This solution integrates with your existing customer support infrastructure to provide 24/7 assistance.",
    shortDescription: "AI-powered customer support automation",
    category: "Customer Service",
    capabilities: [
      "24/7 automated customer support",
      "Multi-language support",
      "Ticket creation and management",
      "Knowledge base integration",
      "Sentiment analysis",
      "Seamless human handoff",
    ],
    useCases: [
      {
        title: "Technical Support",
        description: "Troubleshoot common technical issues and guide users through solutions",
        icon: "tool",
      },
      {
        title: "Order Management",
        description: "Check order status, process returns, and handle shipping inquiries",
        icon: "package",
      },
      {
        title: "FAQ Handling",
        description: "Answer frequently asked questions about products and services",
        icon: "help-circle",
      },
    ],
    technicalSpecs: {
      techStackSupport: "JavaScript, Python, Node.js, Ruby",
      workflowAutomation: "Zapier, Make.com, n8n",
      documentationFormat: "OpenAPI, Markdown, PDF",
      iterativeFeedback: "A/B testing, User feedback loops",
    },
    documentation: {
      gettingStarted: {
        title: "Getting Started Guide",
        description: "Learn how to set up and configure the Customer Support Bot",
        url: "/docs/customer-support-bot",
      },
      apiReference: {
        title: "API Documentation",
        description: "Comprehensive API reference for developers",
        url: "/docs/customer-support-bot/api",
      },
      tutorials: {
        title: "Integration Tutorials",
        description: "Step-by-step guides for common integration scenarios",
        url: "/docs/customer-support-bot/tutorials",
      },
    },
    examples: [
      {
        title: "Password Reset",
        description: "Helping a customer reset their password",
        userQuery: "I forgot my password and can't log in to my account.",
        agentResponse:
          "I can help you reset your password. Please provide the email address associated with your account, and I'll send you a password reset link.",
      },
      {
        title: "Order Status",
        description: "Checking on an order status",
        userQuery: "Where is my order #12345? It was supposed to arrive yesterday.",
        agentResponse:
          "I apologize for the delay. I've checked your order #12345 and see that it's currently in transit. According to the tracking information, it should be delivered by end of day today. Would you like me to send you the tracking link?",
      },
    ],
    testimonials: [
      {
        quote:
          "This chatbot has reduced our support ticket volume by 45% while maintaining high customer satisfaction.",
        author: "Sarah Johnson",
        role: "Customer Support Manager",
        company: "TechCorp",
        rating: 5,
      },
      {
        quote: "The seamless handoff between bot and human agents has been a game-changer for our team's efficiency.",
        author: "Michael Chen",
        role: "CTO",
        company: "RetailNow",
        rating: 4,
      },
    ],
    relatedFlows: ["cf002", "cf003"],
    pricing: {
      amount: 49,
      currency: "USD",
      interval: "month",
      features: [
        "Unlimited conversations",
        "5 human agent seats",
        "Knowledge base integration",
        "Analytics dashboard",
        "Email support",
      ],
    },
    metadata: {
      featured: true,
      popular: true,
      new: false,
      rating: 4.8,
      reviewCount: 124,
      createdAt: "2023-06-15T00:00:00Z",
      updatedAt: "2023-12-01T00:00:00Z",
    },
    media: {
      thumbnail: "/customer-support-workflow.png",
      banner: "/customer-support-workflow-banner.png",
      logo: "/customer-support-workflow.png",
      screenshots: [
        {
          url: "/customer-support-dashboard.png",
          alt: "Customer Support Dashboard",
          caption: "Agent dashboard showing active conversations and metrics",
        },
        {
          url: "/ticket-routing-interface.png",
          alt: "Ticket Routing Interface",
          caption: "Intelligent ticket routing based on query type and agent availability",
        },
      ],
      video: {
        url: "https://example.com/videos/customer-support-demo.mp4",
        thumbnail: "/customer-support-workflow-banner.png",
        duration: 180,
      },
    },
    integration: {
      apiEndpoint: "https://api.aimarketplace.com/v1/chatbots/customer-support",
      sdkSupport: ["JavaScript", "Python", "Ruby", "PHP"],
      webhooks: true,
      oauth: true,
    },
    requirements: {
      dataFormats: ["JSON", "CSV", "XML"],
      minDataSize: "10KB",
      maxDataSize: "50MB",
      supportedPlatforms: ["Web", "iOS", "Android", "Slack", "Microsoft Teams"],
    },
  },
  {
    id: "cf002",
    slug: "content-workflow",
    name: "Content Creation Workflow",
    description:
      "A comprehensive content creation workflow that helps teams brainstorm ideas, outline content, generate drafts, and polish final pieces. This solution streamlines the entire content production process from ideation to publication.",
    shortDescription: "End-to-end content creation assistant",
    category: "Content Creation",
    capabilities: [
      "Topic research and suggestion",
      "SEO keyword analysis",
      "Content outlining",
      "Draft generation",
      "Editing assistance",
      "Publication scheduling",
    ],
    useCases: [
      {
        title: "Blog Content",
        description: "Create engaging blog posts optimized for search engines",
        icon: "file-text",
      },
      {
        title: "Social Media",
        description: "Generate platform-specific social media content",
        icon: "share-2",
      },
      {
        title: "Email Campaigns",
        description: "Design effective email marketing campaigns",
        icon: "mail",
      },
    ],
    technicalSpecs: {
      techStackSupport: "JavaScript, Python, PHP, Ruby",
      workflowAutomation: "Zapier, IFTTT, n8n, Make.com",
      documentationFormat: "Markdown, HTML, PDF",
      iterativeFeedback: "Version control, Commenting system",
    },
    documentation: {
      gettingStarted: {
        title: "Getting Started Guide",
        description: "Learn how to set up your content workflow",
        url: "/docs/content-workflow",
      },
      apiReference: {
        title: "API Documentation",
        description: "Integrate with your existing content management system",
        url: "/docs/content-workflow/api",
      },
      tutorials: {
        title: "Workflow Tutorials",
        description: "Step-by-step guides for common content creation scenarios",
        url: "/docs/content-workflow/tutorials",
      },
    },
    examples: [
      {
        title: "Blog Post Creation",
        description: "Creating a comprehensive blog post on digital marketing",
        userQuery: "I need a blog post about digital marketing trends for 2023.",
        agentResponse:
          "I'll help you create a blog post on digital marketing trends for 2023. Let's start by researching the top 5 trends, then outline the post with an introduction, sections for each trend, and a conclusion with actionable takeaways. Would you like me to suggest some trending topics based on current search data?",
      },
      {
        title: "Social Media Campaign",
        description: "Generating a week's worth of social media content",
        userQuery: "Create a week of social posts for our new product launch.",
        agentResponse:
          "I'll create a 7-day social media campaign for your product launch. I'll include attention-grabbing headlines, compelling copy, hashtag suggestions, and posting time recommendations for each platform. Would you like to focus on specific platforms like Instagram, Twitter, or LinkedIn?",
      },
    ],
    testimonials: [
      {
        quote: "This workflow has cut our content production time in half while improving quality and SEO performance.",
        author: "Jessica Lee",
        role: "Content Marketing Director",
        company: "GrowthMedia",
        rating: 5,
      },
      {
        quote: "The SEO recommendations and content structuring have significantly improved our organic traffic.",
        author: "David Wilson",
        role: "Digital Marketing Manager",
        company: "TechBlog Inc",
        rating: 4,
      },
    ],
    relatedFlows: ["cf003", "cf004"],
    pricing: {
      amount: 39,
      currency: "USD",
      interval: "month",
      features: [
        "50 content pieces per month",
        "SEO keyword research",
        "Content calendar",
        "Performance analytics",
        "Email support",
      ],
    },
    metadata: {
      featured: true,
      popular: true,
      new: false,
      rating: 4.7,
      reviewCount: 98,
      createdAt: "2023-07-20T00:00:00Z",
      updatedAt: "2023-11-15T00:00:00Z",
    },
    media: {
      thumbnail: "/data-enrichment-pipeline.png",
      banner: "/data-enrichment-pipeline.png",
      logo: "/data-enrichment-pipeline.png",
      screenshots: [
        {
          url: "/data-enrichment-pipeline.png",
          alt: "Content Calendar",
          caption: "Interactive content calendar with status tracking",
        },
        {
          url: "/customer-support-dashboard.png",
          alt: "SEO Analysis Dashboard",
          caption: "Keyword analysis and content optimization recommendations",
        },
      ],
      video: {
        url: "https://example.com/videos/content-workflow-demo.mp4",
        thumbnail: "/data-enrichment-pipeline.png",
        duration: 240,
      },
    },
    integration: {
      apiEndpoint: "https://api.aimarketplace.com/v1/chatbots/content-workflow",
      sdkSupport: ["JavaScript", "Python", "PHP"],
      webhooks: true,
      oauth: true,
    },
    requirements: {
      dataFormats: ["Markdown", "HTML", "Plain Text", "Google Docs"],
      minDataSize: "1KB",
      maxDataSize: "10MB",
      supportedPlatforms: ["Web", "WordPress", "Shopify", "HubSpot", "Contentful"],
    },
  },
  {
    id: "cf003",
    slug: "data-analysis-assistant",
    name: "Data Analysis Assistant",
    description:
      "An intelligent assistant that helps analyze data, identify patterns, generate visualizations, and extract actionable insights. This solution supports various data formats and integrates with popular data analysis tools.",
    shortDescription: "AI-powered data analysis and visualization",
    category: "Data Analysis",
    capabilities: [
      "Data cleaning and preprocessing",
      "Statistical analysis",
      "Pattern recognition",
      "Visualization generation",
      "Insight extraction",
      "Report creation",
    ],
    useCases: [
      {
        title: "Business Intelligence",
        description: "Extract actionable insights from business data",
        icon: "bar-chart",
      },
      {
        title: "Market Research",
        description: "Analyze market trends and consumer behavior",
        icon: "trending-up",
      },
      {
        title: "Performance Monitoring",
        description: "Track KPIs and identify improvement opportunities",
        icon: "activity",
      },
    ],
    technicalSpecs: {
      techStackSupport: "Python, R, JavaScript, SQL",
      workflowAutomation: "Airflow, Prefect, Luigi",
      documentationFormat: "Jupyter Notebooks, PDF, HTML",
      iterativeFeedback: "Version control, Commenting system",
    },
    documentation: {
      gettingStarted: {
        title: "Getting Started Guide",
        description: "Learn how to connect your data sources and start analyzing",
        url: "/docs/data-analysis-assistant",
      },
      apiReference: {
        title: "API Documentation",
        description: "Integrate with your existing data infrastructure",
        url: "/docs/data-analysis-assistant/api",
      },
      tutorials: {
        title: "Analysis Tutorials",
        description: "Step-by-step guides for common data analysis scenarios",
        url: "/docs/data-analysis-assistant/tutorials",
      },
    },
    examples: [
      {
        title: "Sales Performance Analysis",
        description: "Analyzing quarterly sales data to identify trends",
        userQuery: "Analyze our Q3 sales data and compare it to previous quarters.",
        agentResponse:
          "I'll analyze your Q3 sales data and compare it with previous quarters. The analysis shows a 12% increase in overall sales compared to Q2, with particularly strong growth in the West region (23% increase). However, the product category 'Electronics' shows a 5% decline. Would you like me to generate visualizations for these trends and recommend potential actions?",
      },
      {
        title: "Customer Segmentation",
        description: "Segmenting customers based on purchase behavior",
        userQuery: "Help me segment our customers based on purchase frequency and average order value.",
        agentResponse:
          "Based on your customer data, I've identified 4 distinct segments: 1) High-value regulars (15% of customers), 2) Occasional big spenders (22%), 3) Frequent small purchases (38%), and 4) One-time shoppers (25%). I can provide detailed characteristics of each segment and recommend targeted marketing strategies for each group.",
      },
    ],
    testimonials: [
      {
        quote:
          "This assistant has transformed how we analyze data, making insights accessible to non-technical team members.",
        author: "Robert Chang",
        role: "Data Science Director",
        company: "AnalyticsPro",
        rating: 5,
      },
      {
        quote: "The visualization capabilities and automated reporting have saved us countless hours of manual work.",
        author: "Amanda Torres",
        role: "Business Intelligence Manager",
        company: "RetailInsight",
        rating: 5,
      },
    ],
    relatedFlows: ["cf002", "cf004"],
    pricing: {
      amount: 79,
      currency: "USD",
      interval: "month",
      features: [
        "Unlimited data analysis",
        "10GB data storage",
        "Custom visualization templates",
        "Scheduled reports",
        "Priority support",
      ],
    },
    metadata: {
      featured: true,
      popular: false,
      new: true,
      rating: 4.9,
      reviewCount: 67,
      createdAt: "2023-09-05T00:00:00Z",
      updatedAt: "2023-12-10T00:00:00Z",
    },
    media: {
      thumbnail: "/ticket-routing-interface.png",
      banner: "/ticket-routing-interface.png",
      logo: "/ticket-routing-interface.png",
      screenshots: [
        {
          url: "/ticket-routing-interface.png",
          alt: "Data Analysis Dashboard",
          caption: "Interactive dashboard with customizable visualizations",
        },
        {
          url: "/customer-support-dashboard.png",
          alt: "Report Generator",
          caption: "Automated report generation with insights and recommendations",
        },
      ],
      video: {
        url: "https://example.com/videos/data-analysis-demo.mp4",
        thumbnail: "/ticket-routing-interface.png",
        duration: 300,
      },
    },
    integration: {
      apiEndpoint: "https://api.aimarketplace.com/v1/chatbots/data-analysis",
      sdkSupport: ["Python", "R", "JavaScript"],
      webhooks: true,
      oauth: true,
    },
    requirements: {
      dataFormats: ["CSV", "JSON", "Excel", "SQL", "Parquet"],
      minDataSize: "1KB",
      maxDataSize: "1GB",
      supportedPlatforms: ["Web", "Jupyter", "Tableau", "Power BI", "Google Data Studio"],
    },
  },
  {
    id: "cf004",
    slug: "hr-assistant",
    name: "HR Assistant Bot",
    description:
      "A comprehensive HR assistant that helps with employee onboarding, benefits administration, policy questions, time-off requests, and other common HR tasks. This solution integrates with your existing HR systems to provide 24/7 support to employees.",
    shortDescription: "AI-powered HR support and automation",
    category: "Human Resources",
    capabilities: [
      "Employee onboarding assistance",
      "Benefits explanation and enrollment",
      "Policy and procedure guidance",
      "Time-off request processing",
      "Common HR document generation",
      "Employee FAQ handling",
    ],
    useCases: [
      {
        title: "New Hire Onboarding",
        description: "Guide new employees through the onboarding process",
        icon: "user-plus",
      },
      {
        title: "Benefits Administration",
        description: "Help employees understand and enroll in benefits",
        icon: "heart",
      },
      {
        title: "Policy Guidance",
        description: "Answer questions about company policies and procedures",
        icon: "book",
      },
    ],
    technicalSpecs: {
      techStackSupport: "JavaScript, Python, Java, .NET",
      workflowAutomation: "Zapier, Power Automate, n8n",
      documentationFormat: "PDF, HTML, Markdown",
      iterativeFeedback: "User feedback collection, A/B testing",
    },
    documentation: {
      gettingStarted: {
        title: "Getting Started Guide",
        description: "Learn how to set up and configure the HR Assistant",
        url: "/docs/hr-assistant",
      },
      apiReference: {
        title: "API Documentation",
        description: "Integrate with your existing HR systems",
        url: "/docs/hr-assistant/api",
      },
      tutorials: {
        title: "Integration Tutorials",
        description: "Step-by-step guides for common HR system integrations",
        url: "/docs/hr-assistant/tutorials",
      },
    },
    examples: [
      {
        title: "Benefits Enrollment",
        description: "Helping an employee enroll in benefits",
        userQuery: "I need to enroll in health insurance. What are my options?",
        agentResponse:
          "I'd be happy to help you with health insurance enrollment. Our company offers three plans: Basic, Standard, and Premium. Each has different coverage levels and costs. Based on your employment status, you're eligible for all three. Would you like me to explain the details of each plan, or would you prefer to see a comparison chart?",
      },
      {
        title: "Time-Off Request",
        description: "Processing a vacation request",
        userQuery: "I want to take vacation from July 15-22. How do I request this?",
        agentResponse:
          "I can help you submit a vacation request for July 15-22 (6 business days). You currently have 18 vacation days available. Would you like me to submit this request to your manager, Sarah Johnson, for approval? I'll need a brief reason for the time off and whether you'll be completely unavailable or checking messages occasionally.",
      },
    ],
    testimonials: [
      {
        quote:
          "This HR assistant has reduced our HR team's routine inquiries by 70%, allowing them to focus on strategic initiatives.",
        author: "Jennifer Martinez",
        role: "HR Director",
        company: "GlobalCorp",
        rating: 5,
      },
      {
        quote:
          "The onboarding assistance has significantly improved our new hire experience and reduced time-to-productivity.",
        author: "Thomas Wright",
        role: "Talent Acquisition Manager",
        company: "TechInnovate",
        rating: 4,
      },
    ],
    relatedFlows: ["cf001", "cf005"],
    pricing: {
      amount: 59,
      currency: "USD",
      interval: "month",
      features: [
        "Unlimited employee inquiries",
        "HR system integration",
        "Document generation",
        "Analytics dashboard",
        "Email support",
      ],
    },
    metadata: {
      featured: false,
      popular: true,
      new: false,
      rating: 4.6,
      reviewCount: 82,
      createdAt: "2023-05-10T00:00:00Z",
      updatedAt: "2023-11-20T00:00:00Z",
    },
    media: {
      thumbnail: "/customer-support-workflow.png",
      banner: "/customer-support-workflow-banner.png",
      logo: "/customer-support-workflow.png",
      screenshots: [
        {
          url: "/customer-support-dashboard.png",
          alt: "HR Dashboard",
          caption: "HR administrator dashboard showing employee inquiries and status",
        },
        {
          url: "/ticket-routing-interface.png",
          alt: "Onboarding Workflow",
          caption: "Interactive onboarding workflow for new employees",
        },
      ],
      video: {
        url: "https://example.com/videos/hr-assistant-demo.mp4",
        thumbnail: "/customer-support-workflow-banner.png",
        duration: 210,
      },
    },
    integration: {
      apiEndpoint: "https://api.aimarketplace.com/v1/chatbots/hr-assistant",
      sdkSupport: ["JavaScript", "Python", "Java", ".NET"],
      webhooks: true,
      oauth: true,
    },
    requirements: {
      dataFormats: ["JSON", "CSV", "XML", "HRIS exports"],
      minDataSize: "5KB",
      maxDataSize: "100MB",
      supportedPlatforms: ["Web", "Mobile", "Slack", "Microsoft Teams", "Email"],
    },
  },
  {
    id: "cf005",
    slug: "legal-document-assistant",
    name: "Legal Document Assistant",
    description:
      "An AI-powered assistant that helps draft, review, and analyze legal documents. This solution assists with contract creation, legal research, compliance checking, and document comparison to streamline legal workflows.",
    shortDescription: "AI-assisted legal document creation and analysis",
    category: "Legal",
    capabilities: [
      "Contract template generation",
      "Legal document review",
      "Clause suggestion and analysis",
      "Compliance checking",
      "Document comparison",
      "Legal research assistance",
    ],
    useCases: [
      {
        title: "Contract Creation",
        description: "Generate and customize legal contracts and agreements",
        icon: "file-text",
      },
      {
        title: "Document Review",
        description: "Review legal documents for issues and inconsistencies",
        icon: "check-square",
      },
      {
        title: "Compliance Analysis",
        description: "Check documents against regulatory requirements",
        icon: "shield",
      },
    ],
    technicalSpecs: {
      techStackSupport: "JavaScript, Python, Java",
      workflowAutomation: "Zapier, Power Automate, DocuSign",
      documentationFormat: "PDF, DOCX, HTML, Markdown",
      iterativeFeedback: "Version control, Commenting system",
    },
    documentation: {
      gettingStarted: {
        title: "Getting Started Guide",
        description: "Learn how to set up and use the Legal Document Assistant",
        url: "/docs/legal-document-assistant",
      },
      apiReference: {
        title: "API Documentation",
        description: "Integrate with your existing document management systems",
        url: "/docs/legal-document-assistant/api",
      },
      tutorials: {
        title: "Document Tutorials",
        description: "Step-by-step guides for common legal document scenarios",
        url: "/docs/legal-document-assistant/tutorials",
      },
    },
    examples: [
      {
        title: "NDA Creation",
        description: "Creating a customized non-disclosure agreement",
        userQuery: "I need an NDA for a new vendor relationship in California.",
        agentResponse:
          "I'll help you create an NDA for your California vendor relationship. I've generated a California-compliant NDA template with standard confidentiality provisions. Would you like to customize specific aspects such as the confidentiality period, specific protected information categories, or add non-solicitation clauses?",
      },
      {
        title: "Contract Review",
        description: "Reviewing a service agreement for potential issues",
        userQuery: "Review this service agreement and highlight any concerning clauses.",
        agentResponse:
          "I've reviewed the service agreement and identified several potential issues: 1) The limitation of liability clause on page 4 is unusually broad and may be unenforceable in some jurisdictions, 2) The termination notice period is inconsistent between sections 8.2 and 12.1, 3) The governing law provision is missing. Would you like me to suggest alternative language for these clauses?",
      },
    ],
    testimonials: [
      {
        quote: "This assistant has reduced our contract review time by 60% while improving accuracy and consistency.",
        author: "Daniel Rodriguez",
        role: "General Counsel",
        company: "LegalTech Solutions",
        rating: 5,
      },
      {
        quote:
          "The compliance checking features have been invaluable for ensuring our documents meet regulatory requirements across different jurisdictions.",
        author: "Sophia Kim",
        role: "Legal Operations Manager",
        company: "Global Enterprises",
        rating: 4,
      },
    ],
    relatedFlows: ["cf002", "cf004"],
    pricing: {
      amount: 89,
      currency: "USD",
      interval: "month",
      features: [
        "50 document generations/month",
        "Unlimited document reviews",
        "Template library access",
        "Compliance checking for 3 jurisdictions",
        "Priority support",
      ],
    },
    metadata: {
      featured: false,
      popular: false,
      new: true,
      rating: 4.7,
      reviewCount: 45,
      createdAt: "2023-10-15T00:00:00Z",
      updatedAt: "2023-12-05T00:00:00Z",
    },
    media: {
      thumbnail: "/data-enrichment-pipeline.png",
      banner: "/data-enrichment-pipeline.png",
      logo: "/data-enrichment-pipeline.png",
      screenshots: [
        {
          url: "/data-enrichment-pipeline.png",
          alt: "Document Editor",
          caption: "AI-assisted legal document editor with clause suggestions",
        },
        {
          url: "/customer-support-dashboard.png",
          alt: "Compliance Dashboard",
          caption: "Compliance checking dashboard showing potential issues",
        },
      ],
      video: {
        url: "https://example.com/videos/legal-assistant-demo.mp4",
        thumbnail: "/data-enrichment-pipeline.png",
        duration: 270,
      },
    },
    integration: {
      apiEndpoint: "https://api.aimarketplace.com/v1/chatbots/legal-assistant",
      sdkSupport: ["JavaScript", "Python", "Java"],
      webhooks: true,
      oauth: true,
    },
    requirements: {
      dataFormats: ["DOCX", "PDF", "TXT", "HTML"],
      minDataSize: "1KB",
      maxDataSize: "50MB",
      supportedPlatforms: ["Web", "Microsoft Word", "Google Docs", "Adobe Acrobat"],
    },
  },
]
