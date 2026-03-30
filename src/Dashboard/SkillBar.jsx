import React from 'react';
const SkillBar = ({ name, level, type }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <div>
        <p className="text-white font-medium">{name}</p>
        <p className="text-gray-500 text-[10px]">{type}</p>
      </div>
      <span className="text-gray-400">{level}%</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
      <div 
        className="h-full bg-linear-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);
export default SkillBar;