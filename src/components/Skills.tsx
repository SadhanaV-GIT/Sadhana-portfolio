import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import { Skill } from '../types';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillBar: React.FC<{ skill: Skill; inView: boolean }> = ({ skill, inView }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all group">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">{skill.icon}</span>
        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">{skill.name}</span>
      </div>
      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs">{skill.percentage}%</span>
    </div>
    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${skill.percentage}%` : 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  const [active, setActive] = useState<string>('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              My <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full mb-8" />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100 dark:shadow-indigo-900/30'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((skill) => (
              <SkillBar key={skill.name} skill={skill} inView={inView} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
