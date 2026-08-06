'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { submitContact } from '@/lib/api';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    const res = await submitContact({ name, email, phone, subject, message });
    setIsSubmitting(false);

    setSuccessMsg(res.message);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Sanctuary Location & Concierge
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Get In Touch With Us
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D]">
            Have a question regarding custom group bookings, bridal consultations, or private spa suites? Our concierge team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-4 border-[#D4AF37]/30">
              <div className="flex items-center gap-4">
                <span className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0A0E0C]">Flagship Location</h4>
                  <p className="text-xs text-[#4A524D]">450 Fifth Avenue, Suite 120, New York, NY 10018</p>
                </div>
              </div>
            </Card>

            <Card className="space-y-4 border-[#D4AF37]/30">
              <div className="flex items-center gap-4">
                <span className="p-3 bg-[#1B3B2B]/10 text-[#1B3B2B] rounded-2xl">
                  <Phone className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0A0E0C]">Telephone Concierge</h4>
                  <p className="text-xs text-[#4A524D]">+1 (800) 586-4373 / +1 (212) 889-4920</p>
                </div>
              </div>
            </Card>

            <Card className="space-y-4 border-[#D4AF37]/30">
              <div className="flex items-center gap-4">
                <span className="p-3 bg-[#E8C5B8]/30 text-[#9E5D4B] rounded-2xl">
                  <Mail className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0A0E0C]">Direct Email</h4>
                  <p className="text-xs text-[#4A524D]">concierge@lumierebeautylounge.com</p>
                </div>
              </div>
            </Card>

            <Card className="space-y-4 border-[#D4AF37]/30">
              <div className="flex items-center gap-4">
                <span className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-2xl">
                  <Clock className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0A0E0C]">Operating Hours</h4>
                  <p className="text-xs text-[#4A524D]">Mon-Fri: 9am-8pm • Sat: 9am-7pm • Sun: 10am-5pm</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 space-y-6 border-[#D4AF37]/30 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-[#0A0E0C]">Send Concierge Inquiry</h3>

              {successMsg ? (
                <div className="p-4 bg-[#1B3B2B]/15 border border-[#1B3B2B] text-[#1B3B2B] rounded-2xl flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 shrink-0" />
                  <span className="text-sm font-medium">{successMsg}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name *"
                      placeholder="e.g. Sophia Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Input
                      label="Email Address *"
                      type="email"
                      placeholder="e.g. sophia@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      label="Subject"
                      placeholder="e.g. Bridal Suite Inquiry"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <Textarea
                    label="Message *"
                    placeholder="How may our sanctuary assist you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />

                  <Button type="submit" isLoading={isSubmitting} variant="primary" size="lg" className="w-full">
                    Dispatch Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
