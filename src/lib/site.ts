// Single source of truth for business details used across pages, metadata and JSON-LD.
export const SITE = {
  name: "PVV Ship Repair and Marine Services",
  title: "PVV Ship Repair & Marine Services | Philippines",
  description:
    "Professional ship repair, marine maintenance, and vessel services in the Philippines. Expert Z-peller, CPP, engine overhaul, and hull repair services.",
  url: "https://pvvmarineserv.com",
  email: "pvv.shiprepairmarine@gmail.com",
  mobiles: ["+63-928-976-7350", "+63-945-628-0682"],
  landline: "088-889-0696",
  facebook: "https://www.facebook.com/pvv.ship.rpr.marine/",
  facebookLabel: "PVV Ship RPR Marine",
  address:
    "Del Fuente St. PO Commercial Building Door 4. Lower Jasaan Misamis Oriental, Philippines",
  hours: "Monday - Saturday: 7:00 AM - 4:00 PM",
  geo: { lat: 8.65319516521008, lng: 124.75327812388453 },
} as const;

export const NAV_ITEMS = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "CLIENTS", href: "/clients" },
  { name: "CONTACT", href: "/contact" },
] as const;
