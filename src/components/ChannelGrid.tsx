import { ChannelCard } from "./ChannelCard";
import { Channel } from "@/data/channels";

interface ChannelGridProps {
  channels: Channel[];
}

export const ChannelGrid = ({ channels }: ChannelGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4">
      {channels.map((channel) => (
        <ChannelCard
          key={channel.id}
          id={channel.id}
          name={channel.name}
          logo={channel.logo}
          category={channel.category}
          provider={channel.provider}
          streamUrl={channel.streamUrl}
        />
      ))}
    </div>
  );
};