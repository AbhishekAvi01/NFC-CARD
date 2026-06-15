import React, { useState } from 'react';
import { mockProfileData } from '../mockData';
import { 
  Phone, MessageSquare, Mail, Globe, MapPin, UserPlus, 
  CheckCircle2, ShieldCheck, Eye, EyeOff, Edit3, Check, X, 
  Building, Briefcase, User, Wifi, Camera, Settings, ChevronDown, ChevronUp,
  Star, MessageCircle, Send, Maximize2
} from 'lucide-react';

export default function LeftSidebar() {
  
  const [profile, setProfile] = useState(() => {
    const baseProfile = mockProfileData.profile || {};
    return {
      ...baseProfile,
      userId: baseProfile.userId || "@abhistark" 
    };
  });
  
  const [showControls, setShowControls] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isQrZoomed, setIsQrZoomed] = useState(false); 

  
  const [visibility, setVisibility] = useState({
    profilePicture: true,
    titleBlock: true,
    organizationBlock: true,
    bioBlock: true,
    contactStrip: true,
    qrSection: true 
  });

  
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...profile });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");


  const [reviewForm, setReviewForm] = useState({ rating: 5, comment: "", name: "" });

  
  const activeTargetUrl = (isEditing ? editForm.website : profile.website) || `https://www.linkedin.com/in/abhishek-kumar-329a282b8/`; 
  const liveQrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(activeTargetUrl)}&ecc=M`;

  const actionItems = [
    { icon: <Phone size={16} />, label: "Call", href: `tel:${profile.phone || "+919876543210"}` },
    { icon: <MessageSquare size={16} />, label: "WhatsApp", href: `https://wa.me/${profile.phone?.replace(/[^0-9]/g, '') || '919876543210'}` },
    { icon: <Mail size={16} />, label: "Email", href: `mailto:${profile.email || "abhishek@example.com"}` },
    { icon: <Globe size={16} />, label: "Website", href: activeTargetUrl, target: "_blank" },
    { icon: <MessageCircle size={16} />, label: "Review", action: "trigger_review" }, 
    { icon: <UserPlus size={16} />, label: "Save", action: "save_contact" }
  ];

  const handleActionClick = (e, item) => {
    if (item.action === "save_contact") {
      e.preventDefault();
      setToastMessage("Contact Saved to Local Phone Stack!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    if (item.action === "trigger_review") {
      e.preventDefault();
      setShowReviewModal(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const saveProfileUpdates = () => {
    setProfile({ ...editForm });
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
            <Settings size={14} className={`text-blue-500 ${showControls ? 'animate-spin' : ''}`} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Card Workspace Options</span>
          </div>
          {showControls ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${showControls ? 'max-h-[450px] border-t border-slate-100 dark:border-slate-800 p-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Toggle Nodes & Data Streams</span>
              {!isEditing ? (
                <button 
                  onClick={() => {
                    setEditForm({ ...profile });
                    setIsEditing(true);
                  }} 
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-500 cursor-pointer shadow-xs"
                >
                  <Edit3 size={11} /> Edit Card Entities
                </button>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button onClick={saveProfileUpdates} className="bg-emerald-600 text-white p-1.5 rounded-lg cursor-pointer"><Check size={12} strokeWidth={3} /></button>
                  <button onClick={() => { setEditForm({ ...profile }); setIsEditing(false); }} className="bg-rose-600 text-white p-1.5 rounded-lg cursor-pointer"><X size={12} strokeWidth={3} /></button>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <button onClick={() => toggleVisibility('profilePicture')} className="flex items-center gap-2 text-left cursor-pointer">{visibility.profilePicture ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />} Avatar Picture</button>
              <button onClick={() => toggleVisibility('titleBlock')} className="flex items-center gap-2 text-left cursor-pointer">{visibility.titleBlock ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />} Designation</button>
              <button onClick={() => toggleVisibility('organizationBlock')} className="flex items-center gap-2 text-left cursor-pointer">{visibility.organizationBlock ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />} Company</button>
              <button onClick={() => toggleVisibility('bioBlock')} className="flex items-center gap-2 text-left cursor-pointer">{visibility.bioBlock ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />} Bio</button>
              <button onClick={() => toggleVisibility('qrSection')} className="flex items-center gap-2 text-left cursor-pointer col-span-2">{visibility.qrSection ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-slate-400" />} Workable QR Code & User ID Node</button>
            </div>
          </div>
        </div>
      </div>

  
      <div className="w-full bg-[#030712] text-white rounded-[2rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border border-slate-800/60 relative transition-all duration-300">
        
        {/* Floating NFC Badge Indicator */}
        <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl flex items-center gap-1 text-[9px] font-black tracking-widest text-slate-300 uppercase z-20">
          <Wifi size={10} className="rotate-90 animate-pulse" />
          <span>NFC ))</span>
        </div>

      
        {visibility.qrSection && (
          <div className="absolute top-5 right-5 flex flex-col items-center gap-1 z-20 bg-slate-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md group">
            <div 
              onClick={() => setIsQrZoomed(true)}
              className="w-12 h-12 bg-white rounded-lg p-0.5 flex items-center justify-center text-slate-950 shadow-md relative overflow-hidden group/qr cursor-zoom-in"
              title="Click to expand QR Code for scanning"
            >
              <img 
                src={liveQrApiUrl} 
                alt="Workable Profile Card QR Scanner Node" 
                className="w-full h-full object-contain select-none"
                onError={(e) => {
                  e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com";
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/qr:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Maximize2 size={10} strokeWidth={3} />
              </div>
            </div>
            
          
            {isEditing ? (
              <input 
                type="text" 
                name="userId" 
                value={editForm.userId} 
                onChange={handleInputChange}
                className="bg-slate-950 text-blue-400 font-mono text-[8px] text-center w-14 border border-slate-800 rounded outline-none px-0.5 py-0.5"
                placeholder="@userid"
              />
            ) : (
              <span className="text-[8px] font-black text-slate-400 tracking-wide font-mono uppercase bg-slate-950/60 px-1 py-0.5 rounded transition-all duration-200">
                {profile.userId}
              </span>
            )}
          </div>
        )}

        
        <div className="p-5 sm:p-6 flex flex-col gap-4 pt-16 pb-7 relative z-10 w-full">
          
          <div className="flex flex-row items-start gap-4 sm:gap-6 w-full">
            {visibility.profilePicture && (
              <div className="relative shrink-0 transition-all duration-300">
                <div className="p-1 rounded-full bg-slate-900 border-2 border-emerald-500 shadow-md relative overflow-hidden">
                  <img src={isEditing ? editForm.imageUrl : profile.imageUrl} alt={profile.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-slate-800" />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-[9px] font-bold text-slate-300 gap-1"><Camera size={12} className="text-blue-400" /><span>URL Mode</span></div>
                  )}
                </div>
                <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border border-slate-900 shadow-md flex items-center justify-center z-10"><ShieldCheck size={11} strokeWidth={3} /></span>
              </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col items-start pt-1.5 w-full">
              {!isEditing ? (
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 w-full">
                  <span className="truncate">{profile.name}</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold shrink-0">✓</span>
                </h2>
              ) : (
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2 py-1 rounded-lg w-full mb-1">
                  <User size={12} className="text-slate-400 shrink-0" />
                  <input type="text" name="name" value={editForm.name} onChange={handleInputChange} className="bg-transparent text-white border-none outline-none font-bold text-xs w-full" />
                </div>
              )}
              
              {visibility.titleBlock && (
                !isEditing ? (
                  <p className="text-xs font-bold text-blue-400 mt-0.5 tracking-wide uppercase">{profile.title}</p>
                ) : (
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2 py-1 rounded-lg w-full mb-1">
                    <Briefcase size={12} className="text-slate-400 shrink-0" />
                    <input type="text" name="title" value={editForm.title} onChange={handleInputChange} className="bg-transparent text-blue-400 border-none outline-none font-bold text-[11px] w-full" />
                  </div>
                )
              )}
              
              {visibility.organizationBlock && (
                !isEditing ? (
                  <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5 block truncate w-full">{profile.organization}</span>
                ) : (
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2 py-1 rounded-lg w-full mb-1">
                    <Building size={12} className="text-slate-400 shrink-0" />
                    <input type="text" name="organization" value={editForm.organization} onChange={handleInputChange} className="bg-transparent text-slate-300 border-none outline-none font-bold text-[10px] w-full uppercase" />
                  </div>
                )
              )}
              <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-2.5 mb-1.5" />
            </div>
          </div>

        
          {isEditing && (
            <div className="flex flex-col gap-1.5 w-full">
              {visibility.profilePicture && (
                <div className="w-full bg-slate-900/50 border border-slate-800 p-2 rounded-xl flex items-center gap-2">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-wide shrink-0">Image URL:</span>
                  <input type="text" name="imageUrl" value={editForm.imageUrl || ""} onChange={handleInputChange} className="bg-transparent text-blue-400 border-none outline-none text-[10px] font-mono w-full truncate" />
                </div>
              )}
              <div className="w-full bg-slate-900/50 border border-slate-800 p-2 rounded-xl flex items-center gap-2">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wide shrink-0">QR Link URL:</span>
                <input type="text" name="website" value={editForm.website || ""} onChange={handleInputChange} className="bg-transparent text-emerald-400 border-none outline-none text-[10px] font-mono w-full truncate" placeholder="Paste website or portfolio link..." />
              </div>
            </div>
          )}

          {visibility.bioBlock && (
            <div className="w-full">
              {!isEditing ? (
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed w-full break-words px-1">{profile.bio}</p>
              ) : (
                <textarea name="bio" value={editForm.bio} onChange={handleInputChange} rows={2} className="bg-slate-900 border border-slate-700 p-2 rounded-lg text-[11px] text-slate-300 outline-none w-full resize-none font-medium leading-tight" />
              )}
            </div>
          )}
        </div>

        {visibility.contactStrip && (
          <div className="w-full bg-slate-900/60 border-t border-slate-800/80 px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] md:text-xs font-bold text-slate-300 tracking-wide z-10 transition-all">
            <div className="flex items-center gap-2 text-slate-300 shrink-0">
              <Phone size={12} className="text-slate-500 shrink-0" />
              {isEditing ? <input type="text" name="phone" value={editForm.phone || ""} onChange={handleInputChange} className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-28" /> : <a href={`tel:${profile.phone}`} className="hover:text-blue-400 transition-colors break-all">{profile.phone || "+91 98765 43210"}</a>}
            </div>
            <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />
            <div className="flex items-center gap-2 text-slate-300 shrink-0 min-w-0">
              <Mail size={12} className="text-slate-500 shrink-0" />
              {isEditing ? <input type="text" name="email" value={editForm.email || ""} onChange={handleInputChange} className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-36" /> : <a href={`mailto:${profile.email}`} className="hover:text-blue-400 transition-colors break-all">{profile.email || "abhishek@example.com"}</a>}
            </div>
            <div className="hidden md:block h-3.5 w-px bg-slate-800 shrink-0" />
            <div className="flex items-center gap-2 text-slate-400 shrink-0">
              <MapPin size={12} className="text-blue-500 shrink-0" />
              {isEditing ? <input type="text" name="location" value={editForm.location || ""} onChange={handleInputChange} className="bg-slate-950 border border-slate-800 text-white rounded px-1.5 py-0.5 text-[10px] outline-none font-bold w-24" /> : <span className="break-words text-slate-300">{profile.location || "Indore, India"}</span>}
            </div>
          </div>
        )}
      </div>

      
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-xs relative">
        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3.5 px-1">Quick Actions</span>
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

    
      {isQrZoomed && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 max-w-xs w-full flex flex-col items-center gap-4 relative shadow-2xl">
            <button 
              onClick={() => setIsQrZoomed(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1 rounded-full bg-slate-100 dark:bg-slate-800"
            >
              <X size={16} />
            </button>
            <div className="text-center">
              <h4 className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">Scan Connection</h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5 tracking-wider">Point your smartphone camera here</p>
            </div>
            
            <div className="w-48 h-48 bg-white p-3 rounded-2xl shadow-inner border border-slate-100 flex items-center justify-center">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(activeTargetUrl)}&ecc=M`} alt="Scannable Live Context Matrix" className="w-full h-full object-contain" />
            </div>

      
            <span className="text-[10px] font-mono font-black text-slate-500 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-950 px-2.5 py-1 rounded-xl tracking-widest border border-slate-200/50 dark:border-slate-800 transition-all duration-150">
              {isEditing ? editForm.userId : profile.userId}
            </span>
          </div>
        </div>
      )}

    
      {showReviewModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-sm rounded-[2rem] p-5 shadow-2xl relative">
            <button onClick={() => setShowReviewModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"><X size={16} /></button>
            <h3 className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest mb-1">Submit Customer Review</h3>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-4">Share your onboarding feedback</p>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowReviewModal(false);
              setToastMessage("Thank you! Review submitted successfully.");
              setShowToast(true);
              setTimeout(() => setShowToast(false), 3000);
            }} className="flex flex-col gap-3.5">
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Select Rating Star</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button type="button" key={star} onClick={() => setReviewForm(prev => ({ ...prev, rating: star }))} className="cursor-pointer"><Star size={18} className={star <= reviewForm.rating ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-700"} /></button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Your Full Name</label>
                <input type="text" required value={reviewForm.name} onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-200 outline-none font-semibold focus:border-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">Review Comments</label>
                <textarea required rows={3} value={reviewForm.comment} onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs text-slate-800 dark:text-slate-200 outline-none font-medium focus:border-blue-500" placeholder="Write architectural feedback..." />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold text-xs py-3 rounded-xl shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"><Send size={12} /><span>Submit Validation Node</span></button>
            </form>
          </div>
        </div>
      )}

      
      {showToast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-2xl z-50 whitespace-nowrap border border-slate-800">
          <CheckCircle2 size={12} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}



