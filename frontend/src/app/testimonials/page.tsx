import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Card } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import { salonTestimonials } from '@/data/salonData';
import { Quote } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Client Accolades
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Guest Reviews & Press Mentions
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D]">
            Read verified testimonials from fashion editors, dermatologists, and valued sanctuary guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonTestimonials.map((review) => (
            <Card key={review.id} className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#D4AF37]" />
                <Rating rating={review.rating} />
                <p className="text-sm text-[#4A524D] italic leading-relaxed">"{review.comment}"</p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#D4AF37]/20">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#0A0E0C]">{review.author}</h4>
                  <p className="text-xs text-[#D4AF37] font-semibold">{review.role}</p>
                  <span className="text-[10px] text-gray-400">Treatment: {review.treatment}</span>
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
