import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ChannelGrid } from "@/components/ChannelGrid";
import { channels, categories } from "@/data/channels";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Channels");

  const filteredChannels = useMemo(() => {
    let filtered = channels;

    // Filter by category
    if (activeCategory !== "All Channels" && activeCategory !== "Favorites") {
      filtered = filtered.filter(channel => channel.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(channel =>
        channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        channel.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TV Channel Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Browse and watch your favorite channels
          </p>
          
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ChannelGrid channels={filteredChannels} />

        {filteredChannels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No channels found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
