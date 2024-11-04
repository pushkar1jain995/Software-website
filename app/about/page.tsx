// app/about/page.tsx
'use client'

import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })
import { ArrowRight, Code, Globe, BarChart, Users, Award, Calendar, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const stats = [
  { label: "Years of Excellence", value: "10+" },
  { label: "Global Clients", value: "500+" },
  { label: "Team Members", value: "100+" },
  { label: "Projects Delivered", value: "1000+" },
]

const testimonials = [
  {
    quote: "TechForge has been instrumental in our digital transformation journey.",
    author: "Sarah Johnson",
    role: "CTO, Global Tech Solutions"
  },
  {
    quote: "Their expertise in custom development is unmatched in the industry.",
    author: "Michael Chen",
    role: "Director of Innovation, Future Corp"
  },
  {
    quote: "A true partner in our success story.",
    author: "Emma Williams",
    role: "CEO, Digital Ventures"
  }
]

const timeline = [
  { year: "2014", title: "Company Founded", description: "Started with a vision to transform digital futures" },
  { year: "2016", title: "Global Expansion", description: "Opened offices in multiple countries" },
  { year: "2018", title: "Major Milestone", description: "Reached 500+ enterprise clients" },
  { year: "2020", title: "Innovation Award", description: "Recognized for technological excellence" },
  { year: "2023", title: "Future Forward", description: "Launching next-gen solutions" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MotionDiv 
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 z-0" />
        <div className="container relative z-10 space-y-8 text-center">
          <h1 className="text-6xl font-bold tracking-tighter">
            Transforming Digital Futures
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade software solutions that drive innovation and accelerate digital transformation
          </p>
        </div>
      </MotionDiv>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-500">{stat.value}</div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Our Mission & Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We're driven by a passion for innovation and a commitment to delivering exceptional value to our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <Code className="size-12 text-blue-400" />
                  <CardTitle>Innovation First</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Pushing the boundaries of what's possible in technology
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <Globe className="size-12 text-blue-400" />
                  <CardTitle>Global Impact</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Creating solutions that scale across borders
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <Users className="size-12 text-blue-400" />
                  <CardTitle>Client Success</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Dedicated to achieving exceptional results for our clients
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-400">Milestones that define our growth and success</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <MotionDiv
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-end md:pr-32' : 'flex-row-reverse md:pl-32'
                    }`}
                  >
                    <Card className="w-full md:w-1/2 bg-card border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                          <Calendar className="size-5 text-blue-400" />
                          {item.year}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-gray-400">What our clients say about working with us</p>
            </div>

            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardDescription className="text-foreground text-lg italic">
                          "{testimonial.quote}"
                        </CardDescription>
                        <CardTitle className="text-sm font-normal mt-4">
                          {testimonial.author}
                          <span className="block text-gray-400 text-xs mt-1">{testimonial.role}</span>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Transform Your Digital Future?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can help accelerate your digital transformation journey.
            </p>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>
    </div>
  )
}