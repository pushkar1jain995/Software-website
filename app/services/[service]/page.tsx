// app/services/[service]/page.tsx
import { notFound } from "next/navigation"
import { validServices } from "@/config/site"

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

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">{serviceTitle}</h1>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-12">
        <p className="text-xl text-gray-700 mb-6">{content.description}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>

      {/* Benefits and Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Benefits Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <ul className="space-y-3">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <ul className="space-y-3">
            {content.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how we can help transform your business with {serviceTitle}.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
          Schedule a Consultation
        </button>
      </div>
    </div>
  )
} 