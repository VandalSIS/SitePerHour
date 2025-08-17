
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const EmailService = () => {
  const { toast } = useToast();
  const [emailService, setEmailService] = useState({
    service: "emailjs",
    emailJSInfo: {
      serviceId: "",
      templateId: "",
      publicKey: "",
    },
    smtpInfo: {
      host: "",
      port: "",
      username: "",
      password: "",
    },
    selected: "emailjs"
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleEmailJSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailService({
      ...emailService,
      emailJSInfo: {
        ...emailService.emailJSInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleSMTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailService({
      ...emailService,
      smtpInfo: {
        ...emailService.smtpInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleServiceSelect = (service: string) => {
    setEmailService({
      ...emailService,
      selected: service
    });
  };

  const handleSaveSettings = () => {
    setIsSaving(true);
    
    // Here you would normally save these settings to localStorage or send to a backend
    // For this example, we'll just simulate saving and show a success message
    setTimeout(() => {
      // Store in localStorage (for demonstration)
      localStorage.setItem('emailServiceConfig', JSON.stringify({
        service: emailService.selected,
        config: emailService.selected === 'emailjs' 
          ? emailService.emailJSInfo 
          : emailService.smtpInfo
      }));
      
      setIsSaving(false);
      toast({
        title: "Settings saved successfully",
        description: "Your email service configuration has been updated."
      });
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Email Service Configuration</CardTitle>
          <CardDescription>
            Set up your email service to receive messages from the contact form directly to your Gmail or other email accounts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant={emailService.selected === "emailjs" ? "default" : "outline"}
                  onClick={() => handleServiceSelect("emailjs")}
                >
                  EmailJS (Recommended)
                </Button>
                <Button 
                  variant={emailService.selected === "smtp" ? "default" : "outline"}
                  onClick={() => handleServiceSelect("smtp")}
                >
                  SMTP Server
                </Button>
              </div>
              
              <div className="text-muted-foreground text-sm">
                {emailService.selected === "emailjs" ? (
                  <p>EmailJS is a cloud-based service that allows you to easily send emails from your frontend code without a backend.</p>
                ) : (
                  <p>SMTP configuration will require additional backend setup and is more complex but gives you more control.</p>
                )}
              </div>
            </div>
            
            {emailService.selected === "emailjs" && (
              <div className="space-y-4 border border-border/50 rounded-lg p-4">
                <h3 className="font-medium">EmailJS Configuration</h3>
                <p className="text-muted-foreground text-sm">
                  Create an account at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">emailjs.com</a>, 
                  set up a service connected to your Gmail, create an email template, and enter your details below.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Service ID</label>
                    <Input
                      name="serviceId"
                      value={emailService.emailJSInfo.serviceId}
                      onChange={handleEmailJSChange}
                      placeholder="e.g., service_xxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Template ID</label>
                    <Input
                      name="templateId"
                      value={emailService.emailJSInfo.templateId}
                      onChange={handleEmailJSChange}
                      placeholder="e.g., template_xxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Public Key</label>
                    <Input
                      name="publicKey"
                      value={emailService.emailJSInfo.publicKey}
                      onChange={handleEmailJSChange}
                      placeholder="e.g., XXXXXXXXXXXXXXXX"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {emailService.selected === "smtp" && (
              <div className="space-y-4 border border-border/50 rounded-lg p-4">
                <h3 className="font-medium">SMTP Configuration</h3>
                <p className="text-muted-foreground text-sm">
                  To use Gmail's SMTP server, you'll need to enable "Less secure app access" in your Google account or create an app password.
                  <a href="https://support.google.com/accounts/answer/185833" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-1">
                    Learn more about app passwords
                  </a>
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">SMTP Host</label>
                    <Input
                      name="host"
                      value={emailService.smtpInfo.host}
                      onChange={handleSMTPChange}
                      placeholder="e.g., smtp.gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">SMTP Port</label>
                    <Input
                      name="port"
                      value={emailService.smtpInfo.port}
                      onChange={handleSMTPChange}
                      placeholder="e.g., 587"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <Input
                      name="username"
                      value={emailService.smtpInfo.username}
                      onChange={handleSMTPChange}
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <Input
                      name="password"
                      type="password"
                      value={emailService.smtpInfo.password}
                      onChange={handleSMTPChange}
                      placeholder="Your password or app password"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Settings"}
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>How to Connect to Your Gmail</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">Option 1: Using EmailJS (Recommended)</h3>
            <ol className="list-decimal list-inside space-y-2 mt-2 text-muted-foreground">
              <li>Sign up for a free account at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">emailjs.com</a></li>
              <li>Add a new email service and connect it to your Gmail account</li>
              <li>Create an email template with variables like: {'{{name}}'}, {'{{email}}'}, {'{{subject}}'}, {'{{message}}'}</li>
              <li>Copy your Service ID, Template ID, and Public Key</li>
              <li>Enter these details in the EmailJS Configuration section above and save</li>
              <li>Messages from the contact form will now be sent to your Gmail account</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium">Option 2: Using SMTP (Advanced)</h3>
            <ol className="list-decimal list-inside space-y-2 mt-2 text-muted-foreground">
              <li>For Gmail, you'll need to create an "App Password" if you have 2FA enabled</li>
              <li>Go to your Google Account → Security → App passwords</li>
              <li>Create a new app password for "Mail" and the device you're using</li>
              <li>Use the following SMTP settings:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>SMTP Host: smtp.gmail.com</li>
                  <li>SMTP Port: 587</li>
                  <li>Username: your.email@gmail.com</li>
                  <li>Password: your app password</li>
                </ul>
              </li>
              <li>Note: This option requires server-side code to handle the SMTP connection securely</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailService;
