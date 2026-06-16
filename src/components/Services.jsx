
// import React, { useState } from 'react';
// import { mockProfileData } from '../mockData';
// import * as Icons from 'lucide-react';

// export default function ServicesGrid() {
//   const { services } = mockProfileData;
//   const [isExpanded, setIsExpanded] = useState(false);

  
//   const visibleServices = isExpanded ? services : services.slice(0, 4);

//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-center mb-5">
//         <div>
//           <h3 className="text-base font-extrabold tracking-tight text-slate-800 dark:text-slate-200">
//             My Services
//           </h3>
//           <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
//             {services.length} Modules Available ({isExpanded ? 'Fully Expanded' : 'Collapsed'})
//           </p>
//         </div>
        
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 px-3.5 py-1.5 rounded-xl shadow-xs hover:bg-blue-100 dark:hover:bg-blue-900/50 transition cursor-pointer"
//         >
//           {isExpanded ? 'Show Less ↑' : 'Manage / View All ↓'}
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {visibleServices.map((service, index) => {
//           // Dynamic Lucide resolver track
//           const IconComponent = Icons[service.iconName] || Icons.HelpCircle;
//           return (
//             <div 
//               key={index}
//               className="p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5"
//             >
//               <div>
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${service.bgClass} dark:bg-slate-800 text-lg shadow-inner`}>
//                   <div className={service.iconClass}>
//                     <IconComponent size={18} />
//                   </div>
//                 </div>
//                 <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 mt-3.5 uppercase tracking-wide">
//                   {service.title}
//                 </h4>
//                 <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-1.5">
//                   {service.description}
//                 </p>
//               </div>

//               <div className="flex justify-end mt-4 pt-2 border-t border-slate-50/50 dark:border-slate-800/40">
//                 <Icons.ArrowRight size={14} className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors group-hover:translate-x-0.5 transform" />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { mockProfileData } from '../mockData';
import * as Icons from 'lucide-react';

export default function ServicesGrid({ services: propServices, isQrZoomed }) {
  // Fallback to mockData if propServices is not passed
  const services = propServices || mockProfileData?.services || [];
  const [isExpanded, setIsExpanded] = useState(false);

  // 🛠️ 🟢 ABSOLUTE FIX: If QR code is zoomed, do NOT render this component's layout at all
  if (isQrZoomed) {
    return null;
  }

  const visibleServices = isExpanded ? services : services.slice(0, 4);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-base font-extrabold tracking-tight text-slate-800 dark:text-slate-200">
            My Services
          </h3>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
            {services.length} Modules Available ({isExpanded ? 'Fully Expanded' : 'Collapsed'})
          </p>
        </div>
        
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 px-3.5 py-1.5 rounded-xl shadow-xs hover:bg-blue-100 dark:hover:bg-blue-900/50 transition cursor-pointer"
        >
          {isExpanded ? 'Show Less ↑' : 'Manage / View All ↓'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleServices.map((service, index) => {
          const IconComponent = Icons[service.iconName] || Icons.HelpCircle;
          return (
            <div 
              key={index}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${service.bgClass || 'bg-blue-50'} dark:bg-slate-800 text-lg shadow-inner`}>
                  <div className={service.iconClass || 'text-blue-600'}>
                    <IconComponent size={18} />
                  </div>
                </div>
                <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 mt-3.5 uppercase tracking-wide">
                  {service.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-1.5">
                  {service.description}
                </p>
              </div>

              <div className="flex justify-end mt-4 pt-2 border-t border-slate-50/50 dark:border-slate-800/40">
                <Icons.ArrowRight size={14} className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors group-hover:translate-x-0.5 transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}