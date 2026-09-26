"use client";

import { type FormEvent, useState } from "react";
import { submitEnquiry } from "@/lib/enquiry";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const courses = [
  "Clinical Cosmetology",
  "SPMU",
  "Microblading",
  "Lip Micropigmentation",
  "Lash Lift",
  "General Enquiry",
];

const gold = "#c9a44a";

export function EnquiryForm({
  variant = "light",
}: {
  variant?: "light" | "dark" | "premium";
}) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const dark = variant === "dark";
  const premium = variant === "premium";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus("idle");
    const result = await submitEnquiry({
      fullName: String(data.get("fullName") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      qualification: String(data.get("qualification") ?? ""),
      course: String(data.get("course") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setSending(false);
    if (result.ok) {
      setStatus("ok");
      form.reset();
    } else {
      setStatus("err");
      setError(result.error);
    }
  }

  if (premium) {
    return (
      <form
        onSubmit={onSubmit}
        noValidate
        className="enquiry-premium w-full max-w-none space-y-1"
      >
        <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
          <PremiumField id="fullName" name="fullName" label="Full Name" autoComplete="name" required />
          <PremiumField id="phone" name="phone" label="Phone Number" type="tel" autoComplete="tel" required />
          <PremiumField id="email" name="email" label="Email" type="email" autoComplete="email" required />
          <PremiumField id="qualification" name="qualification" label="Qualification" required />
        </div>

        <div className="py-2.5">
          <label
            htmlFor="course"
            className="mb-2 block text-[0.58rem] font-semibold tracking-[0.2em] uppercase"
            style={{ color: gold }}
          >
            Course Interested In
          </label>
          <div className="relative w-full max-w-md">
            <select
              id="course"
              name="course"
              required
              defaultValue=""
              className="premium-gold-bar premium-gold-bar--course w-full appearance-none py-3 pr-12 pl-4 font-serif text-[0.9rem] italic text-[#5a554c] outline-none"
            >
              <option value="" disabled>
                Select a course
              </option>
              {courses.map((course) => (
                <option key={course} value={course} className="bg-[#f7f5f1] not-italic text-[#1a1408]">
                  {course}
                </option>
              ))}
            </select>
            <span
              className="pointer-events-none absolute top-1/2 right-3 grid h-5 w-5 -translate-y-1/2 place-items-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 32% 28%, #86efac, #0f766e 62%, #064e3b)",
                boxShadow: "0 0 0 1.5px #d4af37",
              }}
              aria-hidden
            />
          </div>
        </div>

        <div className="py-2.5">
          <label
            htmlFor="message"
            className="mb-2 block text-[0.58rem] font-semibold tracking-[0.2em] uppercase"
            style={{ color: gold }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="premium-gold-bar min-h-[5.25rem] w-full resize-y px-4 py-3 text-[0.9rem] text-[#3a3530] outline-none"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <button
            type="submit"
            className="rounded-full px-7 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] uppercase transition hover:brightness-110"
            style={{
              background:
                "linear-gradient(180deg, #f0d78c 0%, #d4af37 42%, #a67c1a 100%)",
              color: "#fff",
              textShadow: "0 1px 0 rgba(0,0,0,0.2)",
              boxShadow: "0 2px 0 #7a5c18, 0 8px 18px rgba(166,124,26,0.28)",
            }}
          >
            {sending ? "Sending…" : "Send enquiry"}
          </button>
          <a
            href={whatsappUrl("general")}
            className="text-[0.62rem] tracking-[0.14em] uppercase underline-offset-4 hover:underline"
            style={{ color: gold }}
            target="_blank"
            rel="noreferrer"
          >
            Prefer WhatsApp →
          </a>
        </div>

        {status === "ok" && (
          <p className="mt-4 text-sm text-[#0d7a5f]" role="status">
            Thank you. Your enquiry is recorded — the IAA team will follow up.
          </p>
        )}
        {status === "err" && (
          <p className="mt-4 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn(dark && "enquiry-dark")}>
      <div className="field">
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" name="fullName" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="qualification">Qualification</label>
        <input id="qualification" name="qualification" required />
      </div>
      <div className="field">
        <label htmlFor="course">Course Interested In</label>
        <select id="course" name="course" required defaultValue="">
          <option value="" disabled>
            Select a course
          </option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="rounded-full bg-[var(--iaa-turquoise)] px-6 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--iaa-black)] uppercase transition hover:bg-[#4de0b8]"
        >
          {sending ? "Sending…" : "Send enquiry"}
        </button>
        <a href={whatsappUrl("general")} className="underline-link" target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
      </div>
      {status === "ok" && (
        <p className="mt-6 text-sm text-[var(--iaa-turquoise)]" role="status">
          Thank you. Your enquiry is recorded — the IAA team will follow up. Prefer faster help?
          Message us on WhatsApp.
        </p>
      )}
      {status === "err" && (
        <p className="mt-6 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

function PremiumField({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="py-2.5">
      <label
        htmlFor={id}
        className="mb-2 block text-[0.58rem] font-semibold tracking-[0.2em] uppercase"
        style={{ color: gold }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="premium-gold-bar w-full px-4 py-3 text-[0.9rem] text-[#3a3530] outline-none"
      />
    </div>
  );
}
