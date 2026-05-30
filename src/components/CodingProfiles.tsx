import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';
import { codingProfiles } from '../data/codingProfiles';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CodingProfiles: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="coding" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Coding <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Profiles</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto">
              Competitive programming and problem-solving across multiple platforms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingProfiles.map((profile) => (
              <motion.div key={profile.id} variants={fadeUp} whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-lg transition-all overflow-hidden group">
                {/* Header */}
                <div className={`bg-gradient-to-r ${profile.color} p-5`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{profile.icon}</span>
                      <h3 className="text-white font-bold text-lg">{profile.platform}</h3>
                    </div>
                    <a href={profile.profileUrl} target="_blank" rel="noreferrer"
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors">
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-100 dark:border-gray-600 text-center">
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{value}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{key}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{profile.description}</p>

                  <a href={profile.profileUrl} target="_blank" rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors">
                    <FiExternalLink size={14} /> View Profile
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
