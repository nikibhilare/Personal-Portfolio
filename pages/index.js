import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
              Nikita
            </h2>
            <p className="text-slate-500 max-w-xs">
              Ensuring quality through code and perseverance. Open for junior QA and developer roles.
            </p>
          </div>

          <div className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Nikita. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
