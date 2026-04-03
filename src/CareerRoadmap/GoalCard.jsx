import React from 'react';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

const GoalCard = ({ title, tag, tagColor, targetDate, progress, milestones }) => {
  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm dark:shadow-none mb-6">
      
    
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${tagColor}`}>
              {tag}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <Calendar size={16} />
            <span>Target: {targetDate}</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{progress}%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
        </div>
      </div>

      
      <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-6">
        <div 
          className="h-full bg-slate-800 dark:bg-white rounded-full transition-all duration-1000" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

     
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-3 uppercase tracking-wider">Milestones</p>
        <div className="space-y-3">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
             
              className="bg-slate-50 dark:bg-white border border-gray-200 dark:border-transparent rounded-xl p-4 flex items-center gap-3"
            >
              {milestone.isCompleted ? (
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
              ) : (
                <Circle size={20} className="text-gray-400 shrink-0" />
              )}
              
              <div className="flex-1">
                <span className={`text-sm font-semibold ${milestone.isCompleted ? 'line-through text-gray-500' : 'text-slate-900'}`}>
                  {milestone.text}
                </span>
                
                {milestone.subText && !milestone.isCompleted && (
                  <p className="text-xs text-gray-500 mt-1">{milestone.subText}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default GoalCard;