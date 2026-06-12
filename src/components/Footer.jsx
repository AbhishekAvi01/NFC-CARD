import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function BottomCTA() {
  return (
    <div className="w-full">
      
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(15,23,42,0.15)] relative overflow-hidden group border border-slate-800">
        
    
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl" />

    
        <div className="text-center sm:text-left relative z-10">
          <h3 className="text-base sm:text-lg font-black tracking-tight text-white uppercase">
            Let's Work Together
          </h3>
          
          <p className="text-xs text-slate-300 font-medium mt-1.5 max-w-md leading-relaxed">
            I'm always open to discussing new projects, high-scale architectures, creative ideas, or optimization opportunities.
          </p>
        </div>

    
        <a 
          href="mailto:abhishek@example.com"
          className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-500 font-bold text-xs px-6 py-3.5 rounded-xl active:scale-95 transition-all duration-150 shadow-lg shadow-blue-600/20 whitespace-nowrap relative z-10 group/btn cursor-pointer border border-blue-500/50"
        >
          <Mail size={14} strokeWidth={2.5} />
          <span>Contact Me</span>
          <ArrowUpRight size={14} strokeWidth={2.5} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>

      </div>
    </div>
  );
}