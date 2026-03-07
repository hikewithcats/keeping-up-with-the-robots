import { NextResponse } from "next/server";

// ============================================================
// Newsletter signup handler — Resend integration
//
// Required Vercel environment variables:
//   RESEND_API_KEY       — your Resend API key (required for production)
//   RESEND_AUDIENCE_ID   — your Resend audience ID (recommended)
//
// Behavior:
//   - With both vars set: adds the contact to your Resend audience
//   - With only API key:  sends a welcome email to the subscriber
//   - With neither:       logs to console and returns success (dev mode)
//
// Set these in Vercel → Settings → Environment Variables
// ============================================================

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // No Resend key — log and return success (safe for local dev)
      console.log("Newsletter signup (no RESEND_API_KEY set):", email);
      return NextResponse.json({ success: true });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      // Preferred path: add contact to Resend audience
      const res = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        console.error("Resend audience error:", data);
        return NextResponse.json(
          { error: "Something went wrong. Try again." },
          { status: 500 }
        );
      }
    } else {
      // Fallback: send a welcome email (no audience configured)
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Keeping Up With The Robots <hello@keepingupwiththerobots.com>",
          to: email,
          subject: "Welcome to Keeping Up With The Robots!",
          html: `<p>You're in! We'll keep you posted on meetups, builder spotlights, and what the Western Mass AI community is building.</p><p>— Keeping Up With The Robots</p>`,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error("Resend email error:", data);
        return NextResponse.json(
          { error: "Something went wrong. Try again." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
