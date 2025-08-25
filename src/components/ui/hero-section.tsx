import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-basketball-court.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden court-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient mt-15 py-[40px]">
            WELCOME TO
          </h1>
          
          {/* Logo Card */}
          <div className="flex justify-center mb-8">
            <div className="bg-card/40 backdrop-blur-sm p-8 rounded-lg border border-border glow-effect">
              <img 
                src="/lovable-uploads/25eb5f6e-c840-4a7f-85d1-9469e0d942ea.png" 
                alt="USPBA Logo" 
                className="h-40 md:h-50 w-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-accent">
            Local Pro Teams
          </h3>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-foreground">Elite Local Pro Teams</p>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              Uniting Stronger Communities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border glow-effect">
            <h4 className="text-4xl font-black text-primary mb-2">256</h4>
            <p className="text-muted-foreground">Elite Teams</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border glow-effect">
            <h4 className="text-4xl font-black text-accent mb-2">4</h4>
            <p className="text-muted-foreground">National Regions</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border glow-effect">
            <h4 className="text-4xl font-black text-primary mb-2">3,480</h4>
            <p className="text-muted-foreground">Regional Sponsors</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform">
            Find Your Team
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/20 backdrop-blur-sm hover:bg-primary/20 hover:scale-105 transition-transform">
            Listen to Podcast
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;