
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EmailSetup = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container-custom">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Website
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Email Configuration</h1>
          <p className="text-muted-foreground mt-2">
            Contact forms are working with your existing setup
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Forms Active</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your contact forms are already configured and working. 
              No additional email service setup is needed at this time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailSetup;
