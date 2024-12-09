import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: number;
  icon?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl glass-effect border border-primary-500/20 hover:border-primary-500/40 card-hover"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
            <img src={icon} alt={name} className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-500 to-pink-500 relative skill-progress-bar"
        >
          <div className="absolute inset-0 shimmer" />
        </motion.div>
      </div>
      <div className="mt-3 text-sm text-primary-300 font-medium text-right">
        {level}%
      </div>
    </motion.div>
  );
};

export default SkillBadge;