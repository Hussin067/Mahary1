import React from 'react';
import { X } from 'lucide-react';

const AddSkillModal = ({ isOpen, onClose }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    // The dark blurred background overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* The Modal Box */}
      <div className="bg-white dark:bg-[#1e293b] w-full max-w-md rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b border-gray-200 dark:border-white/5">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Add New Skill</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Record a new skill you've acquired</p>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 space-y-4">
          
          {/* Skill Name Input */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-white">Skill Name</label>
            <input 
              type="text" 
              placeholder="e.g., JavaScript" 
              className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          {/* Category Select */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-white">Category</label>
            <select className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
              <option value="">Select category</option>
              <option value="technical">Technical</option>
              <option value="soft">Soft Skills</option>
              <option value="creative">Creative</option>
            </select>
          </div>

          {/* Proficiency Level */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-white">Proficiency Level (%)</label>
            <input 
              type="number" 
              placeholder="75" 
              min="0" max="100"
              className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          {/* Source/Course Input */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-white">Source/Course</label>
            <input 
              type="text" 
              placeholder="e.g., CS101 Course" 
              className="w-full bg-slate-50 dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 pt-2">
          <button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all">
            Add Skill
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddSkillModal;