import React from 'react';
import { X } from 'lucide-react';

const AddGoalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-white dark:bg-[#1e293b] w-full max-w-md rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6 border-b border-gray-200 dark:border-white/5">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Add New Goal</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Set a new milestone for your career journey</p>
        </div>

        <div className="p-6 space-y-4">
          
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-white">Goal Title</label>
            <input 
              type="text" 
              placeholder="e.g., Become Full-Stack Developer" 
              className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-white">Category Tag</label>
            <select className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
              <option value="">Select category</option>
              <option value="academic">Academic</option>
              <option value="career">Career</option>
              <option value="skills">Skills</option>
              <option value="personal">Personal</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-white">Target Date</label>
            <input 
              type="month" 
              className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 [color-scheme:light] dark:[color-scheme:dark]"
            />
          </div>

        </div>

        <div className="p-6 pt-2">
          <button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all">
            Create Goal
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddGoalModal;