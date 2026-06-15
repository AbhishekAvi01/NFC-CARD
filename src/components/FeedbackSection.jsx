
import React, { useState, useEffect } from 'react';
import { mockProfileData } from '../mockData';
import { Star, UserCheck, Send, MessageSquare } from 'lucide-react';

export default function FeedbackSection() {
  const { reviews } = mockProfileData;

  
  const [totalCount, setTotalCount] = useState(reviews.totalCount || 128);
  const [ratingAvg, setRatingAvg] = useState(reviews.ratingAvg || 4.9);
  const [distribution, setDistribution] = useState(reviews.distribution || []);
  
  
  const [customerReviews, setCustomerReviews] = useState([]);


  const [inlineForm, setInlineForm] = useState({ name: "", comment: "", rating: 5 });
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  
  const processNewReviewPayload = (name, rating, comment) => {
    const targetRating = Number(rating) || 5;
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const nextCount = totalCount + 1;
    setTotalCount(nextCount);

    const nextAvg = (((ratingAvg * totalCount) + targetRating) / nextCount).toFixed(1);
    setRatingAvg(nextAvg);

    setDistribution(prevRows => 
      prevRows.map(row => {
        if (row.stars === targetRating) {
          const updatedCount = row.count + 1;
          return {
            ...row,
            count: updatedCount,
            percentage: Math.min(Math.round((updatedCount / nextCount) * 100), 100)
          };
        }
        return {
          ...row,
          percentage: Math.min(Math.round((row.count / nextCount) * 100), 100)
        };
      })
    );

  
    const initialChar = name ? name.trim().charAt(0).toUpperCase() : "A";
    
    const newReviewNode = {
      author: name || "Anonymous Client",
      score: targetRating,
      text: comment,
      timeframe: currentDate,
      role: "Verified Business Networker",
      initialAvatar: initialChar, 
      isLiveNode: true
    };

    setCustomerReviews(prev => [newReviewNode, ...prev]);
  };

  useEffect(() => {
    const handleNewIncomingReview = (e) => {
      if (e.detail) {
        processNewReviewPayload(e.detail.name, e.detail.rating, e.detail.comment);
      }
    };
    window.addEventListener('newCustomerReviewSubmitted', handleNewIncomingReview);
    return () => window.removeEventListener('newCustomerReviewSubmitted', handleNewIncomingReview);
  }, [totalCount, ratingAvg]);

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    if (!inlineForm.comment.trim() || !inlineForm.name.trim()) return;

    processNewReviewPayload(inlineForm.name, inlineForm.rating, inlineForm.comment);

    setInlineForm({ name: "", comment: "", rating: 5 });
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 4000);
  };

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
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-xl transition-all active:scale-95 flex items-center gap-1 cursor-pointer shadow-sm shadow-blue-500/10"
        >
          <MessageSquare size={12} />
          <span>{showForm ? "Close Form" : "Write Review"}</span>
        </button>
      </div>

      
      {showForm && (
        <div className="w-full bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 mb-6 transition-all duration-300 animate-fade-in">
          <h4 className="text-[11px] font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider mb-3">
            Add Your Experience Instantly
          </h4>
          
          <form onSubmit={handleInlineSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input 
                  type="text" 
                  required
                  value={inlineForm.name}
                  onChange={(e) => setInlineForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-200 outline-none font-semibold focus:border-blue-500" 
                  placeholder="Your Full Name"
                />
              </div>
              
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Rating:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      type="button" 
                      key={star} 
                      onClick={() => setInlineForm(prev => ({ ...prev, rating: star }))}
                      className="cursor-pointer transition-transform active:scale-90"
                    >
                      <Star size={14} className={star <= inlineForm.rating ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-700"} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <textarea 
                required
                rows={2}
                value={inlineForm.comment}
                onChange={(e) => setInlineForm(prev => ({ ...prev, comment: e.target.value }))}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs text-slate-800 dark:text-slate-200 outline-none font-medium resize-none focus:border-blue-500" 
                placeholder="Write collaboration feedback, technical remarks or project review notes..."
              />
            </div>

            <button 
              type="submit" 
              className="self-end bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/10"
            >
              <Send size={11} /> 
              <span>Publish Review</span>
            </button>
          </form>
        </div>
      )}

      {successMessage && (
        <div className="w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold p-3 rounded-xl mb-5 animate-fade-in">
          ✓ Success Node: Your corporate review has been rendered into the dynamic analytics stream!
        </div>
      )}

    
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100/70 dark:border-slate-800/80 rounded-2xl">
          <h4 className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">
            {ratingAvg}
          </h4>
          <div className="flex items-center gap-0.5 text-amber-400 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.round(ratingAvg) ? "currentColor" : "none"} 
                className={i < Math.round(ratingAvg) ? "text-amber-400" : "text-slate-300 dark:text-slate-700"} 
                strokeWidth={i < Math.round(ratingAvg) ? 0 : 2}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-2">
            ({totalCount} Reviews)
          </span>
        </div>

        <div className="md:col-span-8 flex flex-col gap-2 w-full">
          {distribution.map((row, idx) => (
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

      
      {customerReviews.length > 0 && (
        <div className="flex flex-col gap-4 mt-5 pt-1 border-b border-dashed border-slate-200 dark:border-slate-800 pb-5">
          <span className="text-[9px] font-black uppercase text-emerald-500 tracking-widest block px-1 animate-pulse">
            Live Reviews Stack Feed
          </span>
          {customerReviews.map((item, index) => (
            <div 
              key={index} 
              className="bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] border border-emerald-500/20 dark:border-emerald-500/10 p-4 rounded-2xl shadow-2xs transition-all animate-fade-in"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  
                  
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-700 text-white font-black flex items-center justify-center text-xs uppercase shadow-xs shrink-0 border border-indigo-500/30">
                    {item.initialAvatar}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200 tracking-tight flex items-center gap-1">
                      {item.author}
                      <span className="text-[8px] bg-emerald-500 text-white px-1 py-0.5 rounded-sm font-black uppercase tracking-wide flex items-center gap-0.5 transform scale-90">
                        <UserCheck size={8} /> New
                      </span>
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                      {item.role}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  {item.timeframe}
                </span>
              </div>
              <div className="flex text-amber-400 mb-2">
                {[...Array(item.score)].map((_, i) => <Star key={i} size={11} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      )}

      
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