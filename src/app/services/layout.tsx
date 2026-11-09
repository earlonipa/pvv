import type { Metadata } from "next";

const title =
  "Marine Services & Ship Repair | Professional Marine Engineering Solutions";
const description =
  "Expert marine services including Z-peller repair, CPP services, engine overhaul, hull repair, and comprehensive ship maintenance. Professional marine engineering solutions for vessels of all sizes.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "marine services, ship repair, marine engineering, vessel maintenance, Z-peller repair, CPP services, engine overhaul, hull repair, marine maintenance",
  alternates: { canonical: "/services" },
  openGraph: {
    title,
    description,
    url: "/services",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "PVV Ship Repair Services" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og.jpg"] },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
