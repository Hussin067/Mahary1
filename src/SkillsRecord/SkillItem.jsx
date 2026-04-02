import React from 'react';
import { BadgeCheck } from 'lucide-react';

const SkillItem = ({ name, percentage, level, type, endorsements, acquired, lastUpdated }) => {
  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 rounded-2xl p-6 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all shadow-sm dark:shadow-none group">
      
      
      <div className="flex justify-between items-start mb-6">
        <div>
          
          <h4 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            {name} 
            <BadgeCheck size={20} className="text-blue-500" />
          </h4>
          
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
            <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md text-slate-700 dark:text-gray-300">
              {type}
            </span>
            <span>•</span>
            <span>{endorsements} endorsements</span>
            <span>•</span>
            <span>Acquired: {acquired}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{percentage}%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{level}</div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[11px] text-gray-500 dark:text-gray-400 font-medium mb-2 uppercase tracking-wider">
          <span>Proficiency</span>
          <span>Last updated: {lastUpdated}</span>
        </div>
        
        <div className="h-2.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-slate-800 dark:bg-white rounded-full transition-all duration-1000 ease-out group-hover:scale-y-110" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

    </div>
  );
};

export default SkillItem;