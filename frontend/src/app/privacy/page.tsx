import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Card } from '@/components/ui/Card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Data Governance & Security
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A0E0C]">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400">Last updated: March 1, 2026</p>
        </div>

        <Card className="p-8 sm:p-12 space-y-6 text-sm text-[#4A524D] leading-relaxed">
          <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">1. Data Collection & Usage</h3>
          <p>
            Lumière Beauty Lounge respects your personal privacy. We collect personal information (such as name, email address, telephone number, and skin allergy notes) strictly to facilitate appointment reservations and deliver customized spa rituals.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">2. Payment & Contact Confidentiality</h3>
          <p>
            Your contact information will never be sold, rented, or disclosed to third-party advertisers. All transaction data is processed via SSL-encrypted security protocols.
          </p>

          <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">3. Your Privé Rights</h3>
          <p>
            Guests have the right to request deletion of their guest history or unsubscribe from newsletter invitations at any time by contacting <code>concierge@lumierebeautylounge.com</code>.
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
