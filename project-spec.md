# Keeping Up With The Robots — V1 Project Spec

Status: Active build brief for Claude Code
Goal: Ship a polished public V1 ASAP for the Claude Ambassador application
Principle: Ship fast. Look real. Expand later.
KEEPING UP WITH THE ROBOTS
KeepingUpWithTheRobots.com

Revised V1 Build Plan
Audit • Lean Strategy • Claude Code Build Brief
March 2026
OPERATING PRINCIPLE
Ship fast. Look real. Expand later.
V1 exists to prove one thing: Patrick is building a credible AI community
in Western Mass, and he shipped the infrastructure to make it real.

PRIMARY GOAL
A polished, publicly live website that serves as proof-of-execution
for the Claude Ambassador application AND functions as a real
community launchpad from day one.

Part 1: Audit of the Original Plan
What Is Strong (Keep)
	•	Brand and positioning: The name is memorable, the builder-first angle is correct, and the target audience definition is sharp. Keep all of this.
	•	Event agenda structure: The 90-minute meetup format with lightning talks, open demos, and structured networking is excellent. It is the right format for a first event.
	•	Speaker outreach strategy: The four speaker archetypes and outreach templates are practical and ready to use immediately.
	•	Growth channel list: UMass, VVM, LinkedIn, and Reddit are the correct channels for this region. No changes needed to the channel strategy.
	•	Technical stack: Next.js, Vercel, Tailwind, Supabase, Resend, Plausible is the right stack. No reason to change it.
What Is Too Ambitious for V1 (Cut or Defer)
The original plan treated V1 as if it were a mature community platform. For a fast launch aimed at the Ambassador application, most of the dynamic features are unnecessary weight.
Feature
Verdict
Reason
Builder directory with profiles, search, tags, admin approval
DEFER to V2
Complex: needs auth, image upload, moderation, search. Zero value for launch.
RSVP system with Supabase database + Resend confirmations
SIMPLIFY
Use a Google Form or Lu.ma link for V1. Same outcome, zero backend work.
Newsletter signup with Resend audience management
SIMPLIFY
Embed a simple form that posts to Resend or Buttondown. No custom backend.
Admin dashboard for events, RSVPs, builders
DEFER to V3
You are the only admin. Use Supabase dashboard or a spreadsheet.
Full Resources page with categories and community submissions
DEFER to V2
A curated links section on the Community page is enough for launch.
Member login via Supabase Auth
DEFER to V3
No user accounts needed for V1. Nobody logs into a community site with 0 events.
Newsletter archive page
DEFER to V2
There is no newsletter archive yet. Ship the signup form. Archive comes later.
Dynamic event archive with recordings/slides
DEFER to V1.1
You have zero past events. Build this after the first meetup happens.
SEO optimization (OpenGraph, sitemap)
INCLUDE but last
Important but takes 30 minutes. Do it right before going public.
What Is Missing for the Ambassador Application
The original plan did not account for the Ambassador application as a primary driver. That changes the priority stack significantly.
	•	A visible Claude connection. The site needs to make it obvious this was built with Claude and that the community centers on Claude/Anthropic tools. A “Built with Claude Code” badge, a mention of Claude in the hero copy, and a meetup topic featuring Claude workflows all serve this purpose.
	•	Speed of execution proof. The Ambassador application benefits from showing you shipped something real in a short window. The site does not need every feature. It needs to exist, look polished, and be live.
	•	Community organizing proof. Evidence that you are actively recruiting, not just planning. A live event page with a real date, a working signup form, and social proof (even just a Discord link and a member count) are more convincing than a feature-rich empty platform.
	•	Content and copy. The original plan defined page structures but did not write actual copy. For a fast launch, the copy matters more than the features. A beautifully written static site beats a half-built dynamic one.
Blunt Assessment
BOTTOM LINE
The original plan is a solid 6-month community platform roadmap.
It is not a ship-this-weekend launch plan.

For the Ambassador application, you need a site that is:
• Live and public within days, not weeks
• Visually impressive (dark theme, modern, developer-grade)
• Clearly connected to Claude and the Anthropic ecosystem
• Functional enough to sign people up and promote an event
• Static enough to build fast, dynamic enough to feel real

Cut 70% of the backend. Invest that time in copy, design, and polish.

Part 2: Revised Lean V1 Strategy
The V1 Rule
If it does not directly serve one of these three purposes, it is not in V1:
	•	Makes the site look credible and polished to a visitor landing on it for the first time.
	•	Lets a visitor take a real action (RSVP, join Discord, subscribe to newsletter).
	•	Demonstrates to the Claude Ambassador reviewers that Patrick is building with Claude and organizing a real community.
V1 Scope: What Ships
Page / Feature
Type
What It Does
Homepage
Static + 1 form
Hero, mission, next event preview, community proof, newsletter signup, footer
First Meetup page
Static + external RSVP
Full event details, agenda, speaker previews, RSVP button linking to Lu.ma or Google Form
Community page
Static + links
Discord invite, newsletter signup, what to expect, community values, ecosystem partners
Newsletter signup
Embedded form
Resend or Buttondown form embedded in footer and Community page
About / Mission
Static
Who runs this, why it exists, connection to Claude/Anthropic, builder-first ethos
V1 Scope: What Does Not Ship
	•	Builder directory (no profiles, no search, no submissions)
	•	Resources page (a few links on the Community page is sufficient)
	•	Any database-backed features beyond newsletter signup
	•	Admin UI of any kind
	•	User authentication or accounts
	•	Event archive or past event pages
	•	Dynamic content management (events are hardcoded in the codebase for V1)
What Can Be a Fake Door
A fake door is a UI element that looks real but links to a simple action rather than a fully built feature. These are legitimate for V1 because they signal intent and gauge interest.
	•	Builder Directory link in nav: Goes to a page that says “Builder directory launching soon. Want to be featured? Join the Discord and introduce yourself.”
	•	Resources link in nav: Goes to Community page, which includes a short curated links section.
	•	Past Events section: Not visible until after the first event. Or a single line: “First event coming [date]. Stay tuned.”
	•	Speaker bios on event page: Can use placeholder descriptions if speakers are not yet confirmed. “Speaker TBA — topic: AI agents in production.”
Revised Roadmap
V1: Ship This Week
	•	5-page static Next.js site deployed on Vercel
	•	Dark theme, mobile-responsive, Vercel/Linear aesthetic
	•	Homepage with hero, event preview, community proof, newsletter form
	•	First Meetup page with full agenda and external RSVP link
	•	Community page with Discord link, ecosystem partners, values
	•	About page with mission statement and Claude connection
	•	Newsletter signup via embedded Resend/Buttondown form
	•	Plausible analytics installed
	•	“Built with Claude Code” badge in footer
	•	Domain live, SSL configured, OpenGraph meta tags set
V1.1: Fast Follow (Week After Launch)
	•	Refine copy based on first feedback
	•	Add speaker bios and photos once confirmed
	•	Add event location map embed
	•	Post-first-meetup: add recap, photos, slides
	•	SEO tuning (structured data, sitemap.xml, robots.txt)
V2: Community Expansion (Month 2–3)
	•	Builder directory with Supabase-backed profiles
	•	Event listing system pulling from Supabase
	•	Past events archive with recordings
	•	Resources page with curated and community-submitted links
	•	Newsletter archive

Part 3: Homepage UI Spec
This spec is written for Claude Code to build directly. Every section is defined with enough detail to implement without further clarification.
Design System
Property
Value
Background
#0A0A0F (near-black) with subtle gradient or grain texture
Text primary
#F5F5F5 (off-white)
Text secondary
#A0A0B0 (muted gray)
Accent
#E94560 (coral red) for CTAs, highlights, and hover states
Secondary accent
#0F3460 (deep blue) for cards, borders, and secondary elements
Font stack
Inter or Geist Sans for headings, system-ui for body (or Inter throughout)
Border radius
8px for cards, 6px for buttons, 999px for pill badges
Max content width
1200px centered, with generous horizontal padding (24–48px)
Section spacing
120–160px vertical padding between major sections
Motion
Subtle fade-in on scroll (intersection observer), hover lifts on cards
Section-by-Section Specification
Section 1: Navigation Bar
Goal: Persistent top nav with brand and page links. Sticky on scroll.
Left: Logo mark or wordmark “KeepingUpWithTheRobots” (can abbreviate to “KUWR” or use a robot icon).
Center/Right: Nav links: Events, Community, About. CTA button: “Join the Community” (coral accent, links to Discord or Community page).
Mobile: Hamburger menu. CTA button remains visible outside the menu.
Style: Semi-transparent dark background with backdrop blur. Thin bottom border (1px rgba white 10%).
Section 2: Hero
Goal: Immediately communicate what this is, who it is for, and what to do next. This is the most important section on the entire site.
Layout: Full-width, vertically centered text block. No hero image needed. Subtle animated gradient or particle background optional (keep it minimal — think Vercel’s dot grid, not a spinning globe).
Headline option A: “Western Mass AI Builders”
Headline option B: “Keeping Up With The Robots”
Headline option C: “Build With AI. Ship With Friends.”
Subheadline: “The first builder-focused AI community in Western Massachusetts. Meetups, demos, and real projects — not just AI hype.”
CTA row (two buttons): 
	•	Primary: “RSVP for the First Meetup” (coral accent, solid fill) → links to event page
	•	Secondary: “Join the Community” (outline/ghost button) → links to Discord or Community page
Below CTAs: Small trust line: “For developers, founders, and indie hackers building with Claude, AI agents, and automation tools.”
Section 3: Next Event Preview
Goal: Show that something real is happening. A live event with a date and a place makes the site feel active, not theoretical.
Layout: Single card on a subtle dark background. Card has a thin border (1px, rgba white 8%), slight background lift (#12121A), and rounded corners.
Card contents:
	•	Pill badge at top: “Upcoming Event” in coral
	•	Event title: “Western Mass AI Builders — Launch Meetup”
	•	Date, time, location (icon + text for each)
	•	Two-line description: “Lightning talks, live demos, and structured networking. For people who build with AI, not just talk about it.”
	•	CTA button: “See Details & RSVP” → links to /events/launch-meetup
If no event yet: Replace with “First meetup announced soon. Sign up to be the first to know.” + newsletter form.
Section 4: What This Community Is
Goal: Qualify the audience. Make builders feel seen. Make non-builders self-select out.
Layout: Section heading + 3–4 short feature cards in a grid (2x2 on desktop, stacked on mobile).
Section heading: “This is not an intro to ChatGPT.”
Section subheading: “This community is for people who are building things with AI.”
Card 1: “AI Agents & Workflows” — Building autonomous agents, Claude Code pipelines, and multi-step AI systems.
Card 2: “AI-Assisted Development” — Shipping code faster with Cursor, Copilot, Codex, and Claude Code.
Card 3: “Automation & Integration” — Connecting AI to real business workflows with n8n, Make, custom APIs.
Card 4: “AI Products & Startups” — Launching AI-powered SaaS, tools, and products as indie hackers or founders.
Section 5: Social Proof / Community Signal
Goal: Make the community feel alive even before it has a long track record. Show that real people and real institutions are involved.
Layout: Horizontal row of stats or logos. If stats are not yet real, use qualitative proof instead.
Option A — Stats (use when real): “40+ RSVPs for the first meetup” • “3 lightning talk speakers” • “Pioneer Valley builders”
Option B — Ecosystem (use at launch): Text line: “Connected to the UMass Amherst tech community, Valley Venture Mentors, and Pioneer Valley’s developer ecosystem.”
Option C — Builder quote: A single short quote from an early member or speaker. Even Patrick’s own framing works: “I started this because there was no place for AI builders to meet in Western Mass. Now there is.”
Section 6: Newsletter Signup
Goal: Capture emails from visitors who are not ready to RSVP or join Discord but want to stay connected.
Layout: Full-width section with centered text and a single input + button form.
Heading: “Stay in the loop.”
Subheading: “Get updates on meetups, builder spotlights, and what the Western Mass AI community is building.”
Form: Single email input + “Subscribe” button. Minimal. No name field for V1.
Privacy line: “No spam. Unsubscribe anytime.” in small muted text below.
Section 7: Footer
Goal: Navigation, legal, and the Claude connection.
Layout: Three-column footer on desktop (brand/tagline, nav links, social links). Single column stacked on mobile.
	•	Column 1: “KeepingUpWithTheRobots.com” + one-line tagline: “Western Mass AI Builders”
	•	Column 2: Page links (Home, Events, Community, About)
	•	Column 3: Social/community links (Discord, X/Twitter, LinkedIn, GitHub if applicable)
	•	Bottom bar: “Built with Claude Code” badge + “© 2026 KeepingUpWithTheRobots.com”
The “Built with Claude Code” badge is mandatory for V1. It directly supports the Ambassador application.
Mobile Layout Notes
	•	All sections stack vertically. No horizontal scrolling anywhere.
	•	Hero text left-aligned on mobile (centered looks awkward on small screens).
	•	Feature cards stack to single column below 768px.
	•	Event preview card goes full-width with no horizontal margin on mobile.
	•	Footer collapses to single column, stacked.
	•	Nav becomes hamburger at 768px breakpoint. CTA button stays visible.
	•	Font sizes: Hero headline 36px mobile / 56–64px desktop. Body 16px throughout.

Part 4: V1 Page-by-Page Spec
Page 1: Home (/)
Purpose: First impression, conversion, and proof of concept. 80% of Ambassador reviewers will only see this page.
Sections: Nav, Hero, Event Preview, What This Community Is, Social Proof, Newsletter, Footer.
Dynamic elements: Newsletter form submission only. Everything else is static.
Placeholder OK: Social proof stats can use qualitative text until real numbers exist.
Full spec is in Part 3 above. This is the most important page and should receive 50% of the total design and polish effort.
Page 2: First Meetup (/events/launch-meetup)
Purpose: Dedicated event page that functions as a landing page for the first meetup. Shareable on LinkedIn, in emails, and in outreach messages.
Required Sections
	•	Event header: Title, date, time, location. Large and prominent.
	•	Event description: 2–3 paragraphs explaining what this meetup is and who it is for. Use the copy from the original plan’s event description, refined.
	•	Agenda: The 90-minute agenda as a visual timeline or styled list. Each segment shows time, title, and one-line description.
	•	Speakers: Cards for each speaker (photo placeholder, name, one-line bio, talk title). Use “Speaker TBA” for unconfirmed slots. Update as speakers are confirmed.
	•	RSVP CTA: Large button linking to external RSVP (Lu.ma, Eventbrite, or Google Form). The button text should be “RSVP — It’s Free” or similar.
	•	Location section: Venue name, address, and embedded Google Map or static map image. If venue is not confirmed, use “Venue: Amherst, MA (exact location TBA)”.
	•	What to expect: Short section with 3–4 bullet points. “Lightning talks from local builders” / “Live demos of real AI projects” / “Structured networking (not awkward mingling)” / “Coffee provided.”
Static vs dynamic: 100% static for V1. This is a single hardcoded page. When you add more events, refactor to a dynamic route.
Placeholder OK: Speaker photos, exact venue, and exact date can all be TBA initially.
Page 3: Community (/community)
Purpose: Central hub for joining and participating. This page converts interested visitors into actual community members.
Required Sections
	•	Join the Discord: Prominent card with Discord logo, invite link, and one-line pitch. “This is where Western Mass AI builders hang out between meetups.”
	•	Newsletter signup: Embedded form (same component as homepage footer).
	•	What to expect: Short paragraph on community culture. “We share what we’re building, help each other debug, and stay current on AI tools. Builder-focused. No AI hype.”
	•	Community values: 3–4 values as styled text blocks. Builder-first / Show don’t tell / Local roots, global ambition / Inclusive expertise.
	•	Ecosystem partners: Text section listing UMass Amherst, Valley Venture Mentors, Pioneer Valley maker community. Links where available.
	•	Curated resources (optional for V1): A short list of 5–10 links to useful AI builder tools and communities. This replaces a full Resources page.
Static vs dynamic: Static except newsletter form.
Page 4: About (/about)
Purpose: Establish credibility, explain the origin story, and make the Claude/Anthropic connection explicit.
Required Sections
	•	Mission statement: 2–3 sentences on why this community exists. “Western Mass has world-class universities, a growing startup ecosystem, and a deep bench of technical talent. But until now, there was no dedicated space for AI builders. KeepingUpWithTheRobots changes that.”
	•	About Patrick: Short bio, photo (optional for V1), and framing as the organizer/founder. Mention relevant background.
	•	Built with Claude: Explicit section explaining that this community and website were built using Claude Code. This is not hidden in the footer — it is part of the story. “This entire site was designed, planned, and built using Claude Code as part of exploring what’s possible when you build with AI every day.”
	•	How to get involved: Three clear CTAs: join Discord, RSVP for the meetup, subscribe to the newsletter.
Static vs dynamic: 100% static.
Ambassador value: This page is where reviewers will look for proof that you are a Claude builder. Make the Claude connection unmistakable.
V1 Sitemap Summary
Route
Page
Dynamic?
Priority
/
Homepage
Newsletter form only
P0 — build first
/events/launch-meetup
First Meetup
Static
P0 — build second
/community
Community
Newsletter form only
P1 — build third
/about
About
Static
P1 — build fourth

Part 5: Claude Code Build Brief
Product Goals
	•	A publicly live, polished website at KeepingUpWithTheRobots.com that establishes the community’s existence.
	•	A working newsletter signup form that captures real email addresses.
	•	A first meetup event page that is shareable and drives RSVPs.
	•	Visible proof of building with Claude for the Ambassador application.
V1 Scope
	•	4 pages: Home, First Meetup, Community, About
	•	Dark-theme design with coral accent, Vercel/Linear aesthetic
	•	Newsletter signup form (Resend API or Buttondown embed)
	•	External RSVP link (Lu.ma or Google Form, not custom-built)
	•	Fully static content with no CMS or database for page content
	•	Mobile-responsive at all breakpoints
	•	Deployed to Vercel with custom domain
	•	Plausible analytics script tag
	•	“Built with Claude Code” in footer
Non-Goals for V1
	•	No user accounts or authentication
	•	No database-driven event listings
	•	No builder directory
	•	No admin interface
	•	No image upload or media management
	•	No past events archive
	•	No comment system or community forum
Brand Direction
Element
Specification
Primary BG
#0A0A0F (near-black)
Card BG
#12121A (slightly lifted dark)
Text primary
#F5F5F5
Text muted
#A0A0B0
Accent / CTA
#E94560 (coral)
Secondary
#0F3460 (deep blue, used for hover states and borders)
Font
Inter (import from Google Fonts or use next/font)
Border style
1px solid rgba(255,255,255,0.08) on cards
Border radius
8px cards, 6px buttons
Shadows
Minimal. Use border and background contrast instead.
Component List
Component
Used On
Notes
Navbar
All pages
Sticky, semi-transparent with blur. Logo left, links right, CTA button.
Hero
Home
Full-width, centered text, two CTAs, subtle background effect.
EventCard
Home, Events
Card component with pill badge, title, metadata, description, CTA.
FeatureGrid
Home
2x2 grid of topic cards with icon, title, description.
SocialProof
Home
Stats row or qualitative trust line.
NewsletterForm
Home, Community
Email input + submit button. Handles Resend API POST on submit.
SpeakerCard
Events
Photo (or placeholder), name, bio, talk title.
AgendaTimeline
Events
Styled list of time blocks with title and description.
CommunityValues
Community
3–4 styled value blocks.
Footer
All pages
3-column layout, links, social icons, Built with Claude badge.
PageHeader
Events, Community, About
Reusable section header with title and optional subtitle.
Technical Architecture
Framework & Deployment
	•	Next.js 14+ with App Router
	•	TypeScript throughout
	•	Tailwind CSS for all styling (no CSS modules, no styled-components)
	•	Vercel deployment with automatic preview deploys on PR
	•	Cloudflare for DNS (CNAME to Vercel)
Data Flow: Newsletter Signup
Input: User enters email in NewsletterForm component and clicks Subscribe.
Client: Form validates email format client-side. On submit, sends POST to /api/subscribe.
Server (Next.js Route Handler): /api/subscribe receives the email. Calls Resend API to add the contact to an audience (or sends a welcome email and stores in a simple Supabase subscribers table if Resend audiences are not set up).
External service: Resend API. Requires RESEND_API_KEY environment variable.
Output: Success: toast or inline message “You’re in! Check your inbox.” Error: “Something went wrong. Try again.”
Database (optional for V1): If using Supabase, a single subscribers table: id (uuid), email (text, unique), created_at (timestamp). If not using Supabase, Resend’s contact management is sufficient.
Data Flow: RSVP
Input: User clicks RSVP button on event page.
Client: Button is an external link (<a href> to Lu.ma or Google Form). No custom backend.
Server: None. RSVP is handled by the external service.
Output: User is redirected to Lu.ma or Google Form to complete RSVP.
Data Flow: All Other Content
Input: Developer (Patrick) edits .tsx files or content constants.
Server: Next.js static rendering at build time. All pages are server components with no client-side data fetching.
Database: None. Content is in the codebase.
Output: Static HTML served from Vercel’s edge CDN.
File and Folder Structure
SUGGESTED PROJECT STRUCTURE
keepingupwiththerobots/
├── app/
│   ├── layout.tsx           # Root layout with Navbar + Footer
│   ├── page.tsx             # Homepage
│   ├── events/
│   │   └── launch-meetup/
│   │       └── page.tsx     # First meetup page
│   ├── community/
│   │   └── page.tsx         # Community page
│   ├── about/
│   │   └── page.tsx         # About page
│   └── api/
│       └── subscribe/
│           └── route.ts     # Newsletter signup handler
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── EventCard.tsx
│   ├── FeatureGrid.tsx
│   ├── SocialProof.tsx
│   ├── NewsletterForm.tsx   # Client component ('use client')
│   ├── SpeakerCard.tsx
│   ├── AgendaTimeline.tsx
│   ├── CommunityValues.tsx
│   └── PageHeader.tsx
├── lib/
│   └── resend.ts            # Resend API client
├── content/
│   ├── event.ts             # First meetup data constant
│   └── site.ts              # Site-wide copy constants
├── public/
│   ├── og-image.png         # OpenGraph image
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
└── .env.local               # RESEND_API_KEY
MVP Implementation Sequence
Build in this exact order. Each step produces a deployable increment.
	•	Scaffold: npx create-next-app with TypeScript, Tailwind, App Router. Deploy empty shell to Vercel.
	•	Layout + Navbar + Footer: Root layout with dark theme, Navbar with links, Footer with badge. Deploy.
	•	Homepage: Hero section with headline, subheadline, two CTAs. Deploy.
	•	Homepage continued: Event preview card, feature grid, social proof section. Deploy.
	•	Newsletter form: NewsletterForm client component + /api/subscribe route handler + Resend integration. Deploy.
	•	First Meetup page: Full event page with agenda, speakers, RSVP button. Deploy.
	•	Community page: Discord link, values, ecosystem partners, newsletter form. Deploy.
	•	About page: Mission, about Patrick, built-with-Claude section. Deploy.
	•	Polish: Mobile responsiveness pass, hover states, transitions, spacing audit. Deploy.
	•	Launch prep: OG image, meta tags, favicon, Plausible script, final copy review. Deploy to production domain.
Launch Checklist
Category
Item
Status
Domain
KeepingUpWithTheRobots.com DNS pointing to Vercel
Required
Domain
SSL certificate active (automatic via Vercel)
Required
Analytics
Plausible script tag in root layout
Required
Email
Resend API key in Vercel environment variables
Required
Email
Newsletter signup form tested end-to-end
Required
SEO
Title and description meta tags on every page
Required
SEO
OpenGraph image (1200x630) uploaded to /public
Required
SEO
favicon.ico in /public
Required
Content
All placeholder copy replaced with real copy
Required
Content
First meetup date and venue confirmed (or TBA)
Nice-to-have
Content
Speaker bios and photos added
Nice-to-have
External
Discord server created with welcome channel
Required
External
RSVP link (Lu.ma or Google Form) created and tested
Required
Mobile
Tested on iPhone Safari and Android Chrome
Required
Brand
“Built with Claude Code” visible in footer
Required

Part 6: Implementation Architecture Decision
The Question: Static or Data-Backed?
Should V1 be mostly static with minimal dynamic features, or fully data-backed from day one?
RECOMMENDATION: MOSTLY STATIC
V1 should be 95% static with exactly ONE dynamic feature: newsletter signup.

Everything else — event content, speaker info, community copy, about page —
should be hardcoded in TypeScript content files within the codebase.
Justification
Why static wins for V1
	•	Speed of build. A static site can be built and deployed in a single session with Claude Code. Adding Supabase tables, row-level security, API routes for CRUD, and admin interfaces triples the development time.
	•	Speed of page load. Static pages served from Vercel’s edge are essentially instant. No database queries, no loading states, no error handling for failed fetches.
	•	Reliability. A static site cannot break at runtime. There are no database connection issues, no API rate limits, no auth edge cases. It works or it does not deploy.
	•	Content update path is fine for V1. Patrick is the only person updating content. Editing a TypeScript file and pushing to git is faster than building an admin UI. Content changes deploy in under 60 seconds via Vercel.
	•	Ambassador timeline. The goal is to have a polished live site as fast as possible. Every hour spent on database infrastructure is an hour not spent on design and copy polish.
The one dynamic exception
Newsletter signup requires a server-side API route because it sends data to Resend. This is a single POST endpoint, approximately 20 lines of code, and does not require Supabase. Resend’s API handles contact storage.
When to add Supabase
Add Supabase in V2 when you need the builder directory (user-submitted profiles with moderation), a dynamic event listing system (more than one event, manageable without code deploys), or RSVP tracking that you own (instead of relying on Lu.ma or Google Forms).

Part 7: Claude Ambassador Application Proof Strategy
What the Application Needs to Demonstrate
The Claude Ambassador program is looking for people who actively use Claude, build with Claude tools, and have a platform or community to share that work. Your site and community need to serve as tangible evidence across four dimensions.
Dimension 1: You Build With Claude
	•	The site itself is the proof. It was planned, designed, and coded using Claude.
	•	The “Built with Claude Code” badge in the footer is not decoration. It is a direct signal to reviewers.
	•	The About page should include an explicit section: “This site was built entirely with Claude Code.” Describe the workflow: plan generation, component architecture, copy iteration, and deployment.
	•	If you have a blog or social presence, a post titled “How I Built a Community Site in One Weekend With Claude Code” is high-value content for the application.
Dimension 2: You Are Organizing a Real Community
	•	A live website with a real domain is the strongest proof. It shows infrastructure, not just intention.
	•	A scheduled event with a date, venue, and RSVP mechanism shows follow-through.
	•	A Discord server with real members (even 10–20) shows community traction.
	•	Newsletter subscribers show ongoing audience building.
Dimension 3: You Execute Quickly
	•	Mention the timeline in the application: “I went from idea to live site in [X] days.”
	•	Show the iteration: V1 shipped, then refined, then expanded.
	•	Speed + polish is the signal. Shipping fast AND looking professional is the combination that stands out.
Dimension 4: You Have a Platform to Amplify Claude
	•	The community itself is the platform. It is a recurring venue where people discuss and demo Claude-powered projects.
	•	Meetup events focused on Claude workflows are direct amplification.
	•	A newsletter that features Claude-built projects extends reach beyond the room.
Visible Proof on the Live Site
These elements should be visible to anyone (including Ambassador reviewers) who visits KeepingUpWithTheRobots.com:
	•	“Built with Claude Code” badge in the footer of every page.
	•	About page section explaining the Claude-native build process.
	•	Meetup event that includes Claude Code or Claude-related topics in the agenda.
	•	Community framing that mentions Claude and Anthropic tools alongside other AI tools.
	•	High-quality design and copy that implicitly demonstrates Claude’s capability.
Screenshots for the Application
Capture and include these in the Ambassador application:
	•	Homepage above-the-fold: Shows the brand, mission, and CTAs.
	•	Event page with agenda: Shows a real scheduled meetup with speakers and topics.
	•	Community page with Discord and ecosystem partners: Shows the community infrastructure.
	•	About page with “Built with Claude Code” section: Directly connects to Claude.
	•	Mobile view of homepage: Shows the site is production-quality and responsive.
	•	Plausible analytics dashboard (if traffic exists): Shows real visitors to a real site.
	•	Discord server with members: Shows community traction.
Launch Milestones to Mention
Frame the project as a progression of concrete milestones:
	•	Conceived and planned the community strategy using Claude.
	•	Built the entire V1 website using Claude Code in [X] days.
	•	Deployed to production at KeepingUpWithTheRobots.com.
	•	Organized the first Western Mass AI Builders meetup with [X] RSVPs.
	•	Built a Discord community of [X] members.
	•	Grew a newsletter to [X] subscribers.
	•	Hosted [X] meetup(s) with [X] total attendees.
How to Frame It in the Application
SUGGESTED APPLICATION FRAMING
“I’m building the first AI builders community in Western Massachusetts.
I planned the strategy, designed the website, and wrote all the code using
Claude Code. The site is live at KeepingUpWithTheRobots.com.

Our community focuses on people who build with AI — agents, automation,
AI-assisted development, and AI startups. We host monthly meetups with
lightning talks and live demos.

I’m applying to be a Claude Ambassador because Claude is already central
to how I build, and this community is a place where I can help others
see what’s possible when you build with Claude every day.”

Final Summary: What to Do Now
In priority order:
	•	Open Claude Code and start building the V1 site using the build brief in Part 5.
	•	Set up the Discord server and Resend account in parallel.
	•	Deploy to Vercel as soon as the homepage is functional (even before other pages are done).
	•	Set a date for the first meetup and create the Lu.ma or Google Form RSVP link.
	•	Send 5–10 speaker outreach messages using the templates from the original plan.
	•	Connect the custom domain and go public.
	•	Capture screenshots and draft the Ambassador application narrative.
	•	Share the live site on LinkedIn and in local communities to start building traction.

THE ONLY METRIC THAT MATTERS RIGHT NOW
Is the site live? Is it polished? Can someone visit KeepingUpWithTheRobots.com
and immediately understand what it is, who it’s for, and how to get involved?

If yes, you have everything you need for the Ambassador application
and the foundation for a real community.

## Immediate Build Instruction for Claude Code

Start implementing this project now from scratch in this repository.

Follow the MVP implementation sequence in this spec.
Do not expand scope beyond V1 unless required to complete the core user experience.
Prioritize:
1. Homepage
2. Shared layout, navbar, footer
3. First meetup page
4. Community page
5. About page
6. Newsletter signup
7. Final polish and deployment readiness

No code until the data flow is explained in plain English for each implemented feature.
Prefer simple, explicit, production-ready code.
Use a modern, premium dark aesthetic with strong typography and clean spacing.