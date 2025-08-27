import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Trophy, Users } from "lucide-react";
import { RoleSelection } from "@/components/ui/role-selection";
import { TeamSignupForm } from "@/components/ui/team-signup-form";
import { useState } from "react";

const County = () => {
  const { regionName, stateName, countyName } = useParams<{ 
    regionName: string; 
    stateName: string; 
    countyName: string; 
  }>();

  const [selectedRole, setSelectedRole] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: teams, isLoading } = useQuery({
    queryKey: ['teams', countyName],
    queryFn: async () => {
      const formattedCountyName = countyName?.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');

      const { data, error } = await supabase
        .from('teams')
        .select(`
          id,
          name,
          description,
          logo_url,
          website_url,
          counties!inner(name)
        `)
        .eq('counties.name', formattedCountyName)
        .order('name');
      
      if (error) throw error;
      return data;
    },
    enabled: !!countyName
  });

  const formattedCountyName = countyName?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const formattedStateName = stateName?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading teams...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to={`/region/${regionName}/state/${stateName}`}>
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {formattedStateName}
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="mr-2 h-6 w-6 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold">
                {formattedCountyName} County
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              {formattedStateName} • {regionName?.charAt(0).toUpperCase() + regionName?.slice(1)} Region
            </p>
            <p className="text-xl text-primary font-semibold mt-4">
              Your Home Team Marketplace
            </p>
          </div>
        </div>

        {teams && teams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Card key={team.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <CardHeader className="text-center">
                  {team.logo_url && (
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img 
                        src={team.logo_url} 
                        alt={`${team.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardTitle className="text-xl font-bold">{team.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {team.description && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {team.description}
                    </p>
                  )}
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-xs text-muted-foreground">Elite Team</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-xs text-muted-foreground">Pro League</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="default" className="w-full">
                      Join Team Community
                    </Button>
                    {team.website_url && (
                      <Button variant="outline" className="w-full" asChild>
                        <a href={team.website_url} target="_blank" rel="noopener noreferrer">
                          Visit Team Website
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Trophy className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
              <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                Elite pro teams are being recruited for {formattedCountyName} County. 
                Be the first to know when teams become available in your area.
              </p>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="default" size="lg">
                    Get Notified and Sign Up
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  {!showForm ? (
                    <RoleSelection 
                      onRoleSelect={(role) => {
                        setSelectedRole(role);
                        setShowForm(true);
                      }}
                    />
                  ) : (
                    <TeamSignupForm
                      selectedRole={selectedRole}
                      countyName={formattedCountyName || ""}
                      stateName={formattedStateName || ""}
                      regionName={regionName?.charAt(0).toUpperCase() + regionName?.slice(1) || ""}
                      onSuccess={() => {
                        setDialogOpen(false);
                        setShowForm(false);
                        setSelectedRole("");
                      }}
                      onBack={() => setShowForm(false)}
                    />
                  )}
                </DialogContent>
              </Dialog>
              <p className="text-sm text-muted-foreground mt-3">
                Submit your interest in this home team market
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default County;