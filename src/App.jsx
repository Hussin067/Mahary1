import Navbar from './Navbar';
import Dashboard from './Dashboard/Dashboard';
import SkillRecord from './SkillsRecord/SkillRecord';  
import CareerRoadmap from './CareerRoadmap/CareerRoadmap';
import Opportunities from './opportunities/Opportunities';
import Activities from './Activity/Activities';
import React , {useState} from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  const [userName, setUserName] = useState("Hassan");
  return (
    <Router>
      <div className="min-h-screen bg-oklch(98.5% 0 0) dark:bg-[#161e2e] transition-colors duration-300">
        
        <Navbar userName={userName} />
        
        
        <Routes>
          <Route path="/" element={<Dashboard userName={userName} />} />
          <Route path="/skills" element={<SkillRecord />} />
          <Route path="/roadmap" element={<CareerRoadmap />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/activities" element={<Activities />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;