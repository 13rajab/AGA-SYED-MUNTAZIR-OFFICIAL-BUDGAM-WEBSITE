
import React, { useState } from 'react';
import { Language, Project, ProjectStatus } from '../types';
import { translations } from '../translations';
import { mockProjects } from '../services/mockStorage';

interface WorkDevelopmentProps {
  language: Language;
}

const WorkDevelopment: React.FC<WorkDevelopmentProps> = ({ language }) => {
  const t = translations[language];
  const isUrdu = language === 'ur';
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Infrastructure', 'Education', 'Health', 'Employment', 'Youth', 'Eelman',];

  const filteredProjects = filter === 'All' 
    ? mockProjects 
    : mockProjects.filter(p => p.category === filter);

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.COMPLETED: return 'bg-green-100 text-green-700 border-green-200';
      case ProjectStatus.ONGOING: return 'bg-blue-100 text-blue-700 border-blue-200';
      case ProjectStatus.PROPOSED: return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border transition-all ${
              filter === cat 
                ? 'bg-green-700 text-white border-green-700 shadow-md' 
                : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.imageUrl || 'https://picsum.photos/seed/project/800/400'} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${getStatusColor(project.status)}`}>
                  {project.status === ProjectStatus.COMPLETED ? t.completed : 
                   project.status === ProjectStatus.ONGOING ? t.ongoing : t.proposed}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className={`text-lg font-bold text-slate-800 ${isUrdu ? 'urdu-text' : ''}`}>
                  {isUrdu ? project.titleUrdu : project.title}
                </h4>
              </div>
              <p className={`text-sm text-slate-500 mb-4 line-clamp-2 ${isUrdu ? 'urdu-text' : ''}`}>
                {isUrdu ? project.descriptionUrdu : project.description}
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-layer-group"></i>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkDevelopment;
