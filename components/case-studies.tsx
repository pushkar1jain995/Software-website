"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Global Financial Platform",
    description: "Modernizing legacy systems for a Fortune 500 financial institution",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tags: ["FinTech", "Cloud Migration", "Digital Transformation"],
  },
  {
    title: "Healthcare Analytics",
    description: "AI-powered analytics platform for healthcare providers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
    tags: ["Healthcare", "AI/ML", "Analytics"],
  },
  {
    title: "Smart Manufacturing",
    description: "IoT solution for predictive maintenance in manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    tags: ["IoT", "Industry 4.0", "Automation"],
  },
];

export function CaseStudies() {
  return (
    <section className="container space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Case Studies</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Success stories from our enterprise clients
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}