"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Experience"
          subtitle="A collection of my professional experience and academic achievements."
          center
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-3 sm:left-5 h-full w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ml-8 sm:ml-10 relative mb-8 sm:mb-12"
              >
                {/* Timeline circle */}
                <div className="absolute -left-[38px] sm:-left-[46px] bg-card rounded-full border-4 border-muted p-1">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold">{experience.role}</h3>
                    <span className="text-xs sm:text-sm text-primary font-medium px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 whitespace-nowrap">
                      {experience.duration}
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground font-medium mb-4">
                    {experience.company}
                  </p>
                  
                  <ul className="space-y-2 text-sm sm:text-base">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/20 h-1.5 w-1.5 mt-2"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}