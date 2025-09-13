import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { WeatherScreen } from "@/components/screens/WeatherScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} />;
      case "weather":
        return <WeatherScreen />;
      case "crops":
        return <div className="p-4 text-center text-muted-foreground">फसल सलाह - जल्द आ रहा है</div>;
      case "disease":
        return <div className="p-4 text-center text-muted-foreground">रोग पहचान - जल्द आ रहा है</div>;
      case "market":
        return <div className="p-4 text-center text-muted-foreground">मंडी भाव - जल्द आ रहा है</div>;
      case "schemes":
        return <div className="p-4 text-center text-muted-foreground">सरकारी योजना - जल्द आ रहा है</div>;
      case "chat":
        return <div className="p-4 text-center text-muted-foreground">चैट सहायक - जल्द आ रहा है</div>;
      case "offline":
        return <div className="p-4 text-center text-muted-foreground">ऑफलाइन मोड - जल्द आ रहा है</div>;
      default:
        return <HomeScreen onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-4">
        {renderScreen()}
      </main>
    </div>
  );
};

export default Index;
