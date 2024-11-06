'use client'

// app/services/[service]/page.tsx
import { notFound } from "next/navigation"
import { validServices } from "@/config/site"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Type for our service data
type ServicePageProps = {
  params: {
    service: string
  }
}

// You might want to move this to your config/site.ts
const serviceContent = {
  "digital-transformation": {
    description: "Transform your business with modern digital solutions and strategies.",
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Data-driven decision making",
      "Competitive advantage"
    ],
    features: [
      "Digital Strategy Consulting",
      "Process Digitization",
      "Legacy System Modernization",
      "Digital Customer Experience"
    ]
  },
  "cloud": {
    description: "Migrate and manage your applications in the cloud for scalability and efficiency.",
    benefits: [
      "Scalability and flexibility",
      "Cost savings",
      "Enhanced security",
      "Faster deployment"
    ],
    features: [
      "Cloud Strategy Consulting",
      "Cloud Migration",
      "Cloud Native Application Development",
      "Cloud Security and Compliance"
    ]
  },
  "ai-ml": {
    description: "Unlock the power of AI and ML to drive business innovation and automation.",
    benefits: [
      "Improved decision making",
      "Enhanced customer experience",
      "Increased efficiency",
      "Competitive advantage"
    ],
    features: [
      "AI/ML Strategy Consulting",
      "Data Science and Engineering",
      "AI/ML Model Development",
      "AI/ML Integration and Deployment"
    ]
  },
  "custom-development": {
    description: "Build custom software solutions tailored to your business needs.",
    benefits: [
      "Tailored solutions",
      "Increased efficiency",
      "Competitive advantage",
      "Improved customer satisfaction"
    ],
    features: [
      "Custom Software Development",
      "Web and Mobile Application Development",
      "Enterprise Software Integration",
      "DevOps and Continuous Integration"
    ]
  },
  "data-analytics": {
    description: "Gain insights and make data-driven decisions with our data analytics services.",
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Enhanced customer insights",
      "Competitive advantage"
    ],
    features: [
      "Data Analytics Consulting",
      "Data Visualization",
      "Predictive Analytics",
      "Big Data Engineering"
    ]
  },
  "cybersecurity": {
    description: "Protect your business from cyber threats with our comprehensive cybersecurity services.",
    benefits: [
      "Enhanced security",
      "Compliance",
      "Risk reduction",
      "Improved incident response"
    ],
    features: [
      "Cybersecurity Consulting",
      "Vulnerability Assessment and Penetration Testing",
      "Incident Response and Management",
      "Security Awareness Training"
    ]
  },
  "mobile-development": {
    description: "Develop mobile applications that engage and retain your customers.",
    benefits: [
      "Enhanced customer experience",
      "Increased engagement",
      "Competitive advantage",
      "Improved brand visibility"
    ],
    features: [
      "Mobile App Development",
      "Cross-Platform Development",
      "Mobile App Design",
      "Mobile App Testing and QA"
    ]
  },
  "process-automation": {
    description: "Automate business processes to increase efficiency and reduce costs.",
    benefits: [
      "Increased efficiency",
      "Cost savings",
      "Improved accuracy",
      "Enhanced customer satisfaction"
    ],
    features: [
      "Process Automation Consulting",
      "Workflow Automation",
      "Robotic Process Automation",
      "Business Process Re-engineering"
    ]
  }
} as const

// Add this function at the top level of the file, before the ServicePage component
export async function generateStaticParams() {
  return validServices.map((service) => ({
    service: service,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  if (!validServices.includes(params.service as typeof validServices[number])) {
    notFound()
  }

  // Convert URL format to display format
  const serviceTitle = params.service
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const content = serviceContent[params.service as keyof typeof serviceContent]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="container max-w-6xl py-12 space-y-12"
    >
      {/* Hero Section */}
      <motion.div variants={fadeIn} className="space-y-6">
        <Badge variant="secondary" className="px-4 py-1 text-sm">
          Our Services
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight">{serviceTitle}</h1>
        <Card className="border-none bg-gradient-to-r from-blue-950/50 to-indigo-950/50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <CardContent className="p-8 space-y-6">
            <p className="text-xl leading-relaxed">{content.description}</p>
            <Button size="lg">
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Benefits and Features Grid */}
      <motion.div 
        variants={fadeIn}
        className="grid md:grid-cols-2 gap-8"
      >
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Key Benefits</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Our Approach</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeIn}>
        <Card className="border-none bg-muted">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with {serviceTitle}.
            </p>
            <Button size="lg" className="px-8">
              Schedule a Consultation
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
} 