import React , {useState} from 'react';
import { Target, CheckCircle, TrendingUp } from 'lucide-react';
import GoalCard from './GoalCard';
import AddGoalModal from './AddGoalModal'; 

const CareerRoadmap = () => {
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);

  const roadmapData = [
    {
      title: "Graduate with Honors",
      tag: "Academic",
      tagColor: "bg-blue-500/10 text-blue-500",
      targetDate: "May 2027",
      progress: 65,
      milestones: [
        { text: "Maintain 3.5+ GPA", isCompleted: true },
        { text: "Complete 120 credits", isCompleted: false, subText: "75% complete" },
        { text: "Finish capstone project", isCompleted: false, subText: "40% complete" },
        { text: "Complete all core courses", isCompleted: true },
      ]
    },
    {
      title: "Become Full-Stack Developer",
      tag: "Career",
      tagColor: "bg-purple-500/10 text-purple-500",
      targetDate: "Dec 2027",
      progress: 55,
      milestones: [
        { text: "Master React & Node.js", isCompleted: false, subText: "85% complete" },
        { text: "Build 5 portfolio projects", isCompleted: false, subText: "60% complete" },
        { text: "Get AWS certification", isCompleted: false, subText: "30% complete" },
        { text: "Complete 6-month internship", isCompleted: false, subText: "0% complete" },
      ]
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Career Roadmap</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Plan and track your professional journey</p>
        </div>
        <button 
          onClick={() => setIsAddGoalModalOpen(true)}
          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all">
          + Add New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <RoadmapStat icon={<Target size={24} className="text-blue-500" />} value="4" label="Active Goals" bgColor="bg-blue-500/10" />
        <RoadmapStat icon={<CheckCircle size={24} className="text-green-500" />} value="4" label="Completed Milestones" bgColor="bg-green-500/10" />
        <RoadmapStat icon={<TrendingUp size={24} className="text-purple-500" />} value="58%" label="Average Progress" bgColor="bg-purple-500/10" />
      </div>

      <div className="max-w-4xl">
        {roadmapData.map((goal, index) => (
          <GoalCard 
            key={index}
            title={goal.title}
            tag={goal.tag}
            tagColor={goal.tagColor}
            targetDate={goal.targetDate}
            progress={goal.progress}
            milestones={goal.milestones}
          />
        ))}
      </div>

      <AddGoalModal 
        isOpen={isAddGoalModalOpen} 
        onClose={() => setIsAddGoalModalOpen(false)} 
      />

    </div>
  );
};

const RoadmapStat = ({ icon, value, label, bgColor }) => (
  <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 p-6 rounded-2xl flex items-center gap-4 shadow-sm dark:shadow-none">
    <div className={`p-4 rounded-xl ${bgColor}`}>
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-none">{value}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">{label}</p>
    </div>
  </div>
);

export default CareerRoadmap;