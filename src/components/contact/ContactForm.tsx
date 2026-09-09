"use client";

/**
 * Project enquiry form.
 *
 * The site is a static export, so there is no server to post to. Rather than ship a
 * form that silently does nothing, this composes the enquiry into a mail draft
 * addressed to the studio — the visitor sees exactly what is being sent and it works
 * with no third-party account and no API key.
 *
 * TO WIRE UP A REAL ENDPOINT: set NEXT_PUBLIC_CONTACT_ENDPOINT to a form handler URL
 * (Formspree, Web3Forms, a Lambda, anything that accepts a POST of JSON). The form
 * posts to it and falls back to the mail draft if the request fails.
 */

import { useState } from "react";
import { site } from "../../config/site";
import { projectTypeOptions } from "../../config/services";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

const FIELD =
  "w-full block rounded-[7px] border border-solid border-clr-2 bg-background px-4 py-3.5 text-[1.0625rem] leading-[1.4375rem] text-foreground outline-none transition-colors duration-200 focus:border-primary";

const BUDGETS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "drafted" | "error";

export default function ContactForm({
  /** Pre-selects the project type, so a service page CTA arrives with context. */
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot: real people leave this empty. Bots fill everything.
    if (data.company_website) return;

    setStatus("sending");

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setStatus("sent");
          form.reset();
          return;
        }
      } catch {
        // Fall through to the mail draft below.
      }
    }

    const serviceLabel =
      projectTypeOptions.find((o) => o.value === data.projectType)?.label ?? "Not specified";

    const body = [
      `Name: ${data.name || "—"}`,
      `Company: ${data.company || "—"}`,
      `Email: ${data.email || "—"}`,
      `Phone: ${data.phone || "—"}`,
      `Project type: ${serviceLabel}`,
      `Budget: ${data.budget || "—"}`,
      "",
      "Project:",
      data.message || "—",
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Project enquiry — ${data.name || "new"}`,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("drafted");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
      <div className="grid gap-5 grid-cols-2 max-md:grid-cols-1 max-lg:gap-[0.9375rem]">
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Company" name="company" autoComplete="organization" />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="grid gap-5 grid-cols-2 max-md:grid-cols-1 max-lg:gap-[0.9375rem]">
        <label className="flex flex-col gap-3">
          <span className={`${MONO} text-muted-foreground`}>What do you need</span>
          <select name="projectType" defaultValue={defaultService} className={FIELD}>
            <option value="">Choose a service</option>
            {projectTypeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-3">
          <span className={`${MONO} text-muted-foreground`}>Budget</span>
          <select name="budget" className={FIELD} defaultValue="">
            <option value="">Choose a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-3">
        <span className={`${MONO} text-muted-foreground`}>
          What are you trying to build
        </span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="The problem, who it is for, and anything that already exists."
          className={`${FIELD} resize-y`}
        />
      </label>

      {/* Honeypot. Hidden from people, offered to bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-13.5 min-h-13.5 inline-flex relative isolate px-6 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-primary text-color-001 cursor-pointer disabled:opacity-60 max-lg:h-11 max-lg:min-h-11 max-lg:px-4"
        >
          <span className={MONO}>
            {status === "sending" ? "Sending" : "Send enquiry"}
          </span>
        </button>

        {/* role=status so the outcome is announced without stealing focus. */}
        <p role="status" aria-live="polite" className="text-[0.9375rem] leading-[1.375rem] text-muted-foreground">
          {status === "sent" && "Thanks — we will come back to you within one working day."}
          {status === "drafted" &&
            `We opened a draft in your mail app. If nothing happened, write to ${site.contact.email}.`}
          {status === "error" && `Something went wrong. Please email ${site.contact.email}.`}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className={`${MONO} text-muted-foreground`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        className={FIELD}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
      />
    </label>
  );
}
