import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const socials = [
  { icon: <FiLinkedin size={17} />, href: 'https://www.linkedin.com/in/sadhana-v-6aa790333', label: 'LinkedIn' },
  { icon: <FiGithub size={17} />, href: 'https://github.com/SadhanaV-GIT', label: 'GitHub' },
  { icon: <SiLeetcode size={17} />, href: 'https://leetcode.com/u/Sadhana2312/', label: 'LeetCode' },
  { icon: <SiHackerrank size={17} />, href: 'https://www.hackerrank.com/profile/sadhana_v2024cce', label: 'HackerRank' },
];

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

const Footer: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-indigo-400 mb-3">&lt;SADHANA /&gt;</h3>
            <p className="text-sm leading-relaxed text-gray-500">Frontend Developer passionate about building beautiful and performant web experiences.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs text-left text-gray-500 hover:text-indigo-400 transition-colors py-1">
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:text-white text-gray-400 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Sadhana V. All rights reserved.</p>
          <motion.button onClick={scrollTop} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs rounded-lg transition-colors font-medium">
            <FiArrowUp size={13} /> Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
