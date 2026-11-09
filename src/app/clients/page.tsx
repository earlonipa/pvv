import type { Metadata } from "next";
import { getClients, type Client } from "@/lib/clients";
import ClientList from "./client-list";

export const metadata: Metadata = {
  title: "Our Clients | PVV Ship Repair & Marine Services",
  description:
    "Shipping lines, shipyards and marine companies across the Philippines that trust PVV Ship Repair and Marine Services.",
  alternates: { canonical: "/clients" },
};

// Reads from D1 on every request (the database isn't available at build time).
export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  let clients: Client[] = [];
  try {
    clients = await getClients();
  } catch (err) {
    console.error("Failed to load clients", err);
  }
  return <ClientList clients={clients} />;
}
