import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

const categories = ['All', 'AI/IoT', 'Full Stack'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
  const [active, setActive] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              My <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full mb-8" />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100 dark:shadow-indigo-900/30'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <motion.div key={project.id} variants={fadeUp} whileHover={{ y: -6 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-lg transition-all group">
                  <div className="relative overflow-hidden h-48">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4 gap-2">
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/40 transition-colors">
                        <FiGithub size={16} />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/40 transition-colors">
                        <FiExternalLink size={16} />
                      </a>
                    </div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-indigo-600/90 text-white text-xs rounded-md font-medium">{project.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded font-medium border border-indigo-100 dark:border-indigo-800">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-medium">
                        <FiGithub size={13} /> Code
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors font-medium">
                        <FiExternalLink size={13} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
