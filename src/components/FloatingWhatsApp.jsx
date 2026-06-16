import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ phone }) {
  
  const whatsappUrl = `https://wa.me/${phone?.replace(/[^0-9]/g, '') || '919267991060'}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce border-4 border-white dark:border-slate-900"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.5} />
    </a>
  );
}