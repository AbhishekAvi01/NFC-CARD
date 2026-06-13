import React, { useState } from 'react';
import { mockProfileData } from '../mockData';
import { 
  Phone, MessageSquare, Mail, Globe, MapPin, UserPlus, 
  CheckCircle2, ShieldCheck, Eye, EyeOff, Edit3, Check, X, 
  Building, Briefcase, User, Wifi, Camera, Settings, ChevronDown, ChevronUp 
} from 'lucide-react';

export default function LeftSidebar() {
  
  const [profile, setProfile] = useState(mockProfileData.profile);
  
  
  const [showControls, setShowControls] = useState(false);

  
  const [visibility, setVisibility] = useState({
    profilePicture: true,
    titleBlock: true,
    organizationBlock: true,
    bioBlock: true,
    contactStrip: true
  });

  
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...profile });
  const [showToast, setShowToast] = useState(false);

  
  const actionItems = [
    { icon: <Phone size={16} />, label: "Call", href: `tel:${profile.phone || "+919876543210"}` },
    { icon: <MessageSquare size={16} />, label: "WhatsApp", href: `https://wa.me/${profile.phone?.replace(/[^0-9]/g, '') || '919876543210'}` },
    { icon: <Mail size={16} />, label: "Email", href: `mailto:${profile.email || "abhishek@example.com"}` },
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

  const toggleVisibility = (field) => {
    setVisibility(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const saveProfileUpdates = () => {
    setProfile({ ...editForm });
    setIsEditing(false);
  };

  const cancelProfileUpdates = () => {
    setEditForm({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      
  
      <div className="w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs rounded-[1.5rem] overflow-hidden transition-all duration-300">
        
      
        <button 
          onClick={() => setShowControls(!showControls)}
          className="w-full p-4 flex items-center justify-between text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer outline-none"
        >
          <div className="flex items-center gap-2">
            <Settings size={14} className={`text-blue-500 ${showControls ? 'animate-spin' : ''} style={{ animationDuration: '3s' }}`} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Card Workspace Options
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isEditing && (
              <span className="text-[9px] bg-amber-500/10 text-amber-500 font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider animate-pulse">
                Editing Active
              </span>
            )}
            {showControls ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </button>

  
        <div className={`transition-all duration-300 overflow-hidden ${showControls ? 'max-h-[400px] border-t border-slate-100 dark:border-slate-800 p-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Toggle Layout Nodes & Edit Content
              </span>
              
              {!isEditing ? (
                <button 
                  onClick={() => {
                    setEditForm({ ...profile });
                    setIsEditing(true);
                  }}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg active:scale-95 transition-all cursor-pointer shadow-xs"
                >
                  <Edit3 size={11} /> Edit Card Entities
                </button>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={saveProfileUpdates}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-1.5 rounded-lg active:scale-95 transition-all cursor-pointer shadow-xs flex items-center justify-center"
                    title="Save Changes"
                  >
                    <Check size={12} strokeWidth={3} />
                  </button>
                  <button 
                    onClick={cancelProfileUpdates}
                    className="bg-rose-600 hover:bg-rose-500 text-white p-1.5 rounded-lg active:scale-95 transition-all cursor-pointer shadow-xs flex items-center justify-center"
                    title="Cancel Changes"
                  >
                    <X size={12} strokeWidth={3} />
                  </button>
                </div>
              )}
            </div>

          
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <button onClick={() => toggleVisibility('profilePicture')} className="flex items-center gap-2 hover:text-blue-500 transition-colors text-left cursor-pointer">
                {visibility.profilePicture ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />}
                <span>Avatar Picture</span>
              </button>
              <button onClick={() => toggleVisibility('titleBlock')} className="flex items-center gap-2 hover:text-blue-500 transition-colors text-left cursor-pointer">
                {visibility.titleBlock ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />}
                <span>Developer Designation</span>
              </button>
              <button onClick={() => toggleVisibility('organizationBlock')} className="flex items-center gap-2 hover:text-blue-500 transition-colors text-left cursor-pointer">
                {visibility.organizationBlock ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />}
                <span>Company Node</span>
              </button>
              <button onClick={() => toggleVisibility('bioBlock')} className="flex items-center gap-2 hover:text-blue-500 transition-colors text-left cursor-pointer">
                {visibility.bioBlock ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />}
                <span>Bio Description</span>
              </button>
              <button onClick={() => toggleVisibility('contactStrip')} className="flex items-center gap-2 hover:text-blue-500 transition-colors text-left cursor-pointer col-span-2">
                {visibility.contactStrip ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />}
                <span>Bottom Info Row Container</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    
      <div className="w-full bg-[#030712] text-white rounded-[2rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border border-slate-800/60 relative transition-all duration-300">
        
        
        <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl flex items-center gap-1 text-[9px] font-black tracking-widest text-slate-300 uppercase z-20">
          <Wifi size={10} className="rotate-90 animate-pulse" />
          <span>NFC ))</span>
        </div>

        
        <div className="p-5 sm:p-6 flex flex-col gap-4 pt-10 pb-7 relative z-10 w-full">
          
          <div className="flex flex-row items-start gap-4 sm:gap-6 w-full">
          
            {visibility.profilePicture && (
              <div className="relative shrink-0 transition-all duration-300 group/avatar">
                <div className="p-1 rounded-full bg-slate-900 border-2 border-emerald-500 shadow-md relative overflow-hidden">
                  <img 
                    src={isEditing ? editForm.imageUrl : profile.imageUrl} 
                    alt={profile.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-slate-800"
                  />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-[9px] font-bold text-slate-300 gap-1 backdrop-blur-xs">
                      <Camera size={14} className="text-blue-400" />
                      <span>URL Mode</span>
                    </div>
                  )}
                </div>
                <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border border-slate-900 shadow-md flex items-center justify-center z-10">
                  <ShieldCheck size={11} strokeWidth={3} />
                </span>
              </div>
            )}

            
            <div className="flex-1 min-w-0 flex flex-col items-start pt-1 w-full">
              
              
              {!isEditing ? (
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 w-full">
                  <span className="truncate">{profile.name}</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold shrink-0">✓</span>
                </h2>
              ) : (
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2 py-1.5 rounded-lg w-full mb-1">
                  <User size={12} className="text-slate-400 shrink-0" />
                  <input 
                    type="text" 
                    name="name" 
                    value={editForm.name} 
                    onChange={handleInputChange}
                    className="bg-transparent text-white border-none outline-none font-bold text-xs w-full"
                    placeholder="Profile Name"
                  />
                </div>
              )}
              
              
              {visibility.titleBlock && (
                !isEditing ? (
                  <p className="text-xs font-bold text-blue-400 mt-0.5 tracking-wide uppercase transition-all">
                    {profile.title}
                  </p>
                ) : (
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2 py-1.5 rounded-lg w-full mb-1">
                    <Briefcase size={12} className="text-slate-400 shrink-0" />
                    <input 
                      type="text" 
                      name="title" 
                      value={editForm.title} 
                      onChange={handleInputChange}
                      className="bg-transparent text-blue-400 border-none outline-none font-bold text-[11px] w-full"
                      placeholder="Designation / Title"
                    />
                  </div>
                )
              )}
              
            
              {visibility.organizationBlock && (
                !isEditing ? (
                  <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5 block truncate w-full transition-all">
                    {profile.organization}
                  </span>
                ) : (
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2 py-1.5 rounded-lg w-full mb-1">
                    <Building size={12} className="text-slate-400 shrink-0" />
                    <input 
                      type="text" 
                      name="organization" 
                      value={editForm.organization} 
                      onChange={handleInputChange}
                      className="bg-transparent text-slate-300 border-none outline-none font-bold text-[10px] tracking-wider w-full uppercase"
                      placeholder="Company / Org"
                    />
                  </div>
                )
              )}

              <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-2.5 mb-1.5" />
            </div>
          </div>

          
          {isEditing && visibility.profilePicture && (
            <div className="w-full bg-slate-900/50 border border-slate-800 p-2 rounded-xl flex items-center gap-2 mb-1">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wide shrink-0">Image URL:</span>
              <input 
                type="text" 
                name="imageUrl" 
                value={editForm.imageUrl} 
                onChange={handleInputChange}
                className="bg-transparent text-blue-400 border-none outline-none text-[10px] font-mono w-full truncate"
                placeholder="Paste direct profile image web address URL..."
              />
            </div>
          )}

          
          {visibility.bioBlock && (
            <div className="w-full">
              {!isEditing ? (
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed w-full break-words transition-all px-1">
                  {profile.bio || "Building modern web & mobile applications with clean code."}
                </p>
              ) : (
                <textarea 
                  name="bio" 
                  value={editForm.bio} 
                  onChange={handleInputChange}
                  rows={2}
                  className="bg-slate-900 border border-slate-700 p-2 rounded-lg text-[11px] text-slate-300 outline-none w-full resize-none font-medium leading-tight"
                  placeholder="Write an insightful professional bio overview..."
                />
              )}
            </div>
          )}

        </div>

        
        {visibility.contactStrip && (
          <div className="w-full bg-slate-900/60 border-t border-slate-800/80 px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] md:text-xs font-bold text-slate-300 tracking-wide z-10 transition-all">
            
            
            <div className="flex items-center gap-2 text-slate-300 shrink-0">
              <Phone size={12} className="text-slate-500 shrink-0" />
              {isEditing ? (
                <input 
                  type="text" 
                  name="phone" 
                  value={editForm.phone || ""} 
                  onChange={handleInputChange}
                  className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-28"
                  placeholder="Phone Number"
                />
              ) : (
                <a href={`tel:${profile.phone || "+919876543210"}`} className="hover:text-blue-400 transition-colors break-all">
                  {profile.phone || "+91 98765 43210"}
                </a>
              )}
            </div>

            <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />

          
            <div className="flex items-center gap-2 text-slate-300 shrink-0 min-w-0">
              <Mail size={12} className="text-slate-500 shrink-0" />
              {isEditing ? (
                <input 
                  type="text" 
                  name="email" 
                  value={editForm.email || ""} 
                  onChange={handleInputChange}
                  className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-36"
                  placeholder="Email Address"
                />
              ) : (
                <a href={`mailto:${profile.email || "abhishek@example.com"}`} className="hover:text-blue-400 transition-colors break-all">
                  {profile.email || "abhishek@example.com"}
                </a>
              )}
            </div>

            <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />

          
            <div className="flex items-center gap-2 text-slate-400 shrink-0">
              <MapPin size={12} className="text-blue-500 shrink-0" />
              {isEditing ? (
                <input 
                  type="text" 
                  name="location" 
                  value={editForm.location || ""} 
                  onChange={handleInputChange}
                  className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-24"
                  placeholder="Location City"
                />
              ) : (
                <span className="break-words text-slate-300">{profile.location || "Indore, India"}</span>
              )}
            </div>

          </div>
        )}

      </div>

  
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-xs transition-colors relative">
        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3.5 px-1">
          Quick Actions
        </span>
        <div className="grid grid-cols-3 gap-2">
          {actionItems.map((item, index) => {
            const Tag = item.href ? 'a' : 'button';
            return (
              <Tag
                key={index}
                href={item.href !== "#" ? item.href : undefined}
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

      
      {showToast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-2xl z-50 whitespace-nowrap animate-fade-in">
          <CheckCircle2 size={12} className="text-emerald-400" />
          <span>Contact Node Saved to Contacts Stack!</span>
        </div>
      )}

    </div>
  );
}