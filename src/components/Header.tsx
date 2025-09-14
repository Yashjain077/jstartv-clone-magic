import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
          <Play className="w-5 h-5 text-white fill-white" />
        </div>
        <span className="text-xl font-bold text-foreground">JStar TV</span>
      </div>
      
      <Button 
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 transition-all duration-300 hover:shadow-glow"
        style={{
          background: 'var(--gradient-primary)',
        }}
      >
        Join Telegram
      </Button>
    </header>
  );
};