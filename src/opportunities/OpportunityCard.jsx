import React from 'react';
import { Building2, MapPin, Clock, CircleDollarSign, Calendar, ExternalLink, Star } from 'lucide-react';

const OpportunityCard = ({ 
  title, company, location, matchPercentage, description, 
  skills, type, duration, salary, posted, isRemote 
}) => {
  const isHighMatch = matchPercentage >= 85;

  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm dark:shadow-none hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all group">
      
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/10 flex-shrink-0">
            <Building2 className="text-gray-500 dark:text-gray-400" size={24} />
          </div>
          
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {title}
              </h3>
              {isRemote && (
                <span className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Remote
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
              <span className="flex items-center gap-1"><Building2 size={14} /> {company}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-gray-300 mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, idx) => (
                <span key={idx} className="bg-slate-100 dark:bg-[#0f172a] border border-gray-200 dark:border-white/5 text-slate-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                {type}
              </span>
              <span className="flex items-center gap-1"><Clock size={14} /> {duration}</span>
              <span className="flex items-center gap-1"><CircleDollarSign size={14} /> {salary}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {posted}</span>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col justify-between items-end gap-4 min-w-120px border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 dark:border-white/5">
          <div className={`flex items-center gap-1 text-lg font-bold ${isHighMatch ? 'text-green-500' : 'text-blue-500'}`}>
            <Star size={18} fill="currentColor" />
            {matchPercentage}%
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 active:scale-[0.98] transition-all">
              Apply Now
            </button>
            <button className="p-2 border border-gray-200 dark:border-white/10 rounded-lg text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
              Save
            </button>
            <button className="p-2 text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors hidden sm:block">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OpportunityCard;