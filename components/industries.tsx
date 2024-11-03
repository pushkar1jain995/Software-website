"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Stethoscope, Factory, ShoppingBag, Plane, Lightbulb } from "lucide-react";

const industries = [
  {
    title: "Banking & Finance",
    description: "Digital transformation solutions for financial institutions",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    description: "Innovative healthcare technology solutions",
    icon: Stethoscope,
  },
  {
    title: "Manufacturing",
    description: "Smart manufacturing and Industry 4.0 solutions",
    icon: Factory,
  },
  {
    title: "Retail",
    description: "Digital commerce and retail technology",
    icon: ShoppingBag,
  },
  {
    title: "Travel & Hospitality",
    description: "Digital solutions for travel and hospitality",
    icon: Plane,
  },
  {
    title: "Energy & Utilities",
    description: "Smart solutions for energy management",
    icon: Lightbulb,
  },
];

export function Industries() {
  return (
    <section className="container space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Industries We Serve</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Specialized solutions across diverse industry sectors
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group h-full">
              <CardHeader>
                <div className="mb-2">
                  <industry.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
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