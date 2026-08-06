'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCheck, Phone, ChevronRight } from 'lucide-react';
import { salonServices, spaPackages } from '@/data/salonData';
import { formatCurrency } from '@/lib/utils';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: { label: string; action: string }[];
  ctaUrl?: string;
}

export const WhatsAppChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: ChatMessage[] = [
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Namaste & Welcome to Lumière Beauty Lounge & Spa Concierge! 🌸 How may I assist your pampering journey today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: [
        { label: '✨ Popular Treatments & Rates', action: 'services' },
        { label: '📅 Reserve Appointment Slot', action: 'book' },
        { label: '👰 Bridal Spa Packages', action: 'bridal' },
        { label: '📍 Location & Timings', action: 'location' },
      ],
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulated Bot Response
    setTimeout(() => {
      let botResponse: ChatMessage;

      const lower = text.toLowerCase();
      if (lower.includes('service') || lower.includes('treatment') || lower.includes('facial') || lower.includes('price')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Here are our most requested luxury rituals:\n\n✨ Royal Ayurvedic Kumkumadi Facial — ${formatCurrency(4800)}\n🌿 Kerala Shirodhara Massage — ${formatCurrency(5500)}\n🌸 Couture Silk Balayage — ${formatCurrency(8500)}\n\nWould you like to reserve a slot?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: [
            { label: '📅 Book Kumkumadi Facial', action: 'book-kumkumadi' },
            { label: '📅 Book Shirodhara Massage', action: 'book-shirodhara' },
          ],
        };
      } else if (lower.includes('book') || lower.includes('appointment') || lower.includes('reserve')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: 'Wonderful! You can complete your online booking in 60 seconds with instant confirmation ticket.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          ctaUrl: '/book',
        };
      } else if (lower.includes('bridal') || lower.includes('wedding')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `👰 Our Couture Indian Bridal Radiance Package includes:\n• Vedic Organic Ubtan & Sandalwood Body Scrub\n• Royal Silk Hair Spa & Blowout\n• Rose & Sandalwood Gel Manicure\n• Bridal Home Glow Kit\n\nPrice: ${formatCurrency(10800)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          ctaUrl: '/packages',
        };
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('timing') || lower.includes('where')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: '📍 Flagship Sanctuary: Bandra West, Mumbai & Fifth Avenue, NYC.\n⏰ Hours: Mon-Fri 9am-8pm | Sat 9am-7pm | Sun 10am-5pm.\n🚗 Private Valet Parking available.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
      } else {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: 'Thank you for reaching out! Our sanctuary concierge team has received your message and will respond shortly.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: [
            { label: '✨ View Services Menu', action: 'services' },
            { label: '📅 Book Appointment', action: 'book' },
          ],
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
        aria-label="Open WhatsApp AI Concierge"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
          WhatsApp Concierge
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute top-1 right-1" />
      </button>

      {/* WhatsApp Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] bg-[#E5DDD5] rounded-3xl shadow-2xl border border-emerald-900/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#C58B55] flex items-center justify-center text-white font-bold">
                  <Sparkles className="w-5 h-5" />
                </span>
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54] absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm leading-tight text-white">Lumière Concierge</h4>
                <span className="text-[10px] text-emerald-200">Online • Typically replies instantly</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-center">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-sm relative ${
                    msg.sender === 'user'
                      ? 'bg-[#DCF8C6] text-[#0A0E0C] rounded-tr-none'
                      : 'bg-white text-[#0A0E0C] rounded-tl-none border border-gray-200'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  
                  {/* Optional CTA Link Button */}
                  {msg.ctaUrl && (
                    <a
                      href={msg.ctaUrl}
                      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#075E54] text-white rounded-xl text-[11px] font-semibold hover:bg-[#128C7E] transition-colors"
                    >
                      <span>Go to Reservation Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-gray-400">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-emerald-600" />}
                  </div>
                </div>

                {/* Quick Action Buttons */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(opt.label)}
                        className="px-3 py-1.5 bg-white/90 hover:bg-[#075E54] text-[#075E54] hover:text-white border border-[#075E54]/30 rounded-full text-[11px] font-medium transition-colors shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1 bg-white p-2.5 rounded-2xl rounded-tl-none w-16 text-gray-400 text-xs shadow-sm">
                <span className="animate-bounce">•</span>
                <span className="animate-bounce delay-100">•</span>
                <span className="animate-bounce delay-200">•</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#F0F0F0] border-t border-gray-300 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-white rounded-full text-xs text-[#0A0E0C] focus:outline-none focus:ring-2 focus:ring-[#075E54] placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="p-2.5 bg-[#075E54] text-white rounded-full hover:bg-[#128C7E] transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
