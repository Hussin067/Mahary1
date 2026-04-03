import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Map, 
  Briefcase, 
  ClipboardList,
  Bell, 
  Languages,
  Menu, 
  X,
  Sun,   
  Moon   
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ userName = "User" }) => {
  const initial = userName ? userName.charAt(0).toUpperCase() : "U";
  const location = useLocation();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const [isDarkMode, setIsDarkMode] = useState(true);

  
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        
      
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
            <LayoutDashboard size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none text-slate-900 dark:text-white">Mahary</h1>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Digital Career Advisor</p>
          </div>
        </div>

        
        <div className="hidden lg:flex items-center gap-1 bg-slate-50 dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/5">
          <CustomNavLink to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" active={location.pathname === "/"} />
          <CustomNavLink to="/skills" icon={<ClipboardList size={18} />} label="Skills Record" active={location.pathname === "/skills"} />
          <CustomNavLink to="/roadmap" icon={<Map size={18} />} label="Career Roadmap" active={location.pathname === "/roadmap"} />
          <CustomNavLink to="/opportunities" icon={<Briefcase size={18} />} label="Opportunities" active={location.pathname === "/opportunities"} />
          <CustomNavLink to="/activities" icon={<Bell size={18} />} label="Available Activities" active={location.pathname === "/activities"} />
        </div>

       
        <div className="flex items-center gap-1 md:gap-3">
          
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 transition-colors" 
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button className="hidden md:block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 transition-colors" title="Change Language">
            <Languages size={19} />
          </button>

          <div className="hidden md:block h-6 w-[1px] bg-gray-200 dark:bg-white/10 mx-1" />

          {/* Profile Badge */}
          <button className="flex items-center gap-2 pl-1 pr-3 py-1 bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 rounded-full hover:bg-blue-100 dark:hover:bg-blue-600/20 transition-all ml-1">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white ring-2 ring-blue-600/20">
              {initial}
            </div>
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400 hidden sm:block">{userName}</span>
          </button>

         
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 ml-1 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-white/10 p-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2">
          <MobileNavLink to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" active={location.pathname === "/"} onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/skills" icon={<ClipboardList size={20} />} label="Skills Record" active={location.pathname === "/skills"} onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/roadmap" icon={<Map size={20} />} label="Career Roadmap" active={location.pathname === "/roadmap"} onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/opportunities" icon={<Briefcase size={20} />} label="Opportunities" active={location.pathname === "/opportunities"} onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/activities" icon={<Bell size={20} />} label="Available Activities" active={location.pathname === "/activities"} onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

const CustomNavLink = ({ to, icon, label, active = false }) => (
  <Link 
    to={to}
    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}
  >
    {icon}
    <span className="whitespace-nowrap">{label}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, label, active = false, onClick }) => (
  <Link 
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-all ${active ? 'bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}
  >
    {icon}
    {label}
  </Link>
);

export default Navbar;