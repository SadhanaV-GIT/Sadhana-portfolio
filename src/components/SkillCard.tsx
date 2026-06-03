import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Server, Database, Wrench, Brain } from 'lucide-react';
import { SkillCategory } from '../data/skillCategories';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={24} />,
  Monitor: <Monitor size={24} />,
  Server: <Server size={24} />,
  Database: <Database size={24} />,
  Wrench: <Wrench size={24} />,
  Brain: <Brain size={24} />,
};

const badgeAccent: Record<string, string> = {
  'text-cyan-400': 'bg-cyan-50 text-cyan-600 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-400 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30 dark:hover:bg-cyan-500/20',
  'text-blue-400': 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 hover:border-blue-400 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/30 dark:hover:bg-blue-500/20',
  'text-green-400': 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:border-green-400 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/30 dark:hover:bg-green-500/20',
  'text-orange-400': 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100 hover:border-orange-400 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/30 dark:hover:bg-orange-500/20',
  'text-purple-400': 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100 hover:border-purple-400 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/30 dark:hover:bg-purple-500/20',
  'text-pink-400': 'bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100 hover:border-pink-400 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-500/30 dark:hover:bg-pink-500/20',
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative group rounded-2xl p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-md hover:shadow-xl ${category.glow} ${category.border} transition-all duration-300`}
    >
      {/* Glow background on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 ${category.accent} group-hover:scale-110 transition-transform duration-300`}>
          {iconMap[category.icon]}
        </div>
        <h3 className={`text-lg font-bold text-gray-900 dark:text-white`}>{category.title}</h3>
      </div>

      {/* Divider */}
      <div className={`h-px w-full mb-5 bg-gradient-to-r from-transparent via-white/20 to-transparent`} />

      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.08 }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-default transition-all duration-200 ${badgeAccent[category.accent]}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
