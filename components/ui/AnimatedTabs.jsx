import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const AnimatedTabs = ({ tabs, activeTab, setActiveTab, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-2 relative", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "relative px-4 py-2 rounded-full font-medium text-sm transition-colors",
            activeTab === tab 
              ? "text-white" 
              : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-blue-600 rounded-full"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
};
