import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="aspect-video md:aspect-square overflow-hidden rounded-2xl group shadow-xl"
          >
            <img 
              src="/images/about_workspace.png" 
              alt="Workspace" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">About <span className="text-blue-500">{data.name.split(' ')[0]}</span></h2>
          <div className="space-y-4 text-slate-500 text-lg leading-relaxed">
            {data.about.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
