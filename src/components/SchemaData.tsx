import React from 'react';

export default function SchemaData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tayaba Enterprises",
    "image": "https://tayaba-enterprises.com/images/logo.png",
    "telephone": "+92-21-35897614",
    "email": "tayaba_enterprises@yahoo.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Plot No. 4-E/II, Jami Commercial Street No.06, Phase-VII, DHA",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75500",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.819,
      "longitude": 67.062
    },
    "url": "https://tayaba-enterprises.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "$$",
    "description": "Established in 2003 in Karachi, Tayaba Enterprises is Pakistan's leading provider of photocopier machine sales, rentals, printing, typing, scanning, laminating, and fax services.",
    "sameAs": [
      "https://facebook.com/tayabaEnterprises"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photocopier & Printing Solutions Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photocopying Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Printing Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photocopier Machine Sales & Leasing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Document Scanning & Archiving"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
