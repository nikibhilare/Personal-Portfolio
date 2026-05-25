import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import data from '../data/portfolio.json';
import { AnimatedTabs } from './ui/AnimatedTabs';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = project.description?.split(' ') || [];
  const needsReadMore = words.length > 20 || project.description?.length > 120;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={onMouseMove}
      className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 group flex flex-col"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-48 flex-shrink-0 overflow-hidden">
        <img 
          src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {(project.githubLink !== '#' || project.liveDemoLink !== '#') && (
          <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {project.githubLink !== '#' && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform shadow-lg">
                <Github size={24} />
              </a>
            )}
            {project.liveDemoLink !== '#' && (
              <a href={project.liveDemoLink} target="_blank" rel="noreferrer" className="p-3 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform shadow-lg">
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">{project.category}</span>
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{project.title}</h3>
        <div className="mb-6 relative">
          <motion.p layout="position" className={`text-slate-500 text-sm transition-all ${isExpanded ? '' : 'line-clamp-3'}`}>
            {project.description}
          </motion.p>
          {needsReadMore && (
            <motion.button 
              layout="position"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 text-xs font-bold mt-2 hover:underline focus:outline-none"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </motion.button>
          )}
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
          <motion.div layout="position" className="flex flex-wrap gap-2">
            {project.techStack.split(',').map((tech, i) => (
              <motion.span 
                key={i} 
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full text-slate-500 dark:text-slate-400 uppercase shadow-sm cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
              >
                {tech.trim()}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(data.projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? data.projects 
    : data.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured <span className="text-blue-500">Projects</span></h2>
            <p className="text-slate-500">
              A showcase of my recent work in QA automation, frontend development, and full-stack applications.
            </p>
          </div>
          
          <AnimatedTabs 
            tabs={categories} 
            activeTab={filter} 
            setActiveTab={setFilter} 
          />
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
