export interface InquiryInput {
  name: string;
  email: string;
  phone: string | null;
  vessel: string | null;
  message: string;
}

export type InquiryResult =
  | { ok: true; spam: boolean; data: InquiryInput }
  | { ok: false; errors: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** Validates the JSON body sent by the contact form. */
export function parseInquiry(body: unknown): InquiryResult {
  const b = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;

  // Honeypot: real visitors never see or fill this field.
  if (str(b.website)) {
    return { ok: true, spam: true, data: { name: "", email: "", phone: null, vessel: null, message: "" } };
  }

  const data = {
    name: str(b.name),
    email: str(b.email),
    phone: str(b.phone) || null,
    vessel: str(b.vessel) || null,
    message: str(b.message),
  };

  const errors: Record<string, string> = {};
  if (!data.name || data.name.length > 100) errors.name = "Please enter your name (max 100 characters).";
  if (!EMAIL_RE.test(data.email) || data.email.length > 254) errors.email = "Please enter a valid email address.";
  if (data.phone && data.phone.length > 40) errors.phone = "Phone number is too long.";
  if (data.vessel && data.vessel.length > 100) errors.vessel = "Vessel name is too long.";
  if (data.message.length < 10 || data.message.length > 2000)
    errors.message = "Please enter a message between 10 and 2000 characters.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, spam: false, data };
}
