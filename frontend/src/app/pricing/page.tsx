import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { salonServices } from '@/data/salonData';
import { Check, Sparkles } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Transparent Investment
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Ritual Rates & Privé Membership
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D]">
            All treatments include personalized consultation, organic herbal tea service, and full access to our private relaxation suites.
          </p>
        </div>

        {/* Individual Treatment Price List Table */}
        <Card className="p-8 border-[#D4AF37]/30 shadow-2xl space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#0A0E0C] border-b border-[#D4AF37]/20 pb-4">
            A La Carte Treatment Price List
          </h3>

          <div className="divide-y divide-gray-100">
            {salonServices.map((service) => (
              <div key={service.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    {service.category} • {service.durationMinutes} Mins
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#0A0E0C]">{service.name}</h4>
                  <p className="text-xs text-[#4A524D]">{service.description}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
                  <span className="font-serif text-xl font-bold text-[#0A0E0C]">{formatCurrency(service.price)}</span>
                  <Link href={`/book?service=${service.id}`}>
                    <Button variant="primary" size="sm">
                      Reserve
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
