import type { Metadata } from 'next'
import '@/styles/globals.css'
import { SITE, SERVICE_AREAS } from '@/site.config'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.CANONICAL_URL),
  title: 'Blue Slip Sydney – AUVIS Inspection • Same-Day Bookings | Blue Slip Sydney',
  description: `Get your blue slip (AUVIS inspection) in Sydney today. Fast, compliant inspections by AUVIS-authorised pros. Serving ${SERVICE_AREAS.slice(0, 5).join(', ')} and more. Call ${SITE.PHONE} for same-day bookings.`,
  keywords: [
    'blue slip sydney',
    'blue slip',
    'AUVIS inspection',
    'blue slip inspection sydney',
    'unregistered vehicle inspection',
    'blue slip st peters',
    'blue slip inner west',
    'vehicle inspection nsw',
  ],
  authors: [{ name: SITE.BUSINESS_NAME }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName: SITE.TRADING_NAME,
    title: 'Blue Slip Sydney – AUVIS Inspection • Same-Day Bookings',
    description: `Fast, compliant blue slip inspections in Sydney. AUVIS-authorised pros. Same-day bookings. Call ${SITE.PHONE}.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Slip Sydney – AUVIS Inspection • Same-Day Bookings',
    description: `Fast, compliant blue slip inspections in Sydney. AUVIS-authorised pros. Same-day bookings. Call ${SITE.PHONE}.`,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE.CANONICAL_URL,
    name: SITE.TRADING_NAME,
    legalName: SITE.BUSINESS_NAME,
    url: SITE.CANONICAL_URL,
    telephone: SITE.PHONE,
    email: SITE.EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '63–65 Campbell Street',
      addressLocality: 'St Peters',
      addressRegion: 'NSW',
      postalCode: '2044',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.GEO_LAT,
      longitude: SITE.GEO_LNG,
    },
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Blue Slip (AUVIS Inspection)',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.TRADING_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
    },
    description:
      'AUVIS-authorised blue slip inspections for unregistered vehicles in NSW. Fast, compliant, same-day bookings available.',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a blue slip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A blue slip is an Authorised Unregistered Vehicle Inspection Scheme (AUVIS) certificate. It's a safety and identity check required in NSW when a vehicle has never been registered, has been unregistered for more than 3 months, or has had major repairs.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long is a blue slip valid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A blue slip is valid for 42 days from the date of inspection. You must use it to register your vehicle with Service NSW within that timeframe.',
        },
      },
      {
        '@type': 'Question',
        name: "What's the difference between a blue slip and a pink slip?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pink slip (e-safety check) is an annual roadworthiness inspection for registered vehicles over 5 years old. A blue slip (AUVIS) is a one-time inspection for unregistered vehicles before they can be registered in NSW.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I need to bring to my blue slip inspection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bring your photo ID (driver licence or passport), proof of ownership (bill of sale, receipt, or import papers), and the vehicle itself. Make sure the vehicle is clean and accessible.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a blue slip inspection take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most inspections take 30–60 minutes, depending on the vehicle type. If your vehicle passes, you'll typically get your certificate on the spot.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you inspect trailers and motorcycles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we conduct AUVIS inspections for a range of vehicle types, including trailers and motorbikes. Call us to discuss your specific requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you do mobile blue slip inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, all our blue slip inspections are conducted at our St Peters workshop. This ensures we have the proper equipment and facilities to meet AUVIS standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my vehicle fails the inspection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "If your vehicle does not pass, we will provide a detailed report of what needs fixing. Once you have made the repairs, you can book a re-inspection.",
        },
      },
    ],
  }

  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
