import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export default function ServicesGrid({ services }) {
  const [activeModal, setActiveModal] = useState(null);
  
  const [isExpanded, setIsExpanded] = useState(false);

  
  const displayedServices = isExpanded ? services : services.slice(0, 4);

  return (
    <div className="w-full">
      
      <div className="flex justify-between items-center mb-5 px-1">
        <div>
          <h3 className="text-base font-bold text-slate-800 tracking-tight">My Services</h3>
          <p className="text-[11px] text-slate-400 font-medium -mt-0.5">
            {services.length} Modules Available ({isExpanded ? 'Fully Expanded' : '4 Hidden'})
          </p>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 transition flex items-center gap-1 cursor-pointer bg-blue-50 px-3 py-1.5 rounded-xl hover:bg-blue-100"
        >
          <span>{isExpanded ? 'Show Less' : 'View All'}</span>
          <span className={`text-[10px] transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>➔</span>
        </button>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 transition-all duration-300">
        {displayedServices.map((item, index) => {
          const IconComponent = Icons[item.iconName] || Icons.Layers;

          return (
            <div 
              key={index}
              onClick={() => setActiveModal(item)}
              className="bg-white p-5 rounded-2xl border border-slate-100/90 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex flex-col items-center text-center justify-between hover:border-blue-200 hover:shadow-[0_8px_25px_rgba(59,130,246,0.04)] active:scale-[0.98] transition-all duration-200 cursor-pointer group animate-fade-in"
            >
              <div className="flex flex-col items-center w-full">
                <div className={`p-3.5 rounded-2xl inline-block transition-transform duration-300 group-hover:scale-110 ${item.bgClass} ${item.iconClass}`}>
                  <IconComponent size={20} strokeWidth={2.2} />
                </div>
                
                <h4 className="text-xs font-bold text-slate-800 mt-4 group-hover:text-blue-600 transition-colors tracking-tight">
                  {item.title}
                </h4>
                
                <p className="text-[10px] text-slate-400 mt-1.5 font-medium leading-relaxed max-w-[90%]">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 text-slate-300 group-hover:text-blue-500 transition-colors">
                <Icons.ArrowRight size={14} strokeWidth={2.5} className="transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      
      {activeModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto transform animate-scale-up">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${activeModal.bgClass} ${activeModal.iconClass}`}>
                  {React.createElement(Icons[activeModal.iconName] || Icons.Layers, { size: 18, strokeWidth: 2.5 })}
                </div>
                <h3 className="text-sm font-bold text-slate-800">{activeModal.title}</h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-1.5 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-full transition cursor-pointer"
              >
                <Icons.X size={14} strokeWidth={2.5} />
              </button>
            </div>
            <div className="py-5">
              <p className="text-xs font-medium text-slate-500 leading-relaxed mb-3">Retrieved system datasets:</p>
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs font-semibold text-slate-600 italic">
                "{activeModal.description}"
              </div>
            </div>
            <button 
              onClick={() => setActiveModal(null)}
              className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-xl hover:bg-slate-800 transition active:scale-95 shadow-sm cursor-pointer"
            >
              Close  Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}