"use client";

import { useState } from "react";

type Variant = "dark" | "cream";

export function NewsletterForm({
  variant = "dark",
  ctaLabel = "Send me the AI dispatch",
  showRole = false,
  microcopy = "Free. Local. Practical. No hype.",
}: {
  variant?: Variant;
  ctaLabel?: string;
  showRole?: boolean;
  microcopy?: string | null;
}) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const dark = variant === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: role || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`border p-5 ${
          dark
            ? "border-signal/50 bg-ink-3"
            : "border-moss/40 bg-cream-2"
        }`}
        role="status"
      >
        <p
          className={`font-mono text-sm font-semibold uppercase tracking-widest ${
            dark ? "text-signal" : "text-moss"
          }`}
        >
          ▸ Signal received
        </p>
        <p className={`mt-2 text-sm ${dark ? "text-fog" : "text-ash"}`}>
          You&apos;re on the list. The next dispatch lands in your inbox —
          useful, local, and short enough to read with your coffee.
        </p>
      </div>
    );
  }

  const inputClasses = dark
    ? "border-line bg-ink-2 text-cream placeholder:text-fog/60 focus:border-signal"
    : "border-cream-line bg-cream text-ink placeholder:text-ash/70 focus:border-moss";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`email-${variant}`}>
          Email address
        </label>
        <input
          id={`email-${variant}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          className={`h-12 flex-1 border px-4 text-sm outline-none transition-colors ${inputClasses}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`h-12 shrink-0 px-6 font-mono text-xs font-semibold uppercase tracking-widest transition-colors disabled:opacity-60 ${
            dark
              ? "border border-signal bg-signal text-ink hover:bg-transparent hover:text-signal"
              : "border border-ink bg-ink text-signal hover:bg-moss hover:border-moss"
          }`}
        >
          {status === "loading" ? "Sending…" : ctaLabel}
        </button>
      </div>

      {showRole && (
        <div className="mt-3">
          <label className="sr-only" htmlFor={`role-${variant}`}>
            What do you do? (optional)
          </label>
          <input
            id={`role-${variant}`}
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="What do you do? e.g. realtor, cafe owner, freelancer (optional)"
            className={`h-12 w-full border px-4 text-sm outline-none transition-colors ${inputClasses}`}
          />
        </div>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400" role="alert">
          {message}
        </p>
      )}

      {microcopy && (
        <p
          className={`mt-3 font-mono text-xs tracking-wide ${
            dark ? "text-fog" : "text-ash"
          }`}
        >
          {microcopy}
        </p>
      )}
    </form>
  );
}
