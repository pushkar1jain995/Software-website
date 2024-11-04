export const validServices = [
  "digital-transformation",
  "cloud",
  "ai-ml",
  "custom-development",
  "data-analytics",
  "cybersecurity",
  "mobile-development",
  "process-automation",
] as const

export const serviceLinks = [
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Transform your business with cutting-edge digital solutions.",
  },
  {
    title: "Cloud",
    href: "/services/cloud",
    description: "Migrate and manage your applications in the cloud for scalability and efficiency.",
  },
  {
    title: "AI/ML",
    href: "/services/ai-ml",
    description: "Unlock the power of AI and ML to drive business innovation and automation.",
  },
  {
    title: "Custom Development",
    href: "/services/custom-development",
    description: "Build custom software solutions tailored to your business needs.",
  },
  {
    title: "Data Analytics",
    href: "/services/data-analytics",
    description: "Gain insights and make data-driven decisions with our data analytics services.",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Protect your business from cyber threats with our comprehensive cybersecurity services.",
  },
  {
    title: "Mobile Development",
    href: "/services/mobile-development",
    description: "Develop mobile applications that engage and retain your customers.",
  },
  {
    title: "Process Automation",
    href: "/services/process-automation",
    description: "Automate business processes to increase efficiency and reduce costs.",
  },
] as const

export type ServiceType = typeof serviceLinks[number]["href"]
