import Navbar from './Navbar';
import Dashboard from './Dashboard/Dashboard';
import SkillRecord from './SkillsRecord/SkillRecord';  
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;