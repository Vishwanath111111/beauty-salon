'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppChatbot } from '@/components/ui/WhatsAppChatbot';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Rating } from '@/components/ui/Rating';
import { Accordion } from '@/components/ui/Accordion';
import { PackageCustomizer } from '@/components/beauty/PackageCustomizer';
import { salonServices, salonTestimonials, salonFaqs } from '@/data/salonData';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Star } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 sm:pt-40 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Decorative Blur Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/15 to-[#E8C5B8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <Badge variant="gold" className="inline-flex items-center gap-2 px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Organic Beauty Lounge & Spa</span>
              </Badge>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0E0C] leading-[1.1]">
                Sanctuary of <br />
                <span className="gold-gradient-text">Radiance & Renewal</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A524D] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Indulge in 24K gold Kumkumadi saffron facials, Kerala Shirodhara massages, and bespoke silk hair glazing crafted by master aestheticians in an atmosphere of serene organic luxury.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/book">
                  <Button size="lg" variant="primary">
                    <span>Book Your Ritual</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Explore Treatments
                  </Button>
                </Link>
              </div>

              {/* Trust Metrics */}
              <div className="pt-6 border-t border-[#D4AF37]/20 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A0E0C]">15+</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Master Artists</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A0E0C]">100%</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Vedic Pure</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A0E0C]">4.9★</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Client Rating</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30 group">
                  <img
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000"
                    alt="Lumière Beauty Lounge Sanctuary"
                    className="w-full h-[450px] sm:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Glass Award Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-[#D4AF37]/30 p-5 rounded-3xl shadow-2xl max-w-xs space-y-2 hidden sm:block">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Star className="w-5 h-5 fill-[#D4AF37]" />
                    <span className="font-serif font-bold text-sm text-[#0A0E0C]">Luxury Spa Award 2025</span>
                  </div>
                  <p className="text-xs text-gray-600">Voted Best Luxury Aesthetic Clinic & Ayurvedic Sanctuary.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY / WHY CHOOSE US */}
        <section className="py-20 bg-white/50 border-y border-[#D4AF37]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                The Lumière Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A0E0C]">
                Why Discerning Guests Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hoverEffect className="space-y-4">
                <span className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">Bio-Cellular Formulation</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  We formulate treatments using 100% organic Kashmiri saffron, pure sandalwood, cold-pressed Kerala oils, and bio-peptides.
                </p>
              </Card>

              <Card hoverEffect className="space-y-4">
                <span className="w-12 h-12 rounded-2xl bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">Medical-Grade Purity</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Every suite is disinfected using medical-grade UV sterilizers and single-use organic linen sheets for absolute peace of mind.
                </p>
              </Card>

              <Card hoverEffect className="space-y-4">
                <span className="w-12 h-12 rounded-2xl bg-[#E8C5B8]/30 text-[#9E5D4B] flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">Tailored Concierge Care</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  From customized saffron tea blends to tailored acoustic playlists, your treatment is modified precisely to your needs.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FEATURED TREATMENTS CATALOG PREVIEW */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Curated Menu
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A0E0C]">
                Signature Treatments & Rituals
              </h2>
            </div>
            <Link href="/services">
              <Button variant="outline" size="md">
                View Complete Menu ({salonServices.length})
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salonServices.slice(0, 3).map((service) => (
              <Card key={service.id} className="p-0 overflow-hidden flex flex-col justify-between group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-serif font-bold text-[#0A0E0C]">
                    {formatCurrency(service.price)}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                      {service.category} • {service.durationMinutes} Mins
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#0A0E0C] group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#4A524D] line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <Link href={`/book?service=${service.id}`} className="block pt-2">
                    <Button variant="primary" size="sm" className="w-full">
                      Book Service
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* INTERACTIVE SPA DAY CUSTOMIZER TEASER */}
        <section className="py-20 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <PackageCustomizer />
        </section>

        {/* CLIENT TESTIMONIALS SLIDER */}
        <section className="py-24 bg-[#0A0E0C] text-[#FAF8F5] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Guest Accolades
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Words From Our Privé Clients
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {salonTestimonials.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <Rating rating={review.rating} />
                    <p className="text-sm text-gray-300 italic leading-relaxed">"{review.comment}"</p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-white">{review.author}</h4>
                      <p className="text-xs text-[#D4AF37]">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A0E0C]">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion items={salonFaqs} />
        </section>
      </main>

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
}
