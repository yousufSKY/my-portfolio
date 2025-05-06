"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Blog & Articles"
          subtitle="Sharing insights and experiences in technology"
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-card rounded-xl border border-border p-8 sm:p-12">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Exciting Content Coming Soon!
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm currently working on creating high-quality articles about web development, AI/ML, and cybersecurity. 
              Stay tuned for insightful content that will help you grow in your tech journey.
            </p>
            <Button variant="outline" className="w-full sm:w-auto">
              Watch This Space
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}