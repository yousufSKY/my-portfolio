"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <Link href="/" className="text-lg sm:text-xl font-bold">
              YSF
            </Link>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xs">
              Building innovative digital solutions with a focus on user experience and performance.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
            <div className="flex gap-4">
              <Link 
                href="https://github.com/yousufSKY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/syed-yousufuddin-a64265276/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="mailto:skyousuf22@outlook.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright & Credits */}
        <div className="mt-8 pt-6 sm:pt-8 border-t border-border/40 text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row sm:justify-between gap-4">
          <p>© YSF {currentYear} . All rights reserved.</p>
          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}