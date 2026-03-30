import React from 'react';
import GeneralCard from './GeneralCard';

const SkillsRecord = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
    
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Skills Record</h2>
          <p className="text-gray-400 mt-1">Track and showcase your abilities</p>
        </div>
        <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all">
          + Add New Skill
        </button>
      </div>
      <GeneralCard />

    </div>
  );
};

export default SkillsRecord;