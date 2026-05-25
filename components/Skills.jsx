import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Wrench } from 'lucide-react';
import data from '../data/portfolio.json';
import { BorderBeam } from './ui/BorderBeam';

const iconMap = {
  "QA & Testing": ShieldCheck,
  "Development": Code2,
  "Tools & Languages": Wrench
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const SkillCard = ({ title, skills, delay }) => {
  const Icon = iconMap[title] || Code2;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 group flex flex-col h-full overflow-hidden"
    >
      <BorderBeam duration={10} delay={delay} />
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm"
      >
        <Icon size={30} />
      </motion.div>
      <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{title}</h3>
      <motion.ul 
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {skills.map((skill, index) => (
          <motion.li 
            key={index} 
            variants={itemVariants}
            className="flex items-center gap-3 text-slate-500 font-medium hover:text-blue-500 transition-colors cursor-default"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">My <span className="text-blue-500">Core Skills</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A diverse toolkit focusing on quality, efficiency, and modern web standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.skills.map((category, index) => (
            <SkillCard 
              key={index} 
              title={category.category} 
              skills={category.items} 
              delay={0.1 * (index + 1)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
