import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle, TrendingUp, Users, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const interestOptions = [
    { id: "teams", label: "Team Updates", icon: Users },
    { id: "players", label: "Player News", icon: Trophy },
    { id: "revenue", label: "Revenue Opportunities", icon: TrendingUp },
    { id: "podcast", label: "Podcast Episodes", icon: Mail },
  ];

  const toggleInterest = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Simulate newsletter signup
    setIsSubmitted(true);
    toast({
      title: "Welcome to USPBA!",
      description: "You've successfully joined our newsletter. Check your email for confirmation.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/30 glow-effect text-center">
            <CardContent className="pt-12 pb-12">
              <CheckCircle className="mx-auto mb-6 text-primary" size={64} />
              <h3 className="text-3xl font-bold text-primary mb-4">Welcome to USPBA!</h3>
              <p className="text-xl text-muted-foreground mb-6">
                You're now part of the elite basketball community. Check your email for confirmation.
              </p>
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 text-lg py-2 px-6">
                Newsletter Subscriber
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 court-pattern">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-6 text-gradient">
            JOIN THE ELITE
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get exclusive access to team updates, revenue opportunities, and championship insights
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 glow-effect">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary text-center flex items-center justify-center">
              <Mail className="mr-3" size={28} />
              USPBA Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-6 bg-background/50 backdrop-blur-sm border-border/50"
                  required
                />
              </div>

              {/* Interest Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  What are you interested in? (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((option) => {
                    const IconComponent = option.icon;
                    const isSelected = interests.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleInterest(option.id)}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          isSelected
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border/50 bg-background/20 text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center">
                          <IconComponent size={20} className="mr-3" />
                          <span className="font-medium">{option.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg py-6 glow-effect hover:scale-105 transition-transform"
              >
                Join USPBA Newsletter
              </Button>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/30">
                <div className="text-center">
                  <Trophy className="mx-auto mb-2 text-accent" size={24} />
                  <p className="text-sm text-muted-foreground">Exclusive Team Access</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm text-muted-foreground">Revenue Opportunities</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-2 text-accent" size={24} />
                  <p className="text-sm text-muted-foreground">Community Updates</p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;