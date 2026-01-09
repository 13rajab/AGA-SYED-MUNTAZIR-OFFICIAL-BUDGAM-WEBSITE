
import React, { useState } from 'react';
import { Language, Grievance } from '../types';
import { translations } from '../translations';
import { mockGrievances } from '../services/mockStorage';

interface AdminPanelProps {
  language: Language;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ language }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');
  const [grievances, setGrievances] = useState<Grievance[]>(mockGrievances);
  const isUrdu = language === 'ur';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '2024') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect PIN');
    }
  };

  const updateStatus = (id: string, newStatus: Grievance['status']) => {
    setGrievances(prev => prev.map(g => g.id === id ? { ...g, status: newStatus } : g));
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full max-w-sm text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700 mx-auto mb-4 text-2xl">
            <i className="fa-solid fa-lock"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Office Access</h3>
          <p className="text-slate-500 text-sm mb-6">Enter secure PIN to manage constituency issues.</p>
          <input 
            type="password" 
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="****"
            className="w-full px-4 py-4 text-center text-2xl tracking-[1em] bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none mb-4"
          />
          <button type="submit" className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all">
            Login to Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <i className="fa-solid fa-gauge-high text-green-600"></i>
          Office Dashboard
        </h2>
        <button onClick={() => setIsLoggedIn(false)} className="text-xs text-red-600 font-bold hover:underline uppercase">Logout</button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total</p>
          <p className="text-2xl font-black text-slate-800">{grievances.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active</p>
          <p className="text-2xl font-black text-blue-600">1</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Resolved</p>
          <p className="text-2xl font-black text-green-600">0</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-700">Recent Grievances</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {grievances.map(g => (
            <div key={g.id} className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{g.name} <span className="text-slate-400 font-normal">({g.mobile})</span></h4>
                  <p className="text-xs text-slate-500">{g.area} • {g.department}</p>
                </div>
                <select 
                  value={g.status}
                  onChange={(e) => updateStatus(g.id, e.target.value as any)}
                  className={`text-[10px] font-bold py-1 px-2 rounded-lg border outline-none ${
                    g.status === 'Resolved' ? 'bg-green-100 text-green-700 border-green-200' : 
                    g.status === 'In Review' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <option value="Submitted">Submitted</option>
                  <option value="In Review">In Review</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
              <p className="text-xs bg-slate-50 p-2 rounded border border-slate-100 text-slate-600 italic">
                "{g.description}"
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-50 text-green-700 text-[10px] font-bold py-2 rounded uppercase border border-green-100 hover:bg-green-100">Contact Citizen</button>
                <button className="flex-1 bg-slate-50 text-slate-700 text-[10px] font-bold py-2 rounded uppercase border border-slate-200 hover:bg-slate-100">Assign Officer</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-2">
          <i className="fa-solid fa-file-pdf"></i>
          Export Report
        </button>
        <button className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-2">
          <i className="fa-solid fa-plus"></i>
          Post Update
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
