"use client";

import { useState } from "react";

const INTERESTS = [
  "Newsletter",
  "Meetup",
  "Workshop",
  "Sponsoring",
  "Speaking / demoing",
  "Sharing a local AI use case",
  "General question",
];

export function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  function toggleInterest(interest: string) {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          town: form.get("town"),
          business: form.get("business"),
          interests,
          message: form.get("message"),
        }),
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
      <div className="border border-signal/50 bg-ink-3 p-6" role="status">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-signal">
          ▸ Message received
        </p>
        <p className="mt-2 text-sm leading-relaxed text-fog">
          Thanks for reaching out — a real human (Patrick) reads every one of
          these and will get back to you.
        </p>
      </div>
    );
  }

  const field =
    "h-12 w-full border border-line bg-ink-2 px-4 text-sm text-cream placeholder:text-fog/60 outline-none transition-colors focus:border-signal";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="kicker mb-2 block text-fog">
            Name *
          </label>
          <input id="name" name="name" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className="kicker mb-2 block text-fog">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
          />
        </div>
        <div>
          <label htmlFor="town" className="kicker mb-2 block text-fog">
            Town / location
          </label>
          <input
            id="town"
            name="town"
            placeholder="e.g. Northampton"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="business" className="kicker mb-2 block text-fog">
            Business / organization
          </label>
          <input id="business" name="business" className={field} />
        </div>
      </div>

      <fieldset>
        <legend className="kicker mb-3 text-fog">
          What are you interested in?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {INTERESTS.map((interest) => {
            const active = interests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                aria-pressed={active}
                onClick={() => toggleInterest(interest)}
                className={`border px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active
                    ? "border-signal bg-signal text-ink"
                    : "border-line text-fog hover:border-signal/60 hover:text-cream"
                }`}
              >
                {interest}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="kicker mb-2 block text-fog">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building, wondering about, or hoping AI could take off your plate?"
          className="w-full border border-line bg-ink-2 px-4 py-3 text-sm text-cream placeholder:text-fog/60 outline-none transition-colors focus:border-signal"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="border border-signal bg-signal px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-transparent hover:text-signal disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send it"}
      </button>
    </form>
  );
}
