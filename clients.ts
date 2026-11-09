import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface Client {
  name: string;
  category: string;
}

export async function getClients(): Promise<Client[]> {
  const { env } = getCloudflareContext();
  const { results } = await env.DB.prepare(
    "SELECT name, category FROM clients ORDER BY sort_order, name"
  ).all<Client>();
  return results;
}
