
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import EmailService from "@/components/EmailService";
import { Link } from "react-router-dom";

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
            Setup your email service to receive messages from your contact form
          </p>
        </div>
        
        <EmailService />
      </div>
    </div>
  );
};

export default EmailSetup;
