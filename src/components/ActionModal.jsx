import React, { useState } from 'react';

export default function ActionModal({ type, onClose, onSubmit }) {
  const [reason, setReason] = useState("");
  
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl w-full max-w-sm border border-slate-200 dark:border-slate-800 shadow-2xl">
        <h2 className="text-lg font-bold mb-4 capitalize text-slate-900 dark:text-white">{type} User</h2>
        
        <select 
          onChange={(e) => setReason(e.target.value)} 
          className="w-full p-2 border rounded-lg mb-4 bg-slate-100 dark:bg-slate-800 dark:text-white outline-none"
        >
          <option value="">Select a reason...</option>
          <option value="spam">Spam or unwanted</option>
          <option value="inappropriate">Inappropriate content</option>
          <option value="fake">Fake profile</option>
        </select>
        
        <div className="flex gap-2">
          <button 
            onClick={onClose} 
            className="flex-1 p-2 border rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Cancel
          </button>
          <button 
            onClick={() => onSubmit(reason)} 
            className="flex-1 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}