
import React, { useState, useEffect, useRef } from 'react';
import { mockProfileData } from '../mockData';
import { 
  Monitor, MoreVertical, Sun, Moon, Share2, Download, 
  ShieldAlert, UserX, CheckCircle2, Smartphone, Tablet, MonitorIcon, Eye 
} from 'lucide-react';

export default function Navbar() {
  const { brand } = mockProfileData;
  
  const [showOptions, setShowOptions] = useState(false);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const [themeMode, setThemeMode] = useState('light');
  const [toastMessage, setToastMessage] = useState('');
  const [layoutMode, setLayoutMode] = useState('desktop'); 
  
  const optionsRef = useRef(null);
  const responsiveRef = useRef(null);

  const devices = [
    { id: 'mobile', label: 'Mobile', range: '320px-768px', icon: <Smartphone size={14} /> },
    { id: 'tablet', label: 'Tablet', range: '768px-1024px', icon: <Tablet size={14} /> },
    { id: 'desktop', label: 'Desktop', range: '1024px & above', icon: <MonitorIcon size={14} /> }
  ];

  const updateDeviceMode = (deviceId) => {
    setLayoutMode(deviceId);
    setShowResponsiveMenu(false);
    
    const event = new CustomEvent('deviceLayoutChange', { detail: { mode: deviceId } });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) setShowOptions(false);
      if (responsiveRef.current && !responsiveRef.current.contains(event.target)) setShowResponsiveMenu(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (themeMode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [themeMode]);

  const handleAction = (message) => {
    setToastMessage(message);
    setShowOptions(false);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 sticky top-0 z-50 px-3 sm:px-6 py-3.5 shadow-sm flex justify-between items-center transition-all">
      
    
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        
        <div className="flex flex-col">
          <span className="text-[11px] sm:text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200 uppercase truncate max-w-[120px] sm:max-w-none">
            {brand.systemTitle}
          </span>
          <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 tracking-wider uppercase -mt-0.5">
            Enterprise Hub
          </span>
        </div>
      </div>

    
      <div className="hidden md:flex items-center gap-1.5 text-blue-600 text-xs font-semibold bg-blue-50/50 dark:bg-blue-950/30 px-3 py-1.5 rounded-xl border border-blue-100/40 dark:border-blue-900/50">
        <Monitor size={14} />
        <span>Live Workspace Dashboard</span>
      </div>

      
      <div className="flex items-center gap-2 sm:gap-3">
        
    
        <div className="relative" ref={responsiveRef}>
          <button
            onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
            className="flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 border bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-700 rounded-xl transition text-[11px] sm:text-xs font-bold cursor-pointer"
          >
            <Eye size={13} className="shrink-0" />
            <span className="capitalize truncate max-w-[50px] sm:max-w-none">{layoutMode} View</span>
          </button>

          
          {showResponsiveMenu && (
            <div className="absolute right-[-40px] sm:right-0 top-12 w-[280px] sm:w-64 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-2xl shadow-xl z-50 p-3.5 sm:p-4 animate-scale-up">
              
              {/* Heading Grid Area */}
              <div className="mb-3 px-1">
                <h4 className="text-[10px] sm:text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                   RESPONSIVE VIEW
                </h4>
                <p className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-0.5 leading-tight">
                  Fully optimized for all devices
                </p>
              </div>

            
              <div className="flex flex-col gap-1">
                {devices.map((dev) => {
                  const isCurrentActive = layoutMode === dev.id;
                  return (
                    <button
                      key={dev.id}
                      onClick={() => updateDeviceMode(dev.id)}
                      className={`w-full flex items-center justify-between p-2 sm:p-2.5 rounded-xl border text-[11px] font-bold text-left cursor-pointer transition-all ${
                        isCurrentActive
                          ? 'bg-blue-50/70 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300'
                          : 'bg-slate-50/40 dark:bg-slate-800/20 border-slate-100/60 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                  
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className={`shrink-0 ${isCurrentActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                          {dev.icon}
                        </div>
                        <span className="truncate">{dev.label}</span>
                      </div>
                      
                      
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-tight">
                          {dev.range}
                        </span>
                        {isCurrentActive && (
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shrink-0" />
                        )}
                      </div>

                    </button>
                  );
                })}
              </div>

            </div>
          )}
        </div>

        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700 shrink-0">
          <button 
            onClick={() => setThemeMode('light')}
            className={`p-1 sm:p-1.5 rounded-lg transition-colors cursor-pointer ${themeMode === 'light' ? 'bg-white dark:bg-slate-700 text-amber-500 shadow-xs' : 'text-slate-400'}`}
          >
            <Sun size={13} />
          </button>
          <button 
            onClick={() => setThemeMode('dark')}
            className={`p-1 sm:p-1.5 rounded-lg transition-colors cursor-pointer ${themeMode === 'dark' ? 'bg-slate-700 text-blue-400 shadow-xs' : 'text-slate-400'}`}
          >
            <Moon size={13} />
          </button>
        </div>

        
        <div className="relative shrink-0" ref={optionsRef}>
          <button 
            onClick={() => setShowOptions(!showOptions)}
            className="p-1.5 sm:p-2 border rounded-xl transition text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200/60 dark:border-slate-700 cursor-pointer"
          >
            <MoreVertical size={14} />
          </button>

          {showOptions && (
            <div className="absolute right-0 top-12 w-48 sm:w-52 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-2xl shadow-xl z-50 p-1.5 animate-scale-up">
              <button 
                onClick={() => handleAction('Profile link copied to clipboard!')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition cursor-pointer group"
              >
                <Share2 size={14} className="text-blue-500" />
                <span>Share Profile</span>
              </button>

              <button 
                onClick={() => handleAction('Contact vCard (.vcf) downloaded successfully!')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition cursor-pointer group"
              >
                <Download size={14} className="text-emerald-500" />
                <span>Download vCard</span>
              </button>

              <button 
                onClick={() => handleAction('Profile has been reported.')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition cursor-pointer group"
              >
                <ShieldAlert size={14} className="text-amber-500" />
                <span>Report Profile</span>
              </button>

              <div className="h-px bg-slate-100 dark:bg-slate-700 my-1 mx-2" />

              <button 
                onClick={() => handleAction('User added to secure blocklist.')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition cursor-pointer group"
              >
                <UserX size={14} />
                <span>Block User</span>
              </button>
            </div>
          )}
        </div>

      </div>

      
      {toastMessage && (
        <div className="fixed bottom-5 right-5 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-xl flex items-center gap-2 shadow-2xl z-50 border border-slate-800 animate-fade-in">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </nav>
  );
}

