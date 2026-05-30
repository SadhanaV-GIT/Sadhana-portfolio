import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-[200] flex items-center justify-center bg-gray-950"
  >
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full mx-auto mb-4"
      />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-gray-400 font-medium"
      >
        Loading...
      </motion.p>
    </div>
  </motion.div>
);

export default LoadingScreen;
