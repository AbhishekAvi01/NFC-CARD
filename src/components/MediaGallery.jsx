import React, { useState } from 'react';
import { mockProfileData } from '../mockData';
import { X, Maximize2 } from 'lucide-react';

export default function MediaGallery() {
  const { gallery } = mockProfileData;
  const [activeTab, setActiveTab] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filterTabs = ['All', 'Photos', 'Videos', 'Certificates', 'Documents'];

  const filteredItems = activeTab === 'All' 
    ? gallery 
    : gallery.filter(item => item.type.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 tracking-tight">
            Media Gallery
          </h3>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
            Photos, Videos, Works, Certificates
          </p>
        </div>
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline self-end sm:self-auto">View All</span>
      </div>

    
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100 dark:border-slate-800 mb-4">
        {filterTabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab)}
            className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl transition whitespace-nowrap cursor-pointer ${
              activeTab === tab 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' 
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {filteredItems.map((item, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveLightbox(item.src)}
            className="group relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-xs cursor-pointer"
          >
            <img 
              src={item.src} 
              alt={item.type} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
            />
            
          
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-150 flex items-center justify-center">
              <div className="bg-white/90 p-2 rounded-xl backdrop-blur-xs text-slate-800 shadow-xl transform scale-90 group-hover:scale-100 transition duration-200">
                <Maximize2 size={14} />
              </div>
            </div>
            
            <span className="absolute bottom-2 left-2 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-slate-900/70 text-white backdrop-blur-xs rounded-md">
              {item.type}
            </span>
          </div>
        ))}
      </div>

      
      {activeLightbox && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={() => setActiveLightbox(null)}
            className="absolute top-5 right-5 text-white bg-slate-900/60 p-2.5 rounded-full border border-white/10 hover:bg-slate-800 transition cursor-pointer"
          >
            <X size={18} />
          </button>
          <img 
            src={activeLightbox} 
            alt="Enlarged Inspector Preview" 
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/5 animate-scale-up" 
          />
        </div>
      )}
    </div>
  );
}