
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactPageProps {
  language: Language;
}

const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const t = translations[language];
  const isUrdu = language === 'ur';

  const contactOptions = [
    { icon: 'fa-phone', title: 'Landline', value: '01951-255400', color: 'bg-blue-100 text-blue-600' },
    { icon: 'fa-mobile-screen', title: 'Office 1', value: '+91 60057 91113', color: 'bg-green-100 text-green-600' },
    { icon: 'fa-mobile-screen', title: 'Office 2', value: '+91 94190 08027', color: 'bg-emerald-100 text-emerald-600' },
    { icon: 'fa-envelope', title: 'Email', value: 'officemlabudgam@gmail.com', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="aspect-[16/7] bg-slate-200 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1449156003053-c306a0480731?auto=format&fit=crop&q=80&w=800" 
            alt="Budgam Constituency" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <h3 className={`text-xl font-bold ${isUrdu ? 'urdu-text' : ''}`}>
              {isUrdu ? 'ایم ایل اے بڈگام آفس' : 'MLA Budgam Office'}
            </h3>
            <p className="text-xs text-slate-300 font-medium">Serving the people with integrity</p>
          </div>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-700 shrink-0 border border-green-100">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p className={`text-sm font-bold text-slate-800 ${isUrdu ? 'urdu-text' : ''}`}>{t.address}</p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Opposite District Hospital, Budgam, Jammu & Kashmir - 191111</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0 border border-amber-100">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <p className={`text-sm font-bold text-slate-800 ${isUrdu ? 'urdu-text' : ''}`}>{t.officeHours}</p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Monday to Saturday: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connectivity Support Card */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <i className="fa-solid fa-wifi text-green-400"></i>
            <h4 className={`font-bold ${isUrdu ? 'urdu-text text-lg' : ''}`}>{t.connectivitySupport}</h4>
          </div>
          <p className={`text-xs opacity-80 leading-relaxed ${isUrdu ? 'urdu-text' : ''}`}>
            {t.connectivityDesc}
          </p>
          <div className="mt-4 flex gap-3 text-[10px] font-bold uppercase text-green-400">
            <span className="flex items-center gap-1"><i className="fa-solid fa-check"></i> Network Access</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-check"></i> BG Data</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-check"></i> All SIMs</span>
          </div>
        </div>
        <i className="fa-solid fa-tower-broadcast absolute -right-4 -bottom-4 text-white/5 text-8xl"></i>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {contactOptions.map((opt, idx) => (
          <a 
            key={idx} 
            href={opt.icon.includes('phone') || opt.icon.includes('mobile') ? `tel:${opt.value.replace(/\s+/g, '')}` : `mailto:${opt.value}`}
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-green-400 transition-all active:scale-[0.98] group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-sm ${opt.color}`}>
                <i className={`fa-solid ${opt.icon} text-lg`}></i>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{opt.title}</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-green-800 transition-colors">{opt.value}</p>
              </div>
            </div>
            <i className="fa-solid fa-chevron-right text-slate-300 text-xs group-hover:text-green-500 transition-colors"></i>
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-6 py-4">
        <a href="#" className="w-12 h-12 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-2xl flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
