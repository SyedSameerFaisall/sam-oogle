import { useState } from "react";
import { Search, Mic, Calendar, TrendingUp, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";

const searchOptions = [
  { label: "rumeza's projects", path: "/projects" },
  { label: "life", path: "/about" },
  { label: "why hire a rumeza", path: "/skills" },
  { label: "work experience", path: "/experience" },
];

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // This could integrate with actual search functionality later
      console.log("Searching for:", searchValue);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-8xl mx-auto">
      <div className="relative w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
             <div 
              className={`relative bg-card/40 backdrop-blur-md rounded-full border transition-smooth shadow-elegant cursor-pointer
                ${isFocused || open ? 'border-primary shadow-glow scale-105' : 'border-border/30 hover:border-border/50'}`}
              onClick={() => setOpen(true)}
              onMouseDown={e => { e.preventDefault(); setOpen(true); }}
              id="searchbar-trigger"
            >
              <div className="flex items-center py-3 px-4">
                <Search className="text-muted-foreground mr-4" size={20} />
                <Input
                  value={searchValue}
                  readOnly
                  onFocus={() => {
                    setIsFocused(true);
                    setOpen(true);
                  }}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search (Rum)oogle"
                  className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-foreground placeholder:text-muted-foreground"
                />
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="p-2 h-8 w-8 hover:bg-muted/20 transition-smooth rounded-full"
                    aria-label="Voice search"
                  >
                    <Mic size={16} className="text-muted-foreground" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="p-2 h-8 w-8 hover:bg-muted/20 transition-smooth rounded-full"
                    aria-label="Search by image"
                  >
                    <Calendar size={16} className="text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-[800px] p-6 bg-card/95 backdrop-blur-md border-border/30 rounded-2xl shadow-elegant transform -translate-y-2"
            align="center"
            sideOffset={-10}
          >
            {/* Header Row */}
            <div className="flex items-center justify-between mb-4 w-full">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-6 h-6 text-primary" />
                <span className="text-primary font-medium text-lg">Search (Rum)oogle</span>
              </div>
              <div className="flex items-center gap-4">
                <Mic className="w-5 h-5 text-primary" />
                <Calendar className="w-5 h-5 text-primary" />
              </div>
            </div>
            {/* Divider */}
            <div className="border-t border-primary/30 mb-4 w-full" />
            {/* Section Heading */}
            <div className="mb-4 text-primary font-semibold text-base w-full">Trending searches</div>
            {/* Results */}
            <div className="flex flex-col gap-2 w-full">
              {searchOptions.map((option, idx) => (
                <div
                  key={option.path}
                  onClick={() => {
                    navigate(option.path);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 rounded-lg px-3 py-2 transition-smooth group w-full"
                >
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className={`${idx === 0 ? "font-bold" : ""} text-foreground`}>{option.label}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </form>
  );
};