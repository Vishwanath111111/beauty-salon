import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { salonServices, salonTherapists } from '@/data/salonData';
import { Clock, CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default async function TreatmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const treatment = salonServices.find((s) => s.id === id);

  if (!treatment) {
    notFound();
  }

  const assignedSpecialist = salonTherapists[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Services Menu
        </Link>

        {/* Treatment Header Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              {treatment.category} Ritual • {treatment.durationMinutes} Minutes
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A0E0C]">
              {treatment.name}
            </h1>
            <p className="text-base text-[#4A524D] leading-relaxed">
              {treatment.description}
            </p>
            <div className="pt-2 flex items-center gap-6">
              <span className="font-serif text-3xl font-bold text-[#0A0E0C]">{formatCurrency(treatment.price)}</span>
              <Link href={`/book?service=${treatment.id}`}>
                <Button variant="primary" size="lg">
                  Book This Treatment
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30">
            <img
              src={treatment.image}
              alt={treatment.name}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Key Benefits & What's Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">Key Treatment Benefits</h3>
            <ul className="space-y-3 text-sm text-[#4A524D]">
              {treatment.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          {treatment.includes && (
            <Card className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">Ritual Protocol Includes</h3>
              <ul className="space-y-3 text-sm text-[#4A524D]">
                {treatment.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
