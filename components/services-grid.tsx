"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cloud, Code, Database, Globe, Lock, Smartphone, Workflow } from "lucide-react";

const services = [
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics",
    icon: Brain,
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions for your business",
    icon: Code,
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    icon: Database,
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation services",
    icon: Globe,
  },
  {
    title: "Cybersecurity",
    description: "Advanced security solutions and consulting",
    icon: Lock,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps",
    icon: Smartphone,
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation",
    icon: Workflow,
  },
];

export function ServicesGrid() {
  return (
    <section className="container space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive technology solutions for modern enterprises
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden">
              <CardHeader>
                <div className="mb-2">
                  <service.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}