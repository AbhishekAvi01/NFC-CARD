// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import LeftSidebar from './components/ProfileCard'; 
// import ServicesGrid from './components/Services';    
// import MediaGallery from './components/MediaGallery';
// import FeedbackSection from './components/FeedbackSection';
// import BottomCTA from './components/Footer'; 
// import MicroDetails from './components/MicroDetails';        
// import { COMPONENT_DATA_PAYLOAD } from './mockData';

// export default function App() {
//   const [layoutMode, setLayoutMode] = useState('desktop');

//   useEffect(() => {
//     const handleLayoutMode = (e) => {
//       if (e.detail && e.detail.mode) {
//         setLayoutMode(e.detail.mode);
//       }
//     };
//     window.addEventListener('deviceLayoutChange', handleLayoutMode);
//     return () => window.removeEventListener('deviceLayoutChange', handleLayoutMode);
//   }, []);

//   const getLayoutClasses = () => {
//     if (layoutMode === 'mobile') {
//       return 'max-w-[430px] w-[95%] border-[10px] border-slate-800 shadow-2xl rounded-[3rem] my-6 overflow-hidden bg-[#f8fafc]';
//     }
//     if (layoutMode === 'tablet') {
//       return 'max-w-[768px] w-[95%] border-[6px] border-slate-700 shadow-xl rounded-[2rem] my-6 overflow-hidden bg-[#f8fafc]';
//     }
//     return 'max-w-7xl w-full';
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col items-center w-full">
      
//       <div className="w-full shrink-0">
//         <Navbar />
//       </div>

//       <div className={`transition-all duration-300 flex-1 flex flex-col items-center justify-start ${getLayoutClasses()}`}>
//         <main 
//           className={`w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 grid gap-6 lg:gap-8 ${
//             layoutMode === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'
//           }`} 
//           id="overview"
//         >
          
        
//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-5' : 'w-full'} flex flex-col gap-4`}>
//             <div className={`${layoutMode === 'desktop' ? 'lg:sticky lg:top-24' : ''} flex flex-col gap-4 w-full`}>
//               <LeftSidebar />
//             </div>
//           </div>

          
//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-7' : 'w-full'} flex flex-col gap-6 sm:gap-8 w-full`}>
            
//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full">
//               <ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 relative w-full">
//               <MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full">
//               <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
//             </section>

//             <BottomCTA />

//           </div>
//         </main>
//       </div>

//       <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16 py-8 px-4 text-center transition-colors shrink-0">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
//           <span>© 2026 Abhishek Kumar. All rights reserved.</span>
//           <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
//             <span>Powered by NFC Card Ecosystem</span>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import LeftSidebar from './components/ProfileCard'; 
// import ServicesGrid from './components/Services';    
// import MediaGallery from './components/MediaGallery';
// import FeedbackSection from './components/FeedbackSection';
// import BottomCTA from './components/Footer'; 
// import { COMPONENT_DATA_PAYLOAD, mockProfileData } from './mockData';

// export default function App() {
//   const [layoutMode, setLayoutMode] = useState('desktop');
//   const [theme, setTheme] = useState('light');

//   // Master Global Lifted States to pass across Navbar and Profile Card
//   const [profile, setProfile] = useState(() => {
//     const baseProfile = mockProfileData?.profile || {};
//     return {
//       ...baseProfile,
//       userId: baseProfile.userId || "@abhistark"
//     };
//   });

//   const [visibility, setVisibility] = useState({
//     profilePicture: true,
//     titleBlock: true,
//     organizationBlock: true,
//     bioBlock: true,
//     contactStrip: true,
//     qrSection: true 
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState({ ...profile });

//   useEffect(() => {
//     const handleLayoutMode = (e) => {
//       if (e.detail && e.detail.mode) {
//         setLayoutMode(e.detail.mode);
//       }
//     };
//     window.addEventListener('deviceLayoutChange', handleLayoutMode);
//     return () => window.removeEventListener('deviceLayoutChange', handleLayoutMode);
//   }, []);

//   const toggleVisibility = (field) => {
//     setVisibility(prev => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm(prev => ({ ...prev, [name]: value }));
//   };

//   const saveProfileUpdates = () => {
//     setProfile({ ...editForm });
//     setIsEditing(false);
//     const event = new CustomEvent('navbarToastTriggerAction', { detail: { msg: "Workspace changes committed and profile card updated successfully!" } });
//     window.dispatchEvent(event);
//   };

//   const cancelProfileUpdates = () => {
//     setEditForm({ ...profile });
//     setIsEditing(false);
//   };

//   const getLayoutClasses = () => {
//     if (layoutMode === 'mobile') {
//       return 'max-w-[430px] w-[95%] border-[10px] border-slate-800 shadow-2xl rounded-[3rem] my-6 overflow-hidden bg-[#f8fafc]';
//     }
//     if (layoutMode === 'tablet') {
//       return 'max-w-[768px] w-[95%] border-[6px] border-slate-700 shadow-xl rounded-[2rem] my-6 overflow-hidden bg-[#f8fafc]';
//     }
//     return 'max-w-7xl w-full';
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col items-center w-full">
      
//       {/* 🛠️ PASSED PROPS TO NAVBAR */}
//       <div className="w-full shrink-0">
//         <Navbar 
//           visibility={visibility}
//           toggleVisibility={toggleVisibility}
//           isEditing={isEditing}
//           setIsEditing={(val) => {
//             setEditForm({ ...profile });
//             setIsEditing(val);
//           }}
//           editForm={editForm}
//           handleInputChange={handleInputChange}
//           saveProfileUpdates={saveProfileUpdates}
//           cancelProfileUpdates={cancelProfileUpdates}
//           currentTheme={theme}
//           onChangeTheme={setTheme}
//         />
//       </div>

//       <div className={`transition-all duration-300 flex-1 flex flex-col items-center justify-start ${getLayoutClasses()}`}>
//         <main 
//           className={`w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 grid gap-6 lg:gap-8 ${
//             layoutMode === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'
//           }`} 
//           id="overview"
//         >
          
//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-5' : 'w-full'} flex flex-col gap-4`}>
//             <div className={`${layoutMode === 'desktop' ? 'lg:sticky lg:top-24' : ''} flex flex-col gap-4 w-full`}>
//               {/* 🛠️ PASSED PROPS TO PROFILE CARD */}
//               <LeftSidebar 
//                 profile={profile}
//                 visibility={visibility}
//                 isEditing={isEditing}
//                 editForm={editForm}
//                 handleInputChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-7' : 'w-full'} flex flex-col gap-6 sm:gap-8 w-full`}>
            
//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full">
//               <ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 relative w-full">
//               <MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full">
//               <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
//             </section>

//             <BottomCTA />

//           </div>
//         </main>
//       </div>

//       <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16 py-8 px-4 text-center transition-colors shrink-0">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
//           <span>© 2026 Abhishek Kumar. All rights reserved.</span>
//           <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
//             <span>Powered by NFC Card Ecosystem</span>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }


//above Workable




// following Workable


// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import LeftSidebar from './components/ProfileCard'; // Correct import filename reference
// import ServicesGrid from './components/Services';    
// import MediaGallery from './components/MediaGallery';
// import FeedbackSection from './components/FeedbackSection';
// import BottomCTA from './components/Footer'; 
// import MicroDetails from './components/MicroDetails'; 
// import { COMPONENT_DATA_PAYLOAD, mockProfileData } from './mockData';
// import { CheckCircle2, X } from 'lucide-react'; // Ensure correct icons exist

// export default function App() {
//   const [layoutMode, setLayoutMode] = useState('desktop');
//   const [theme, setTheme] = useState('light');
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
  
//   // 1. 🛠️ LIFTED GLOBAL PROFILE DATA AND EDIT STATES Matrices
//   const [profile, setProfile] = useState(() => {
//     const baseProfile = mockProfileData?.profile || {};
//     return {
//       name: baseProfile.name || "Abhishek Kumar",
//       title: baseProfile.title || "React.js Developer",
//       organization: baseProfile.organization || "Eyerexus",
//       bio: baseProfile.bio || "Passionate React.js Developer with 3+ years of experience in building scalable web & mobile applications.",
//       phone: baseProfile.phone || "+91 98765 43210",
//       email: baseProfile.email || "abhishek@example.com",
//       location: baseProfile.location || "Delhi, India",
//       imageUrl: baseProfile.imageUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
//       website: baseProfile.website || "https://www.linkedin.com/in/abhishek-kumar-329a282b8/",
//       userId: baseProfile.userId || "@abhistark"
//     };
//   });
  
//   const [visibility, setVisibility] = useState({
//     profilePicture: true,
//     titleBlock: true,
//     organizationBlock: true,
//     bioBlock: true,
//     contactStrip: true,
//     qrSection: true 
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState({ ...profile });

//   useEffect(() => {
//     const handleLayoutMode = (e) => {
//       if (e.detail && e.detail.mode) setLayoutMode(e.detail.mode);
//     };
//     window.addEventListener('deviceLayoutChange', handleLayoutMode);
//     return () => window.removeEventListener('deviceLayoutChange', handleLayoutMode);
//   }, []);

//   const toggleVisibility = (field) => {
//     setVisibility(prev => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm(prev => ({ ...prev, [name]: value }));
//   };

//   // 🛠️ 🟢 FIXED: SAVE UPDATES: Discards editing bar on success
//   const saveProfileUpdates = () => {
//     setProfile({ ...editForm });
//     setIsEditing(false); // 🚀 This HIDES the Workspace bar instantly
//     setToastMessage("Workspace saved and profile card successfully synced!");
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   // 🛠️ 🟢 FIXED: CANCEL UPDATES: Restores original data and discards editing bar instantly
//   const cancelProfileUpdates = () => {
//     setEditForm({ ...profile });
//     setIsEditing(false); // 🚀 This HIDES the Workspace bar instantly
//   };

//   // CSS framework simulator logic remains unchanged
//   const getSimulatedFrameClasses = () => {
//     if (layoutMode === 'mobile') return 'max-w-[360px] w-full border-[10px] border-slate-900 shadow-2xl rounded-[2.5rem] my-6 overflow-hidden transition-all p-2 bg-slate-50 dark:bg-slate-950';
//     if (layoutMode === 'tablet') return 'max-w-[768px] w-full border-[6px] border-slate-800 shadow-xl rounded-[1.5rem] my-6 overflow-hidden transition-all p-3 bg-slate-50 dark:bg-slate-950';
//     return 'w-full max-w-[1400px] flex flex-col lg:flex-row gap-8 items-start justify-start transition-all';
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col items-center w-full">
      
//       {/* 🛠️ PASSED PROPS TO NAVBAR */}
//       <Navbar 
//         visibility={visibility}
//         toggleVisibility={toggleVisibility}
//         isEditing={isEditing}
//         setIsEditing={(val) => {
//           setEditForm({ ...profile });
//           setIsEditing(val);
//         }}
//         currentAppTheme={theme}
//         onChangeAppTheme={setTheme}
//       />

//       <div className={`transition-all duration-300 flex-1 flex flex-col items-center justify-start ${getSimulatedFrameClasses()}`}>
//         <main 
//           className={`w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 grid gap-6 lg:gap-8 ${
//             layoutMode === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'
//           }`} 
//           id="overview"
//         >
          
//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-5' : 'w-full'} flex flex-col gap-4`}>
//             <div className={`${layoutMode === 'desktop' ? 'lg:sticky lg:top-24' : ''} flex flex-col gap-4 w-full`}>
//               {/* 🛠️ PASSED PROPS TO PROFILE CARD */}
//               <LeftSidebar 
//                 profile={profile}
//                 visibility={visibility}
//                 isEditing={isEditing}
//                 editForm={editForm}
//                 handleInputChange={handleInputChange}
//                 saveProfileUpdates={saveProfileUpdates}
//                 cancelProfileUpdates={cancelProfileUpdates}
//               />
//             </div>
//           </div>

//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-7' : 'w-full'} flex flex-col gap-6 sm:gap-8 w-full`}>
            
//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full relative">
//               <ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full relative">
//               <MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full relative">
//               <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
//             </section>

//             <BottomCTA />

//           </div>
//         </main>
//       </div>

//       <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16 py-8 px-4 text-center transition-colors shrink-0">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
//           <span>© 2026 Abhishek Kumar. All rights reserved.</span>
//           <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
//             <span>Powered by NFC Card Ecosystem</span>
//           </div>
//         </div>
//       </footer>

//       {/* Global Dynamic Toast Alert */}
//       {showToast && (
//         <div className="fixed bottom-5 right-5 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-xl flex items-center gap-2 shadow-2xl z-50 border border-slate-800 animate-fade-in">
//           <CheckCircle2 size={14} className="text-emerald-400" />
//           <span>{toastMessage}</span>
//         </div>
//       )}

//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import LeftSidebar from './components/ProfileCard';
// import ServicesGrid from './components/Services';    
// import MediaGallery from './components/MediaGallery';
// import FeedbackSection from './components/FeedbackSection';
// import BottomCTA from './components/Footer'; 
// import { COMPONENT_DATA_PAYLOAD, mockProfileData } from './mockData';

// export default function App() {
//   const [layoutMode, setLayoutMode] = useState('desktop');
  
//   // 🛠️ 🟢 THEME ENGINE MASTER STATE: Connected directly to the ecosystem
//   const [theme, setTheme] = useState(() => {
//     // Initial sync check with local system preferences or fallbacks
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('app-theme-mode') || 'light';
//     }
//     return 'light';
//   });

//   const [profile, setProfile] = useState(() => {
//     const baseProfile = mockProfileData?.profile || {};
//     return {
//       ...baseProfile,
//       userId: baseProfile.userId || "@abhistark"
//     };
//   });

//   const [visibility, setVisibility] = useState({
//     profilePicture: true,
//     titleBlock: true,
//     organizationBlock: true,
//     bioBlock: true,
//     contactStrip: true,
//     qrSection: true 
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState({ ...profile });

//   useEffect(() => {
//     const handleLayoutMode = (e) => {
//       if (e.detail && e.detail.mode) {
//         setLayoutMode(e.detail.mode);
//       }
//     };
//     window.addEventListener('deviceLayoutChange', handleLayoutMode);
//     return () => window.removeEventListener('deviceLayoutChange', handleLayoutMode);
//   }, []);

//   // 🛠️ 🟢 MASTER CLASS INTERCEPTOR: Toggles .dark safely on HTML root node
//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (theme === 'dark') {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//     localStorage.setItem('app-theme-mode', theme);
//   }, [theme]);

//   const toggleVisibility = (field) => {
//     setVisibility(prev => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm(prev => ({ ...prev, [name]: value }));
//   };

//   const saveProfileUpdates = () => {
//     setProfile({ ...editForm });
//     setIsEditing(false);
//   };

//   const cancelProfileUpdates = () => {
//     setEditForm({ ...profile });
//     setIsEditing(false);
//   };

//   const getLayoutClasses = () => {
//     if (layoutMode === 'mobile') {
//       return 'max-w-[430px] w-[95%] border-[10px] border-slate-800 shadow-2xl rounded-[3rem] my-6 overflow-hidden bg-[#f8fafc] dark:bg-slate-900';
//     }
//     if (layoutMode === 'tablet') {
//       return 'max-w-[768px] w-[95%] border-[6px] border-slate-700 shadow-xl rounded-[2rem] my-6 overflow-hidden bg-[#f8fafc] dark:bg-slate-900';
//     }
//     return 'max-w-7xl w-full';
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col items-center w-full">
      
//       <div className="w-full shrink-0">
//         <Navbar 
//           visibility={visibility}
//           toggleVisibility={toggleVisibility}
//           isEditing={isEditing}
//           setIsEditing={(val) => {
//             setEditForm({ ...profile });
//             setIsEditing(val);
//           }}
//           editForm={editForm}
//           handleInputChange={handleInputChange}
//           saveProfileUpdates={saveProfileUpdates}
//           cancelProfileUpdates={cancelProfileUpdates}
//           currentAppTheme={theme}       // 🛠️ Passed state down
//           onChangeAppTheme={setTheme}   // 🛠️ Passed trigger handler down
//         />
//       </div>

//       <div className={`transition-all duration-300 flex-1 flex flex-col items-center justify-start ${getLayoutClasses()}`}>
//         <main 
//           className={`w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 grid gap-6 lg:gap-8 ${
//             layoutMode === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'
//           }`} 
//           id="overview"
//         >
//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-5' : 'w-full'} flex flex-col gap-4`}>
//             <div className={`${layoutMode === 'desktop' ? 'lg:sticky lg:top-24' : ''} flex flex-col gap-4 w-full`}>
//               <LeftSidebar 
//                 profile={profile}
//                 visibility={visibility}
//                 isEditing={isEditing}
//                 editForm={editForm}
//                 handleInputChange={handleInputChange}
//                 saveProfileUpdates={saveProfileUpdates}
//                 cancelProfileUpdates={cancelProfileUpdates}
//               />
//             </div>
//           </div>

//           <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-7' : 'w-full'} flex flex-col gap-6 sm:gap-8 w-full`}>
//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full relative">
//               <ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 relative w-full">
//               <MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} />
//             </section>

//             <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full relative">
//               <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
//             </section>

//             <BottomCTA />
//           </div>
//         </main>
//       </div>

//       <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center transition-colors shrink-0">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
//           <span>© 2026 Abhishek Kumar. All rights reserved.</span>
//           <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
//             <span>Powered by NFC Card Ecosystem</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/ProfileCard'; 
import ServicesGrid from './components/Services';    
import MediaGallery from './components/MediaGallery';
import FeedbackSection from './components/FeedbackSection';
import BottomCTA from './components/Footer'; 
import { COMPONENT_DATA_PAYLOAD, mockProfileData } from './mockData';
import { CheckCircle2, X } from 'lucide-react';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [layoutMode, setLayoutMode] = useState('desktop');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isQrZoomed, setIsQrZoomed] = useState(false);

  // Dynamic Master Theme State Engine
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('app-theme-mode') || 'light';
    }
    return 'light';
  });

  // Lifted Profile Core State Loop
  const [profile, setProfile] = useState(() => {
    const baseProfile = mockProfileData?.profile || {};
    return {
      ...baseProfile,
      userId: baseProfile.userId || "@abhistark"
    };
  });

  // Global Visibility States Dashboard Matrix
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

  // Handle Dynamic Device Frame Layout Simulations
  useEffect(() => {
    const handleLayoutMode = (e) => {
      if (e.detail && e.detail.mode) {
        setLayoutMode(e.detail.mode);
      }
    };
    window.addEventListener('deviceLayoutChange', handleLayoutMode);
    return () => window.removeEventListener('deviceLayoutChange', handleLayoutMode);
  }, []);

  // Intercept Toast Alerts pushed from Child Components
  useEffect(() => {
    const handleNavbarToast = (e) => {
      if (e.detail && e.detail.msg) {
        setToastMessage(e.detail.msg);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    };
    window.addEventListener('navbarToastTriggerAction', handleNavbarToast);
    return () => window.removeEventListener('navbarToastTriggerAction', handleNavbarToast);
  }, []);

  // Synchronize Global HTML Root node with Light/Dark engine
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('app-theme-mode', theme);
  }, [theme]);

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
    setToastMessage("Workspace changes committed successfully!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const cancelProfileUpdates = () => {
    setEditForm({ ...profile });
    setIsEditing(false); 
  };

  // Process responsive viewport wrap dimensions for layout modes
  const getLayoutClasses = () => {
    if (layoutMode === 'mobile') {
      return 'max-w-[430px] w-[95%] border-[10px] border-slate-800 shadow-2xl rounded-[3rem] my-6 overflow-hidden bg-[#f8fafc] dark:bg-slate-900';
    }
    if (layoutMode === 'tablet') {
      return 'max-w-[768px] w-[95%] border-[6px] border-slate-700 shadow-xl rounded-[2rem] my-6 overflow-hidden bg-[#f8fafc] dark:bg-slate-900';
    }
    return 'max-w-7xl w-full';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col items-center w-full relative">
      
      {/* 🛠️ QR ZOOM OVERLAY (Direct Local Render Block with 100% View Coverage) */}
      {isQrZoomed && (
        <div 
          className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 transition-all z-[999999] w-screen h-screen"
          onClick={() => setIsQrZoomed(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 max-w-[340px] w-full flex flex-col items-center gap-5 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800/80 transform scale-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setIsQrZoomed(false)} 
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 transition-all"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
            
            <div className="text-center mt-3">
              <h4 className="text-sm font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">Scan Connection</h4>
            </div>
            
            <div className="w-52 h-48 bg-white p-3 rounded-2xl border border-slate-100 flex items-center justify-center shadow-inner">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(profile?.website || "https://github.com")}&ecc=M`} 
                alt="Scannable Live QR Node" 
                className="w-full h-full object-contain select-none"
              />
            </div>
            
            <span className="text-[10px] font-mono font-black text-slate-500 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-xl tracking-widest border border-slate-200/50 dark:border-slate-800 mt-2">
              {profile?.userId || "@abhistark"}
            </span>
          </div>
        </div>
      )}

      {/* GLOBAL HEADER NAVIGATION */}
      <div className="w-full shrink-0">
        <Navbar 
          visibility={visibility}
          toggleVisibility={toggleVisibility}
          isEditing={isEditing}
          setIsEditing={(val) => {
            setEditForm({ ...profile }); 
            setIsEditing(val);
          }}
          editForm={editForm}
          handleInputChange={handleInputChange}
          saveProfileUpdates={saveProfileUpdates}
          cancelProfileUpdates={cancelProfileUpdates}
          currentAppTheme={theme}
          onChangeAppTheme={setTheme}
        />
      </div>

      {/* Responsive Workspace Grid Frame Container */}
      <div className={`transition-all duration-300 flex-1 flex flex-col items-center justify-start ${getLayoutClasses()}`}>
        <main 
          className={`w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 grid gap-6 lg:gap-8 ${
            layoutMode === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'
          }`} 
          id="overview"
        >
          
          {/* Left Block Side Panel: Core Identity NFC Card */}
          <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-5' : 'w-full'} flex flex-col gap-4`}>
            <div className={`${layoutMode === 'desktop' ? 'lg:sticky lg:top-24' : ''} flex flex-col gap-4 w-full`}>
              <LeftSidebar 
                profile={profile}
                visibility={visibility}
                isEditing={isEditing}
                editForm={editForm}
                handleInputChange={handleInputChange}
                saveProfileUpdates={saveProfileUpdates}
                cancelProfileUpdates={cancelProfileUpdates}
                setIsQrZoomed={setIsQrZoomed}
              />
            </div>
          </div>

          {/* Right Block Main Streams: Services & Showcases Panel Grid */}
          <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-7' : 'w-full'} flex flex-col gap-6 sm:gap-8 w-full`}>
            
            {/* 🛠️ 🟢 EXTRA HARD FIX: Added conditional rendering check directly to the wrapper `<section>` container box */}
            {!isQrZoomed && (
              <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full relative">
                <ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} />
              </section>
            )}

            <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 relative w-full">
              <MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} />
            </section>

            <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full relative">
              <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
            </section>

            <BottomCTA />

          </div>
        </main>
      </div>

      {/* Main Global Layout Footer Container */}
      <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center transition-colors shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>© 2026 Abhishek Kumar. All rights reserved.</span>
          <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
            <span>Powered by NFC Card Ecosystem</span>
          </div>
        </div>
      </footer>

      {/* Global Dynamic Toast Tracker Banner */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-xl flex items-center gap-2 shadow-2xl z-50 border border-slate-800 animate-fade-in">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
      <FloatingWhatsApp phone={profile?.phone} />

    </div>
  );
}



// above Workable
