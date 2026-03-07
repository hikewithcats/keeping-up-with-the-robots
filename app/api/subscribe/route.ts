import { NextResponse } from "next/server";

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
      // In development without Resend configured, log and return success
      console.log("Newsletter signup (no Resend key):", email);
      return NextResponse.json({ success: true });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      // Add to Resend audience
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
        console.error("Resend error:", data);
        return NextResponse.json(
          { error: "Something went wrong. Try again." },
          { status: 500 }
        );
      }
    } else {
      // Send a welcome email as fallback
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
        console.error("Resend error:", data);
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
