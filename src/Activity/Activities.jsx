import React from 'react';
import { Search, Filter, CalendarDays } from 'lucide-react';
import ActivityCard from '../Dashboard/ActivityCard'; 

const Activities = () => {
  
  const activitiesData = [
    {
      type: "High-Profile Event",
      typeColor: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
      capacity: "Open",
      icon: "🎙️",
      title: "Discussion Session with H.E. Minister of Health",
      organizer: "King Faisal University",
      date: "Apr 01, 2026 - 10:00 AM",
      location: "KFU Main Auditorium"
    },
    {
      type: "International Conference",
      typeColor: "bg-purple-500/10 text-purple-500 border border-purple-500/20",
      capacity: "Limited Seats",
      icon: "🤖",
      title: "International Conference on Computing and Machine Intelligence",
      organizer: "College of Computer Sciences and IT",
      date: "Apr 08 - 10, 2026",
      location: "KFU Conference Center"
    },
    {
      type: "Community Service",
      typeColor: "bg-green-500/10 text-green-500 border border-green-500/20",
      capacity: "45/100",
      icon: "🌴",
      title: "Al-Ahsa Oasis Environmental Cleanup",
      organizer: "National Center for Vegetation Cover",
      date: "Apr 15, 2026",
      location: "Al-Ahsa National Park"
    },
    {
      type: "Technical Workshop",
      typeColor: "bg-orange-500/10 text-orange-500 border border-orange-500/20",
      capacity: "12/30",
      icon: "💻",
      title: "Introduction to Penetration Testing",
      organizer: "KFU Cybersecurity Club",
      date: "Apr 20, 2026",
      location: "Lab 3, CCIT Building"
    },
    {
      type: "Volunteering",
      typeColor: "bg-teal-500/10 text-teal-500 border border-teal-500/20",
      capacity: "80/150",
      icon: "🤝",
      title: "Iftar Fasting Project Organization",
      organizer: "KFU Student Affairs",
      date: "Daily during Ramadan",
      location: "Multiple Campus Locations"
    },
    {
      type: "Hackathon",
      typeColor: "bg-red-500/10 text-red-500 border border-red-500/20",
      capacity: "20 Teams",
      icon: "🚀",
      title: "Eastern Province Smart Cities Hackathon",
      organizer: "SDAIA & KFU",
      date: "May 05 - 07, 2026",
      location: "KFU Innovation Hub"
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Available Activities</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Join university events and community volunteering</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="w-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <button className="flex items-center gap-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-600 to-blue-400 rounded-2xl p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg shadow-blue-500/20">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <CalendarDays size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Upcoming KFU Events</h3>
            <p className="text-blue-100 text-sm">You have 2 recommended events this week.</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 active:scale-[0.98] transition-all whitespace-nowrap">
          View My Calendar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activitiesData.map((activity, index) => (
          <ActivityCard 
            key={index}
            type={activity.type}
            typeColor={activity.typeColor}
            capacity={activity.capacity}
            icon={activity.icon}
            title={activity.title}
            organizer={activity.organizer}
            date={activity.date}
            location={activity.location}
          />
        ))}
      </div>

    </div>
  );
};

export default Activities;