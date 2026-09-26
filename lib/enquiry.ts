export type EnquiryPayload = {
  fullName: string;
  phone: string;
  email: string;
  qualification: string;
  course: string;
  message: string;
  source?: string;
};

export type EnquiryResult = { ok: true } | { ok: false; error: string };

export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<EnquiryResult> {
  const name = payload.fullName.trim();
  const phone = payload.phone.replace(/\s+/g, "");
  const email = payload.email.trim();

  if (name.length < 2) {
    return { ok: false, error: "Please enter your full name." };
  }
  if (!/^[+]?\d{10,13}$/.test(phone)) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!payload.qualification.trim()) {
    return { ok: false, error: "Please share your qualification." };
  }
  if (!payload.course) {
    return { ok: false, error: "Please select a course." };
  }

  const record = {
    fullName: name,
    phone,
    email,
    qualification: payload.qualification.trim(),
    course: payload.course,
    message: payload.message.trim(),
    source:
      payload.source?.trim() ||
      (typeof window !== "undefined" ? window.location.pathname : "website"),
  };

  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    const data = (await res.json()) as EnquiryResult;
    if (!res.ok || !data.ok) {
      return {
        ok: false,
        error: !data.ok ? data.error : "Unable to save your enquiry. Please try WhatsApp.",
      };
    }

    // Local backup copy for the visitor device
    try {
      const existing = JSON.parse(
        localStorage.getItem("iaa-enquiries") ?? "[]",
      ) as unknown[];
      existing.push({ ...record, submittedAt: new Date().toISOString() });
      localStorage.setItem("iaa-enquiries", JSON.stringify(existing));
    } catch {
      // ignore local backup failures
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Unable to save your enquiry. Please try WhatsApp.",
    };
  }
}
