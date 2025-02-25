'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/yousufSKY",
      label: "GitHub Profile"
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/syed-yousuf-a64265276/",
      label: "LinkedIn Profile"
    },
    {
      icon: <MdEmail size={24} />,
      url: "mailto:skyousuf22@outlook.com",
      label: "Email Me"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }}
      role="banner"
      aria-label="Hero section"
    >
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .profile-image-container {
          box-shadow: 0 4px 20px rgba(123, 97, 255, 0.2);
        }
        
        .profile-image-container:hover {
          box-shadow: 0 8px 25px rgba(123, 97, 255, 0.3);
          transform: translateY(-5px);
        }
      `}</style>
      <div className="relative z-10 text-center w-full max-w-3xl mx-auto">
        <motion.div 
          className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] mx-auto mb-6 sm:mb-8 rounded-full profile-image-container transition-all duration-300 ease-out"
          whileHover={{ scale: 1.02 }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25
          }}
        >
          <Image
            src={imageError ? '/fallback-profile.jpg' : '/profile.jpg'}
            alt="Profile picture"
            fill
            priority
            sizes="250px"
            className="rounded-full border-4 border-white/10 object-cover hover:border-white/20 transition-all duration-300"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300" />
        </motion.div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-white px-4"
        >
          Syed Khaja Yousufuddin
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg sm:text-xl mt-2 text-gray-300 px-4"
        >
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'Website Designer',
              2000,
              'Penetration Tester',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl tracking-wide"
          />
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-center gap-6 mt-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(123,97,255,0.1)_0%,_rgba(0,0,0,0.4)_100%)]" />
    </motion.section>
  );
}

export default Hero;