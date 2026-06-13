import React from 'react';
import { 
  Zap, Shield, BarChart3, Sliders, Lock, Search, Globe, Eye 
} from 'lucide-react';

export default function MicroDetails() {
  const detailsData = [
    {
      icon: <Zap size={16} />,
      title: "Performance",
      desc: "Optimized images, lazy loading, fast response",
      iconClass: "text-amber-500 bg-amber-50 dark:bg-amber-950/30"
    },
    {
      icon: <Shield size={16} />,
      title: "Security",
      desc: "Secure connection, data encryption, safe sharing",
      iconClass: "text-blue-500 bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: <BarChart3 size={16} />,
      title: "Analytics",
      desc: "Profile views, actions, clicks, engagement",
      iconClass: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30"
    },
    {
      icon: <Sliders size={16} />,
      title: "Customization",
      desc: "User controls what to show & how to show",
      iconClass: "text-purple-500 bg-purple-50 dark:bg-purple-950/30"
    },
    {
      icon: <Lock size={16} />,
      title: "Privacy",
      desc: "User decides what info is visible",
      iconClass: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
    },
    {
      icon: <Search size={16} />,
      title: "SEO Friendly",
      desc: "Meta tags, open graph, rich previews",
      iconClass: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30"
    },
    {
      icon: <Globe size={16} />,
      title: "Multi Language",
      desc: "Supports multiple languages globally",
      iconClass: "text-teal-500 bg-teal-50 dark:bg-teal-950/30"
    },
    {
      icon: <Eye size={16} />,
      title: "Accessibility",
      desc: "Screen reader friendly, high contrast",
      iconClass: "text-rose-500 bg-rose-50 dark:bg-rose-950/30"
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] p-5 sm:p-6 lg:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300">
      
    
      <div className="mb-6">
        <h3 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          13. MICRO LEVEL DETAILS <span className="text-slate-400 dark:text-slate-500 font-bold">(BEHIND THE SCENES)</span>
        </h3>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
        {detailsData.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-start gap-2.5 p-1 transition-transform duration-200 hover:translate-y-[-2px]"
          >
        
            <div className={`p-2 rounded-xl shrink-0 ${item.iconClass}`}>
              {item.icon}
            </div>
            
    
            <div className="flex flex-col gap-0.5">
              <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}