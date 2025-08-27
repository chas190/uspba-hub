import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TrendingUp, DollarSign, Users, Building, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import playersImage from "@/assets/players-silhouette.jpg";

const RevenueSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('demo_bookings')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.companyName,
          message: formData.message
        });

      if (error) throw error;

      // Show success toast
      toast({
        title: "Your info has been received!",
        description: "Your local region rep will contact you shortly to provide more information.",
        duration: 5000,
      });

      // Reset form and close dialog
      setIsDialogOpen(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { icon: Building, label: "BwTown Market Segments", value: "15+", color: "text-primary" },
    { icon: TrendingUp, label: "Revenue Share Partners", value: "90+", color: "text-accent" },
    { icon: Users, label: "Player Influencers", value: "3,840", color: "text-primary" },
    { icon: DollarSign, label: "Multi-Revenue Partnerships", value: "650k", color: "text-accent" }
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
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 relative">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-16">
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    {feature.highlight}
                  </Badge>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="absolute bottom-4 right-4 glow-effect hover:scale-105 transition-transform"
                      >
                        <Calendar size={16} className="mr-2" />
                        Book a Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-primary">Book a Demo</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              placeholder="Enter your first name"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              placeholder="Enter your last name"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name (Optional)</Label>
                          <Input
                            id="companyName"
                            placeholder="Enter your company name"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message (Optional)</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your interest in the USPBA..."
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            rows={3}
                          />
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => setIsDialogOpen(false)}
                            className="flex-1"
                            disabled={isSubmitting}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="flex-1" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Request"}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
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