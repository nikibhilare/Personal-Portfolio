import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ShinyButton = ({ text, className, href, icon: Icon, primary, download }) => {
  const inner = (
    <>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/30" />
      </div>
      {Icon && <Icon size={20} className="z-10 relative" />}
      <span className="z-10 relative">{text}</span>
    </>
  );

  const classes = cn(
    "group relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 font-bold transition-all shadow-lg",
    primary 
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25" 
      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700",
    className
  );

  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {inner}
    </motion.a>
  );
};
