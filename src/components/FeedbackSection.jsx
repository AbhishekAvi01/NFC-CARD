import React from 'react';
import { mockProfileData } from '../mockData';
import { Star } from 'lucide-react';

export default function FeedbackSection() {
  const { reviews } = mockProfileData;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-200 tracking-tight">
            Client Reviews
          </h3>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
            What people say about user profile parameters
          </p>
        </div>
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">See All</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-slate-100 dark:border-slate-800">
        
    
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100/70 dark:border-slate-800/80 rounded-2xl">
          <h4 className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">
            {reviews.ratingAvg}
          </h4>
          <div className="flex items-center gap-0.5 text-amber-400 mt-1.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
          </div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-2">
            ({reviews.totalCount} Reviews)
          </span>
        </div>

    
        <div className="md:col-span-8 flex flex-col gap-2 w-full">
          {reviews.distribution.map((row, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-500 dark:text-slate-400">
              <span className="w-3 text-right">{row.stars}★</span>
              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-400 rounded-full transition-all duration-500" 
                  style={{ width: `${row.percentage}%` }}
                />
              </div>
              <span className="w-6 text-slate-400 dark:text-slate-500 text-right">{row.count}</span>
            </div>
          ))}
        </div>
      </div>

    
      <div className="mt-5 bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100/60 dark:border-slate-800/50 p-4 rounded-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <img 
              src={reviews.featuredReview.avatar} 
              alt={reviews.featuredReview.author} 
              className="w-9 h-9 rounded-full object-cover bg-slate-200 border border-slate-200 dark:border-slate-700" 
            />
            <div className="flex flex-col">
              <span className="text-xs font-black text-slate-800 dark:text-slate-200 tracking-tight">
                {reviews.featuredReview.author}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                {reviews.featuredReview.role}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">{reviews.featuredReview.timeframe}</span>
        </div>

        <div className="flex text-amber-400 mb-2">
          {[...Array(reviews.featuredReview.score)].map((_, i) => <Star key={i} size={11} fill="currentColor" strokeWidth={0} />)}
        </div>
        <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed italic">
          "{reviews.featuredReview.text}"
        </p>
      </div>

    </div>
  );
}