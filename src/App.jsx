import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/ProfileCard'; 
import ServicesGrid from './components/Services';    
import MediaGallery from './components/MediaGallery';
import FeedbackSection from './components/FeedbackSection';
import BottomCTA from './components/Footer'; 
import ActionModal from './components/ActionModal'; 
import { COMPONENT_DATA_PAYLOAD, mockProfileData } from './mockData';
import { CheckCircle2, X } from 'lucide-react';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [layoutMode, setLayoutMode] = useState('desktop');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isQrZoomed, setIsQrZoomed] = useState(false);
  const [activeAction, setActiveAction] = useState(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('app-theme-mode') || 'light';
    return 'light';
  });

  const [profile, setProfile] = useState(() => ({
    ...mockProfileData?.profile,
    userId: mockProfileData?.profile?.userId || "@abhistark"
  }));

  const [visibility, setVisibility] = useState({
    profilePicture: true, titleBlock: true, organizationBlock: true,
    bioBlock: true, contactStrip: true, qrSection: true 
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...profile });

  // Action Handlers
  const handleShare = async () => {
    if (navigator.share) await navigator.share({ title: 'Profile', url: window.location.href });
    else { navigator.clipboard.writeText(window.location.href); setToastMessage("Link copied!"); setShowToast(true); setTimeout(() => setShowToast(false), 2000); }
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${profile.name || "User"}\nTEL:${profile.phone || ""}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'contact.vcf'; a.click();
  };

  const handleActionSubmit = (reason) => {
    console.log(`${activeAction.type} submitted: ${reason}`);
    setActiveAction(null);
    setToastMessage(`${activeAction.type} completed successfully!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Effects
  useEffect(() => {
    const handleLayoutMode = (e) => { if (e.detail?.mode) setLayoutMode(e.detail.mode); };
    window.addEventListener('deviceLayoutChange', handleLayoutMode);
    return () => window.removeEventListener('deviceLayoutChange', handleLayoutMode);
  }, []);

  useEffect(() => {
    const handleNavbarToast = (e) => {
      if (e.detail?.msg) { setToastMessage(e.detail.msg); setShowToast(true); setTimeout(() => setShowToast(false), 3000); }
    };
    window.addEventListener('navbarToastTriggerAction', handleNavbarToast);
    return () => window.removeEventListener('navbarToastTriggerAction', handleNavbarToast);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('app-theme-mode', theme);
  }, [theme]);

  const toggleVisibility = (field) => setVisibility(prev => ({ ...prev, [field]: !prev[field] }));
  const handleInputChange = (e) => setEditForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const saveProfileUpdates = () => { setProfile({ ...editForm }); setIsEditing(false); setToastMessage("Saved!"); setShowToast(true); setTimeout(() => setShowToast(false), 3000); };
  const cancelProfileUpdates = () => { setEditForm({ ...profile }); setIsEditing(false); };

  const getLayoutClasses = () => {
    if (layoutMode === 'mobile') return 'max-w-[430px] w-[95%] border-[10px] border-slate-800 shadow-2xl rounded-[3rem] my-6 overflow-hidden bg-[#f8fafc] dark:bg-slate-900';
    if (layoutMode === 'tablet') return 'max-w-[768px] w-[95%] border-[6px] border-slate-700 shadow-xl rounded-[2rem] my-6 overflow-hidden bg-[#f8fafc] dark:bg-slate-900';
    return 'max-w-7xl w-full';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col items-center w-full relative">
      {activeAction && <ActionModal type={activeAction.type} onClose={() => setActiveAction(null)} onSubmit={handleActionSubmit} />}
      
      {isQrZoomed && (
        <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 z-[999999]" onClick={() => setIsQrZoomed(false)}>
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 max-w-[340px] w-full flex flex-col items-center gap-5 relative border dark:border-slate-800" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsQrZoomed(false)} className="absolute top-5 right-5 text-slate-400"><X size={16} /></button>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(profile?.website || "https://github.com")}&ecc=M`} className="w-52 h-52" />
          </div>
        </div>
      )}

      <div className="w-full shrink-0">
        <Navbar 
          visibility={visibility} toggleVisibility={toggleVisibility}
          isEditing={isEditing} setIsEditing={(val) => { setEditForm({...profile}); setIsEditing(val); }}
          editForm={editForm} handleInputChange={handleInputChange}
          saveProfileUpdates={saveProfileUpdates} cancelProfileUpdates={cancelProfileUpdates}
          currentAppTheme={theme} onChangeAppTheme={setTheme}
          onShare={handleShare}
          onDownloadVCard={handleDownloadVCard}
          onReport={() => setActiveAction({type: 'report'})}
          onBlock={() => setActiveAction({type: 'block'})}
        />
      </div>

      <div className={`transition-all duration-300 flex-1 flex flex-col items-center justify-start ${getLayoutClasses()}`}>
        <main className={`w-full px-4 py-6 grid gap-6 ${layoutMode === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'}`} id="overview">
          <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-5' : 'w-full'}`}>
            <LeftSidebar profile={profile} visibility={visibility} isEditing={isEditing} editForm={editForm} handleInputChange={handleInputChange} saveProfileUpdates={saveProfileUpdates} cancelProfileUpdates={cancelProfileUpdates} setIsQrZoomed={setIsQrZoomed} />
          </div>
          <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-7' : 'w-full'}`}>
            <section className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border dark:border-slate-800 w-full mb-6"><ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} /></section>
            <section className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border dark:border-slate-800 w-full mb-6"><MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} /></section>
            <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
            <BottomCTA />
          </div>
        </main>
      </div>

      <FloatingWhatsApp phone={profile?.phone} />
      
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-xl flex items-center gap-2 z-50">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

