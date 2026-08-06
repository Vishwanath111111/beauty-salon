import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full flex items-center justify-center">
        <Card className="p-10 text-center space-y-6 border-[#D4AF37]/30 shadow-2xl">
          <span className="font-serif text-6xl font-bold gold-gradient-text">404</span>
          <h1 className="font-serif text-3xl font-bold text-[#0A0E0C]">Page Not Found</h1>
          <p className="text-sm text-[#4A524D]">
            The sanctuary ritual page you are searching for does not exist or has been relocated.
          </p>
          <Link href="/" className="inline-block pt-4">
            <Button variant="primary" size="md">
              <span>Return to Sanctuary Home</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
