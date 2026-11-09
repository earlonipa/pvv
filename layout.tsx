import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d12e2e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords:
    "ship repair Philippines, marine services Mindanao, vessel maintenance, Z-peller repair, CPP services, marine engine overhaul, hull repair, PVV ship repair, marine diesel maintenance, shipyard services, emergency ship repair, marine engineering Philippines",
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_PH",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/og.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/images/home_final.webp`,
  logo: `${SITE.url}/images/pvv_logo_final.webp`,
  description:
    "Professional ship repair and marine services in the Philippines, specializing in vessel maintenance, Z-peller repair, and marine engine overhaul.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Del Fuente St. PO Commercial Building Door 4, Lower Jasaan",
    addressLocality: "Jasaan",
    addressRegion: "Misamis Oriental",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  telephone: SITE.mobiles[0],
  email: SITE.email,
  sameAs: [SITE.facebook],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "16:00",
  },
  areaServed: "Philippines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen">
        <div className="flex flex-col min-h-screen">
          <TopBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
