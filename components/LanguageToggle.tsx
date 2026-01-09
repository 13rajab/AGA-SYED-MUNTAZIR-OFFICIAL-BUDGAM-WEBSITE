
import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  current: Language;
  onToggle: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ current, onToggle }) => {
  return (
    <div className="flex bg-white/10 p-1 rounded-lg backdrop-blur-md">
      <button
        onClick={() => onToggle('ur')}
        className={`px-3 py-1 rounded text-sm transition-all ${current === 'ur' ? 'bg-white text-green-800 font-bold' : 'text-white'}`}
      >
        اردو
      </button>
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1 rounded text-sm transition-all ${current === 'en' ? 'bg-white text-green-800 font-bold' : 'text-white'}`}
      >
        EN
      </button>
      <button
        onClick={() => onToggle('roman')}
        className={`px-3 py-1 rounded text-sm transition-all ${current === 'roman' ? 'bg-white text-green-800 font-bold' : 'text-white'}`}
      >
        Roman
      </button>
    </div>
  );
};

export default LanguageToggle;
