
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import WorkDevelopment from './components/WorkDevelopment';
import GrievanceSystem from './components/GrievanceSystem';
import ContactPage from './components/ContactPage';
import AdminPanel from './components/AdminPanel';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ur');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Sync scroll position when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard language={language} onAction={(action) => setActiveTab(action)} />;
      case 'work':
        return <WorkDevelopment language={language} />;
      case 'assistant':
        return <Assistant language={language} />;
      case 'grievance':
        return <GrievanceSystem language={language} />;
      case 'contact':
        return <ContactPage language={language} />;
      case 'admin':
        return <AdminPanel language={language} />;
      case 'demand':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-4 text-3xl">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Public Demands</h3>
            <p className="text-slate-500 mb-6">Voice your needs. Support common demands to bring them to the MLA's attention.</p>
            <div className="space-y-4 text-left">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase">Roads</span>
                  <p className="text-sm font-semibold text-slate-800">New bridge at Sukhnag River</p>
                </div>
                <button className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-bold shadow-sm active:bg-amber-50">
                  <i className="fa-solid fa-thumbs-up"></i>
                  45
                </button>
              </div>
            </div>
            <button className="w-full mt-6 bg-amber-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-amber-600/20">
              Submit New Demand
            </button>
          </div>
        );
      default:
        return <Dashboard language={language} onAction={setActiveTab} />;
    }
  };

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
    >
      {!isOnline && (
        <div className="bg-red-500 text-white text-[10px] font-bold py-1 px-4 text-center sticky top-0 z-[60] animate-in slide-in-from-top fill-mode-forwards">
          <i className="fa-solid fa-triangle-exclamation mr-2"></i>
          {language === 'ur' ? 'آپ فی الحال آف لائن ہیں۔ کچھ خصوصیات کام نہیں کر سکتی ہیں۔' : 'You are currently offline. Some features may not work.'}
        </div>
      )}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
