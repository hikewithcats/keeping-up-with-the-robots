import { NextResponse } from "next/server";

// ============================================================
// Contact form handler — Resend integration
//
// Environment variables:
//   RESEND_API_KEY  — your Resend API key (required for production)
//   CONTACT_EMAIL   — where submissions are delivered
//                     (defaults to hello@keepingupwiththerobots.com)
//
// Without RESEND_API_KEY, submissions are logged to the console and
// the form still reports success (safe for local dev).
// ============================================================

const CONTACT_TO =
  process.env.CONTACT_EMAIL || "hello@keepingupwiththerobots.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, town, business, interests, message } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Please tell us your name." },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please include a message." },
        { status: 400 }
      );
    }

    const interestList = Array.isArray(interests)
      ? interests.filter((i) => typeof i === "string").join(", ")
      : "";

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("Contact form (no RESEND_API_KEY set):", {
        name,
        email,
        town,
        business,
        interestList,
        message,
      });
      return NextResponse.json({ success: true });
    }

    const escape = (s: unknown) =>
      String(s ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "KUWR Contact Form <hello@keepingupwiththerobots.com>",
        to: CONTACT_TO,
        reply_to: email,
        subject: `Contact form: ${name}${town ? ` (${town})` : ""}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escape(name)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          <p><strong>Town:</strong> ${escape(town) || "—"}</p>
          <p><strong>Business / org:</strong> ${escape(business) || "—"}</p>
          <p><strong>Interested in:</strong> ${escape(interestList) || "—"}</p>
          <p><strong>Message:</strong></p>
          <p>${escape(message).replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("Resend contact email error:", data);
      return NextResponse.json(
        { error: "Something went wrong. Try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
