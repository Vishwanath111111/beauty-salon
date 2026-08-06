import type { Metadata } from 'next';
import '@/styles/globals.css';
import { JsonLd } from '@/components/shared/JsonLd';

export const metadata: Metadata = {
  title: 'Lumière Beauty Lounge | Luxury Salon, Aesthetic Clinic & Spa',
  description:
    'Experience bespoke beauty rituals, organic aesthetic facials, holistic spa massages, and luxury hair styling at Lumière Beauty Lounge.',
  keywords: [
    'Beauty Salon',
    'Luxury Spa',
    'Aesthetic Clinic',
    'Organic Facials',
    'Hair Styling',
    'Massages',
    'Bridal Spa',
  ],
  authors: [{ name: 'VJ Web Studio' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Lumière Beauty Lounge | Sanctuary of Radiance',
    description: 'Bespoke beauty rituals and holistic aesthetic care.',
    url: 'https://lumierebeautylounge.com',
    siteName: 'Lumière Beauty Lounge',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Lumière Beauty Lounge Interior',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="bg-[#FAF8F5] text-[#0A0E0C] antialiased selection:bg-[#D4AF37]/30 selection:text-[#0A0E0C]">
        {children}
      </body>
    </html>
  );
}
