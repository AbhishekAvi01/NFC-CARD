import React, { useState } from 'react';
import { 
  Phone, MessageSquare, Mail, Globe, MapPin, UserPlus, 
  ShieldCheck, Camera, Maximize2, Wifi, MessageCircle, Check, X, Link, AtSign
} from 'lucide-react';

export default function LeftSidebar({
  profile,
  visibility,
  isEditing,
  editForm,
  handleInputChange,
  setIsQrZoomed,
  setShowReviewModal,
  saveProfileUpdates,   
  cancelProfileUpdates   
}) {

  const activeTargetUrl = (isEditing ? editForm?.website : profile?.website) || `https://www.linkedin.com/in/abhishek-kumar-329a282b8/`; 
  const liveQrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(activeTargetUrl)}&ecc=M`;

  const actionItems = [
    { icon: <Phone size={16} />, label: "Call", href: `tel:${profile?.phone || "+919876543210"}` },
    { icon: <MessageSquare size={16} />, label: "WhatsApp", href: `https://wa.me/${profile?.phone?.replace(/[^0-9]/g, '') || '919876543210'}` },
    { icon: <Mail size={16} />, label: "Email", href: `mailto:${profile?.email || "abhishek@example.com"}` },
    { icon: <Globe size={16} />, label: "Website", href: activeTargetUrl, target: "_blank" },
    { icon: <MessageCircle size={16} />, label: "Review", action: "trigger_review" }, 
    { icon: <UserPlus size={16} />, label: "Save", action: "save_contact" }
  ];

  return (
    <div className="w-full flex flex-col gap-5 transition-all duration-300 animate-fade-in relative">
      
      
      <div className={`w-full bg-[#030712] text-white rounded-[2rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] border relative transition-all duration-300 ${isEditing ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-800/60'}`}>
        
        
        <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl flex items-center gap-1 text-[9px] font-black tracking-widest text-slate-300 uppercase z-20">
          <Wifi size={10} className="rotate-90 animate-pulse" />
          <span>NFC ))</span>
        </div>

        
        {visibility?.qrSection && (
          <div className="absolute top-5 right-5 flex flex-col items-center gap-1 z-20 bg-slate-900/70 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md group">
            <div 
              onClick={() => !isEditing && setIsQrZoomed(true)}
              className={`w-12 h-12 bg-white rounded-lg p-0.5 flex items-center justify-center text-slate-950 shadow-md relative overflow-hidden ${isEditing ? 'cursor-not-allowed opacity-50' : 'cursor-zoom-in group/qr'}`}
            >
              <img src={liveQrApiUrl} alt="QR Scanner Matrix" className="w-full h-full object-contain select-none" />
              {!isEditing && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/qr:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 size={10} strokeWidth={3} />
                </div>
              )}
            </div>
            
            
            {isEditing ? (
              <div className="flex items-center bg-slate-950/80 rounded border border-slate-800 px-0.5 w-14 overflow-hidden">
                <input 
                  type="text" 
                  name="userId" 
                  value={editForm?.userId || ""} 
                  onChange={handleInputChange}
                  className="bg-transparent text-blue-400 font-mono text-[8px] text-center w-full outline-none"
                  placeholder="@id"
                />
              </div>
            ) : (
              <span className="text-[8px] font-black text-slate-400 tracking-wide font-mono uppercase bg-slate-950/60 px-1 py-0.5 rounded transition-all">
                {profile?.userId || "@abhistark"}
              </span>
            )}
          </div>
        )}

        
        <div className="p-5 sm:p-6 flex flex-col gap-4 pt-16 pb-6 relative z-10 w-full">
          <div className="flex flex-row items-start gap-4 sm:gap-6 w-full">
            
            {visibility?.profilePicture && (
              <div className="relative shrink-0 transition-all duration-300">
                <div className="p-1 rounded-full bg-slate-900 border-2 border-emerald-500 shadow-md relative overflow-hidden">
                  <img src={isEditing ? editForm?.imageUrl : profile?.imageUrl} alt={profile?.name || "Avatar"} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-slate-800" />
                </div>
                <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border border-slate-900 shadow-md flex items-center justify-center z-10"><ShieldCheck size={11} strokeWidth={3} /></span>
              </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col items-start pt-1 w-full gap-1.5">
              
              {isEditing ? (
                <input 
                  type="text" 
                  name="name" 
                  value={editForm?.name || ""} 
                  onChange={handleInputChange} 
                  className="w-full bg-slate-900/80 border border-slate-700 px-2 py-1 rounded-lg text-white font-bold text-sm outline-none focus:border-blue-500" 
                  placeholder="Profile Name"
                />
              ) : (
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 w-full">
                  <span className="truncate">{profile?.name || "Abhishek Kumar"}</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold shrink-0">✓</span>
                </h2>
              )}
              
              
              {visibility?.titleBlock && (
                isEditing ? (
                  <input 
                    type="text" 
                    name="title" 
                    value={editForm?.title || ""} 
                    onChange={handleInputChange} 
                    className="w-full bg-slate-900/80 border border-slate-700 px-2 py-0.5 rounded-md text-blue-400 font-bold text-[11px] uppercase outline-none focus:border-blue-500" 
                  />
                ) : (
                  <p className="text-xs font-bold text-blue-400 tracking-wide uppercase">{profile?.title || "Developer"}</p>
                )
              )}
              
            
              {visibility?.organizationBlock && (
                isEditing ? (
                  <input 
                    type="text" 
                    name="organization" 
                    value={editForm?.organization || ""} 
                    onChange={handleInputChange} 
                    className="w-full bg-slate-900/80 border border-slate-700 px-2 py-0.5 rounded-md text-slate-300 font-bold text-[10px] uppercase outline-none focus:border-blue-500" 
                  />
                ) : (
                  <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest block truncate w-full">{profile?.organization || "Organization"}</span>
                )
              )}
              <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-1" />
            </div>
          </div>

          
          {isEditing && (
            <div className="flex flex-col gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800/80 animate-fade-in text-left">
              <div className="flex items-center gap-2 text-xs">
                <Camera size={12} className="text-slate-500" />
                <input type="text" name="imageUrl" value={editForm?.imageUrl || ""} onChange={handleInputChange} className="bg-transparent text-slate-300 text-[10px] font-mono w-full outline-none border-b border-slate-800 pb-0.5" placeholder="Profile Image URL" />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Link size={12} className="text-slate-500" />
                <input type="text" name="website" value={editForm?.website || ""} onChange={handleInputChange} className="bg-transparent text-emerald-400 text-[10px] font-mono w-full outline-none" placeholder="QR redirect link address" />
              </div>
            </div>
          )}

          
          {visibility?.bioBlock && (
            <div className="w-full">
              {isEditing ? (
                <textarea 
                  name="bio" 
                  value={editForm?.bio || ""} 
                  onChange={handleInputChange} 
                  rows={2} 
                  className="w-full bg-slate-900/80 border border-slate-700 p-2 rounded-lg text-[11px] text-slate-200 outline-none resize-none font-medium leading-tight focus:border-blue-500" 
                  placeholder="Tell us about yourself summary..."
                />
              ) : (
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed w-full break-words px-1 text-left">{profile?.bio}</p>
              )}
            </div>
          )}
        </div>

        
        {visibility?.contactStrip && (
          <div className="w-full bg-slate-900/60 border-t border-slate-800/80 px-4 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-[10px] md:text-xs font-bold text-slate-300 tracking-wide z-10 transition-all">
            <div className="flex items-center gap-2 shrink-0 text-left">
              <Phone size={12} className="text-slate-500 shrink-0" />
              {isEditing ? <input type="text" name="phone" value={editForm?.phone || ""} onChange={handleInputChange} className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-28 focus:border-blue-500" /> : <a href={`tel:${profile?.phone}`} className="hover:text-blue-400 transition-colors break-all">{profile?.phone || "+91 98765 43210"}</a>}
            </div>
            <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />
            <div className="flex items-center gap-2 shrink-0 min-w-0 text-left">
              <Mail size={12} className="text-slate-500 shrink-0" />
              {isEditing ? <input type="text" name="email" value={editForm?.email || ""} onChange={handleInputChange} className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-36 focus:border-blue-500" /> : <a href={`mailto:${profile?.email}`} className="hover:text-blue-400 transition-colors break-all">{profile?.email}</a>}
            </div>
            <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />
            <div className="flex items-center gap-2 shrink-0">
              <MapPin size={12} className="text-blue-500 shrink-0" />
              {isEditing ? <input type="text" name="location" value={editForm?.location || ""} onChange={handleInputChange} className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-24 focus:border-blue-500" /> : <span className="break-words text-slate-300">{profile?.location}</span>}
            </div>
          </div>
        )}
      </div>

      
      {isEditing && (
        <div className="fixed bottom-4 left-4 right-4 md:relative md:bottom-auto md:left-auto md:right-auto bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border border-blue-500/40 dark:border-blue-500/30 p-3 sm:p-4 rounded-2xl flex flex-col xs:flex-row items-center justify-between shadow-2xl animate-scale-up z-[50] gap-2.5">
          <div className="flex flex-col text-center xs:text-left pl-1">
            <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-wider">Workspace Mode Active</span>
            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight hidden xs:inline">Perform direct changes on card layout</span>
          </div>
          <div className="flex items-center gap-2 w-full xs:w-auto justify-center">
            <button 
              type="button"
              onClick={cancelProfileUpdates} 
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1 text-[11px] font-bold cursor-pointer flex-1 xs:flex-none border border-slate-200 dark:border-slate-700"
            >
              <X size={12} strokeWidth={2.5} />
              <span>Cancel</span>
            </button>
            <button 
              type="button"
              onClick={saveProfileUpdates} 
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1 text-[11px] font-bold cursor-pointer shadow-lg shadow-blue-500/20 flex-1 xs:flex-none"
            >
              <Check size={12} strokeWidth={2.5} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      )}

      
      {!isEditing && (
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-xs relative w-full">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3.5 px-1 text-left">Quick Actions</span>
          <div className="grid grid-cols-3 gap-2">
            {actionItems.map((item, index) => {
              const Tag = item.href ? 'a' : 'button';
              return (
                <Tag
                  key={index}
                  href={item.href && item.href !== "#" ? item.href : undefined}
                  target={item.target || undefined}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleActionClick(e, item)}
                  className="flex flex-col items-center justify-center py-3 px-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 active:scale-95 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs hover:border-blue-100 dark:hover:border-blue-900 transition-all cursor-pointer text-center group"
                >
                  <div className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.icon}</div>
                  <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mt-1.5 block tracking-tight group-hover:text-blue-700 dark:group-hover:text-blue-300">{item.label}</span>
                </Tag>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}




