import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ExperienceCard from './components/ExperienceCard';
import SectionTitle from './components/SectionTitle';
import AnimatedSection from './components/AnimatedSection';
import SkillsSection from './components/SkillsSection';

function App() {
  const experiences = [
    {
      role: "Senior React Native Developer",
      company: "TechCorp Mobile",
      period: "2022 - Present",
      description: [
        "Led the development of a cross-platform e-commerce app with 1M+ downloads",
        "Implemented real-time chat and push notifications using Firebase",
        "Mentored junior developers and established best practices",
        "Reduced app bundle size by 40% through code optimization"
      ],
      technologies: ["React Native", "TypeScript", "Redux", "Firebase"]
    },
    {
      role: "Mobile Developer",
      company: "HealthTech Solutions",
      period: "2020 - 2022",
      description: [
        "Developed health tracking apps with Apple HealthKit and Google Fit integration",
        "Implemented secure data synchronization and offline functionality",
        "Collaborated with UX team to improve app accessibility",
        "Achieved 4.8+ star ratings on both App Store and Play Store"
      ],
      technologies: ["React Native", "HealthKit", "GraphQL", "Jest"]
    }
  ];

  const projects = [
    {
      title: "EcoTracker Mobile",
      description: "Sustainability tracking app with real-time metrics and social features",
      image: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=800",
      tags: ["React Native", "Redux", "Firebase"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "HealthKit Integration",
      description: "Comprehensive fitness tracking with Apple HealthKit integration",
      image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?auto=format&fit=crop&q=80&w=800",
      tags: ["React Native", "HealthKit", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Commerce",
      description: "Feature-rich shopping experience with real-time updates",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=800",
      tags: ["React Native", "GraphQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const socialLinks = [
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Manmohan Suthar
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-600">
                React Native Developer crafting exceptional mobile experiences with 2+ years of expertise in cross-platform development
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-primary-50 text-primary-600 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-72 h-96 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 animate-pulse blur-2xl opacity-20" />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                    alt="Alex Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-xl p-3 shadow-xl animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">5+</div>
                    <div className="text-xs text-gray-600">Years of Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections with updated styles */}
      <AnimatedSection id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="About Me" 
            subtitle="Passionate about creating seamless mobile experiences"
          />
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              With over 5 years of experience in mobile development, I specialize in building high-performance React Native applications that delight users and drive business growth.
            </p>
            <p>
              My expertise spans the entire mobile development lifecycle, from initial architecture to App Store deployment. I'm particularly passionate about creating smooth animations, implementing complex state management, and ensuring cross-platform consistency.
            </p>
            <p>
              When I'm not coding, I contribute to open-source projects and write technical articles about mobile development best practices.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Work Experience" 
            subtitle="My professional journey in mobile development"
          />
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </AnimatedSection>
            <SkillsSection/>
      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Some of my recent work"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Let's discuss your next project"
          />
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;