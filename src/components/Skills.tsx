import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skillCategories';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/50 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100/50 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/20 tracking-widest uppercase mb-4"
          >
            What I Work With
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full" />
          </div>

          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            A diverse set of technologies and tools that I use to build modern web applications,
            solve programming challenges, and develop AI-powered solutions.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center"
        >
          {[['18+', 'Technologies'], ['3+', 'Projects'], ['1+', 'Years Learning']].map(([num, label]) => (
            <div key={label} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">{num}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
