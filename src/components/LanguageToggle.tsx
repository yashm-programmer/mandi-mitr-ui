import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState("हिंदी");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "हिंदी" ? "English" : "हिंदी");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language}</span>
    </Button>
  );
};