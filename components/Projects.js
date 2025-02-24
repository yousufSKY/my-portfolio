'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Yukti 2025 Fest Website",
      description: "Official website for Yukti 2025 - A Regional Level Techno Cultural Management Fest. Built with modern web technologies and features dynamic event registration, gallery, and team information.",
      link: "https://yukti.vtucpgsklb.in/",
    },
    {
      title: "Coming Soon!",
      description: "A penetration testing report tool for security audits.",
      link: "#",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-purple-900 to-black text-white relative overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }}
      role="region"
      aria-label="Projects section"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">My Projects</h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          role="list"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="backdrop-blur-sm bg-black/50 p-4 sm:p-6 rounded-xl border border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300"
              role="listitem"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-base sm:text-lg mb-4 text-gray-300">{project.description}</p>
              <a 
                href={project.link}
                className="text-purple-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <span className="text-cyan-400">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
    </motion.section>
  );
}