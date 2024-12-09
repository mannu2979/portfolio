import React from 'react';
import { Smartphone, Code, Database, Cloud, Palette, Terminal } from 'lucide-react';

export const skillsData = [
  {
    name: 'Mobile Development',
    icon: <Smartphone className="w-5 h-5 text-primary-500" />,
    skills: [
      { name: 'React Native', level: 95 },
      { name: 'iOS Development', level: 85 },
      { name: 'Android Development', level: 85 },
      { name: 'Mobile UI/UX', level: 90 }
    ]
  },
  {
    name: 'Frontend Development',
    icon: <Code className="w-5 h-5 text-primary-500" />,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML/CSS', level: 95 }
    ]
  },
  {
    name: 'Backend & Database',
    icon: <Database className="w-5 h-5 text-primary-500" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'Firebase', level: 88 }
    ]
  },
  {
    name: 'Cloud Services',
    icon: <Cloud className="w-5 h-5 text-primary-500" />,
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud', level: 78 },
      { name: 'CI/CD', level: 85 },
      { name: 'DevOps', level: 80 }
    ]
  },
  {
    name: 'UI/UX Design',
    icon: <Palette className="w-5 h-5 text-primary-500" />,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Prototyping', level: 88 },
      { name: 'Design Systems', level: 85 }
    ]
  },
  {
    name: 'Tools & Others',
    icon: <Terminal className="w-5 h-5 text-primary-500" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Jest/Testing', level: 85 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Performance Optimization', level: 88 }
    ]
  }
];