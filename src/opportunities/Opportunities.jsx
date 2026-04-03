import React from 'react';
import { Search, ChevronDown, Filter, Star } from 'lucide-react';
import OpportunityCard from './OpportunityCard';

const Opportunities = () => {
  const saudiJobsData = [
    {
      title: "Frontend Engineering Intern",
      company: "Elm Company",
      location: "Riyadh",
      isRemote: false,
      matchPercentage: 92,
      description: "Join our digital transformation team to build intuitive citizen-facing web applications for government services.",
      skills: ["React.js", "Tailwind CSS", "Next.js"],
      type: "Internship",
      duration: "3 months",
      salary: "5,000 SAR/mo",
      posted: "Posted 2 days ago"
    },
    {
      title: "Cybersecurity Analyst Trainee",
      company: "SDAIA",
      location: "Riyadh",
      isRemote: false,
      matchPercentage: 88,
      description: "Monitor network traffic, analyze security alerts, and assist in maintaining national AI and data infrastructures.",
      skills: ["Networks", "Kali Linux", "Security+"],
      type: "COOP",
      duration: "6 months",
      salary: "4,000 SAR/mo",
      posted: "Posted 1 week ago"
    },
    {
      title: "React Developer",
      company: "Lean Business Services",
      location: "Riyadh",
      isRemote: true,
      matchPercentage: 85,
      description: "Develop seamless healthcare solutions and portals connecting various health sector entities across the Kingdom.",
      skills: ["React", "TypeScript", "Redux"],
      type: "Full-time",
      duration: "Permanent",
      salary: "12k - 15k SAR/mo",
      posted: "Posted 3 days ago"
    },
    {
      title: "Network Engineer Intern",
      company: "STC (Saudi Telecom Company)",
      location: "Dammam",
      isRemote: false,
      matchPercentage: 82,
      description: "Assist in deploying and troubleshooting 5G network infrastructure and optimizing routing protocols (OSPF, BGP).",
      skills: ["Cisco", "OSPF", "Troubleshooting"],
      type: "Internship",
      duration: "6 months",
      salary: "6,000 SAR/mo",
      posted: "Posted 5 days ago"
    },
    {
      title: "Software Developer",
      company: "Saudi Aramco",
      location: "Dhahran",
      isRemote: false,
      matchPercentage: 78,
      description: "Build scalable backend systems to support IoT sensor data from global drilling operations.",
      skills: ["Python", "Java", "SQL"],
      type: "Full-time",
      duration: "Permanent",
      salary: "16k - 20k SAR/mo",
      posted: "Posted 1 week ago"
    }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search opportunities in KSA..." 
            className="w-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 rounded-xl pl-12 pr-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm dark:shadow-none"
          />
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors shadow-sm dark:shadow-none">
            Best Match <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors shadow-sm dark:shadow-none">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="p-3 bg-white dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
          <Star fill="currentColor" size={24} />
        </div>
        <div>
          <h4 className="font-bold text-blue-900 dark:text-blue-100">You have 3 highly matched opportunities in Saudi Arabia</h4>
          <p className="text-sm text-blue-700 dark:text-blue-300/80 mt-0.5">Based on your skills in React, Python, and Networking</p>
        </div>
      </div>

      <div className="space-y-4">
        {saudiJobsData.map((job, index) => (
          <OpportunityCard key={index} {...job} />
        ))}
      </div>

    </div>
  );
};

export default Opportunities;