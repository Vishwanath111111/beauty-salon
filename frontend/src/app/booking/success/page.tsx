'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle, Calendar, Clock, User, MapPin, Download, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

function BookingSuccessContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || 'LUM-8829';
  const name = searchParams.get('name') || 'Valued Guest';
  const service = searchParams.get('service') || '24K Gold Cellular Renewal Facial';
  const therapist = searchParams.get('therapist') || 'Dr. Camille Dupré';
  const date = searchParams.get('date') || '2026-03-20';
  const time = searchParams.get('time') || '11:00 AM';
  const price = Number(searchParams.get('price') || 260);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <Card className="p-8 sm:p-12 text-center space-y-8 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          {/* Top Golden Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37] to-[#C58B55]" />

          <div className="inline-flex p-4 bg-[#1B3B2B]/10 text-[#1B3B2B] rounded-full mx-auto">
            <CheckCircle className="w-12 h-12 stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Reservation Confirmed • Ticket #{id}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A0E0C]">
              We Look Forward to Welcoming You, {name}
            </h1>
            <p className="text-sm text-[#4A524D] max-w-md mx-auto">
              Your luxury appointment has been reserved in our sanctuary system. A detailed calendar ticket has been dispatched to your email.
            </p>
          </div>

          {/* Ticket Summary Box */}
          <div className="bg-[#0A0E0C] text-[#FAF8F5] p-6 rounded-3xl text-left space-y-4 shadow-xl border border-white/10">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">Reserved Ritual</span>
                <h3 className="font-serif text-xl font-bold text-white">{service}</h3>
              </div>
              <span className="font-serif text-xl font-bold text-[#D4AF37]">{formatCurrency(price)}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#D4AF37]" />
                <span>Specialist: {therapist}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Date: {date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Time: {time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>450 Fifth Avenue, Suite 120, NYC</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/">
              <Button variant="primary" size="md">
                <span>Return to Homepage</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="md">
                Explore More Treatments
              </Button>
            </Link>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">Loading reservation details...</div>}>
      <BookingSuccessContent />
    </Suspense>
  );
}
