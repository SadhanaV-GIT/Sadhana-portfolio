import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiTarget, FiUser } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const highlights = [
  { icon: <FiUser size={20} />, label: 'Name', value: 'SADHANA V' },
  { icon: <FiBook size={20} />, label: 'Degree', value: 'B.E Computer and Communication Engineering' },
  { icon: <FiTarget size={20} />, label: 'Available', value: 'Open for internships' },
];

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              About <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Developer & Problem Solver</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                I'm a passionate Frontend Developer with expertise in React, TypeScript, and modern web technologies. I love creating intuitive, performant, and visually appealing web applications.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                Currently pursuing my B.E in Computer and Communication Engineering, I've worked on diverse projects ranging from AI-based systems to full-stack applications.
              </p>

              <div className="bg-white dark:bg-gray-800 border border-indigo-100 dark:border-indigo-900 rounded-xl p-5 mb-4 shadow-sm">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2 text-sm">
                  <FiTarget size={15} /> Career Objective
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  To secure a challenging position in a reputable organization where I can utilize my technical skills and contribute to innovative projects while continuously growing as a developer.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-violet-100 dark:border-violet-900 rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-violet-600 dark:text-violet-400 mb-2 flex items-center gap-2 text-sm">
                  <FiBook size={15} /> Education
                </h4>
                <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">B.E Computer and Communication Engineering</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">Sri Eshwar College of Engineering • 2024 – 2028</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all group">
                  <div className="text-indigo-600 mb-3 group-hover:scale-110 transition-transform inline-block">{h.icon}</div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{h.label}</p>
                  <p className="font-semibold text-gray-800 dark:text-white text-sm">{h.value}</p>
                </div>
              ))}
              <div className="col-span-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl p-6 text-white shadow-md">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[['3+', 'Projects'], ['1+', 'Internships'], ['4+', 'Certifications']].map(([num, label]) => (
                    <div key={label}>
                      <p className="text-2xl font-bold">{num}</p>
                      <p className="text-indigo-100 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
