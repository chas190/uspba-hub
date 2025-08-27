import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const State = () => {
  const { regionName, stateName } = useParams<{ regionName: string; stateName: string }>();

  const { data: counties, isLoading } = useQuery({
    queryKey: ['counties', stateName],
    queryFn: async () => {
      const formattedStateName = stateName?.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');

      const { data, error } = await supabase
        .from('counties')
        .select(`
          id,
          name,
          funding_amount,
          states!inner(name)
        `)
        .eq('states.name', formattedStateName)
        .order('name');
      
      if (error) throw error;
      return data;
    },
    enabled: !!stateName
  });

  const formattedStateName = stateName?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading counties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to={`/region/${regionName}`}>
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {regionName?.charAt(0).toUpperCase() + regionName?.slice(1)} Region
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            {formattedStateName}
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-8">
            Enter your top preferred home team regional marketplace
          </p>
          <p className="text-lg text-center text-muted-foreground mb-8">
            Choose from the top counties in {formattedStateName} to call home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {counties?.map((county) => (
            <Link 
              key={county.id} 
              to={`/region/${regionName}/state/${stateName}/county/${county.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{county.name} County</CardTitle>
                  {county.funding_amount && (
                    <p className="text-sm text-muted-foreground">
                      Funding: ${county.funding_amount?.toLocaleString()}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover elite teams in {county.name} County
                  </p>
                  <Button variant="outline" className="w-full">
                    Call {county.name} Home
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {counties?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No counties found for {formattedStateName}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default State;