import React, { useState } from 'react';
import { mockProfileData } from '../mockData';
import { 
  Phone, MessageSquare, Mail, Globe, MapPin, UserPlus, 
  CheckCircle2, ShieldCheck, Languages, GraduationCap, Wifi
} from 'lucide-react';

export default function LeftSidebar() {
  const { profile } = mockProfileData;
  const [showToast, setShowToast] = useState(false);

  const actionItems = [
    { icon: <Phone size={16} />, label: "Call", href: "tel:+919267991060" },
    { icon: <MessageSquare size={16} />, label: "WhatsApp", href: "https://wa.me/919267991060" },
    { icon: <Mail size={16} />, label: "Email", href: "mailto:kabhishek47709@gmail.com" },
    { icon: <Globe size={16} />, label: "Website", href: "https://github.com", target: "_blank" },
    { icon: <MapPin size={16} />, label: "Location", href: "#" },
    { icon: <UserPlus size={16} />, label: "Save", action: "save_contact" }
  ];

  const handleActionClick = (e, item) => {
    if (item.action === "save_contact") {
      e.preventDefault();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
    
      <div className="w-full bg-[#030712] text-white rounded-[2rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border border-slate-800/60 relative transition-all duration-300">
        
    
        <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl flex items-center gap-1 text-[9px] font-black tracking-widest text-slate-300 uppercase z-20">
          <Wifi size={10} className="rotate-90 animate-pulse" />
          <span>NFC ))</span>
        </div>

    
        <div className="p-5 sm:p-6 flex flex-row items-start gap-4 sm:gap-6 pt-10 pb-7 relative z-10 w-full">
          
          
          <div className="relative shrink-0">
            <div className="p-1 rounded-full bg-slate-900 border-2 border-emerald-500 shadow-md">
              <img 
                src={profile.imageUrl} 
                alt={profile.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-slate-800"
              />
            </div>
            <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border border-slate-900 shadow-md flex items-center justify-center">
              <ShieldCheck size={11} strokeWidth={3} />
            </span>
          </div>

          
          <div className="flex-1 min-w-0 flex flex-col items-start pt-1">
            <h2 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 w-full">
              <span className="truncate">{profile.name}</span>
              <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold shrink-0">✓</span>
            </h2>
            
            <p className="text-xs font-bold text-blue-400 mt-0.5 tracking-wide uppercase">
              {profile.title || "React.js Developer"}
            </p>
            
            <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5 block truncate w-full">
              {profile.organization || "EYEREXUS"}
            </span>

            <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-2.5 mb-2" />

            <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-xs break-words">
              {profile.bio || "Passionate React.js Developer with 3+ years of experience."}
            </p>
          </div>

        </div>

        
        <div className="w-full bg-slate-900/80 border-t border-slate-800/80 px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] md:text-xs font-bold text-slate-300 tracking-wide z-10">
          
          
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-400 transition-colors shrink-0">
            <Phone size={12} className="text-slate-500 shrink-0" />
            <span className="break-all">{profile.phone || "+91 9267991060"}</span>
          </a>

        
          <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />

        
          <a href="mailto:abhishek@example.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors shrink-0 min-w-0">
            <Mail size={12} className="text-slate-500 shrink-0" />
            <span className="break-all">{profile.email || "kabhishek47709@gmail.com"}</span>
          </a>

        
          <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />

          
          <div className="flex items-center gap-2 text-slate-400 shrink-0">
            <MapPin size={12} className="text-blue-500 shrink-0" />
            <span className="break-words">{profile.location || "Delhi, India"}</span>
          </div>

        </div>

      </div>

      
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-sm transition-colors relative">
        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3.5 px-1">
          Quick Actions
        </span>
        <div className="grid grid-cols-3 gap-2">
          {actionItems.map((item, index) => {
            const Tag = item.href ? 'a' : 'button';
            return (
              <Tag
                key={index}
                href={item.href || undefined}
                target={item.target || undefined}
                rel={item.target ? "noopener noreferrer" : undefined}
                onClick={(e) => handleActionClick(e, item)}
                className="flex flex-col items-center justify-center py-3 px-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 active:scale-95 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs hover:border-blue-100 dark:hover:border-blue-900 transition-all cursor-pointer text-center group"
              >
                <div className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1.5 block tracking-tight group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  {item.label}
                </span>
              </Tag>
            );
          })}
        </div>
      </div>

    
      <div className="bg-white dark:bg-slate-900 p-5 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-sm transition-colors flex flex-col gap-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
              About Section
            </span>
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">... Read More</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {profile.bio}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 py-2 border-y border-slate-100 dark:border-slate-800">
          {profile.skills?.map((skill, i) => (
            <span key={i} className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Languages size={14} className="text-slate-400 dark:text-slate-500" />
            <span>{profile.languages?.join(' / ')}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap size={14} className="text-slate-400 dark:text-slate-500" />
            <span>{profile.education}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-slate-400 dark:text-slate-500" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-2xl z-50 whitespace-nowrap animate-fade-in">
          <CheckCircle2 size={12} className="text-emerald-400" />
          <span>Contact Node Saved to Contacts Stack!</span>
        </div>
      )}
    </div>
  );
}