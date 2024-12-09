import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { scaleIn } from '../utils/animations';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl
}) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-2xl border border-primary-500/20 hover:border-primary-500/40 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/90" />
      </div>
      <div className="relative p-8">
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-2xl font-bold text-white"
          >
            {title}
          </motion.h3>
          <div className="flex gap-3">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800/50 hover:bg-primary-500/30 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary-400" />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800/50 hover:bg-primary-500/30 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 text-primary-400" />
              </motion.a>
            )}
          </div>
        </div>
        <motion.p 
          className="text-gray-300 mb-6"
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="px-4 py-1.5 text-sm rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20 hover:bg-primary-500/20 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;