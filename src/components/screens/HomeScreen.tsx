import { WeatherCard } from "../WeatherCard";
import { QuickActionCard } from "../QuickActionCard";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Sprout, 
  TrendingUp, 
  FileText, 
  MessageCircle,
  Bell,
  MapPin
} from "lucide-react";
import farmingHero from "@/assets/farming-hero.jpg";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const quickActions = [
    {
      title: "फसल सलाह",
      description: "मिट्टी और मौसम के आधार पर सबसे अच्छी फसल जानें",
      icon: Sprout,
      variant: "success" as const,
      action: () => onNavigate("crops")
    },
    {
      title: "रोग पहचान",
      description: "पत्ती की तस्वीर लेकर रोग की जांच करें",
      icon: Camera,
      variant: "warning" as const,
      action: () => onNavigate("disease")
    },
    {
      title: "मंडी भाव",
      description: "आज के ताजा मंडी भाव देखें",
      icon: TrendingUp,
      variant: "accent" as const,
      action: () => onNavigate("market")
    },
    {
      title: "सरकारी योजना",
      description: "किसानों के लिए सरकारी योजनाओं की जानकारी",
      icon: FileText,
      variant: "default" as const,
      action: () => onNavigate("schemes")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Hero Section */}
      <div className="relative h-48 overflow-hidden rounded-b-2xl">
        <img 
          src={farmingHero} 
          alt="Farming fields" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">गुजरात, भारत</span>
          </div>
          <h2 className="text-xl font-bold">आपका खेती सहायक</h2>
          <p className="text-sm opacity-90">स्मार्ट खेती के लिए सभी जानकारी</p>
        </div>
        <Button
          variant="sunshine"
          size="sm"
          className="absolute top-4 right-4"
          onClick={() => {/* Add notification handler */}}
        >
          <Bell className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Weather Card */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            आज का मौसम
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onNavigate("weather")}
              className="text-primary hover:text-primary/80"
            >
              विस्तार →
            </Button>
          </h3>
          <WeatherCard />
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">तुरंत सेवा</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <QuickActionCard
                key={index}
                title={action.title}
                description={action.description}
                icon={action.icon}
                variant={action.variant}
                onClick={action.action}
              />
            ))}
          </div>
        </div>

        {/* Voice Assistant Prompt */}
        <div className="bg-gradient-sunshine/10 border border-warning/20 rounded-lg p-4 text-center">
          <MessageCircle className="h-8 w-8 text-warning mx-auto mb-2" />
          <h4 className="font-semibold text-foreground mb-1">आवाज़ सहायक</h4>
          <p className="text-sm text-muted-foreground mb-3">
            कुछ पूछना चाहते हैं? नीचे माइक बटन दबाएं
          </p>
          <Button 
            variant="farming" 
            size="sm"
            onClick={() => onNavigate("chat")}
          >
            चैट शुरू करें
          </Button>
        </div>

        {/* Tips Section */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">आज की सलाह</h4>
          <p className="text-sm text-muted-foreground">
            मौसम साफ है, खेत में पानी देने का अच्छा समय है। मिट्टी की नमी जांचें।
          </p>
        </div>
      </div>
    </div>
  );
};