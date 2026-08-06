import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PackageCustomizer } from '@/components/beauty/PackageCustomizer';
import { spaPackages } from '@/data/salonData';
import { Check, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Bespoke Day Retreats
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Luxury Spa Packages
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D]">
            Immerse yourself in half-day sanctuary journeys designed for ultimate physical relaxation and skin radiance.
          </p>
        </div>

        {/* Pre-Curated Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-8 space-y-6 flex flex-col justify-between relative overflow-hidden ${
                pkg.popular ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/20 shadow-2xl' : ''
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4">
                  <Badge variant={pkg.popular ? 'gold' : 'emerald'}>{pkg.badge}</Badge>
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#0A0E0C]">{pkg.name}</h3>
                  <p className="text-xs text-[#D4AF37] font-semibold">{pkg.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-2 pt-2 border-y border-[#D4AF37]/20 py-4">
                  <span className="font-serif text-3xl font-bold text-[#0A0E0C]">{formatCurrency(pkg.price)}</span>
                  <span className="text-sm text-gray-400 line-through">{formatCurrency(pkg.originalPrice)}</span>
                  <span className="text-xs text-gray-500 ml-auto flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {pkg.duration}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-[#4A524D]">
                  {pkg.includedServices.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`/book?package=${pkg.id}`} className="block pt-4">
                <Button variant={pkg.popular ? 'primary' : 'outline'} className="w-full" size="md">
                  Reserve Package
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Interactive Customizer Section */}
        <section className="pt-8">
          <PackageCustomizer />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
