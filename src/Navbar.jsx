import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  Briefcase, 
  ClipboardList,
  Bell, 
  Languages 
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ userName = "User" }) => {
  const initial = userName ? userName.charAt(0).toUpperCase() : "U";
  
  // Get current path to highlight the active menu item
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md text-white">
      
      {/* Brand Section */}
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
          <LayoutDashboard size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight leading-none">Mahary</h1>
          <p className="text-[10px] text-gray-400 font-medium">Digital Career Advisor</p>
        </div>
      </div>

      {/* Navigation Links using React Router's <Link> */}
      <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
        <CustomNavLink 
          to="/" 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboard" 
          active={location.pathname === "/"} 
        />
        <CustomNavLink 
          to="/skills" 
          icon={<ClipboardList size={18} />} 
          label="Skills Record" 
          active={location.pathname === "/skills"} 
        />
        <CustomNavLink 
          to="/roadmap" 
          icon={<Map size={18} />} 
          label="Career Roadmap" 
          active={location.pathname === "/roadmap"} 
        />
        <CustomNavLink 
          to="/opportunities" 
          icon={<Briefcase size={18} />} 
          label="Opportunities" 
          active={location.pathname === "/opportunities"} 
        />
        <CustomNavLink 
          to="/activities" 
          icon={<Bell size={18} />} 
          label="Available Activities" 
          active={location.pathname === "/activities"} 
        />
      </div>

      {/* Right Side: Utilities & Profile */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 transition-colors" title="Change Language">
            <Languages size={19} />
          </button>
          
           <ThemeToggle />
        </div>

        
        <div className="h-6 w-px bg-white/10 mx-1" />

        <button className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full hover:bg-blue-600/20 transition-all group">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm ring-2 ring-blue-600/20 group-hover:ring-blue-600/40">
            {initial}
          </div>
          <span className="text-sm font-semibold text-blue-400">{userName}</span>
        </button>
      </div>
    </nav>
  );
};

// Renamed from NavLink to CustomNavLink to avoid confusion with react-router's internal NavLink,
// and changed <button> to <Link> for proper routing.
const CustomNavLink = ({ to, icon, label, active = false }) => (
  <Link 
    to={to}
    className={`
      flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
      ${active 
        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'}
    `}
  >
    {icon}
    <span className="whitespace-nowrap">{label}</span>
  </Link>
);

export default Navbar;