import React from "react";
import {
  GraduationCap,
  Award,
  Target,
  Briefcase,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import SkillBar from "./SkillBar";
import StatCard from "./StatCard";
import ActivityCard from "./ActivityCard";
const Dashboard = ({ userName = "Hassan" }) => {
  return (
    
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold dark:text-white">
          Welcome back, <span className="text-blue-500">{userName}!</span>
        </h2>
        <p className="dark:text-gray-400 mt-1">
          Here's your career development overview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="GPA"
          value="3.75"
          subtext="out of 4.0"
          icon={<GraduationCap size={20} className="text-blue-400" />}
          colorClass="bg-blue-400/20"
        />
        <StatCard
          title="Skills Acquired"
          value="24"
          subtext="+3 this semester"
          icon={<Award size={20} className="text-green-400" />}
          colorClass="bg-green-400/20"
        />
        <StatCard
          title="Career Score"
          value="85%"
          subtext="Market ready"
          icon={<Target size={20} className="text-purple-400" />}
          colorClass="bg-purple-400/20"
        />
        <StatCard
          title="Opportunities"
          value="12"
          subtext="Matched for you"
          icon={<Briefcase size={20} className="text-orange-400" />}
          colorClass="bg-orange-400/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1e293b] rounded-2xl border border-white/5 p-6 shadow-xl">
            <div className="flex justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Recent Skills</h3>
              <button className="text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors">
                View All
              </button>
            </div>

            <div className="space-y-5">
              <SkillBar name="React.js" level={85} type="Technical" />
              <SkillBar name="Data Analysis" level={72} type="Technical" />
              <SkillBar name="Leadership" level={90} type="Soft Skills" />
              <SkillBar name="UI/UX Design" level={68} type="Technical" />
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-2xl border border-white/5 p-6 shadow-xl">
          <div className="flex justify-between mb-6">
            <h3 className="font-bold dark:text-white text-lg">
              Upcoming Milestones
            </h3>
            <button className="text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-6">
            <MilestoneItem
              icon={<BookOpen size={16} />}
              title="Complete ML Course"
              date="Apr 15, 2026"
              progress={75}
            />
            <MilestoneItem
              icon={<CheckCircle size={16} />}
              title="Capstone Project"
              date="May 01, 2026"
              progress={40}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-6 ">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-bold dark:text-white text-lg">Available Activities & Volunteering</h3>
            <p className="dark:text-gray-400 text-sm">Enhance your profile with these opportunities</p>
          </div>
          <button className="flex items-center gap-2 dark:bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 active:scale-[0.98] transition-all">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActivityCard 
            type="Workshop" 
            typeColor="bg-blue-500/10 text-blue-400 border border-blue-500/20"
            capacity="25/50" 
            icon="💻" 
            title="Tech Workshop: AI & Machine Learning" 
            organizer="University" 
            date="Mar 20, 2026" 
            location="Computer Science Building, Room 301" 
          />
          <ActivityCard 
            type="Community Service" 
            typeColor="bg-green-500/10 text-green-400 border border-green-500/20"
            capacity="15/30" 
            icon="🌳" 
            title="Community Cleanup Volunteer Day" 
            organizer="Community Center" 
            date="Mar 18, 2026" 
            location="Central Park" 
          />
          <ActivityCard 
            type="Networking" 
            typeColor="bg-purple-500/10 text-purple-400 border border-purple-500/20"
            capacity="100/200" 
            icon="💼" 
            title="Career Fair 2026" 
            organizer="University" 
            date="Mar 25, 2026" 
            location="Student Union Hall" 
          />
        </div>
      </div>
    </div>
  );
};

const MilestoneItem = ({ icon, title, date, progress }) => (
  <div className="group cursor-pointer">
    <div className="flex gap-4 items-start mb-2">
      <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-blue-400 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <p className="text-[10px] text-gray-500">Due: {date}</p>
      </div>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-600 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>

);

export default Dashboard;
