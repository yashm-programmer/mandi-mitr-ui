import { Button } from "@/components/ui/button";
import { 
  Home, 
  Cloud, 
  Sprout, 
  Camera, 
  TrendingUp, 
  FileText, 
  MessageCircle,
  Wifi 
} from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "होम", labelEn: "Home" },
    { id: "weather", icon: Cloud, label: "मौसम", labelEn: "Weather" },
    { id: "crops", icon: Sprout, label: "फसल", labelEn: "Crops" },
    { id: "disease", icon: Camera, label: "रोग", labelEn: "Disease" },
    { id: "market", icon: TrendingUp, label: "मंडी", labelEn: "Market" },
    { id: "schemes", icon: FileText, label: "योजना", labelEn: "Schemes" },
    { id: "chat", icon: MessageCircle, label: "सहायक", labelEn: "Assistant" },
    { id: "offline", icon: Wifi, label: "ऑफलाइन", labelEn: "Offline" },
  ];

  return (
    <div className="bg-gradient-earth border-b border-border/50 shadow-earth">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-xl font-bold text-foreground">किसान मित्र</h1>
          <p className="text-sm text-muted-foreground">आपका खेती सहायक</p>
        </div>
        <LanguageToggle />
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto pb-2 px-2 gap-1">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange(item.id)}
            className={`
              flex-shrink-0 flex items-center gap-2 px-3 py-2 text-xs font-medium
              ${activeTab === item.id 
                ? "bg-gradient-farming text-primary-foreground shadow-natural" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }
            `}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};