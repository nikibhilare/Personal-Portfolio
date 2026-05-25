import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 md:p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm md:shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-md md:hover:shadow-xl transition-all flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-blue-500" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
