import React from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/ProfileCard';
import ServicesGrid from './components/Services';
import MediaGallery from './components/MediaGallery';
import FeedbackSection from './components/FeedbackSection';
import BottomCTA from './components/Footer';
import { COMPONENT_DATA_PAYLOAD } from './mockData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans selection:bg-blue-600 selection:text-white">
      
  
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 grid grid-cols-12 gap-6 lg:gap-8" id="overview">
        
       
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            <LeftSidebar />
          </div>
        </div>

        
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 sm:gap-8">
          
          
          <section className="bg-white p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300">
            <ServicesGrid services={COMPONENT_DATA_PAYLOAD.services} />
          </section>

          
          <section className="bg-white p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 relative">
            <MediaGallery galleryItems={COMPONENT_DATA_PAYLOAD.gallery} />
          </section>

          
          <section className="bg-white p-5 sm:p-6 lg:p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300">
            <FeedbackSection metrics={COMPONENT_DATA_PAYLOAD.reviews} />
          </section>

          
          <BottomCTA />

        </div>
      </main>

      
      <footer className="w-full bg-white border-t border-slate-200 mt-16 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>© 2026 Abhishek Kumar. All rights reserved.</span>
          <div className="flex items-center gap-2 text-slate-300">
            <span>Powered by NFC Card Ecosystem</span>
          </div>
        </div>
      </footer>

    </div>
  );
}