
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import LanguageToggle from './LanguageToggle';

interface LayoutProps {
  children: React.ReactNode;
  language: Language;
  setLanguage: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, language, setLanguage, activeTab, setActiveTab }) => {
  const t = translations[language];
  const isUrdu = language === 'ur';

  // Direct profile image URL for Aga Syed Muntazir Mehdi
  const profileImage = "https://pbs.twimg.com/profile_images/1844005118742884352/K8Z8Z3vI_400x400.jpg";

  return (
    <div className={`min-h-screen pb-20 flex flex-col ${isUrdu ? 'rtl' : 'ltr'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden border border-white/30 shadow-inner">
              <img 
                src={profileImage} 
                alt="MLA" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Aga_Muntazir_Mehdi.jpg/1200px-Aga_Muntazir_Mehdi.jpg?20251122053614";
                }}
              />
            </div>
            <div>
              <h1 className={`font-bold text-sm sm:text-base leading-tight ${isUrdu ? 'urdu-text' : ''}`}>
                {t.mlaName}
              </h1>
              <p className="text-[10px] text-green-200 font-medium tracking-wider uppercase">{t.mlaTitle}</p>
            </div>
          </div>
          <LanguageToggle current={language} onToggle={setLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-50 px-2 overflow-x-auto">
        <div className="container mx-auto flex justify-around items-center h-16 min-w-[360px]">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center w-14 gap-1 transition-all ${activeTab === 'home' ? 'text-green-700 scale-110' : 'text-slate-400'}`}
          >
            <i className={`fa-solid fa-house ${activeTab === 'home' ? 'text-xl' : 'text-lg'}`}></i>
            <span className="text-[8px] font-black uppercase tracking-tighter">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('work')}
            className={`flex flex-col items-center justify-center w-14 gap-1 transition-all ${activeTab === 'work' ? 'text-green-700 scale-110' : 'text-slate-400'}`}
          >
            <i className={`fa-solid fa-helmet-safety ${activeTab === 'work' ? 'text-xl' : 'text-lg'}`}></i>
            <span className="text-[8px] font-black uppercase tracking-tighter">Work</span>
          </button>
          <button 
            onClick={() => setActiveTab('assistant')}
            className={`flex flex-col items-center justify-center w-14 gap-1 transition-all ${activeTab === 'assistant' ? 'text-green-700 scale-110' : 'text-slate-400'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTab === 'assistant' ? 'bg-green-700 text-white shadow-lg' : 'bg-slate-100'}`}>
              <i className="fa-solid fa-robot text-sm"></i>
            </div>
            <span className="text-[8px] font-black uppercase tracking-tighter">Madadgaar</span>
          </button>
          <button 
            onClick={() => setActiveTab('grievance')}
            className={`flex flex-col items-center justify-center w-14 gap-1 transition-all ${activeTab === 'grievance' ? 'text-green-700 scale-110' : 'text-slate-400'}`}
          >
            <i className={`fa-solid fa-circle-exclamation ${activeTab === 'grievance' ? 'text-xl' : 'text-lg'}`}></i>
            <span className="text-[8px] font-black uppercase tracking-tighter">Grievance</span>
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`flex flex-col items-center justify-center w-14 gap-1 transition-all ${activeTab === 'contact' ? 'text-green-700 scale-110' : 'text-slate-400'}`}
          >
            <i className={`fa-solid fa-address-book ${activeTab === 'contact' ? 'text-xl' : 'text-lg'}`}></i>
            <span className="text-[8px] font-black uppercase tracking-tighter">Contact</span>
          </button>
          <button 
            onClick={() => setActiveTab('admin')}
            className={`flex flex-col items-center justify-center w-14 gap-1 transition-all ${activeTab === 'admin' ? 'text-green-700 scale-110' : 'text-slate-400'}`}
          >
            <i className={`fa-solid fa-user-tie ${activeTab === 'admin' ? 'text-xl' : 'text-lg'}`}></i>
            <span className="text-[8px] font-black uppercase tracking-tighter">Office</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
