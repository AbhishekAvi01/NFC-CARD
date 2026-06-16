import React, { useState, useEffect, useRef } from 'react';
import { mockProfileData } from '../mockData';
import { 
  Monitor, MoreVertical, Sun, Moon, Share2, Download, 
  ShieldAlert, UserX, CheckCircle2, Smartphone, Tablet, MonitorIcon, Eye,
  Settings, EyeOff, Edit3, X, AtSign, ChevronDown, ChevronUp
} from 'lucide-react';

export default function Navbar({
  visibility,
  toggleVisibility,
  isEditing,
  setIsEditing,
  editForm,
  handleInputChange,
  saveProfileUpdates,
  cancelProfileUpdates,
  currentAppTheme,
  onChangeAppTheme
}) {
  const brand = mockProfileData?.brand || { systemTitle: "NFC CARD" };
  
  const [showOptions, setShowOptions] = useState(false);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const [showWorkspaceControls, setShowWorkspaceControls] = useState(false); 
  const [toastMessage, setToastMessage] = useState('');
  const [layoutMode, setLayoutMode] = useState('desktop'); 
  
  const optionsRef = useRef(null);
  const responsiveRef = useRef(null);
  const workspaceRef = useRef(null); 

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
      if (workspaceRef.current && !workspaceRef.current.contains(event.target)) setShowWorkspaceControls(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (message) => {
    setToastMessage(message);
    setShowOptions(false);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 sticky top-0 z-50 px-3 sm:px-6 py-3.5 shadow-sm flex flex-col gap-3 transition-all">
      <div className="flex justify-between items-center w-full relative">
        
        
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200 uppercase truncate max-w-[100px] sm:max-w-none">
              {brand.systemTitle}
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 tracking-wider uppercase -mt-0.5">Enterprise Hub</span>
          </div>
        </div>

      
        <div className="hidden md:flex items-center gap-1.5 text-blue-600 text-xs font-semibold bg-blue-50/50 dark:bg-blue-950/20 px-3 py-1.5 rounded-xl border border-blue-100 dark:border-blue-900">
          <Monitor size={14} />
          <span>Live Workspace Dashboard</span>
        </div>

        
        <div className="flex items-center gap-1.5 sm:gap-3 relative">
          
        
          <div className="static md:relative" ref={workspaceRef}>
            <button
              onClick={() => setShowWorkspaceControls(!showWorkspaceControls)}
              className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 border bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 rounded-xl transition text-[11px] sm:text-xs font-bold cursor-pointer"
            >
              <Settings size={13} className="text-blue-500 shrink-0" />
              <span className="hidden xs:inline">Card Setup</span>
              <span className="xs:hidden">Setup</span>
              {showWorkspaceControls ? <ChevronUp size={11} className="shrink-0" /> : <ChevronDown size={11} className="shrink-0" />}
            </button>

            
            {showWorkspaceControls && (
              <div className="fixed md:absolute left-4 right-4 md:left-auto md:right-0 top-16 md:top-12 w-[calc(100vw-2rem)] md:w-[320px] bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 rounded-2xl shadow-2xl z-50 p-4 sm:p-5 animate-scale-up flex flex-col gap-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Workspace Core</span>
                  {!isEditing && (
                    <button 
                      onClick={() => {
                        setIsEditing(true); 
                        setShowWorkspaceControls(false); 
                      }}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg cursor-pointer shadow-xs whitespace-nowrap active:scale-95 transition-all"
                    >
                      <Edit3 size={11} /> Edit Content
                    </button>
                  )}
                </div>

                
                <div className="flex flex-col gap-2.5 text-[11px] font-bold text-slate-600 dark:text-slate-400 text-left bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block border-b border-slate-200/30 dark:border-slate-700 pb-1.5 mb-0.5">Visibility Layers</span>
                  
                  <button onClick={() => toggleVisibility('profilePicture')} className="flex items-center justify-between w-full py-0.5 cursor-pointer hover:text-blue-500 transition-colors">
                    <span className="flex items-center gap-2">
                      {visibility.profilePicture ? <Eye size={13} className="text-emerald-500" /> : <EyeOff size={13} className="text-slate-400" />} Avatar Picture
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${visibility.profilePicture ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>{visibility.profilePicture ? 'ON' : 'OFF'}</span>
                  </button>

                  <button onClick={() => toggleVisibility('titleBlock')} className="flex items-center justify-between w-full py-0.5 cursor-pointer hover:text-blue-500 transition-colors">
                    <span className="flex items-center gap-2">
                      {visibility.titleBlock ? <Eye size={13} className="text-emerald-500" /> : <EyeOff size={13} className="text-slate-400" />} Designation
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${visibility.titleBlock ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>{visibility.titleBlock ? 'ON' : 'OFF'}</span>
                  </button>

                  <button onClick={() => toggleVisibility('organizationBlock')} className="flex items-center justify-between w-full py-0.5 cursor-pointer hover:text-blue-500 transition-colors">
                    <span className="flex items-center gap-2">
                      {visibility.organizationBlock ? <Eye size={13} className="text-emerald-500" /> : <EyeOff size={13} className="text-slate-400" />} Company / Org
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${visibility.organizationBlock ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>{visibility.organizationBlock ? 'ON' : 'OFF'}</span>
                  </button>

                  <button onClick={() => toggleVisibility('bioBlock')} className="flex items-center justify-between w-full py-0.5 cursor-pointer hover:text-blue-500 transition-colors">
                    <span className="flex items-center gap-2">
                      {visibility.bioBlock ? <Eye size={13} className="text-emerald-500" /> : <EyeOff size={13} className="text-slate-400" />} Bio Block
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${visibility.bioBlock ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>{visibility.bioBlock ? 'ON' : 'OFF'}</span>
                  </button>

                  <button onClick={() => toggleVisibility('qrSection')} className="flex items-center justify-between w-full py-0.5 cursor-pointer hover:text-blue-500 transition-colors">
                    <span className="flex items-center gap-2">
                      {visibility.qrSection ? <Eye size={13} className="text-emerald-500" /> : <EyeOff size={13} className="text-slate-400" />} Scannable QR Engine
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${visibility.qrSection ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>{visibility.qrSection ? 'ON' : 'OFF'}</span>
                  </button>
                </div>

              </div>
            )}
          </div>
          
          
          <div className="relative" ref={responsiveRef}>
            <button onClick={() => setShowResponsiveMenu(!showResponsiveMenu)} className="flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 border bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-700 rounded-xl transition text-[11px] sm:text-xs font-bold cursor-pointer">
              <Eye size={13} className="shrink-0" />
              <span className="capitalize hidden xs:inline">{layoutMode} View</span>
              <span className="capitalize xs:hidden">View</span>
            </button>
            {showResponsiveMenu && (
              <div className="absolute right-[-40px] sm:right-0 top-12 w-[260px] sm:w-64 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-2xl shadow-xl z-50 p-2 flex flex-col gap-1">
                {devices.map((dev) => (
                  <button key={dev.id} onClick={() => updateDeviceMode(dev.id)} className={`w-full flex items-center justify-between p-2 rounded-xl border text-[11px] font-bold cursor-pointer ${layoutMode === dev.id ? 'bg-blue-50/70 dark:bg-blue-950/20 border-blue-100 text-blue-700 dark:text-blue-300' : 'bg-slate-50/40 dark:bg-slate-800/20 border-slate-100 text-slate-600 dark:text-slate-400'}`}>
                    <div className="flex items-center gap-2">{dev.icon}<span>{dev.label}</span></div>
                    <span className="text-[9px] text-slate-400">{dev.range}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Strip */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700 shrink-0">
            <button onClick={() => onChangeAppTheme('light')} className={`p-1 sm:p-1.5 rounded-lg transition-colors cursor-pointer ${currentAppTheme === 'light' ? 'bg-white text-amber-500 shadow-xs' : 'text-slate-400'}`}><Sun size={13} /></button>
            <button onClick={() => onChangeAppTheme('dark')} className={`p-1 sm:p-1.5 rounded-lg transition-colors cursor-pointer ${currentAppTheme === 'dark' ? 'bg-slate-700 text-blue-400 shadow-xs' : 'text-slate-400'}`}><Moon size={13} /></button>
          </div>

          <div className="relative shrink-0" ref={optionsRef}>
            <button onClick={() => setShowOptions(!showOptions)} className="p-1.5 sm:p-2 border rounded-xl transition text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200/60 dark:border-slate-700 cursor-pointer"><MoreVertical size={14} /></button>
            {showOptions && (
              <div className="absolute right-0 top-12 w-48 sm:w-52 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-2xl shadow-xl z-50 p-1.5 animate-scale-up">
                <button onClick={() => handleAction('Profile link copied to clipboard!')} className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition cursor-pointer"><Share2 size={14} className="text-blue-500" /><span>Share Profile</span></button>
                <button onClick={() => handleAction('Contact vCard downloaded successfully!')} className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition cursor-pointer"><Download size={14} className="text-emerald-500" /><span>Download vCard</span></button>
                <button onClick={() => handleAction('Profile has been reported.')} className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition cursor-pointer"><ShieldAlert size={14} className="text-amber-500" /><span>Report Profile</span></button>
                <div className="h-px bg-slate-100 dark:bg-slate-700 my-1 mx-2" />
                <button onClick={() => handleAction('User added to secure blocklist.')} className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition cursor-pointer"><UserX size={14} /><span>Block User</span></button>
              </div>
            )}
          </div>

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









