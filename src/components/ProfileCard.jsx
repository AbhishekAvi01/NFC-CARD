import React, { useState } from 'react';
import { COMPONENT_DATA_PAYLOAD } from '../mockData';
import { Phone, MessageSquare, Mail, Globe, MapPin, UserPlus, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function LeftSidebar() {
  const { profile } = COMPONENT_DATA_PAYLOAD;
  const [showToast, setShowToast] = useState(false);

  const actionItems = [
    { icon: <Phone size={16} />, label: "Call", href: "tel:+919876543210" },
    { icon: <MessageSquare size={16} />, label: "WhatsApp", href: "https://wa.me/919876543210" },
    { icon: <Mail size={16} />, label: "Email", href: "mailto:abhishek@example.com" },
    { icon: <Globe size={16} />, label: "Website", href: "https://github.com", target: "_blank" },
    { icon: <MapPin size={16} />, label: "Location", href: "https://maps.google.com", target: "_blank" },
    { icon: <UserPlus size={16} />, label: "Save Node", action: "save_contact" }
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
      <div className="bg-slate-900 text-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-800 relative group">
        <div className="w-full h-24 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 opacity-80" />
        
        <div className="px-6 pb-6 relative flex flex-col items-center text-center -mt-12">
          <div className="relative">
            <img 
              src={profile.imageUrl} 
              alt={profile.name} 
              className="w-24 h-24 rounded-full aspect-square object-cover bg-slate-800 border-4 border-slate-900 shadow-xl"
            />
            <span className="absolute bottom-0 right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-slate-900 shadow-md">
              <ShieldCheck size={12} strokeWidth={3} />
            </span>
          </div>

          <h2 className="text-lg font-bold tracking-tight mt-3.5 text-white">
            {profile.name}
          </h2>
          <p className="text-xs font-semibold text-blue-400 mt-0.5 tracking-wide">
            {profile.title}
          </p>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">
            {profile.organization}
          </span>

          <div className="mt-4 inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700/60 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-400 tracking-wide">
              {profile.statusMessage}
            </span>
          </div>

          <div className="w-full grid grid-cols-4 gap-1 mt-6 pt-5 border-t border-slate-800 text-center">
            {profile.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-sm font-extrabold text-white tracking-tight">{stat.value}</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight mt-0.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-5 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] relative">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3.5 px-1">
          Quick Connections
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
                className="flex flex-col items-center justify-center py-3 px-1 bg-slate-50 hover:bg-blue-50/50 active:scale-95 rounded-xl border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:border-blue-100 transition-all duration-150 group cursor-pointer text-center"
              >
                <div className="text-slate-600 group-hover:text-blue-600 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold text-slate-500 mt-1.5 block tracking-tight group-hover:text-blue-700">
                  {item.label}
                </span>
              </Tag>
            );
          })}
        </div>

        {showToast && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-lg z-50 whitespace-nowrap animate-fade-in">
            <CheckCircle2 size={12} className="text-emerald-400" />
            <span>Node Synchronized Successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
}