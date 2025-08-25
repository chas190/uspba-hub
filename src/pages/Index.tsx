import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import TeamSearch from "@/components/ui/team-search";
import PodcastSection from "@/components/ui/podcast-section";
import RevenueSection from "@/components/ui/revenue-section";
import NewsletterSection from "@/components/ui/newsletter-section";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="h-10 bg-black" />
      <Card className="h-15 bg-black rounded-none border-none" />
      <Navbar />
      <HeroSection />
      <TeamSearch />
      <PodcastSection />
      <RevenueSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
