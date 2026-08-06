'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Check, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';

interface CustomizableOption {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: number;
}

const customizerOptions: CustomizableOption[] = [
  { id: 'opt-1', name: '24K Gold Collagen Hydration Mask', category: 'Facial Add-On', price: 65, duration: 25 },
  { id: 'opt-2', name: 'Hot Basalt Stone Spinal Warmup', category: 'Massage Add-On', price: 50, duration: 20 },
  { id: 'opt-3', name: 'Caviar Hair Bond Repair Glossing', category: 'Hair Add-On', price: 75, duration: 30 },
  { id: 'opt-4', name: 'Organic CBD Tension Release Compress', category: 'Body Add-On', price: 45, duration: 15 },
  { id: 'opt-5', name: 'Diamond Dust Foot Scrub & Polish', category: 'Nail Add-On', price: 40, duration: 20 },
  { id: 'opt-6', name: 'Microcurrent Bio-Lift Eye Contour', category: 'Aesthetics Add-On', price: 80, duration: 25 },
];

export const PackageCustomizer: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['opt-1', 'opt-2']);

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const basePrice = 120; // Base sanctuary pass
  const baseDuration = 60; // 60 min baseline massage/facial

  const addOnsPrice = selectedIds.reduce((sum, id) => {
    const item = customizerOptions.find((opt) => opt.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalDuration = selectedIds.reduce((sum, id) => {
    const item = customizerOptions.find((opt) => opt.id === id);
    return sum + (item ? item.duration : 0);
  }, baseDuration);

  const subtotal = basePrice + addOnsPrice;
  // 15% discount for 3 or more add-ons
  const discount = selectedIds.length >= 3 ? Math.round(subtotal * 0.15) : 0;
  const finalPrice = subtotal - discount;

  return (
    <Card className="bg-gradient-to-br from-white/90 via-[#FAF8F5] to-[#F4ECE1]/50 border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Options Picker */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-2xl">
              <Calculator className="w-6 h-6" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Interactive Spa Day Builder
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0A0E0C]">
                Customize Your Sanctuary Retreat
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#4A524D]">
            Select your preferred treatment add-ons to build your custom spa day. Bundle 3 or more enhancements for an instant <strong>15% Privé Discount</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {customizerOptions.map((opt) => {
              const isSelected = selectedIds.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-md'
                      : 'bg-white/80 text-[#0A0E0C] border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase tracking-wider font-medium ${isSelected ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
                      {opt.category}
                    </span>
                    <h5 className="font-serif text-sm font-semibold leading-tight">{opt.name}</h5>
                    <p className={`text-xs ${isSelected ? 'text-gray-200' : 'text-gray-500'}`}>
                      +{opt.duration} mins • {formatCurrency(opt.price)}
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all shrink-0 mt-1 ${
                      isSelected
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0A0E0C]'
                        : 'border-gray-300'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Live Pricing Summary */}
        <div className="w-full lg:w-80 bg-[#0A0E0C] text-[#FAF8F5] p-6 rounded-3xl space-y-6 shadow-2xl border border-white/10 relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-serif text-lg font-semibold text-[#D4AF37]">Package Summary</span>
            <span className="text-xs uppercase tracking-wider text-gray-400">{totalDuration} Mins Total</span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Sanctuary Baseline Spa Pass</span>
              <span>{formatCurrency(basePrice)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Selected Add-Ons ({selectedIds.length})</span>
              <span>+{formatCurrency(addOnsPrice)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-[#D4AF37] font-medium pt-2 border-t border-white/10">
                <span>15% Privé Bundle Discount</span>
                <span>-{formatCurrency(discount)}</span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-1">
            <span className="text-xs uppercase tracking-widest text-gray-400">Total Retreat Price</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-white">{formatCurrency(finalPrice)}</span>
              {discount > 0 && (
                <span className="text-sm line-through text-gray-500">{formatCurrency(subtotal)}</span>
              )}
            </div>
          </div>

          <Link href={`/book?custom=${selectedIds.join(',')}`} className="block pt-2">
            <Button className="w-full" size="md" variant="primary">
              <span>Book Custom Retreat</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
