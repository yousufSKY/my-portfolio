'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const socialLinks = [
    {
      icon: <MdEmail size={28} />,
      url: "mailto:your.skyousuf22@outlook.com",
      label: "Email Me",
      hoverColor: "hover:text-purple-400"
    },
    {
      icon: <FaLinkedin size={28} />,
      url: "https://www.linkedin.com/in/syed-yousuf-a64265276/",
      label: "LinkedIn Profile",
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: <FaGithub size={28} />,
      url: "https://github.com/yousufSKY",
      label: "GitHub Profile",
      hoverColor: "hover:text-gray-400"
    },
    {
      icon: <FaXTwitter size={28} />,
      url: "https://twitter.com/YourTwitterHandle",
      label: "X Profile",
      hoverColor: "hover:text-gray-400"
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }}
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Contact Me</h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className="flex justify-center items-center space-x-6 sm:space-x-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`text-gray-300 ${link.hoverColor} transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}