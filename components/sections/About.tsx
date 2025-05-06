"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me"
          subtitle="A passionate developer with a curiosity for learning new technologies and solving complex problems."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted relative group">
              <img 
                src="https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profile image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground">
                Hello! I'm a third-year B.Tech Computer Science student at VTU with a passion for creating innovative software solutions. I specialize in web development, AI/ML, and cybersecurity.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                My journey in tech began with a fascination for how digital tools can solve real-world problems. Today, I'm focused on building applications that are not only functional but also deliver exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or exploring the latest developments in technology.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">My Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/50 transition-colors"
                  >
                    <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <span className="text-sm sm:text-base font-medium truncate">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}