import React from 'react';

export const JsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Lumière Beauty Lounge',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200',
    '@id': 'https://lumierebeautylounge.com',
    url: 'https://lumierebeautylounge.com',
    telephone: '+18005864373',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '450 Fifth Avenue, Suite 120',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10018',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7516,
      longitude: -73.9815,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://instagram.com/lumierebeautylounge',
      'https://facebook.com/lumierebeautylounge',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
