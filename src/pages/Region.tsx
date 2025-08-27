import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const Region = () => {
  const { regionName } = useParams<{ regionName: string }>();

  const { data: states, isLoading } = useQuery({
    queryKey: ['states', regionName],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('states')
        .select(`
          id,
          name,
          abbreviation,
          regions!inner(name)
        `)
        .eq('regions.name', regionName?.charAt(0).toUpperCase() + regionName?.slice(1))
        .order('name');
      
      if (error) throw error;
      return data;
    },
    enabled: !!regionName
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading states...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            {regionName?.charAt(0).toUpperCase() + regionName?.slice(1)} Region
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-8">
            Choose your preferred state as your home team location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {states?.map((state) => (
            <Link 
              key={state.id} 
              to={`/region/${regionName}/state/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{state.name}</CardTitle>
                  <p className="text-muted-foreground text-lg font-semibold">{state.abbreviation}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore elite teams in {state.name}
                  </p>
                  <Button variant="outline" className="w-full">
                    Select {state.name}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {states?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No states found for this region.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Region;