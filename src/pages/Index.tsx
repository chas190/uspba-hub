import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import TeamSearch from "@/components/ui/team-search";
import PodcastSection from "@/components/ui/podcast-section";
import RevenueSection from "@/components/ui/revenue-section";
import NewsletterSection from "@/components/ui/newsletter-section";

const Index = () => {
  return (
    <div className="min-h-screen">
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
