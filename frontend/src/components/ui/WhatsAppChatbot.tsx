'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  User,
  Gift,
  Tag,
  Scissors,
  Heart,
  Smile,
  Sparkle,
} from 'lucide-react';

// ==========================================================
// TYPES & INTERFACES
// ==========================================================
type FlowType =
  | 'hair'
  | 'bridal'
  | 'facial'
  | 'nail'
  | 'spa'
  | 'appointment'
  | 'offers'
  | 'expert'
  | null;

interface FormData {
  name?: string;
  phone?: string;
  service?: string;
  hairLength?: string;
  skinConcern?: string;
  spaType?: string;
  weddingDate?: string;
  location?: string;
  packageType?: string;
  preferredDate?: string;
  preferredTime?: string;
  specialRequest?: string;
  selectedOffer?: string;
}

const SPECIAL_OFFERS = [
  { id: 'offer-1', title: '20% OFF Hair Spa & Deep Conditioning', badge: 'Popular', code: 'HAIR20' },
  { id: 'offer-2', title: 'Bridal Luxury Package (25% Early Bird)', badge: 'Bridal Choice', code: 'BRIDAL25' },
  { id: 'offer-3', title: 'Weekend Saffron Glow Facial Offer (15% OFF)', badge: 'Weekend Special', code: 'GLOW15' },
];

export const WhatsAppChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFlow, setActiveFlow] = useState<FlowType>(null);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [activeFlow, step, isOpen]);

  // ==========================================================
  // WHATSAPP INTEGRATION HELPERS (Guaranteed Direct Chat Window)
  // ==========================================================
  const openWhatsApp = (message: string) => {
    // Guarantees phone number is present so WhatsApp opens directly in active chat window (not contact search)
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '') || '919876543210';
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTalkToExpert = () => {
    const message = `Hello LUMIÈRE Beauty Salon,\n\nI would like to speak with a Beauty Consultant.\n\nPlease contact me.\n\nThank you.`;
    openWhatsApp(message);
    setIsOpen(false);
  };

  // ==========================================================
  // WHATSAPP LEAD MESSAGE GENERATOR
  // ==========================================================
  const generateWhatsAppMessage = () => {
    let msg = `Hello LUMIÈRE Beauty Salon,\n\n`;

    switch (activeFlow) {
      case 'hair':
        msg += `I would like to book a Hair Service.\n\n`;
        msg += `*Customer Details*\n`;
        msg += `Name: ${formData.name || 'N/A'}\n`;
        msg += `Phone: ${formData.phone || 'N/A'}\n`;
        msg += `Hair Service: ${formData.service || 'N/A'}\n`;
        msg += `Hair Length: ${formData.hairLength || 'N/A'}\n`;
        msg += `Preferred Date: ${formData.preferredDate || 'N/A'}\n`;
        msg += `Preferred Time: ${formData.preferredTime || 'N/A'}\n\n`;
        break;

      case 'bridal':
        msg += `I would like to book a Bridal Makeup Package.\n\n`;
        msg += `*Bridal Booking Details*\n`;
        msg += `Bride Name: ${formData.name || 'N/A'}\n`;
        msg += `Phone: ${formData.phone || 'N/A'}\n`;
        msg += `Wedding Date: ${formData.weddingDate || 'N/A'}\n`;
        msg += `Location / Venue: ${formData.location || 'N/A'}\n`;
        msg += `Required Package: ${formData.packageType || 'N/A'}\n\n`;
        break;

      case 'facial':
        msg += `I would like to book a Facial & Skin Care Session.\n\n`;
        msg += `*Skin Care Details*\n`;
        msg += `Name: ${formData.name || 'N/A'}\n`;
        msg += `Phone: ${formData.phone || 'N/A'}\n`;
        msg += `Skin Concern: ${formData.skinConcern || 'N/A'}\n`;
        msg += `Preferred Date: ${formData.preferredDate || 'N/A'}\n\n`;
        break;

      case 'nail':
        msg += `I would like to book a Nail Studio Appointment.\n\n`;
        msg += `*Nail Booking Details*\n`;
        msg += `Name: ${formData.name || 'N/A'}\n`;
        msg += `Phone: ${formData.phone || 'N/A'}\n`;
        msg += `Service: ${formData.service || 'N/A'}\n`;
        msg += `Preferred Date: ${formData.preferredDate || 'N/A'}\n\n`;
        break;

      case 'spa':
        msg += `I would like to book a Spa & Massage Therapy.\n\n`;
        msg += `*Spa Details*\n`;
        msg += `Name: ${formData.name || 'N/A'}\n`;
        msg += `Phone: ${formData.phone || 'N/A'}\n`;
        msg += `Spa Type: ${formData.spaType || 'N/A'}\n`;
        msg += `Preferred Time: ${formData.preferredTime || 'N/A'}\n\n`;
        break;

      case 'appointment':
        msg += `I would like to book an Appointment.\n\n`;
        msg += `*Booking Details*\n`;
        msg += `Name: ${formData.name || 'N/A'}\n`;
        msg += `Phone: ${formData.phone || 'N/A'}\n`;
        msg += `Selected Service: ${formData.service || 'N/A'}\n`;
        msg += `Preferred Date: ${formData.preferredDate || 'N/A'}\n`;
        msg += `Preferred Time: ${formData.preferredTime || 'N/A'}\n`;
        if (formData.specialRequest) msg += `Special Request: ${formData.specialRequest}\n`;
        msg += `\n`;
        break;

      case 'offers':
        msg += `I would like to claim a Special Offer!\n\n`;
        msg += `*Offer Claim Details*\n`;
        msg += `Name: ${formData.name || 'N/A'}\n`;
        msg += `Phone: ${formData.phone || 'N/A'}\n`;
        msg += `Selected Offer: ${formData.selectedOffer || 'N/A'}\n\n`;
        break;

      default:
        msg += `I have a general inquiry about your services.\n\n`;
    }

    msg += `Please confirm my appointment.\n\nThank you.`;
    return msg;
  };

  const handleFinalSubmit = () => {
    if (!formData.name || !formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone || formData.phone.trim().length < 7) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setErrorMsg(null);
    const message = generateWhatsAppMessage();
    openWhatsApp(message);

    setActiveFlow(null);
    setStep(1);
    setFormData({});
    setIsOpen(false);
  };

  const resetFlow = () => {
    setActiveFlow(null);
    setStep(1);
    setFormData({});
    setErrorMsg(null);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg(null);
  };

  const getTotalSteps = (flow: FlowType): number => {
    switch (flow) {
      case 'hair':
        return 5;
      case 'bridal':
        return 5;
      case 'facial':
        return 4;
      case 'nail':
        return 4;
      case 'spa':
        return 4;
      case 'appointment':
        return 5;
      case 'offers':
        return 3;
      default:
        return 1;
    }
  };

  return (
    <>
      {/* FLOATING CHATBOT BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-[#D4A373] via-[#E8C5B8] to-[#D4A373] text-[#0A0E0C] px-5 py-3.5 rounded-full shadow-2xl shadow-[#D4A373]/30 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer border border-white/40"
        aria-label="Open LUMIÈRE WhatsApp Lead Consultant"
      >
        <span className="w-8 h-8 rounded-full bg-[#0A0E0C] text-[#D4A373] flex items-center justify-center shadow-md">
          <Sparkles className="w-4 h-4" />
        </span>
        <div className="flex flex-col items-start hidden sm:flex">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A0E0C]">
            LUMIÈRE Concierge
          </span>
          <span className="text-[10px] text-[#4A524D] font-medium">Instant WhatsApp Booking</span>
        </div>
        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute -top-1 -right-1" />
        <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white absolute -top-1 -right-1" />
      </button>

      {/* CHATBOT DIALOG CONTAINER */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] bg-[#FAF8F5] rounded-[2.5rem] shadow-2xl border border-[#D4A373]/30 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#0A0E0C] via-[#1A221E] to-[#0A0E0C] text-[#FAF8F5] p-5 flex items-center justify-between border-b border-[#D4A373]/30 shadow-lg relative">
            <div className="flex items-center gap-3">
              {activeFlow && (
                <button
                  onClick={resetFlow}
                  className="p-1.5 hover:bg-white/10 rounded-full text-[#D4A373] transition-colors"
                  title="Back to Welcome Screen"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4A373] to-[#E8C5B8] flex items-center justify-center text-[#0A0E0C] shadow-md font-serif font-bold text-lg">
                L
              </div>
              <div>
                <h4 className="font-serif font-bold text-base tracking-wide text-white leading-tight">
                  LUMIÈRE Beauty Lounge
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#D4A373]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Beauty Consultant • Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full text-gray-300 hover:text-white transition-colors"
              aria-label="Close Chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CHAT BODY CONTENT */}
          <div
            ref={chatBodyRef}
            className="flex-1 p-5 overflow-y-auto space-y-4 bg-gradient-to-b from-[#FFF0F3]/40 via-[#FAF8F5] to-[#FAF8F5]"
          >

            {/* WELCOME SCREEN (No Flow Selected) */}
            {!activeFlow && (
              <div className="space-y-5 animate-in fade-in duration-300">
                {/* Bot Greeting Bubble */}
                <div className="bg-white border border-[#D4A373]/20 rounded-3xl p-5 shadow-sm space-y-2 relative">
                  <div className="flex items-center gap-2 text-[#D4A373] font-serif font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Welcome to LUMIÈRE Beauty Salon</span>
                  </div>
                  <p className="text-xs text-[#0A0E0C] font-medium leading-relaxed">
                    Luxury Hair • Makeup • Skin Care • Spa
                  </p>
                  <p className="text-xs text-[#4A524D] leading-relaxed">
                    Our Beauty Consultant is ready to guide you. How may we assist you today?
                  </p>
                </div>

                {/* Quick Action Category Buttons Grid */}
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4A524D] px-1">
                    Select a Service to Book
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => {
                        setActiveFlow('hair');
                        setStep(1);
                      }}
                      className="p-3.5 bg-white hover:bg-[#FFF0F3] border border-[#D4A373]/30 hover:border-[#D4A373] rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2.5 group"
                    >
                      <span className="p-2 bg-[#FFF0F3] group-hover:bg-[#D4A373] text-[#D4A373] group-hover:text-white rounded-xl transition-colors">
                        <Scissors className="w-4 h-4" />
                      </span>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0A0E0C]">Hair Services</h5>
                        <span className="text-[10px] text-gray-500">Styling & Spas</span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveFlow('bridal');
                        setStep(1);
                      }}
                      className="p-3.5 bg-white hover:bg-[#FFF0F3] border border-[#D4A373]/30 hover:border-[#D4A373] rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2.5 group"
                    >
                      <span className="p-2 bg-[#FFF0F3] group-hover:bg-[#D4A373] text-[#D4A373] group-hover:text-white rounded-xl transition-colors">
                        <Heart className="w-4 h-4" />
                      </span>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0A0E0C]">Bridal Makeup</h5>
                        <span className="text-[10px] text-gray-500">Couture Packages</span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveFlow('facial');
                        setStep(1);
                      }}
                      className="p-3.5 bg-white hover:bg-[#FFF0F3] border border-[#D4A373]/30 hover:border-[#D4A373] rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2.5 group"
                    >
                      <span className="p-2 bg-[#FFF0F3] group-hover:bg-[#D4A373] text-[#D4A373] group-hover:text-white rounded-xl transition-colors">
                        <Sparkle className="w-4 h-4" />
                      </span>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0A0E0C]">Facial & Skin</h5>
                        <span className="text-[10px] text-gray-500">Glow & Peels</span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveFlow('nail');
                        setStep(1);
                      }}
                      className="p-3.5 bg-white hover:bg-[#FFF0F3] border border-[#D4A373]/30 hover:border-[#D4A373] rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2.5 group"
                    >
                      <span className="p-2 bg-[#FFF0F3] group-hover:bg-[#D4A373] text-[#D4A373] group-hover:text-white rounded-xl transition-colors">
                        <Smile className="w-4 h-4" />
                      </span>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0A0E0C]">Nail Studio</h5>
                        <span className="text-[10px] text-gray-500">Gel & Mani-Pedi</span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveFlow('spa');
                        setStep(1);
                      }}
                      className="p-3.5 bg-white hover:bg-[#FFF0F3] border border-[#D4A373]/30 hover:border-[#D4A373] rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2.5 group"
                    >
                      <span className="p-2 bg-[#FFF0F3] group-hover:bg-[#D4A373] text-[#D4A373] group-hover:text-white rounded-xl transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </span>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0A0E0C]">Spa & Massage</h5>
                        <span className="text-[10px] text-gray-500">Body Rituals</span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setActiveFlow('appointment');
                        setStep(1);
                      }}
                      className="p-3.5 bg-white hover:bg-[#FFF0F3] border border-[#D4A373]/30 hover:border-[#D4A373] rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2.5 group"
                    >
                      <span className="p-2 bg-[#FFF0F3] group-hover:bg-[#D4A373] text-[#D4A373] group-hover:text-white rounded-xl transition-colors">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-[#0A0E0C]">Book Slot</h5>
                        <span className="text-[10px] text-gray-500">Quick Reservation</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Additional Quick Actions */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => {
                      setActiveFlow('offers');
                      setStep(1);
                    }}
                    className="w-full p-3.5 bg-gradient-to-r from-[#D4A373]/15 via-[#FFF0F3] to-[#D4A373]/15 border border-[#D4A373]/40 rounded-2xl flex items-center justify-between text-xs font-bold text-[#0A0E0C] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Gift className="w-4 h-4 text-[#D4A373]" />
                      <span>🎁 View Special Salon Offers</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleTalkToExpert}
                    className="w-full p-3.5 bg-[#0A0E0C] text-[#FAF8F5] border border-white/10 rounded-2xl flex items-center justify-between text-xs font-bold hover:bg-[#1A221E] transition-all group shadow-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>💬 Talk Directly to Beauty Expert</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* GUIDED FLOW STEP WIZARD */}
            {activeFlow && (
              <div className="space-y-4 animate-in fade-in duration-300">
                
                {/* Step Progress Bar */}
                <div className="bg-white p-3 rounded-2xl border border-[#D4A373]/20 flex items-center justify-between text-xs font-semibold text-[#4A524D]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D4A373]">
                    {activeFlow === 'hair' && '💇 Hair Care Flow'}
                    {activeFlow === 'bridal' && '💄 Bridal Makeup Flow'}
                    {activeFlow === 'facial' && '✨ Skin Care Flow'}
                    {activeFlow === 'nail' && '💅 Nail Studio Flow'}
                    {activeFlow === 'spa' && '💆 Spa & Body Flow'}
                    {activeFlow === 'appointment' && '📅 Quick Booking Flow'}
                    {activeFlow === 'offers' && '🎁 Special Offers Claim'}
                  </span>
                  <span>
                    Step {step} of {getTotalSteps(activeFlow)}
                  </span>
                </div>

                {/* FLOW 1: HAIR SERVICES */}
                {activeFlow === 'hair' && (
                  <div className="space-y-4 bg-white p-5 rounded-3xl border border-[#D4A373]/20 shadow-sm">
                    {step === 1 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Select Hair Service
                        </label>
                        {['Couture Balayage & Gloss', 'Keratin Silk Hair Spa', 'Hair Cut & Styling', 'Scalp Detox Treatment'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              updateField('service', opt);
                              setStep(2);
                            }}
                            className={`w-full p-3 rounded-xl border text-xs text-left transition-all font-medium ${
                              formData.service === opt
                                ? 'bg-[#0A0E0C] text-white border-[#0A0E0C]'
                                : 'bg-[#FAF8F5] text-[#0A0E0C] border-[#D4A373]/20 hover:border-[#D4A373]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Select Hair Length
                        </label>
                        {['Short (Above Shoulder)', 'Medium (Shoulder Length)', 'Long (Below Shoulder)', 'Extra Long'].map((len) => (
                          <button
                            key={len}
                            onClick={() => {
                              updateField('hairLength', len);
                              setStep(3);
                            }}
                            className="w-full p-3 rounded-xl border text-xs text-left bg-[#FAF8F5] hover:bg-[#FFF0F3] border-[#D4A373]/20 hover:border-[#D4A373] font-medium text-[#0A0E0C] transition-all"
                          >
                            {len}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Preferred Date & Time
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate || ''}
                          onChange={(e) => updateField('preferredDate', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white focus:ring-2 focus:ring-[#D4A373]"
                        />
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {['10:00 AM', '01:00 PM', '04:00 PM', '06:30 PM'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => updateField('preferredTime', t)}
                              className={`p-2.5 text-xs font-semibold rounded-xl border ${
                                formData.preferredTime === t
                                  ? 'bg-[#D4A373] text-white border-[#D4A373]'
                                  : 'bg-[#FAF8F5] text-[#0A0E0C] border-[#D4A373]/20'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            if (formData.preferredDate && formData.preferredTime) setStep(4);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ananya Sharma"
                          value={formData.name || ''}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.name?.trim()) setStep(5);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Your Mobile Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone || ''}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        {errorMsg && <p className="text-[11px] text-red-500 font-medium">{errorMsg}</p>}
                        <button
                          onClick={handleFinalSubmit}
                          className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Generate & Open WhatsApp Chat Window</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 2: BRIDAL MAKEUP */}
                {activeFlow === 'bridal' && (
                  <div className="space-y-4 bg-white p-5 rounded-3xl border border-[#D4A373]/20 shadow-sm">
                    {step === 1 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Required Bridal Package
                        </label>
                        {[
                          { label: 'Bride Only Package', value: 'Bride Only' },
                          { label: 'Bride + Family Package', value: 'Bride + Family Package' },
                        ].map((pkg) => (
                          <button
                            key={pkg.value}
                            onClick={() => {
                              updateField('packageType', pkg.value);
                              setStep(2);
                            }}
                            className="w-full p-3.5 rounded-xl border text-xs text-left bg-[#FAF8F5] hover:bg-[#FFF0F3] border-[#D4A373]/20 hover:border-[#D4A373] font-serif font-bold text-[#0A0E0C] transition-all"
                          >
                            {pkg.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Wedding / Event Date
                        </label>
                        <input
                          type="date"
                          value={formData.weddingDate || ''}
                          onChange={(e) => updateField('weddingDate', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.weddingDate) setStep(3);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Venue / Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Bandra West, Mumbai"
                          value={formData.location || ''}
                          onChange={(e) => updateField('location', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.location) setStep(4);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Bride Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Sophia Singhania"
                          value={formData.name || ''}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.name?.trim()) setStep(5);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone || ''}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        {errorMsg && <p className="text-[11px] text-red-500 font-medium">{errorMsg}</p>}
                        <button
                          onClick={handleFinalSubmit}
                          className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Open WhatsApp Chat Window</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 3: FACIAL & SKIN CARE */}
                {activeFlow === 'facial' && (
                  <div className="space-y-4 bg-white p-5 rounded-3xl border border-[#D4A373]/20 shadow-sm">
                    {step === 1 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Select Primary Skin Concern
                        </label>
                        {['Acne & Clarifying', 'Instant Glow & Brightening', 'Anti-Aging & Firming', 'Pigmentation & Even Tone'].map((c) => (
                          <button
                            key={c}
                            onClick={() => {
                              updateField('skinConcern', c);
                              setStep(2);
                            }}
                            className="w-full p-3 rounded-xl border text-xs text-left bg-[#FAF8F5] hover:bg-[#FFF0F3] border-[#D4A373]/20 hover:border-[#D4AF37] font-medium text-[#0A0E0C] transition-all"
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate || ''}
                          onChange={(e) => updateField('preferredDate', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.preferredDate) setStep(3);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Victoria Sterling"
                          value={formData.name || ''}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.name?.trim()) setStep(4);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone || ''}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        {errorMsg && <p className="text-[11px] text-red-500 font-medium">{errorMsg}</p>}
                        <button
                          onClick={handleFinalSubmit}
                          className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Open WhatsApp Chat Window</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 4: NAIL STUDIO */}
                {activeFlow === 'nail' && (
                  <div className="space-y-4 bg-white p-5 rounded-3xl border border-[#D4A373]/20 shadow-sm">
                    {step === 1 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Select Nail Service
                        </label>
                        {['Classic Spa Manicure', 'Pedicure Detox', 'Gel Nails Application', 'Custom Luxury Nail Art'].map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              updateField('service', s);
                              setStep(2);
                            }}
                            className="w-full p-3 rounded-xl border text-xs text-left bg-[#FAF8F5] hover:bg-[#FFF0F3] border-[#D4A373]/20 hover:border-[#D4AF37] font-medium text-[#0A0E0C] transition-all"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate || ''}
                          onChange={(e) => updateField('preferredDate', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.preferredDate) setStep(3);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Elena Chen"
                          value={formData.name || ''}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.name?.trim()) setStep(4);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone || ''}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        {errorMsg && <p className="text-[11px] text-red-500 font-medium">{errorMsg}</p>}
                        <button
                          onClick={handleFinalSubmit}
                          className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Open WhatsApp Chat Window</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 5: SPA & MASSAGE */}
                {activeFlow === 'spa' && (
                  <div className="space-y-4 bg-white p-5 rounded-3xl border border-[#D4A373]/20 shadow-sm">
                    {step === 1 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Select Spa Massage Type
                        </label>
                        {['Swedish Massage', 'Deep Tissue Volcanic Stone', 'Aromatherapy Herbal Oil', 'Head & Scalp Stress Release'].map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              updateField('spaType', s);
                              setStep(2);
                            }}
                            className="w-full p-3 rounded-xl border text-xs text-left bg-[#FAF8F5] hover:bg-[#FFF0F3] border-[#D4A373]/20 hover:border-[#D4AF37] font-medium text-[#0A0E0C] transition-all"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Preferred Time
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {['11:00 AM', '02:00 PM', '05:00 PM', '07:00 PM'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => updateField('preferredTime', t)}
                              className={`p-2.5 text-xs font-semibold rounded-xl border ${
                                formData.preferredTime === t
                                  ? 'bg-[#D4A373] text-white border-[#D4A373]'
                                  : 'bg-[#FAF8F5] text-[#0A0E0C] border-[#D4A373]/20'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            if (formData.preferredTime) setStep(3);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Charlotte Vance"
                          value={formData.name || ''}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.name?.trim()) setStep(4);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone || ''}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        {errorMsg && <p className="text-[11px] text-red-500 font-medium">{errorMsg}</p>}
                        <button
                          onClick={handleFinalSubmit}
                          className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Open WhatsApp Chat Window</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 6: BOOK APPOINTMENT */}
                {activeFlow === 'appointment' && (
                  <div className="space-y-4 bg-white p-5 rounded-3xl border border-[#D4A373]/20 shadow-sm">
                    {step === 1 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Select Service
                        </label>
                        {['Royal Kumkumadi Facial', 'Kerala Shirodhara Massage', 'Couture Balayage', 'Rose & Diamond Mani-Pedi'].map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              updateField('service', s);
                              setStep(2);
                            }}
                            className="w-full p-3 rounded-xl border text-xs text-left bg-[#FAF8F5] hover:bg-[#FFF0F3] border-[#D4A373]/20 hover:border-[#D4AF37] font-medium text-[#0A0E0C] transition-all"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Preferred Date & Time
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate || ''}
                          onChange={(e) => updateField('preferredDate', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Preferred Time (e.g. 03:00 PM)"
                          value={formData.preferredTime || ''}
                          onChange={(e) => updateField('preferredTime', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white mt-2"
                        />
                        <button
                          onClick={() => {
                            if (formData.preferredDate && formData.preferredTime) setStep(3);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Special Request (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Sensitive skin or preferred therapist"
                          value={formData.specialRequest || ''}
                          onChange={(e) => updateField('specialRequest', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => setStep(4)}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Sunita Mehra"
                          value={formData.name || ''}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.name?.trim()) setStep(5);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone || ''}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        {errorMsg && <p className="text-[11px] text-red-500 font-medium">{errorMsg}</p>}
                        <button
                          onClick={handleFinalSubmit}
                          className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Open WhatsApp Chat Window</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 7: SPECIAL OFFERS */}
                {activeFlow === 'offers' && (
                  <div className="space-y-4 bg-white p-5 rounded-3xl border border-[#D4A373]/20 shadow-sm">
                    {step === 1 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Current Special Offers
                        </label>
                        {SPECIAL_OFFERS.map((offer) => (
                          <div
                            key={offer.id}
                            className="p-3.5 rounded-2xl border border-[#D4A373]/30 bg-[#FFF0F3]/40 space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] uppercase font-bold text-[#D4A373] bg-white px-2 py-0.5 rounded-full border border-[#D4A373]/20">
                                {offer.badge}
                              </span>
                              <span className="text-[10px] font-mono text-gray-500 font-semibold">Code: {offer.code}</span>
                            </div>
                            <h5 className="font-serif font-bold text-xs text-[#0A0E0C]">{offer.title}</h5>
                            <button
                              onClick={() => {
                                updateField('selectedOffer', offer.title);
                                setStep(2);
                              }}
                              className="w-full py-2 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold hover:bg-[#D4A373] transition-colors"
                            >
                              Claim Offer
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kavita Singhania"
                          value={formData.name || ''}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        <button
                          onClick={() => {
                            if (formData.name?.trim()) setStep(3);
                          }}
                          className="w-full py-3 bg-[#0A0E0C] text-white rounded-xl text-xs font-bold mt-2"
                        >
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        <label className="block text-xs font-serif font-bold text-[#0A0E0C]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone || ''}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full p-3 rounded-xl border border-[#D4A373]/30 text-xs bg-white"
                        />
                        {errorMsg && <p className="text-[11px] text-red-500 font-medium">{errorMsg}</p>}
                        <button
                          onClick={handleFinalSubmit}
                          className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Open WhatsApp Chat Window</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
