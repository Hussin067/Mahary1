import React from 'react';
import { Award } from 'lucide-react';

const KfuPointsGuide = () => {
  const guideData = [
    {
      category: "Student Activities",
      items: [
        { desc: "Executing a high-quality activity at the university level", points: "300 Points" },
        { desc: "Participating in executing a high-quality activity", points: "150 Points" },
        { desc: "Participating in an activity in a supporting role", points: "100 Points" }
      ]
    },
    {
      category: "Awards",
      items: [
        { desc: "Category A Award", points: "300 Points" },
        { desc: "Category B Award", points: "200 Points" },
        { desc: "Category C Award", points: "100 Points" }
      ]
    },
    {
      category: "Training Courses (Attendance)",
      items: [
        { desc: "Attending a training course", points: "20 Points" }
      ]
    },
    {
      category: "Leadership Skills",
      items: [
        { desc: "Successfully leading a student club for a full term", points: "700 Points" }
      ]
    },
    {
      category: "Patents",
      items: [
        { desc: "Registering a patent", points: "700 Points" }
      ]
    },
    {
      category: "Delivering Training Courses",
      items: [
        { desc: "Delivering an outstanding training course", points: "150 Points" }
      ]
    },
    {
      category: "Volunteer Work",
      items: [
        { desc: "Volunteer work hours", points: "5 Points" }
      ]
    },
    {
      category: "Other Exceptional Achievements",
      items: [
        { desc: "Evaluated by the Deanship after request submission", points: "Variable" }
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 rounded-2xl shadow-sm dark:shadow-none overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex items-center gap-3">
        <Award className="text-blue-500" size={24} />
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">KFU Points Guide</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Official scoring system for the KFU Skills Record</p>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100 dark:divide-white/5">
        {guideData.map((section, idx) => (
          <div key={idx} className="flex flex-col md:flex-row">
            
            <div className="w-full md:w-1/3 p-4 bg-slate-50/50 dark:bg-[#0f172a]/30 text-sm font-bold text-slate-700 dark:text-slate-300 border-r border-gray-100 dark:border-white/5">
              {section.category}
            </div>
            
            <div className="w-full md:w-2/3 p-0">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className={`p-4 flex justify-between items-center text-sm ${itemIdx !== section.items.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
                  <span className="text-slate-600 dark:text-gray-400">{item.desc}</span>
                  <span className="font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    {item.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KfuPointsGuide;