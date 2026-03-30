import React from 'react';
import { GraduationCap, Award, Target, Briefcase } from 'lucide-react';
const StatCard = ({ title, value, subtext, icon, colorClass }) => (
  <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 p-5 rounded-2xl flex justify-between items-start hover:border-blue-500/30 transition-all cursor-default shadow-sm dark:shadow-none">
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-1 uppercase tracking-wider">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{value}</h3>
      <p className="text-[10px] text-gray-500 mt-1">{subtext}</p>
    </div>
    <div className={`p-2 rounded-xl flex items-center justify-center ${colorClass}`}>
      {icon}
    </div>
  </div>
);
export default StatCard; 