"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Globe2, Database } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-36 pb-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Transform Your
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {" "}
              Digital Future
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Enterprise-grade software solutions that drive innovation and accelerate digital transformation
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/case-studies" legacyBehavior passHref>
              <a>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  View Case Studies
                </Button>
              </a>
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm"
            >
              <feature.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  );
}

const features = [
  {
    title: "Custom Development",
    description: "Tailored software solutions designed to meet your unique business requirements",
    icon: Code2,
  },
  {
    title: "Global Reach",
    description: "Enterprise solutions deployed across multiple regions and industries",
    icon: Globe2,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics",
    icon: Database,
  },
];