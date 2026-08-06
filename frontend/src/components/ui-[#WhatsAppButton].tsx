'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/18005864373?text=Hello%20Lumi%C3%A8re%20Beauty%20Lounge,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20spa%20appointment.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-105 hover:bg-[#20ba5a] transition-all duration-300 group"
      aria-label="Contact Concierge on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline group-hover:inline">
        WhatsApp Concierge
      </span>
    </a>
  );
};
