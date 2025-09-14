import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ChannelCardProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  provider: string;
}

export const ChannelCard = ({ id, name, logo, category, provider }: ChannelCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChannelClick = () => {
    // Placeholder for channel viewing functionality
    console.log(`Opening channel: ${name}`);
  };

  return (
    <Card 
      className="relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-card border-border overflow-hidden"
      style={{
        background: 'var(--gradient-card)',
        boxShadow: 'var(--shadow-card)',
      }}
      onClick={handleChannelClick}
    >
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 z-10 p-1 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
      >
        <Heart 
          className={`w-4 h-4 transition-colors duration-200 ${
            isFavorite ? 'text-red-500 fill-red-500' : 'text-muted-foreground hover:text-red-500'
          }`} 
        />
      </Button>
      
      <div className="p-4">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 rounded-lg bg-background/50 p-2 flex items-center justify-center overflow-hidden">
            <img 
              src={logo} 
              alt={`${name} logo`}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>
          
          <div className="space-y-1">
            <h3 className="font-semibold text-sm text-card-foreground line-clamp-2">
              {name}
            </h3>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                {category}
              </span>
              <span className="text-xs text-muted-foreground">
                {provider}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};