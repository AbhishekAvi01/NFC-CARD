import React, { useState, useEffect, useRef } from 'react';
import { mockProfileData } from '../mockData';
import { 
  Monitor, MoreVertical, Sun, Moon, Share2, Download, 
  ShieldAlert, UserX, Smartphone, Tablet, MonitorIcon, Eye,
  Settings, ChevronDown, ChevronUp, Edit3, EyeOff
} from 'lucide-react';

export default function Navbar({
  visibility, toggleVisibility, isEditing, setIsEditing, editForm, handleInputChange,
  saveProfileUpdates, cancelProfileUpdates, currentAppTheme, onChangeAppTheme,
  onShare, onDownloadVCard, onReport, onBlock
}) {
  const brand = mockProfileData?.brand || { systemTitle: "NFC CARD" };
  const [showOptions, setShowOptions] = useState(false);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const [showWorkspaceControls, setShowWorkspaceControls] = useState(false);
  
  const optionsRef = useRef(null);
  const responsiveRef = useRef(null);
  const workspaceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) setShowOptions(false);
      if (responsiveRef.current && !responsiveRef.current.contains(event.target)) setShowResponsiveMenu(false);
      if (workspaceRef.current && !workspaceRef.current.contains(event.target)) setShowWorkspaceControls(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateDeviceMode = (deviceId) => {
    setShowResponsiveMenu(false);
    window.dispatchEvent(new CustomEvent('deviceLayoutChange', { detail: { mode: deviceId } }));
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 sticky top-0 z-50 px-3 sm:px-6 py-3.5 shadow-sm flex justify-between items-center transition-all">
      <span className="text-[11px] sm:text-sm font-bold uppercase">{brand.systemTitle}</span>

      <div className="flex items-center gap-2">
        
      
        <div className="relative" ref={workspaceRef}>
          <button onClick={() => setShowWorkspaceControls(!showWorkspaceControls)} className="flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-bold">
            <Settings size={14} /> Setup <ChevronDown size={12} />
          </button>
          {showWorkspaceControls && (
            <div className="fixed md:absolute left-4 right-4 md:left-auto md:right-0 top-16 md:top-12 w-[calc(100vw-2rem)] md:w-[320px] bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 rounded-2xl shadow-2xl z-50 p-4 sm:p-5 animate-scale-up flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Workspace Core</span>
                {!isEditing && (
                  <button onClick={() => { setIsEditing(true); setShowWorkspaceControls(false); }} className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg cursor-pointer transition-all">
                    <Edit3 size={11} /> Edit Content
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-2.5 text-[11px] font-bold text-slate-600 dark:text-slate-400 text-left bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block border-b border-slate-200/30 pb-1.5 mb-0.5">Visibility Layers</span>
                {['profilePicture', 'titleBlock', 'organizationBlock', 'bioBlock', 'qrSection'].map((key) => (
                  <button key={key} onClick={() => toggleVisibility(key)} className="flex items-center justify-between w-full py-0.5 cursor-pointer hover:text-blue-500 transition-colors">
                    <span className="flex items-center gap-2 truncate">
                      {visibility[key] ? <Eye size={13} className="text-emerald-500 shrink-0" /> : <EyeOff size={13} className="text-slate-400 shrink-0" />} 
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black shrink-0 ${visibility[key] ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-200 text-slate-400'}`}>
                      {visibility[key] ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      
        <div className="relative" ref={responsiveRef}>
          <button onClick={() => setShowResponsiveMenu(!showResponsiveMenu)} className="flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-bold">
            <Eye size={14} /> View
          </button>
          {showResponsiveMenu && (
            <div className="absolute right-0 top-12 w-64 bg-white dark:bg-slate-800 border rounded-2xl shadow-xl z-50 p-2">
              {[ {id:'mobile', label:'Mobile'}, {id:'tablet', label:'Tablet'}, {id:'desktop', label:'Desktop'} ].map(dev => (
                <button key={dev.id} onClick={() => updateDeviceMode(dev.id)} className="w-full p-2 hover:bg-slate-100 rounded-xl text-xs font-bold text-left">
                  {dev.label}
                </button>
              ))}
            </div>
          )}
        </div>

        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border">
          <button onClick={() => onChangeAppTheme('light')} className={`p-1.5 rounded-lg ${currentAppTheme === 'light' ? 'bg-white text-amber-500' : 'text-slate-400'}`}>
            <Sun size={14} />
          </button>
          <button onClick={() => onChangeAppTheme('dark')} className={`p-1.5 rounded-lg ${currentAppTheme === 'dark' ? 'bg-slate-700 text-blue-400' : 'text-slate-400'}`}>
            <Moon size={14} />
          </button>
        </div>

      
        <div className="relative" ref={optionsRef}>
          <button onClick={() => setShowOptions(!showOptions)} className="p-2 border rounded-xl"><MoreVertical size={16}/></button>
          {showOptions && (
            <div className="absolute right-0 top-12 w-52 bg-white dark:bg-slate-800 border rounded-2xl shadow-xl z-50 p-1.5">
              <button onClick={() => { onShare(); setShowOptions(false); }} className="w-full flex items-center gap-3 p-2 text-xs font-semibold hover:bg-slate-100 rounded-xl"><Share2 size={14}/> Share</button>
              <button onClick={() => { onDownloadVCard(); setShowOptions(false); }} className="w-full flex items-center gap-3 p-2 text-xs font-semibold hover:bg-slate-100 rounded-xl"><Download size={14}/> vCard</button>
              <button onClick={() => { onReport(); setShowOptions(false); }} className="w-full flex items-center gap-3 p-2 text-xs font-semibold hover:bg-slate-100 rounded-xl text-amber-600"><ShieldAlert size={14}/> Report</button>
              <button onClick={() => { onBlock(); setShowOptions(false); }} className="w-full flex items-center gap-3 p-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl"><UserX size={14}/> Block</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}