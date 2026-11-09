import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PVV Ship Repair & Marine Services",
  description:
    "Get in touch with PVV Ship Repair and Marine Services in Lower Jasaan, Misamis Oriental for ship repair quotes, project proposals and general inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
