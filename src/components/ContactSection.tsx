import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        toast({ title: "Error", description: t('contact.errorFields'), variant: "destructive" });
        setIsSubmitting(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({ title: t('contact.successTitle'), description: t('contact.successDesc') });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({ title: t('contact.errorTitle'), description: t('contact.errorDesc'), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t('contact.phone'),
      details: "+373 79 33 11 04",
      name: "Mihail Mihail",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: t('contact.emailLabel'),
      details: "mihail.mihai2001@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t('contact.location'),
      details: "Chisinau, Moldova",
    },
  ];

  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">{t('contact.badge')}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('contact.title')}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    {t('contact.name')} <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name" name="name" value={formData.name} onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className="bg-muted border-border/50" required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    {t('contact.email')} <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-muted border-border/50" required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">{t('contact.subject')}</label>
                <Input
                  id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  placeholder={t('contact.subjectPlaceholder')}
                  className="bg-muted border-border/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  {t('contact.message')} <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="message" name="message" value={formData.message} onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  className="bg-muted border-border/50 min-h-[150px]" required
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/80" disabled={isSubmitting}>
                {isSubmitting ? t('contact.sending') : t('contact.send')}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    {item.name && <p className="text-white font-medium mb-1">{t('contact.nameLabel')}: {item.name}</p>}
                    <p className="text-white">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
