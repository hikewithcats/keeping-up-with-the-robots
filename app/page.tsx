import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { FeatureGrid } from "@/components/FeatureGrid";
import { SocialProof } from "@/components/SocialProof";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventCard />
      <FeatureGrid />
      <SocialProof />
      <NewsletterForm />
    </>
  );
}
