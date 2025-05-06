"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}