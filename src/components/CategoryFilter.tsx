import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "secondary"}
          onClick={() => onCategoryChange(category)}
          className={`
            rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
            ${activeCategory === category 
              ? 'bg-primary text-primary-foreground shadow-glow' 
              : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
            }
          `}
          style={activeCategory === category ? {
            background: 'var(--gradient-primary)',
          } : {}}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};