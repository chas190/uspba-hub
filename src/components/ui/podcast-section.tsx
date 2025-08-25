import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Volume2, Download } from "lucide-react";

const PodcastSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalTime = 180; // 3 minutes for demo

  const episodes = [
    {
      id: 1,
      title: "USPBA Elite Championship Preview",
      description: "Breaking down the top contenders for this season's championship across all 4 regions",
      duration: "45:23",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Revenue Share Success Stories",
      description: "How BwTown partnerships are transforming local communities and creating sustainable revenue",
      duration: "32:18",
      date: "Dec 12, 2024"
    },
    {
      id: 3,
      title: "Player Spotlight: Rising Stars",
      description: "Featuring upcoming talent from regional divisions and their journey to professional basketball",
      duration: "28:45",
      date: "Dec 10, 2024"
    },
    {
      id: 4,
      title: "Community Impact Stories",
      description: "How USPBA teams are making a difference in their local communities through basketball and outreach programs",
      duration: "36:12",
      date: "Dec 8, 2024"
    }
  ];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="podcast" className="py-20 px-4 court-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-6 text-gradient">
            USPBA PODCASTS
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Listen to exclusive insights, player interviews, and championship coverage
          </p>
        </div>

        {/* Featured Episode Player */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 glow-effect mb-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Now Playing</CardTitle>
            <h3 className="text-xl font-semibold text-foreground">USPBA Elite Championship Preview</h3>
            <p className="text-muted-foreground">Breaking down the top contenders for this season's championship</p>
          </CardHeader>
          <CardContent>
            {/* Audio Player */}
            <div className="space-y-4">
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / totalTime) * 100}%` }}
                />
              </div>
              
              {/* Time Display */}
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</span>
                <span>{Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={togglePlayPause}
                  className="glow-effect hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Volume2 size={20} />
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Download size={20} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Episode List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <Card key={episode.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">{episode.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{episode.date} • {episode.duration}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{episode.description}</p>
                <Button variant="outline" className="w-full glow-effect">
                  <Play size={16} className="mr-2" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;