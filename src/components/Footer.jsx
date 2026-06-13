import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function BottomCTA() {

  const socialIcons = [
    { 
    
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ), 
      url: "https://linkedin.com", 
      color: "hover:bg-blue-600 hover:text-white border-blue-200/50" 
    },
    { 
      
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.0 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ), 
      url: "https://github.com", 
      color: "hover:bg-slate-800 hover:text-white border-slate-200/50" 
    },
    { 
    
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ), 
      url: "https://twitter.com", 
      color: "hover:bg-sky-500 hover:text-white border-sky-200/50" 
    },
    { 
    
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="2" width="20" h="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      url: "https://instagram.com", 
      color: "hover:bg-pink-600 hover:text-white border-pink-200/50" 
    },
    { 
      
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
        </svg>
      ), 
      url: "https://youtube.com", 
      color: "hover:bg-rose-600 hover:text-white border-rose-200/50" 
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8">
      
    
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(15,23,42,0.15)] relative overflow-hidden group border border-slate-800 w-full">
        
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl" />

        <div className="text-center sm:text-left relative z-10">
          <h3 className="text-base sm:text-lg font-black tracking-tight text-white uppercase">
            Let's Work Together
          </h3>
          <p className="text-xs text-slate-300 font-medium mt-1.5 max-w-md leading-relaxed">
            I'm always open to discussing new projects, high-scale architectures, creative ideas, or optimization opportunities.
          </p>
        </div>

        <a 
          href="mailto:abhishek@example.com"
          className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-500 font-bold text-xs px-6 py-3.5 rounded-xl active:scale-95 transition-all duration-150 shadow-lg shadow-blue-600/20 whitespace-nowrap relative z-10 group/btn cursor-pointer border border-blue-500/50"
        >
          <Mail size={14} strokeWidth={2.5} />
          <span>Contact Me</span>
          <ArrowUpRight size={14} strokeWidth={2.5} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>

      </div>

    
      <div className="w-full flex flex-col items-center gap-3 py-1.5">
        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
          Follow me on
        </span>
        
        <div className="flex items-center gap-3">
          {socialIcons.map((soc, index) => (
            <a
              key={index}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs cursor-pointer ${soc.color}`}
            >
              {soc.icon}
            </a>
          ))}
        </div>
      </div>

    
      <div className="w-full flex flex-row items-center justify-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-4 border-t border-slate-200/50 dark:border-slate-800/80 max-w-xs mx-auto">
        <div className="flex items-center gap-1">
          <span>Powered by</span>
          <span className="text-blue-600 dark:text-blue-400 font-black">NFC Card</span>
        </div>
        <div className="h-3 w-px bg-slate-300 dark:bg-slate-700" />
        <a 
          href="#save-node"
          onClick={(e) => {
            e.preventDefault();
            const event = new CustomEvent('deviceLayoutChange', { detail: { mode: 'desktop' } });
            window.dispatchEvent(event);
          }}
          className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Save to Contacts</span>
        </a>
      </div>

    </div>
  );
}