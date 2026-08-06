import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Sparkles, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Crafting Moments of Ethereal Serenity
          </h1>
          <p className="text-base sm:text-lg text-[#4A524D] max-w-2xl mx-auto leading-relaxed">
            Founded in Fifth Avenue NYC, Lumière Beauty Lounge was conceived as an architectural oasis where medical dermatology meets holistic Parisian spa traditions.
          </p>
        </section>

        {/* Story Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[#0A0E0C]">
              Where Organic Purity Meets Advanced Aesthetics
            </h2>
            <p className="text-sm text-[#4A524D] leading-relaxed">
              We believe true beauty is not manufactured—it is unveiled. Every treatment at Lumière begins with a thorough skin diagnostic and energetic assessment. Our formulations feature zero parabens, synthetic fragrance, or harsh sulfates.
            </p>
            <p className="text-sm text-[#4A524D] leading-relaxed">
              Our sanctuary features custom acoustic insulation, heated memory-foam treatment tables, and private tea lounges where guests can decompress before and after their services.
            </p>

            <div className="pt-4">
              <Link href="/book">
                <Button variant="primary" size="md">
                  Reserve Your Experience
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000"
              alt="Lumière Interior Architecture"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-[#0A0E0C] text-[#FAF8F5] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Our Core Pillars
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Uncompromising Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                <Award className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="font-serif text-xl font-bold text-white">Master Artistry</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Our team consists exclusively of board-certified aestheticians and licensed bodywork masters with minimum 8+ years experience.
                </p>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="font-serif text-xl font-bold text-white">Clinical Hygiene</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Hospital-grade UV air sterilization and strict single-use protocol ensure pristine safety for every guest.
                </p>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                <Heart className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="font-serif text-xl font-bold text-white">Holistic Care</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We look beyond skin deep, offering dietary skincare recommendations, breathwork guidance, and post-ritual botanical tea.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
