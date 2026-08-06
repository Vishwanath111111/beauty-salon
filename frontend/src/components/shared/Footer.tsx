'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { submitNewsletter } from '@/lib/api';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    await submitNewsletter({ email });
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="bg-[#0A0E0C] text-[#FAF8F5] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#C58B55] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  LUMIÈRE
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                  Beauty Lounge & Spa
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sanctuary of organic Vedic refinement, 24K Kumkumadi rituals, and bespoke wellness treatments designed to rejuvenate radiance.
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Instagram</span>
              <span>•</span>
              <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Facebook</span>
              <span>•</span>
              <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Pinterest</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#D4AF37]">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Heritage</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Treatment Menu</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Spa Day Retreats</Link></li>
              <li><Link href="/experts" className="hover:text-white transition-colors">Master Stylists</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Lounge Architecture</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Skincare Journal</Link></li>
            </ul>
          </div>

          {/* Hours & Locations */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#D4AF37]">Sanctuary Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Mon – Fri: 9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Saturday: 9:00 AM – 7:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Sunday: 10:00 AM – 5:00 PM</span>
              </li>
            </ul>
            <div className="pt-2 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Flagship Lounge: Bandra West, Mumbai</span>
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#D4AF37]">Lumière Privé</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive private invitations to new Ayurvedic spa rituals and a 15% voucher for your initial visit.
            </p>
            {status === 'success' ? (
              <div className="p-3 bg-[#1B3B2B]/40 border border-[#D4AF37]/40 rounded-xl text-xs text-[#D4AF37] flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Thank you! Your 15% voucher code has been dispatched.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="absolute right-2 top-2 bottom-2 px-3 bg-[#D4AF37] text-[#0A0E0C] rounded-lg font-medium hover:bg-[#C58B55] transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Lumière Beauty Lounge & Spa. Developed by VJ Web Studio.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
