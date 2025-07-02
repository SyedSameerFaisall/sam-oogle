import { useState } from "react";
import { Search, Mic, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // This could integrate with actual search functionality later
      console.log("Searching for:", searchValue);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div 
        className={`relative bg-card/40 backdrop-blur-md rounded-full border transition-smooth shadow-elegant
          ${isFocused ? 'border-primary shadow-glow scale-105' : 'border-border/30 hover:border-border/50'}`}
      >
        <div className="flex items-center p-3">
          <Search className="text-muted-foreground ml-3 mr-4" size={20} />
          
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search Sam's portfolio..."
            className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-foreground placeholder:text-muted-foreground"
          />
          
          <div className="flex items-center gap-2 mr-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="p-2 h-8 w-8 hover:bg-card/50 transition-smooth"
              aria-label="Voice search"
            >
              <Mic size={16} />
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="p-2 h-8 w-8 hover:bg-card/50 transition-smooth"
              aria-label="Search by image"
            >
              <Camera size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-3 mt-8">
        <Button 
          type="submit"
          variant="secondary"
          className="px-6 py-3 bg-card/50 hover:bg-card/70 border border-border/30 transition-smooth"
        >
          Sam Search
        </Button>
        
        <Button 
          type="button"
          variant="secondary"
          className="px-6 py-3 bg-card/50 hover:bg-card/70 border border-border/30 transition-smooth"
          onClick={() => setSearchValue("I'm feeling curious")}
        >
          I'm Feeling Lucky
        </Button>
      </div>
    </form>
  );
};