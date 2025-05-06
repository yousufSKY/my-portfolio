"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/50 relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 relative">
        <SectionHeading 
          title="Featured Projects"
          subtitle="Explore some of my recent projects that showcase my passion for building innovative solutions."
          center
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className={cn(
                "group relative rounded-xl overflow-hidden bg-card border border-border/50",
                "transition-all duration-500 ease-out",
                "hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10",
                "flex flex-col"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/90"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
              
              <div className="flex-1 p-6 relative z-10">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ 
                    y: hoveredIndex === index ? 0 : 10,
                    opacity: hoveredIndex === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2 mb-3"
                >
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </motion.div>

                <motion.h3 
                  className="text-xl font-semibold mb-2 text-foreground/90 group-hover:text-primary transition-colors duration-300"
                  initial={{ y: 5 }}
                  animate={{ y: hoveredIndex === index ? 0 : 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-6"
                  initial={{ y: 5, opacity: 0.8 }}
                  animate={{ 
                    y: hoveredIndex === index ? 0 : 5,
                    opacity: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex items-center gap-3 mt-auto"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ 
                    y: hoveredIndex === index ? 0 : 10,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.github && (
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        variant="outline" 
                        className="gap-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        variant="default" 
                        className="w-full gap-2 bg-primary hover:bg-primary/90"
                      >
                        Live Demo
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}