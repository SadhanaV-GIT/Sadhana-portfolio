import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experiences } from '../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Work <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Internship</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 to-violet-400 hidden sm:block" />
            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.div key={exp.id} variants={fadeUp} className="relative sm:pl-20">
                  <div className="absolute left-5 top-6 w-6 h-6 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full border-4 border-white dark:border-gray-900 hidden sm:flex items-center justify-center shadow-md">
                    <FiBriefcase size={10} className="text-white" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-md font-medium border border-indigo-100 dark:border-indigo-800">{exp.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><FiCalendar size={12} />{exp.duration}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={12} />{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <span className="text-indigo-500 mt-1.5 shrink-0 text-xs">▸</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
