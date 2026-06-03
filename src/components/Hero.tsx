import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { useTypingEffect } from '../hooks/useTypingEffect';

const socials = [
  { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/sadhana-v-6aa790333', label: 'LinkedIn' },
  { icon: <FiGithub size={20} />, href: 'https://github.com/SadhanaV-GIT', label: 'GitHub' },
  { icon: <SiLeetcode size={20} />, href: 'https://leetcode.com/u/Sadhana2312/', label: 'LeetCode' },
  { icon: <SiHackerrank size={20} />, href: 'https://www.hackerrank.com/profile/sadhana_v2024cce', label: 'HackerRank' },
];

const Hero: React.FC = () => {
  const typed = useTypingEffect(['Frontend Developer', 'React Developer', 'TypeScript Developer', 'UI/UX Enthusiast']);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 dark:bg-indigo-950/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 dark:bg-violet-950/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full tracking-widest uppercase mb-5 border border-indigo-100 dark:border-indigo-800"
          >
            Welcome to my portfolio
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">SADHANA V</span>
          </h1>

          <div className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-6 h-8 flex items-center gap-1">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{typed}</span>
            <span className="animate-pulse text-indigo-400">|</span>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed text-base">
            Passionate about building beautiful, performant web applications with modern technologies. I turn ideas into elegant digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href="/resume.pdf" download
              className="flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-md shadow-indigo-200 dark:shadow-indigo-900/30 transition-all text-sm"
            >
              <FiDownload /> Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all text-sm"
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label} href={s.href} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all shadow-sm"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>


        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl shadow-indigo-100 dark:shadow-indigo-900/20 overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}/profile.jpeg`}
                alt="Sadhana V"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Available</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-300 dark:text-gray-600"
      >
        <div className="w-5 h-8 border-2 border-gray-200 dark:border-gray-700 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
