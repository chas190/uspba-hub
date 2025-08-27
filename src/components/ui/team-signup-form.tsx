import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Crown, Users, UserCheck, Building, Handshake, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface TeamSignupFormProps {
  selectedRole: string;
  countyName: string;
  stateName: string;
  regionName: string;
  onSuccess: () => void;
  onBack: () => void;
}

const roleIcons = {
  team_owner: Crown,
  coach: UserCheck,
  player: Users,
  sponsor: Building,
  affiliate_team: Handshake,
  team_fan: Heart
};

const roleLabels = {
  team_owner: "Team Owner",
  coach: "Coach",
  player: "Player", 
  sponsor: "Sponsor",
  affiliate_team: "Affiliate Team",
  team_fan: "Team Fan"
};

export function TeamSignupForm({ 
  selectedRole, 
  countyName, 
  stateName, 
  regionName, 
  onSuccess, 
  onBack 
}: TeamSignupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const IconComponent = roleIcons[selectedRole as keyof typeof roleIcons];
  const roleLabel = roleLabels[selectedRole as keyof typeof roleLabels];
  const showTeamName = selectedRole === "team_owner";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('team_signups')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          user_role: selectedRole,
          county_name: countyName,
          state_name: stateName,
          region_name: regionName,
          team_name: showTeamName ? formData.teamName || null : null,
          has_team_name: showTeamName && !!formData.teamName
        });

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Thank you for your interest. We'll be in touch soon with next steps."
      });

      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="p-0">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Role Selection
        </Button>
      </div>

      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-3">
            <IconComponent className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-xl">Complete Your Registration</CardTitle>
          <p className="text-muted-foreground">
            Role: <span className="font-semibold text-primary">{roleLabel}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            {countyName} County, {stateName} • {regionName} Region
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            {showTeamName && (
              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name (Optional)</Label>
                <Input
                  id="teamName"
                  type="text"
                  placeholder="Enter your team name if you have one"
                  value={formData.teamName}
                  onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                />
                <p className="text-xs text-muted-foreground">
                  Leave blank if you're still looking to start a team
                </p>
              </div>
            )}

            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              By registering, you agree to be contacted about team opportunities in your area.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}