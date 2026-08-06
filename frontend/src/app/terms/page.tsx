import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Card } from '@/components/ui/Card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Service Terms & Cancellation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A0E0C]">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-400">Last updated: March 1, 2026</p>
        </div>

        <Card className="p-8 sm:p-12 space-y-6 text-sm text-[#4A524D] leading-relaxed">
          <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">1. Arrival & Check-In Protocol</h3>
          <p>
            Guests are kindly requested to arrive 15 minutes prior to their scheduled ritual time to complete skin diagnostic forms and enjoy herbal tea in our relaxation lounge.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">2. Cancellation & Rescheduling Policy</h3>
          <p>
            To accommodate all sanctuary guests, cancellations or rescheduling requests must be submitted at least 24 hours prior to your scheduled service. Cancellations within 24 hours incur a 50% fee.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">3. Valuables & Personal Belongings</h3>
          <p>
            Private lockers are provided in all VIP treatment suites. Lumière Beauty Lounge assumes no liability for lost or un-secured personal items.
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
