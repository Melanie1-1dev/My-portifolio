import { socials } from "@/data/socials";

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

export function validateContactInput(input: unknown): ContactResult | { ok: true; data: ContactInput } {
  if (!input || typeof input !== "object") {
    return { ok: false, status: 400, error: "Please send a valid message." };
  }

  const { name, email, message, website } = input as Record<string, unknown>;

  // Bots often fill every field. Silently accept and discard honeypot submissions.
  if (typeof website === "string" && website.trim()) return { ok: true };

  if (
    typeof name !== "string" || name.trim().length < 2 || name.length > 100 ||
    typeof email !== "string" || email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" || message.trim().length < 10 || message.length > 5_000
  ) {
    return {
      ok: false,
      status: 400,
      error: "Enter a valid name, email address, and message (10–5,000 characters).",
    };
  }

  return { ok: true, data: { name: name.trim(), email, message: message.trim() } };
}

export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return {
      ok: false,
      status: 503,
      error: "Contact messages are not configured yet. Please email me directly.",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [socials.email],
        reply_to: input.email,
        subject: `Portfolio message from ${input.name}`,
        text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact email provider returned an error:", response.status);
      return {
        ok: false,
        status: 502,
        error: "Your message could not be sent right now. Please try again later.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Could not reach the contact email provider:", error);
    return {
      ok: false,
      status: 502,
      error: "Your message could not be sent right now. Please try again later.",
    };
  }
}
