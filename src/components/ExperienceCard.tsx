import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, staggerContainer } from '../utils/animations';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  description,
  technologies,
}) => {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true }}
      className="relative pl-8 pb-16 border-l-2 border-primary-500/50 last:pb-0"
    >
      <div className="absolute w-5 h-5 bg-primary-500 rounded-full -left-[11px] top-0">
        <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></div>
      </div>
      <motion.div 
        variants={staggerContainer}
        className="mb-6"
      >
        <motion.h3 
          variants={fadeInLeft}
          className="text-2xl font-bold text-gray-900"
        >
          {role}
        </motion.h3>
        <motion.div 
          variants={fadeInLeft}
          className="text-primary-600 font-medium text-lg mt-1"
        >
          {company}
        </motion.div>
        <motion.div 
          variants={fadeInLeft}
          className="text-gray-500 text-sm mt-1"
        >
          {period}
        </motion.div>
      </motion.div>
      <motion.ul 
        variants={staggerContainer}
        className="mt-4 space-y-4"
      >
        {description.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeInLeft}
            className="text-gray-600 flex items-start gap-3 group"
          >
            <span className="text-primary-500 mt-1.5 text-lg group-hover:scale-125 transition-transform">•</span>
            <span className="group-hover:text-gray-900 transition-colors">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div 
        variants={staggerContainer}
        className="mt-8 flex flex-wrap gap-2"
      >
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            variants={fadeInLeft}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 text-sm rounded-full bg-primary-50 text-primary-600 border border-primary-200 hover:bg-primary-100 transition-all duration-300"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;