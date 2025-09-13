import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind } from "lucide-react";

interface WeatherCardProps {
  location?: string;
  temperature?: number;
  condition?: "sunny" | "cloudy" | "rainy";
  humidity?: number;
  windSpeed?: number;
  confidence?: number;
}

export const WeatherCard = ({
  location = "आपका क्षेत्र",
  temperature = 28,
  condition = "sunny",
  humidity = 65,
  windSpeed = 12,
  confidence = 85
}: WeatherCardProps) => {
  const getWeatherIcon = () => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-12 w-12 text-warning" />;
      case "cloudy":
        return <Cloud className="h-12 w-12 text-muted-foreground" />;
      case "rainy":
        return <CloudRain className="h-12 w-12 text-primary" />;
      default:
        return <Sun className="h-12 w-12 text-warning" />;
    }
  };

  const getConditionText = () => {
    switch (condition) {
      case "sunny":
        return "धूप";
      case "cloudy":
        return "बादल";
      case "rainy":
        return "बारिश";
      default:
        return "धूप";
    }
  };

  return (
    <Card className="p-6 bg-gradient-earth border-border/50 shadow-natural">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{location}</h3>
          <p className="text-sm text-muted-foreground">आज का मौसम</p>
        </div>
        {getWeatherIcon()}
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-warning" />
          <span className="text-2xl font-bold text-foreground">{temperature}°</span>
          <span className="text-sm text-muted-foreground">C</span>
        </div>
        <div className="text-lg font-medium text-foreground">{getConditionText()}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Droplets className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">नमी: {humidity}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="h-4 w-4 text-secondary" />
          <span className="text-sm text-muted-foreground">हवा: {windSpeed} km/h</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground">भरोसा:</span>
          <span className="text-xs font-medium text-success">{confidence}%</span>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          विस्तार देखें
        </Button>
      </div>
    </Card>
  );
};