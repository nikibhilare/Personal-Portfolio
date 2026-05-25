import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2, Briefcase, FileText } from 'lucide-react';
import data from '../data/portfolio.json';
import RetroGrid from './ui/RetroGrid';
import { ShinyButton } from './ui/ShinyButton';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <RetroGrid />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-500 font-bold text-xl mb-4"
          >
            Hi there! I'm
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900 dark:text-white"
          >
            {data.name}
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium mb-6"
          >
            {data.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed text-left"
          >
            {data.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <ShinyButton 
              href="#projects" 
              text="View Projects" 
              icon={MousePointer2} 
              primary 
            />
            <ShinyButton 
              href="/resume.pdf" 
              download="Nikita_Bhilare_Resume.pdf" 
              text="Download Resume" 
              icon={FileText} 
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex-1 relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30" 
            />
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden shadow-2xl flex items-center justify-center"
            >
               <Briefcase size={120} className="text-white/20" />
               <span className="text-white text-6xl font-bold opacity-30 select-none">{data.name[0]}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
