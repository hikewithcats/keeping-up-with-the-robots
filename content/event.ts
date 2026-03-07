// ============================================================
// LAUNCH CHECKLIST — edit these values when event details are confirmed:
//
// 1. rsvpUrl  → paste your Lu.ma or Google Form URL
//               (e.g. "https://lu.ma/your-event")
// 2. date     → replace with real date (e.g. "Saturday, April 12, 2026")
// 3. time     → replace with real time (e.g. "6:00 PM – 7:30 PM")
// 4. location → replace with real venue (e.g. "Amherst Innovation Center, 123 Main St, Amherst, MA")
//
// When rsvpUrl is null the event page shows a "Join the List"
// fallback linking to /community instead of a direct RSVP button.
// ============================================================

export const launchEvent = {
  title: "Western Mass AI Builders — Launch Meetup",
  date: "Date announcement coming soon",
  time: "Evening, ~90 minutes",
  location: "Amherst, MA area — venue announcement coming soon",
  rsvpUrl: null as string | null,
  description:
    "Lightning talks, live demos, and structured networking. For people who build with AI, not just talk about it.",
  longDescription: `Join us for the first Western Mass AI Builders meetup. This is a gathering for developers, founders, and indie hackers who are actively building with AI tools — Claude, AI agents, automation platforms, and more.

Whether you're shipping AI-powered products, experimenting with autonomous agents, or just want to meet other builders in the Pioneer Valley, this is your community.

No slide decks about "the future of AI." Just real people showing real work.`,
  agenda: [
    {
      time: "0:00",
      title: "Doors Open & Networking",
      description: "Grab coffee, meet other builders, settle in.",
    },
    {
      time: "0:15",
      title: "Welcome & Intros",
      description:
        "Quick overview of the community, what we're building, and why.",
    },
    {
      time: "0:25",
      title: "Lightning Talk #1",
      description: "Short talk from a local builder — topic to be announced.",
    },
    {
      time: "0:40",
      title: "Lightning Talk #2",
      description: "Short talk from a local builder — topic to be announced.",
    },
    {
      time: "0:55",
      title: "Open Demos",
      description:
        "3–5 minute live demos from attendees. Show what you're building.",
    },
    {
      time: "1:15",
      title: "Structured Networking",
      description:
        "Facilitated intros — not awkward mingling. Find your next collaborator.",
    },
    {
      time: "1:30",
      title: "Wrap Up",
      description: "Next steps, how to stay connected, and closing.",
    },
  ],
  speakers: [
    {
      name: "Patrick Hourihan",
      bio: "Organizer of Keeping Up With The Robots. Builder and community organizer in Western Mass.",
      topic: "Welcome & Community Vision",
      confirmed: true,
    },
  ],
  whatToExpect: [
    "Lightning talks from local AI builders",
    "Live demos of real AI projects",
    "Structured networking (not awkward mingling)",
    "A relaxed, builder-focused atmosphere",
  ],
};
