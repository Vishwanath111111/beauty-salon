'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { salonServices } from '@/data/salonData';
import { ServiceCategory } from '@/types';
import { formatCurrency } from '@/lib/utils';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'facials', label: 'Facials & Skin' },
    { id: 'massage', label: 'Massage & Bodywork' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'nails', label: 'Nails & Aesthetics' },
    { id: 'aesthetics', label: 'Bio-Lifting' },
  ];

  const filteredServices = activeCategory === 'all'
    ? salonServices
    : salonServices.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Bespoke Treatment Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Our Signature Rituals & Treatments
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D] max-w-2xl mx-auto">
            Explore our curated menu of organic skin facials, bodywork massages, hair glazing, and non-invasive bio-lifting aesthetics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1B3B2B] text-white shadow-md'
                  : 'bg-white text-[#0A0E0C] border border-[#D4AF37]/20 hover:border-[#D4AF37]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
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
                  <Link href={`/treatments/${service.id}`}>
                    <h3 className="font-serif text-xl font-bold text-[#0A0E0C] group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#4A524D] line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3 border-t border-gray-100">
                  <Link href={`/treatments/${service.id}`} className="text-xs text-[#D4AF37] font-semibold hover:underline">
                    View Benefits →
                  </Link>
                  <Link href={`/book?service=${service.id}`}>
                    <Button variant="primary" size="sm">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
