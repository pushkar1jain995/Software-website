'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ChevronRight, Filter, Search } from "lucide-react"
import Image from "next/image"

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Global Financial Platform",
    category: "FinTech",
    description: "Modernizing legacy systems for a FinTech leader",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    metrics: {
      improvement: "200%",
      timeReduction: "65%",
      costSaving: "$2M",
    },
    tags: ["Financial Services", "Cloud Migration", "Digital Transformation"],
  },
  {
    id: 2,
    title: "Healthcare Analytics",
    category: "Healthcare",
    description: "AI-powered analytics platform for healthcare providers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
    metrics: {
      improvement: "150%",
      timeReduction: "45%",
      costSaving: "$1.5M",
    },
    tags: ["Healthcare", "AI/ML", "Analytics"],
  },
  {
    id: 3,
    title: "Smart Manufacturing",
    category: "Manufacturing",
    description: "IoT solution for predictive maintenance in manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    metrics: {
      improvement: "180%",
      timeReduction: "55%",
      costSaving: "$3M",
    },
    tags: ["Manufacturing", "IoT", "Automation"],
  },
]

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredStudies = caseStudies.filter(
    (study) =>
      (selectedCategory === "all" || study.category === selectedCategory) &&
      (filter === "" ||
        study.title.toLowerCase().includes(filter.toLowerCase()) ||
        study.description.toLowerCase().includes(filter.toLowerCase()))
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/40 dark:bg-muted/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Our Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Discover how we've helped enterprises transform their digital landscape
              and achieve remarkable results.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search case studies..."
                  className="pl-8"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Tabs
              defaultValue="all"
              className="w-full md:w-auto"
              onValueChange={setSelectedCategory}
            >
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="FinTech">FinTech</TabsTrigger>
                <TabsTrigger value="Healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="Manufacturing">Manufacturing</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredStudies.map((study) => (
              <motion.div key={study.id} variants={itemVariants}>
                <Card className="group relative overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{study.category}</Badge>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">{study.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {study.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="group/button" variant="ghost">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/40 py-16 dark:bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Button size="lg" className="mt-8">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}