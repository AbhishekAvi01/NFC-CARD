import React from 'react';
import { mockProfileData } from '../mockData';
import { Monitor } from 'lucide-react';

export default function Navbar() {
  const { brand } = mockProfileData;

  return (
    <nav className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5 shadow-sm flex justify-between items-center transition-all">
      
    
      <div className="flex items-center gap-3">
        
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-800 uppercase">
            {brand.systemTitle}
          </span>
          <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase -mt-0.5">
            Enterprise Hub
          </span>
        </div>
      </div>

    
      <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold bg-blue-50/50 px-3 py-1.5 rounded-xl border border-blue-100/40">
        <Monitor size={14} />
        <span>Live Workspace Dashboard</span>
      </div>

    </nav>
  );
}