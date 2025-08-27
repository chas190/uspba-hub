import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-basketball-court.jpg";

const HeroSection = () => {
  const playAudio = () => {
    console.log('Button clicked - attempting to play audio...');
    
    // Create audio with more explicit settings
    const audio = new Audio();
    audio.src = '/audio/uspbawelcome.wav';
    audio.preload = 'auto';
    
    // Add event listeners for debugging
    audio.addEventListener('loadstart', () => console.log('Audio loading started'));
    audio.addEventListener('canplay', () => console.log('Audio can play'));
    audio.addEventListener('loadeddata', () => console.log('Audio data loaded'));
    audio.addEventListener('error', (e) => console.error('Audio error:', e));
    
    // Try to play with better error handling
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Audio played successfully!');
        })
        .catch((error) => {
          console.error('Audio play failed:', error);
          // More user-friendly message
          alert('Audio playback failed. This may be due to browser restrictions. Try clicking the button again or refresh the page.');
        });
    }
  };
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
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient pt-20">
            WELCOME TO
          </h1>
          
          {/* Logo Card */}
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border glow-effect max-w-xs mx-auto">
            <img 
              src="/lovable-uploads/25eb5f6e-c840-4a7f-85d1-9469e0d942ea.png" 
              alt="Local Pro Teams Logo" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="space-y-6 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-accent">
            Elite Local Pro Teams
          </h3>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-foreground">Fuel Dreams & Ignite Passions</p>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              To Unite Stronger Communities
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
            <h4 className="text-4xl font-black text-primary mb-2">3,840</h4>
            <p className="text-muted-foreground">Regional Sponsors</p>
          </div>
        </div>

        {/* Construction Notice */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border glow-effect">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
              The 2026 USPBA Season Website is Under Construction
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-lg text-muted-foreground">Listen to Audio Overview</p>
              <button 
                onClick={playAudio}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
              >
                🎧 Hear It
              </button>
            </div>
          </div>
        </div>

        {/* USPBA Card */}
        <div className="w-full mx-auto mb-8">
          <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-lg border border-border glow-effect text-center overflow-hidden h-72 md:h-[500px] flex items-end justify-center pb-16">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
              style={{
                backgroundImage: `url(/lovable-uploads/079b6635-d879-4b25-9c9f-e383a805cfb7.png)`
              }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Content */}
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">USPBA</div>
              <p className="text-xl text-white/90 font-medium drop-shadow-lg">United States Pro Basketball Association</p>
            </div>
          </div>
        </div>

        {/* 4 US Regions Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          4 US Regions
        </h2>

        {/* Regional Map */}
        <div className="mb-8">
          <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border glow-effect">
            <img 
              src="/lovable-uploads/9a3a4802-35cc-4bdf-8f55-eaef349c999f.png" 
              alt="US Regional Map for Elite Pro Teams" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Choose Your Region Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center mt-8">
            Choose Your Region
          </h3>
          
          {/* Regional Direction Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Button variant="outline" className="bg-background/20 backdrop-blur-sm hover:bg-primary/20 border-orange-500 shadow-[0_0_10px_hsl(var(--orange))] hover:shadow-[0_0_15px_hsl(var(--orange))]">
              North
            </Button>
            <Button variant="outline" className="bg-background/20 backdrop-blur-sm hover:bg-primary/20 border-orange-500 shadow-[0_0_10px_hsl(var(--orange))] hover:shadow-[0_0_15px_hsl(var(--orange))]">
              South
            </Button>
            <Button variant="outline" className="bg-background/20 backdrop-blur-sm hover:bg-primary/20 border-orange-500 shadow-[0_0_10px_hsl(var(--orange))] hover:shadow-[0_0_15px_hsl(var(--orange))]">
              East
            </Button>
            <Button variant="outline" className="bg-background/20 backdrop-blur-sm hover:bg-primary/20 border-orange-500 shadow-[0_0_10px_hsl(var(--orange))] hover:shadow-[0_0_15px_hsl(var(--orange))]">
              West
            </Button>
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