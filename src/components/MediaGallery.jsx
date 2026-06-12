import React, { useState } from 'react';
import { X, Eye, Maximize2 } from 'lucide-react';

export default function MediaGallery({ galleryItems }) {
  const [currentFilter, setCurrentFilter] = useState('All');
  const [activePreview, setActivePreview] = useState(null);
  
  const [isShowingAll, setIsShowingAll] = useState(false);

  const filterTabs = ['All', 'Photos', 'Videos', 'Certificates'];

  const filteredItems = currentFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === currentFilter);

  const displayedItems = isShowingAll ? filteredItems : filteredItems.slice(0, 4);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 px-1">
        <div>
          <h3 className="text-base font-bold text-slate-800 tracking-tight">Media Gallery</h3>
          <p className="text-[11px] text-slate-400 font-medium -mt-0.5">Photos, Videos, Works, Certificates</p>
        </div>
    
        <button 
          onClick={() => setIsShowingAll(!isShowingAll)}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 transition cursor-pointer bg-blue-50 px-3 py-1.5 rounded-xl hover:bg-blue-100"
        >
          {isShowingAll ? 'Show Less' : 'View All'}
        </button>
      </div>

    
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setCurrentFilter(tab);
            
              setIsShowingAll(false); 
            }}
            className={`text-xs px-4 py-1.5 rounded-full font-bold transition-all duration-150 whitespace-nowrap cursor-pointer ${
              currentFilter === tab
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-50 text-slate-500 border border-slate-100 hover:border-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 transition-all">
        {displayedItems.map((image, index) => (
          <div 
            key={index} 
            onClick={() => setActivePreview(image.src)}
            className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 group cursor-pointer active:scale-95 transition-all duration-200 shadow-sm animate-fade-in"
          >
            <img 
              src={image.src} 
              alt="Gallery thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
              <Eye size={14} className="text-white" />
              <span className="text-[10px] text-white font-bold tracking-wider uppercase">Expand</span>
            </div>
            
        
            {index === 3 && !isShowingAll && filteredItems.length > 4 && (
              <div 
                onClick={(e) => {
                  e.stopPropagation(); 
                  setIsShowingAll(true);
                }}
                className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1.5px] flex items-center justify-center hover:bg-slate-950/80 transition-colors"
              >
                <span className="text-white text-xs font-black tracking-wide uppercase text-center px-1">
                  +{filteredItems.length - 3} More
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
          <span className="text-xs font-semibold text-slate-400 block">No files inside {currentFilter} category</span>
        </div>
      )}

      
      {activePreview && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex flex-col justify-between z-50 p-6 animate-fade-in">
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Maximize2 size={12} /> High Resolution Image Preview
            </span>
            <button 
              onClick={() => setActivePreview(null)}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center my-6 overflow-hidden">
            <img src={activePreview} alt="Expanded High Res" className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/5 animate-scale-up" />
          </div>
          <div className="w-full text-center pb-2">
            <button 
              onClick={() => setActivePreview(null)}
              className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest"
            >
              ← Dismiss Inspector Frame
            </button>
          </div>
        </div>
      )}
    </div>
  );
}