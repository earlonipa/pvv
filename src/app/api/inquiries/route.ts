import { getCloudflareContext } from "@opennextjs/cloudflare";
import { parseInquiry } from "@/lib/inquiry";

const MAX_BODY_BYTES = 10_000;

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const result = parseInquiry(body);
  if (!result.ok) {
    return Response.json({ errors: result.errors }, { status: 400 });
  }
  // Pretend success for bots so they don't retry.
  if (result.spam) {
    return Response.json({ ok: true }, { status: 201 });
  }

  const { name, email, phone, vessel, message } = result.data;
  try {
    const { env } = getCloudflareContext();
    await env.DB.prepare(
      "INSERT INTO inquiries (name, email, phone, vessel, message) VALUES (?1, ?2, ?3, ?4, ?5)"
    )
      .bind(name, email, phone, vessel, message)
      .run();
  } catch (err) {
    console.error("Failed to store inquiry", err);
    return Response.json({ error: "Could not save your message. Please try again." }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 201 });
}
