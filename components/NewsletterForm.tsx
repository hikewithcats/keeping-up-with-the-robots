"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[500px] text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Stay in the loop.</h2>
        <p className="mt-3 text-[var(--color-text-muted)]">
          Get updates on meetups, builder spotlights, and what the Western Mass
          AI community is building.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-md border border-white/15 bg-[var(--color-bg-card)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-3 text-sm text-green-400">{message}</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">{message}</p>
        )}

        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
