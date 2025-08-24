import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Building } from "lucide-react";
import playersImage from "@/assets/players-silhouette.jpg";

const RevenueSection = () => {
  const stats = [
    { icon: Building, label: "BwTown Market Segments", value: "15+", color: "text-primary" },
    { icon: TrendingUp, label: "Revenue Share Partners", value: "90+", color: "text-accent" },
    { icon: Users, label: "Player Influencers", value: "3,840", color: "text-primary" },
    { icon: DollarSign, label: "Multi-Revenue Partnerships", value: "∞", color: "text-accent" }
  ];

  const features = [
    {
      title: "EVERY FAN A $PONSOR",
      description: "Transform everyday fans into recurring team sponsors through our innovative USPBA Player Cards system",
      highlight: "Player Cards"
    },
    {
      title: "EVERY PLAYER AN INFLUENCER",
      description: "Players build personal brands while sharing revenue with teams and leagues",
      highlight: "Revenue Sharing"
    },
    {
      title: "EVERY BWTOWN SEGMENT",
      description: "A multi-revenue partnership connecting local businesses with professional basketball",
      highlight: "Local Partnership"
    }
  ];

  return (
    <section id="revenue" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-gradient">
            MULTI-REVENUE ENGINE
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every BwTown segment becomes a multi-revenue partnership. Local towns build team revenue engines 
            that benefit players, teams, and communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 glow-effect text-center">
                <CardContent className="pt-6">
                  <IconComponent className={`mx-auto mb-4 ${stat.color}`} size={48} />
                  <h3 className="text-3xl font-black text-primary mb-2">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    {feature.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div 
              className="aspect-square rounded-lg bg-cover bg-center bg-no-repeat opacity-80 glow-effect"
              style={{ backgroundImage: `url(${playersImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Players, Teams & Leagues Share Revenue
              </h3>
              <p className="text-muted-foreground">
                Revolutionary approach to professional basketball economics
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 mt-16 glow-effect">
          <CardContent className="text-center py-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Build Your Revenue Engine?
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Join the USPBA network and start earning through our multi-revenue partnership model
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="text-lg py-2 px-6 bg-primary/10 text-primary border-primary/30">
                For Teams
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-6 bg-accent/10 text-accent border-accent/30">
                For Sponsors
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-6 bg-primary/10 text-primary border-primary/30">
                For Players
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RevenueSection;