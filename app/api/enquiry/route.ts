import { NextResponse } from "next/server";
import type { EnquiryPayload } from "@/lib/enquiry";

type Body = EnquiryPayload & {
  source?: string;
};

function validate(payload: Body): string | null {
  const name = payload.fullName?.trim() ?? "";
  const phone = (payload.phone ?? "").replace(/\s+/g, "");
  const email = payload.email?.trim() ?? "";

  if (name.length < 2) return "Please enter your full name.";
  if (!/^[+]?\d{10,13}$/.test(phone)) return "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
  if (!payload.qualification?.trim()) return "Please share your qualification.";
  if (!payload.course) return "Please select a course.";
  return null;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const error = validate(body);
  if (error) {
    return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  const webhook = process.env.GOOGLE_LEADS_WEBHOOK_URL?.trim();
  if (!webhook) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Lead collection is not configured yet. Please WhatsApp IAA or try again shortly.",
      },
      { status: 503 },
    );
  }

  // Exact form field order for IAA_WEB_LEADS
  const lead = {
    submittedAt: new Date().toISOString(),
    fullName: body.fullName.trim(),
    phone: body.phone.replace(/\s+/g, ""),
    email: body.email.trim(),
    qualification: body.qualification.trim(),
    course: body.course,
    message: (body.message ?? "").trim(),
    source: (body.source ?? "").trim() || "website",
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      redirect: "follow",
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Unable to save your enquiry right now. Please try WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to reach lead storage. Please try WhatsApp." },
      { status: 502 },
    );
  }
}
