"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js and Tailwind CSS",
    excerpt: "Learn how to set up a modern web development environment using Next.js and Tailwind CSS.",
    date: "May 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning for Beginners",
    excerpt: "A beginner-friendly guide to understanding the basics of machine learning algorithms.",
    date: "April 10, 2024",
    readTime: "8 min read",
    category: "AI & ML",
  },
  {
    id: 3,
    title: "Securing Your Web Applications: Best Practices",
    excerpt: "Learn essential techniques for protecting your web applications from common security threats.",
    date: "March 22, 2024",
    readTime: "6 min read",
    category: "Cybersecurity",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Blog & Articles"
          subtitle="My thoughts and insights on technology, development, and more."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{post.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-grow">{post.excerpt}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">{post.readTime}</span>
                  <Button asChild variant="ghost" size="sm" className="text-primary font-medium text-sm">
                    <Link href="#">
                      Read more <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="#">
              View All Articles
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}