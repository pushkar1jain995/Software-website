"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Shield, Zap } from "lucide-react";

const solutions = [
  {
    title: "Enterprise Solutions",
    description: "Scalable and secure enterprise-grade applications",
    icon: Layers,
    features: ["Microservices Architecture", "Enterprise Integration", "Legacy Modernization"],
  },
  {
    title: "Security Solutions",
    description: "Advanced cybersecurity and compliance solutions",
    icon: Shield,
    features: ["Threat Detection", "Compliance Management", "Security Audits"],
  },
  {
    title: "Performance Solutions",
    description: "High-performance computing and optimization",
    icon: Zap,
    features: ["Load Balancing", "Caching Solutions", "Performance Monitoring"],
  },
];

export function Solutions() {
  return (
    <section className="container space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Enterprise Solutions</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive solutions tailored for enterprise needs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <solution.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}