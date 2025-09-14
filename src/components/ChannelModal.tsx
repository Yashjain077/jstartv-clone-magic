import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ChannelModalProps {
  isOpen: boolean;
  onClose: () => void;
  channel: {
    name: string;
    logo: string;
    streamUrl: string;
    category: string;
    provider: string;
  } | null;
}

export const ChannelModal = ({ isOpen, onClose, channel }: ChannelModalProps) => {
  const { toast } = useToast();

  if (!channel) return null;

  const copyUrl = () => {
    navigator.clipboard.writeText(channel.streamUrl);
    toast({
      title: "Copied!",
      description: "Stream URL copied to clipboard",
    });
  };

  const openStream = () => {
    window.open(channel.streamUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-card-foreground">{channel.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg bg-background/50 p-2 flex items-center justify-center overflow-hidden">
              <img 
                src={channel.logo} 
                alt={`${channel.name} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">{channel.name}</h3>
              <p className="text-sm text-muted-foreground">{channel.category}</p>
              <p className="text-xs text-muted-foreground">{channel.provider}</p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Stream URL:</label>
            <div className="flex items-center space-x-2">
              <code className="flex-1 p-2 bg-secondary rounded text-xs text-secondary-foreground break-all">
                {channel.streamUrl}
              </code>
              <Button size="sm" variant="outline" onClick={copyUrl}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button onClick={openStream} className="flex-1 bg-primary hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              Watch Now
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};