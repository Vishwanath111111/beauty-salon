import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Card } from '@/components/ui/Card';

export default function GalleryPage() {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800',
      title: 'Private Relaxation Tea Suite',
      category: 'Sanctuary Interiors',
    },
    {
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800',
      title: 'Hydro-Aesthetic Hydrotherapy Suite',
      category: 'Treatment Rooms',
    },
    {
      url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800',
      title: '24K Gold Facial Protocol in Session',
      category: 'Clinical Rituals',
    },
    {
      url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800',
      title: 'Thermal Volcanic Basalt Massage',
      category: 'Body Therapy',
    },
    {
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800',
      title: 'Couture Balayage & Glaze Transformation',
      category: 'Hair Artistry',
    },
    {
      url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800',
      title: 'Rose & Diamond Spa Pedicure Bar',
      category: 'Nail Lounge',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Visual Architecture
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Sanctuary & Transformation Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D]">
            Immerse yourself in the aesthetic beauty and clinical refinement of Lumière.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <Card key={index} className="p-0 overflow-hidden group border-[#D4AF37]/30">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0C]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold">{img.title}</h3>
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
