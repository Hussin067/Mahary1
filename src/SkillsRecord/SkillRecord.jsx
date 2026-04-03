import React , {useState} from 'react';
import GeneralCard from './GeneralCard';
import SkillItem from './SkillItem';
import AddSkillModal from './AddSkillModel';
import { Search } from 'lucide-react';

const SkillRecord = () => {
  const mySkills = [
    { name: "React.js", percentage: 85, level: "Expert", type: "Technical", endorsements: 12, acquired: "Jan 2025", lastUpdated: "Mar 2026" },
    { name: "Python Programming", percentage: 90, level: "Expert", type: "Technical", endorsements: 15, acquired: "Sep 2024", lastUpdated: "Feb 2026" },
    { name: "Data Structures", percentage: 88, level: "Expert", type: "Technical", endorsements: 10, acquired: "Sep 2024", lastUpdated: "Jan 2026" },
    { name: "SQL & Databases", percentage: 78, level: "Intermediate", type: "Technical", endorsements: 8, acquired: "Feb 2025", lastUpdated: "Mar 2026" },
    { name: "Leadership", percentage: 92, level: "Expert", type: "Soft Skills", endorsements: 20, acquired: "Sep 2023", lastUpdated: "Mar 2026" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8  max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      
      <div className="flex justify-between items-center flex-col md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Skills Record</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Track and showcase your abilities</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all">
          + Add New Skill
        </button>
      </div>

      <GeneralCard />

      <div className="mt-12 space-y-6">
{/*         
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search skills..." 
            className="w-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 rounded-2xl pl-12 pr-4 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none"
          />
        </div> */}
        <div className="pt-4 pb-2 border-b border-gray-200 dark:border-white/5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your Skills Portfolio</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{mySkills.length} skills found</p>
        </div>

        <div className="space-y-4">
          {mySkills.map((skill, index) => (
            <SkillItem 
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              level={skill.level}
              type={skill.type}
              endorsements={skill.endorsements}
              acquired={skill.acquired}
              lastUpdated={skill.lastUpdated}
            />
          ))}
        </div>

      </div>
      <AddSkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default SkillRecord;