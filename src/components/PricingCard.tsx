import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  buttonText?: string;
  onSelect: () => void;
}

const PricingCard = ({
  title,
  description,
  price,
  originalPrice,
  features,
  highlighted = false,
  badge,
  buttonText = "Get Started",
  onSelect
}: PricingCardProps) => {
  return (
    <Card className={`relative transition-all duration-300 hover:scale-105 ${
      highlighted 
        ? 'border-primary shadow-xl bg-gradient-to-b from-primary/5 to-transparent' 
        : 'hover:shadow-lg'
    }`}>
      {badge && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
          {badge}
        </Badge>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        
        <div className="py-4">
          <div className="flex items-center justify-center gap-2">
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
            )}
            <span className="text-4xl font-bold text-primary">{price}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button 
          className={`w-full ${highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}
          onClick={onSelect}
        >
          {highlighted && <Star className="h-4 w-4 mr-2" />}
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
