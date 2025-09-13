import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Thermometer, 
  Droplets, 
  Wind,
  Eye,
  Gauge,
  MapPin,
  RefreshCw,
  Sprout
} from "lucide-react";

export const WeatherScreen = () => {
  const weeklyForecast = [
    { day: "आज", temp: "28°", condition: "sunny", rain: "0%" },
    { day: "कल", temp: "31°", condition: "sunny", rain: "5%" },
    { day: "परसों", temp: "26°", condition: "rainy", rain: "80%" },
    { day: "शुक्र", temp: "24°", condition: "cloudy", rain: "40%" },
    { day: "शनि", temp: "29°", condition: "sunny", rain: "10%" },
    { day: "रवि", temp: "32°", condition: "sunny", rain: "0%" },
    { day: "सोम", temp: "27°", condition: "cloudy", rain: "25%" },
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-8 w-8 text-warning" />;
      case "cloudy":
        return <Cloud className="h-8 w-8 text-muted-foreground" />;
      case "rainy":
        return <CloudRain className="h-8 w-8 text-primary" />;
      default:
        return <Sun className="h-8 w-8 text-warning" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">मौसम पूर्वानुमान</h1>
            <p className="text-sm text-muted-foreground">अहमदाबाद, गुजरात</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <RefreshCw className="h-5 w-5" />
        </Button>
      </div>

      {/* Current Weather */}
      <Card className="p-6 bg-gradient-sunshine/10 border-warning/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sun className="h-12 w-12 text-warning" />
              <div>
                <div className="text-4xl font-bold text-foreground">28°C</div>
                <div className="text-lg text-muted-foreground">धूप</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              महसूस हो रहा है 31°C जैसे
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-1">भरोसा</div>
            <div className="text-2xl font-bold text-success">95%</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-warning" />
            <div>
              <div className="text-sm text-muted-foreground">अधिकतम</div>
              <div className="font-semibold text-foreground">32°C</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">न्यूनतम</div>
              <div className="font-semibold text-foreground">22°C</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Weather Details */}
      <Card className="p-4">
        <h3 className="font-semibold text-foreground mb-4">विस्तृत जानकारी</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <Droplets className="h-6 w-6 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">नमी</div>
              <div className="font-semibold text-foreground">65%</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <Wind className="h-6 w-6 text-secondary" />
            <div>
              <div className="text-sm text-muted-foreground">हवा की गति</div>
              <div className="font-semibold text-foreground">12 km/h</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <Eye className="h-6 w-6 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">दृश्यता</div>
              <div className="font-semibold text-foreground">10 km</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <Gauge className="h-6 w-6 text-accent" />
            <div>
              <div className="text-sm text-muted-foreground">दबाव</div>
              <div className="font-semibold text-foreground">1013 mb</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Weekly Forecast */}
      <Card className="p-4">
        <h3 className="font-semibold text-foreground mb-4">7 दिन का पूर्वानुमान</h3>
        <div className="space-y-3">
          {weeklyForecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors">
              <div className="flex items-center gap-3">
                {getWeatherIcon(day.condition)}
                <div>
                  <div className="font-medium text-foreground">{day.day}</div>
                  <div className="text-sm text-muted-foreground">बारिश: {day.rain}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-foreground">{day.temp}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Farming Advice */}
      <Card className="p-4 bg-success/5 border-success/20">
        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <Sprout className="h-5 w-5 text-success" />
          खेती की सलाह
        </h3>
        <p className="text-sm text-muted-foreground">
          मौसम साफ है और तापमान अच्छा है। यह समय सिंचाई के लिए उपयुक्त है। 
          अगले दो दिन में बारिश की संभावना है, इसलिए खाद डालने का अच्छा समय है।
        </p>
      </Card>
    </div>
  );
};