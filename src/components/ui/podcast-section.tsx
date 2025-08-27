import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Volume2, Download } from "lucide-react";

const PodcastSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const episodes = [
    {
      id: 1,
      title: "USPBA Elite Championship Preview",
      description: "Breaking down the top contenders for this season's championship across all 4 regions",
      duration: "45:23",
      date: "Dec 15, 2024",
      comingSoon: false
    },
    {
      id: 2,
      title: "Revenue Share Success Stories",
      description: "How BwTown partnerships are transforming local communities and creating sustainable revenue",
      duration: "32:18",
      date: "Dec 12, 2024",
      comingSoon: false
    },
    {
      id: 3,
      title: "Player Spotlight: Rising Stars",
      description: "Featuring upcoming talent from regional divisions and their journey to professional basketball",
      duration: "28:45",
      date: "Dec 10, 2024",
      comingSoon: false
    },
    {
      id: 4,
      title: "Community Impact Stories",
      description: "How USPBA teams are making a difference in their local communities through basketball and outreach programs",
      duration: "36:12",
      date: "Dec 8, 2024",
      comingSoon: true
    },
    {
      id: 5,
      title: "Regional Championship Highlights",
      description: "Recap of the most exciting moments from regional championships and playoff matches",
      duration: "41:15",
      date: "Dec 5, 2024",
      comingSoon: true
    },
    {
      id: 6,
      title: "Future of Professional Basketball",
      description: "Discussing the evolution of professional basketball and USPBA's role in shaping the future",
      duration: "38:27",
      date: "Dec 3, 2024",
      comingSoon: true
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Audio playback error:', error);
      alert('Audio playback failed. Please try again.');
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const newTime = percentage * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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

        {/* Audio Player - Direct Link Approach */}
        <div className="bg-muted/20 p-4 rounded-lg space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">USPBA Welcome Audio</p>
            
            {/* Test if external URL works */}
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Option 1: Direct Audio Player</p>
              <audio
                controls
                className="w-full"
                preload="metadata"
                onError={(e) => console.error('Audio error:', e)}
                onLoadedMetadata={(e) => {
                  const target = e.target as HTMLAudioElement;
                  console.log('Audio loaded! Duration:', target.duration);
                  setDuration(target.duration);
                }}
              >
                <source src="https://teams1.uspba.pro/assets/audio/uspbawelcome.wav" type="audio/wav" />
                <source src="https://teams1.uspba.pro/assets/audio/uspbawelcome.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              
              <p className="text-xs text-muted-foreground">Option 2: Direct Download Link</p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://teams1.uspba.pro/assets/audio/uspbawelcome.wav', '_blank')}
                >
                  🎧 Listen to WAV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://teams1.uspba.pro/assets/audio/uspbawelcome.mp3', '_blank')}
                >
                  🎧 Listen to MP3
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Episode Player */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 glow-effect mb-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Now Playing</CardTitle>
            <h3 className="text-xl font-semibold text-foreground">USPBA Welcome Audio Overview</h3>
            <p className="text-muted-foreground">Introduction to the United States Pro Basketball Association</p>
          </CardHeader>
          <CardContent>
            {/* Audio Player */}
            <div className="space-y-4">
              {/* Progress Bar */}
              <div 
                className="w-full bg-muted rounded-full h-2 cursor-pointer"
                onClick={handleSeek}
              >
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              
              {/* Time Display */}
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
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
          {episodes.map((episode, index) => (
            <Card 
              key={episode.id} 
              className={`bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
                index >= 4 ? 'hidden lg:block' : ''
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">{episode.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{episode.date} • {episode.duration}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{episode.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full glow-effect" 
                  disabled={episode.comingSoon}
                >
                  <Play size={16} className="mr-2" />
                  {episode.comingSoon ? "Coming Soon" : "Listen Now"}
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