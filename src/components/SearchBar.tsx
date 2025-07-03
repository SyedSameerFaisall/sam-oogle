import { useState } from "react";
import { Search, Mic, Calendar, TrendingUp, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";

const searchOptions = [
  { label: "rumeza's projects", path: "/about" },
  { label: "life", path: "/projects" },
  { label: "why hire a rumeza", path: "/skills" },
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
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
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
              <div className="flex items-center p-3">
                <Search className="text-muted-foreground ml-3 mr-4" size={20} />
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
                    <Calendar size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="absolute left-0 top-full mt-2 w-full p-8 bg-[#39335a] text-white rounded-2xl shadow-2xl"
            align="start"
          >
            {/* Header Row */}
            <div className="flex items-center justify-between mb-3 w-full">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-6 h-6 text-[#a18aff]" />
                <span className="text-[#a18aff] font-medium text-lg">Search (Rum)oogle</span>
              </div>
              <div className="flex items-center gap-4">
                <Mic className="w-5 h-5 text-[#a18aff]" />
                <Calendar className="w-5 h-5 text-[#a18aff]" />
              </div>
            </div>
            {/* Divider */}
            <div className="border-t border-[#a18aff]/30 mb-4 w-full" />
            {/* Section Heading */}
            <div className="mb-4 text-[#a18aff] font-semibold text-base w-full">Trending searches</div>
            {/* Results */}
            <div className="flex flex-col gap-4 w-full">
              {searchOptions.map((option, idx) => (
                <div
                  key={option.path}
                  onClick={() => {
                    navigate(option.path);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 cursor-pointer hover:bg-[#322d4a] rounded-xl px-2 py-2 transition-colors group w-full"
                >
                  <TrendingUp className="w-5 h-5 text-[#a18aff]" />
                  <span className={idx === 0 ? "font-bold text-white" : "text-white"}>{option.label}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </form>
  );
};