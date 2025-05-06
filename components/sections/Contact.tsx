"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Feel free to reach out through email or social links. I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => window.location.href = 'mailto:skyousuf22@outlook.com'}
              >
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">Email</h4>
                  <Link 
                    href="mailto:skyousuf22@outlook.com" 
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    skyousuf22@outlook.com
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">GitHub</h4>
                  <Link 
                    href="https://github.com/yousufSKY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/yousufSKY
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">LinkedIn</h4>
                  <Link 
                    href="https://www.linkedin.com/in/syed-yousufuddin-a64265276/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/syed-yousufuddin
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl border border-border p-4 sm:p-6 shadow-sm"
          >
            <Button 
              size="lg" 
              className="w-full"
              onClick={() => window.location.href = 'mailto:skyousuf22@outlook.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
            </Button>
            <p className="mt-4 text-sm text-center text-muted-foreground">
              Click the button above to open your email client and send me a message directly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}