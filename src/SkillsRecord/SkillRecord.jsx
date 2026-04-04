import React, { useState } from 'react';
import GeneralCard from './GeneralCard';
import SkillItem from './SkillItem';
import AddSkillModal from './AddSkillModel';
import RequestPointsModal from './RequestPointsModal';
import KfuPointsGuide from './KfuPointsGuide';
import PointsHistory from './PointsHistory';
import { Search, BookOpen, Award, PlusCircle } from 'lucide-react';

const SkillRecord = () => {
  const mySkills = [
    { name: "React.js", percentage: 85, level: "Expert", type: "Technical", endorsements: 12, acquired: "Jan 2025", lastUpdated: "Mar 2026" },
    { name: "Python Programming", percentage: 90, level: "Expert", type: "Technical", endorsements: 15, acquired: "Sep 2024", lastUpdated: "Feb 2026" },
    { name: "Data Structures", percentage: 88, level: "Expert", type: "Technical", endorsements: 10, acquired: "Sep 2024", lastUpdated: "Jan 2026" },
    { name: "SQL & Databases", percentage: 78, level: "Intermediate", type: "Technical", endorsements: 8, acquired: "Feb 2025", lastUpdated: "Mar 2026" },
    { name: "Leadership", percentage: 92, level: "Expert", type: "Soft Skills", endorsements: 20, acquired: "Sep 2023", lastUpdated: "Mar 2026" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('portfolio');
  const [isPointsModalOpen, setIsPointsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Page Header */}
      <div className="flex justify-between items-center flex-col md:flex-row md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Skills Record</h2>
          <p className="text-muted-foreground mt-1">Track and showcase your abilities</p>
        </div>
      </div>

      <GeneralCard />

      {/* --- THE NEW TAB SWITCHER --- */}
      <div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-xl inline-flex w-full sm:w-auto">
        <button 
          onClick={() => setActiveTab('portfolio')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'portfolio' 
              ? 'bg-white dark:bg-[#1e293b] text-blue-600 dark:text-blue-400 shadow-sm' 
              : 'text-slate-500 dark:text-gray-400 hover:text-foreground'
          }`}
        >
          <BookOpen size={16} /> My Portfolio
        </button>
        <button 
          onClick={() => setActiveTab('kfu-system')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'kfu-system' 
              ? 'bg-white dark:bg-[#1e293b] text-teal-600 dark:text-teal-400 shadow-sm' 
              : 'text-slate-500 dark:text-gray-400 hover:text-foreground'
          }`}
        >
          <Award size={16} /> KFU Points System
        </button>
      </div>

      {/* --- CONDITIONAL RENDERING --- */}
      
      {/* VIEW 1: Standard Skills Portfolio */}
      {activeTab === 'portfolio' && (
        <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-4 pb-2 border-b border-border">
            <div>
              <h3 className="text-lg font-bold text-foreground">Your Skills Portfolio</h3>
              <p className="text-sm text-muted-foreground mt-1">{mySkills.length} skills found</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 shadow-md shadow-blue-500/20">
              <PlusCircle size={18} /> Add New Skill
            </button>
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
      )}

      {/* VIEW 2: KFU Skills Record System */}
      {activeTab === 'kfu-system' && (
        <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Replaced the static form with the PointsHistory card */}
          <PointsHistory onRequestClick={() => setIsPointsModalOpen(true)} />
          <KfuPointsGuide />
        </div>
      )}

      {/* Modals placed at the bottom so they overlay the entire screen properly */}
      <AddSkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <RequestPointsModal isOpen={isPointsModalOpen} onClose={() => setIsPointsModalOpen(false)} />
      
    </div>
  );
};

export default SkillRecord;