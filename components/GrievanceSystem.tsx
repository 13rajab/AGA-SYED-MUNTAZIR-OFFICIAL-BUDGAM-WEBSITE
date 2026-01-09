
import React, { useState } from 'react';
import { Language, Grievance } from '../types';
import { translations } from '../translations';
import { mockGrievances } from '../services/mockStorage';
import { generateGrievanceSummary } from '../services/geminiService';

interface GrievanceSystemProps {
  language: Language;
}

const GrievanceSystem: React.FC<GrievanceSystemProps> = ({ language }) => {
  const t = translations[language];
  const isUrdu = language === 'ur';
  const [view, setView] = useState<'form' | 'tracking'>('form');
  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    area: '',
    department: 'General',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    const id = `GRV-${Math.floor(1000 + Math.random() * 9000)}`;
    const summary = await generateGrievanceSummary(formData.description);
    console.log("AI Summary:", summary);

    setTimeout(() => {
      setLoading(false);
      setSubmittedId(id);
      setView('tracking');
      // In a real app, we'd add this to the database
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex bg-slate-100 p-1 rounded-lg">
        <button 
          onClick={() => setView('form')}
          className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all ${view === 'form' ? 'bg-white shadow text-green-700' : 'text-slate-500'}`}
        >
          {t.submitGrievance}
        </button>
        <button 
          onClick={() => setView('tracking')}
          className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all ${view === 'tracking' ? 'bg-white shadow text-green-700' : 'text-slate-500'}`}
        >
          {t.tracking}
        </button>
      </div>

      {view === 'form' ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <div>
            <label className={`block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider ${isUrdu ? 'urdu-text' : ''}`}>{t.name}</label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder={isUrdu ? 'اپنا پورا نام درج کریں' : 'Full Name'}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider ${isUrdu ? 'urdu-text' : ''}`}>{t.phone}</label>
              <input 
                required
                type="tel" 
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                placeholder="10 digit number"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
              />
            </div>
            <div>
              <label className={`block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider ${isUrdu ? 'urdu-text' : ''}`}>{t.area}</label>
              <input 
                required
                type="text" 
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
                placeholder={isUrdu ? 'گاؤں یا محلہ' : 'Village/Area'}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
              />
            </div>
          </div>
          <div>
            <label className={`block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider ${isUrdu ? 'urdu-text' : ''}`}>{t.department}</label>
            <select 
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 transition-all outline-none appearance-none"
            >
              <option value="Roads">PWD (Roads & Buildings)</option>
              <option value="Electricity">PDD (Electricity)</option>
              <option value="Water">PHE (Water)</option>
              <option value="Health">Health Services</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className={`block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider ${isUrdu ? 'urdu-text' : ''}`}>{t.description}</label>
            <textarea 
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder={isUrdu ? 'اپنا مسئلہ تفصیل سے بیان کریں...' : 'Describe your issue in detail...'}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 transition-all outline-none resize-none"
            />
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
            <i className="fa-solid fa-circle-info text-blue-500 mt-0.5"></i>
            <p className="text-xs text-blue-700 leading-relaxed">
              {isUrdu ? 
                "آپ کی فراہم کردہ معلومات خفیہ رکھی جائیں گی اور صرف ایم ایل اے آفس کے متعلقہ اہلکار ہی ان تک رسائی حاصل کر سکیں گے۔" :
                "The information you provide will be kept confidential and only accessible to relevant MLA office staff."}
            </p>
          </div>

          <button 
            disabled={loading}
            type="submit"
            className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-700/20 hover:bg-green-800 transition-all active:scale-[0.98] disabled:bg-slate-300 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i>
                <span>{t.submit}</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          {submittedId && (
            <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                <i className="fa-solid fa-check"></i>
              </div>
              <div>
                <h4 className="font-bold text-green-800">{t.success}</h4>
                <p className="text-sm text-green-700">Your ID: <span className="font-mono font-black">{submittedId}</span></p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y">
            {mockGrievances.map(grv => (
              <div key={grv.id} className="p-4 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">#{grv.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    grv.status === 'Resolved' ? 'bg-green-100 text-green-600' : 
                    grv.status === 'In Review' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {grv.status}
                  </span>
                </div>
                <h5 className="font-bold text-slate-800 text-sm mb-1">{grv.department}</h5>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">{grv.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">
                    <i className="fa-solid fa-calendar-days mr-1"></i>
                    {new Date(grv.timestamp).toLocaleDateString()}
                  </span>
                  <button className="text-[10px] font-bold text-green-700 hover:underline">View Progress</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GrievanceSystem;
