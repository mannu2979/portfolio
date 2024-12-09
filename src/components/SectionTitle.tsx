import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <motion.h2 
        className="text-5xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 flex justify-center"
      >
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default SectionTitle;