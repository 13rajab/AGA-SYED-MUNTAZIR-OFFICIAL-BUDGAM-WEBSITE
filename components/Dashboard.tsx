
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface DashboardProps {
  language: Language;
  onAction: (action: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ language, onAction }) => {
  const t = translations[language];
  const isUrdu = language === 'ur';

  // Direct profile image URL for Aga Syed Muntazir Mehdi
  const profileImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Aga_Muntazir_Mehdi.jpg/1200px-Aga_Muntazir_Mehdi.jpg?20251122053614";

  return (
    <div className="space-y-6">
      {/* Network Stability Badge */}
      <div className="flex justify-center -mb-4">
        <div className="bg-green-100 border border-green-200 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-sm">
          <i className="fa-solid fa-signal text-[8px]"></i>
          <span>{t.networkOptimized}</span>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-white/50 overflow-hidden shadow-lg bg-white/20">
               <img 
                 src={profileImage} 
                 alt="MLA Profile" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                  (e.target as HTMLImageElement).src = profileImage;
                 }}
               />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${isUrdu ? 'urdu-text' : ''}`}>{t.welcome}</h2>
              <p className="text-green-100 text-xs opacity-80 uppercase tracking-widest font-semibold">Serving Budgam since Oct 2024</p>
            </div>
          </div>
          
          <p className="text-green-50 opacity-90 text-sm leading-relaxed mb-6">
            {isUrdu ? 
              "ہمارا مقصد بڈگام کی تعمیر و ترقی اور آپ کی آواز کو ایوان تک پہنچانا ہے۔ یہ ایپ آپ اور میرے درمیان ایک براہ راست پل ہے۔" : 
              "Our goal is the development of Budgam and bringing your voice to the assembly. This app is a direct bridge between you and me."
            }
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => onAction('work')}
              className="bg-white text-green-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-green-50 transition-colors shadow-lg active:scale-95"
            >
              {isUrdu ? 'مزید جانئے' : 'Learn More'}
            </button>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 opacity-10">
          <i className="fa-solid fa-landmark text-[12rem]"></i>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => onAction('grievance')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-2 hover:shadow-md transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
            <i className="fa-solid fa-file-signature text-xl"></i>
          </div>
          <span className={`text-sm font-bold text-slate-700 ${isUrdu ? 'urdu-text' : ''}`}>{t.submitGrievance}</span>
        </button>
        
        <button 
          onClick={() => onAction('work')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-2 hover:shadow-md transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
            <i className="fa-solid fa-helmet-safety text-xl"></i>
          </div>
          <span className={`text-sm font-bold text-slate-700 ${isUrdu ? 'urdu-text' : ''}`}>{t.mlaWork}</span>
        </button>

        <button 
          onClick={() => onAction('demand')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-2 hover:shadow-md transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
            <i className="fa-solid fa-bullhorn text-xl"></i>
          </div>
          <span className={`text-sm font-bold text-slate-700 ${isUrdu ? 'urdu-text' : ''}`}>{t.publicDemand}</span>
        </button>

        <button 
          onClick={() => onAction('contact')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-2 hover:shadow-md transition-all active:scale-95"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
            <i className="fa-solid fa-building-user text-xl"></i>
          </div>
          <span className={`text-sm font-bold text-slate-700 ${isUrdu ? 'urdu-text' : ''}`}>{t.contactOffice}</span>
        </button>
      </div>

      {/* Latest Announcements */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <h3 className={`font-bold text-slate-800 ${isUrdu ? 'urdu-text' : ''}`}>{t.latestAnnouncements}</h3>
          <span className="text-xs text-green-700 font-bold cursor-pointer hover:underline">View All</span>
        </div>
        <div className="divide-y divide-slate-100">
          <div className="p-4 flex gap-4 items-start hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="bg-green-50 text-green-700 px-2 py-1.5 rounded-lg text-center min-w-[50px] border border-green-100">
              <span className="block text-[10px] font-bold uppercase">Oct</span>
              <span className="block text-lg font-black leading-none">28</span>
            </div>
            <div>
              <p className={`text-sm font-bold text-slate-800 group-hover:text-green-700 transition-colors ${isUrdu ? 'urdu-text text-lg' : ''}`}>
                {isUrdu ? 'بڈگام میں نئے یوتھ سنٹر کا افتتاح' : 'Inauguration of New Youth Centre in Budgam'}
              </p>
              <p className={`text-xs text-slate-500 mt-1 ${isUrdu ? 'urdu-text' : ''}`}>
                {isUrdu ? 'آج شام 5 بجے بڈگام ٹاؤن ہال میں تقریب منعقد ہوگی۔' : 'Ceremony at Budgam Town Hall today at 5 PM.'}
              </p>
            </div>
          </div>

          <div className="p-4 flex gap-4 items-start hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="bg-blue-50 text-blue-700 px-2 py-1.5 rounded-lg text-center min-w-[50px] border border-blue-100">
              <span className="block text-[10px] font-bold uppercase">Oct</span>
              <span className="block text-lg font-black leading-none">22</span>
            </div>
            <div>
              <p className={`text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors ${isUrdu ? 'urdu-text text-lg' : ''}`}>
                {isUrdu ? 'پینے کے صاف پانی کی اسکیم کا جائزہ' : 'Review of Clean Drinking Water Scheme'}
              </p>
              <p className={`text-xs text-slate-500 mt-1 ${isUrdu ? 'urdu-text' : ''}`}>
                {isUrdu ? 'پی ایچ ای حکام کے ساتھ خصوصی میٹنگ منعقد ہوئی۔' : 'Special meeting held with PHE officials.'}
              </p>
            </div>
          </div>
          
          <div className="p-4 flex gap-4 items-start hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="bg-amber-50 text-amber-700 px-2 py-1.5 rounded-lg text-center min-w-[50px] border border-amber-100">
              <span className="block text-[10px] font-bold uppercase">Oct</span>
              <span className="block text-lg font-black leading-none">12</span>
            </div>
            <div>
              <p className={`text-sm font-bold text-slate-800 group-hover:text-amber-700 transition-colors ${isUrdu ? 'urdu-text text-lg' : ''}`}>
                {isUrdu ? 'عوامی دربار کا انعقاد' : 'Public Darbar Organized'}
              </p>
              <p className={`text-xs text-slate-500 mt-1 ${isUrdu ? 'urdu-text' : ''}`}>
                {isUrdu ? 'لوگوں کے مسائل براہ راست سننے کے لیے بڈگام کے مختلف علاقوں کا دورہ۔' : 'Visiting various areas of Budgam to listen to public issues directly.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
