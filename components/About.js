'use client';

import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { name: 'Core', items: ['HTML', 'CSS', 'JavaScript'] },
    { name: 'Security', items: ['Burp Suite', 'Nmap', 'Penetration Testing'] },
    { name: 'Tools', items: ['Git', 'VS Code', 'Command Line'] }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-purple-900 to-black text-white relative overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }}
      role="region"
      aria-label="About section"
    >
      <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/50 p-6 sm:p-8 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(147,51,234,0.15)] relative z-10">
        {/* About Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Hi there! I'm a creative Web Developer and a skilled Cybersecurity Specialist with a knack for building sleek, responsive websites using HTML, CSS, and JavaScript. Beyond crafting stunning digital experiences, I dive deep into the world of cybersecurity as a proficient penetration tester, ensuring that every project I work on is as secure as it is beautiful.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">Education</h3>
          <div className="space-y-2 text-gray-300">
            <p className="text-base sm:text-lg font-medium">Bachelor of Technology in Computer</p>
            <p className="text-sm sm:text-base">VTU Centre for PG Studies, Kalaburagi</p>
            <p className="text-sm text-purple-300">2022 - Present • Currently in 3rd Year</p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/20"
              >
                <h4 className="text-sm font-semibold mb-2 text-purple-300">{category.name}</h4>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-gray-300 flex items-center">
                      <span className="mr-2 text-purple-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
    </motion.section>
  );
};

export default About;