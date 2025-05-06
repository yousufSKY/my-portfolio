"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-16 sm:pt-20 min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-tr from-secondary/20 to-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Hi, I'm <span className="text-primary">Syed Khaja Yousufuddin</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground"
          >
            Computer Science Student | Web & AI Developer
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl font-medium h-[3rem]"
          >
            <TypeAnimation
              sequence={[
                "I build dynamic, efficient digital experiences.",
                1000,
                "I create beautiful web applications.",
                1000,
                "I develop AI-powered solutions.",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center hidden sm:block"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <ArrowDown className="mx-auto h-5 w-5 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}