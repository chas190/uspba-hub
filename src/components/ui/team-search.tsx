import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Users, Star } from "lucide-react";

const TeamSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock team data for demonstration
  const teams = [
    { id: 1, name: "Phoenix Fire", city: "Phoenix", region: "West", division: "Southwest", sponsors: 24, rating: 4.8 },
    { id: 2, name: "Miami Thunder", city: "Miami", region: "South", division: "Southeast", sponsors: 31, rating: 4.9 },
    { id: 3, name: "Chicago Storm", city: "Chicago", region: "Central", division: "Midwest", sponsors: 28, rating: 4.7 },
    { id: 4, name: "New York Legends", city: "New York", region: "East", division: "Northeast", sponsors: 35, rating: 4.9 },
    { id: 5, name: "Los Angeles Kings", city: "Los Angeles", region: "West", division: "Pacific", sponsors: 42, rating: 5.0 },
    { id: 6, name: "Dallas Eagles", city: "Dallas", region: "South", division: "Southwest", sponsors: 26, rating: 4.6 },
  ];

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="teams" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-6 text-gradient">
            ELITE PRO TEAMS
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Find your local professional basketball team from our network of 256 elite teams
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Search by team name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-card/50 backdrop-blur-sm border-border/50"
            />
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <Card key={team.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 glow-effect hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{team.name}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2" />
                  <span>{team.city}, {team.region} Region</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Division:</span>
                    <span className="font-medium text-accent">{team.division}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sponsors:</span>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1 text-primary" />
                      <span className="font-medium">{team.sponsors}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Rating:</span>
                    <div className="flex items-center">
                      <Star size={16} className="mr-1 text-accent fill-current" />
                      <span className="font-medium">{team.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 glow-effect" variant="default">
                    Join as Sponsor
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No teams found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSearch;