import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import { salonTherapists } from '@/data/salonData';
import { Star, Award, Calendar } from 'lucide-react';

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Master Artistry & Aesthetics
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Meet Our Master Specialists
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D]">
            Our internationally trained aestheticians, color directors, and bodywork therapists bring decades of combined mastery to your ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salonTherapists.map((therapist) => (
            <Card key={therapist.id} className="p-6 space-y-4 text-center flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#0A0E0C]">{therapist.name}</h3>
                  <p className="text-xs font-semibold text-[#D4AF37]">{therapist.role}</p>
                </div>

                <div className="flex justify-center">
                  <Rating rating={therapist.rating} />
                </div>

                <p className="text-xs text-[#4A524D] leading-relaxed line-clamp-3">
                  {therapist.bio}
                </p>

                <div className="p-3 bg-[#FAF8F5] rounded-xl text-[11px] text-[#0A0E0C] border border-[#D4AF37]/20 font-medium">
                  Specialty: {therapist.specialty}
                </div>
              </div>

              <Link href={`/book?therapist=${therapist.id}`} className="block pt-2">
                <Button variant="primary" size="sm" className="w-full">
                  Book With {therapist.name.split(' ')[1] || 'Specialist'}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
