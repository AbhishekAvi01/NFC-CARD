import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export default function FeedbackSection({ metrics }) {
  const { ratingAvg, totalCount, distribution, featuredReview } = metrics;

  return (
    <div className="w-full">
      <div className="mb-5 px-1">
        <h3 className="text-base font-bold text-slate-800 tracking-tight">Client Reviews</h3>
        <p className="text-[11px] text-slate-400 font-medium -mt-0.5">What people say about my work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-5 bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col sm:flex-row md:flex-col items-center justify-center gap-5 text-center sm:text-left md:text-center h-full">
          <div>
            <div className="text-4xl font-black text-slate-800 tracking-tight">{ratingAvg}</div>
            <div className="flex items-center justify-center sm:justify-start md:justify-center gap-0.5 mt-1.5 text-amber-500">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-2">({totalCount} Verified Reviews)</p>
          </div>

          <div className="flex-1 w-full flex flex-col gap-2 border-t sm:border-t-0 md:border-t border-slate-200/60 pt-4 sm:pt-0 md:pt-4 sm:pl-4 md:pl-0">
            {distribution.map((row, index) => (
              <div key={index} className="flex items-center gap-3 text-[10px] font-bold text-slate-500">
                <span className="w-2 text-right">{row.stars}★</span>
                <div className="flex-1 h-2 bg-slate-200/70 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${row.percentage}%` }} />
                </div>
                <span className="w-5 text-slate-400 text-right">{row.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between items-start gap-3">
              <div className="flex items-center gap-3">
                <img src={featuredReview.avatar} alt={featuredReview.author} className="w-10 h-10 rounded-xl object-cover bg-slate-100 border border-slate-200/50" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 tracking-tight">{featuredReview.author}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">{featuredReview.role}</span>
                </div>
              </div>
              <span className="text-[10px] font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">{featuredReview.timeframe}</span>
            </div>
            <div className="flex items-center gap-0.5 mt-3.5 text-amber-500">
              {[...Array(featuredReview.score)].map((_, i) => (
                <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2.5 italic">"{featuredReview.text}"</p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
            <CheckCircle2 size={12} strokeWidth={2.5} />
            <span>Verified Contract Milestone Integration</span>
          </div>
        </div>
      </div>
    </div>
  );
}