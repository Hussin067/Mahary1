import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const ActivityCard = ({ type, capacity, icon, title, organizer, date, location, typeColor }) => {
  return (
    <div className="bg-[#1e293b] border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/30 hover:shadow-lg transition-all group">
      
     
      <div className="flex justify-between items-center mb-4">
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${typeColor}`}>
          {type}
        </span>
        <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
          <Users size={12} />
          <span>{capacity}</span>
        </div>
      </div>
      <div className="mb-5">
        <div className="text-3xl mb-3">{icon}</div> 
        <h3 className="text-white font-bold text-[15px] leading-tight mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-xs">{organizer}</p>
      </div>

    
      <div className="mt-auto space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Calendar size={14} className="text-gray-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <MapPin size={14} className="text-gray-500" />
            <span className="truncate">{location}</span>
          </div>
        </div>
        
        <button className="w-full py-2 bg-white text-slate-900 font-bold text-sm rounded-lg hover:bg-gray-200 active:scale-[0.98] transition-all">
          Register
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;