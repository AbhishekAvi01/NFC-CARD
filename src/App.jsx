import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/ProfileCard'; 
import ServicesGrid from './components/Services';    
import MediaGallery from './components/MediaGallery';
import FeedbackSection from './components/FeedbackSection';
import BottomCTA from './components/Footer'; 
import MicroDetails from './components/MicroDetails';        
import { COMPONENT_DATA_PAYLOAD } from './mockData';

export default function App() {
  const [layoutMode, setLayoutMode] = useState('desktop');

  useEffect(() => {
    const handleLayoutMode = (e) => {
      if (e.detail && e.detail.mode) {
        setLayoutMode(e.detail.mode);
      }
    };
    window.addEventListener('deviceLayoutChange', handleLayoutMode);
    return () => window.removeEventListener('deviceLayoutChange', handleLayoutMode);
  }, []);

  const getLayoutClasses = () => {
    if (layoutMode === 'mobile') {
      return 'max-w-[430px] w-[95%] border-[10px] border-slate-800 shadow-2xl rounded-[3rem] my-6 overflow-hidden bg-[#f8fafc]';
    }
    if (layoutMode === 'tablet') {
      return 'max-w-[768px] w-[95%] border-[6px] border-slate-700 shadow-xl rounded-[2rem] my-6 overflow-hidden bg-[#f8fafc]';
    }
    return 'max-w-7xl w-full';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col items-center w-full">
      
      <div className="w-full shrink-0">
        <Navbar />
      </div>

      <div className={`transition-all duration-300 flex-1 flex flex-col items-center justify-start ${getLayoutClasses()}`}>
        <main 
          className={`w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 grid gap-6 lg:gap-8 ${
            layoutMode === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'
          }`} 
          id="overview"
        >
          
        
          <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-5' : 'w-full'} flex flex-col gap-4`}>
            <div className={`${layoutMode === 'desktop' ? 'lg:sticky lg:top-24' : ''} flex flex-col gap-4 w-full`}>
              <LeftSidebar />
            </div>
          </div>

          
          <div className={`${layoutMode === 'desktop' ? 'col-span-12 lg:col-span-7' : 'w-full'} flex flex-col gap-6 sm:gap-8 w-full`}>
            
            <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full">
              <ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} />
            </section>

            <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 relative w-full">
              <MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} />
            </section>

            <section className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 w-full">
              <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
            </section>

            <BottomCTA />

          </div>
        </main>
      </div>

      <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16 py-8 px-4 text-center transition-colors shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>© 2026 Abhishek Kumar. All rights reserved.</span>
          <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
            <span>Powered by NFC Card Ecosystem</span>
          </div>
        </div>
      </footer>

    </div>
  );
}