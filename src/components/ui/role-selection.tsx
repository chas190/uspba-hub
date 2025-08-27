import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Users, UserCheck, Building, Handshake, Heart } from "lucide-react";

interface RoleSelectionProps {
  onRoleSelect: (role: string) => void;
}

const roleOptions = [
  {
    id: "team_owner",
    title: "Team Owner",
    description: "Lead and manage your own professional sports team",
    icon: Crown,
    color: "text-yellow-600"
  },
  {
    id: "coach",
    title: "Coach", 
    description: "Train and develop athletes to reach their potential",
    icon: UserCheck,
    color: "text-blue-600"
  },
  {
    id: "player",
    title: "Player",
    description: "Compete at the highest level in professional sports",
    icon: Users,
    color: "text-green-600"
  },
  {
    id: "sponsor",
    title: "Sponsor",
    description: "Support teams and gain valuable brand exposure",
    icon: Building,
    color: "text-purple-600"
  },
  {
    id: "affiliate_team",
    title: "Affiliate Team",
    description: "Partner with professional teams as a feeder organization",
    icon: Handshake,
    color: "text-orange-600"
  },
  {
    id: "team_fan",
    title: "Team Fan",
    description: "Support your favorite teams and connect with the community",
    icon: Heart,
    color: "text-red-600"
  }
];

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  return (
    <div className="space-y-6 py-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">Choose Your Role</h2>
        <p className="text-lg text-muted-foreground">
          Select the role that best describes your involvement with the team
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {roleOptions.map((role) => {
          const IconComponent = role.icon;
          return (
            <Card 
              key={role.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary p-2"
              onClick={() => onRoleSelect(role.id)}
            >
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-4">
                  <IconComponent className={`h-16 w-16 ${role.color}`} />
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 pb-4">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {role.description}
                </p>
                <Button variant="outline" className="w-full py-3">
                  Select This Role
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}