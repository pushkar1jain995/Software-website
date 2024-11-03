"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Globe2, Award } from "lucide-react";

const stats = [
  {
    title: "Global Clients",
    value: "500+",
    description: "Trusted by leading enterprises",
    icon: Building2,
  },
  {
    title: "Team Members",
    value: "1000+",
    description: "Expert developers and engineers",
    icon: Users,
  },
  {
    title: "Countries",
    value: "30+",
    description: "Global presence and delivery",
    icon: Globe2,
  },
  {
    title: "Awards",
    value: "50+",
    description: "Industry recognition",
    icon: Award,
  },
];

export function Stats() {
  return (
    <section className="container">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <stat.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-3xl font-bold">{stat.value}</h3>
                <p className="font-semibold">{stat.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}