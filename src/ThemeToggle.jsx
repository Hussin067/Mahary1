import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all duration-300"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun size={19} className="animate-in zoom-in duration-300" />
      ) : (
        <Moon size={19} className="animate-in zoom-in duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;