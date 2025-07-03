import { useState } from "react";
import { Search, Mic, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";

const searchOptions = [
  { label: "About Sameer", path: "/about" },
  { label: "My Projects", path: "/projects" },
  { label: "Skills and Certifications", path: "/skills" },
  { label: "Work Experience", path: "/experience" },
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
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto relative">
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
              <Search className="text-muted-foreground sm:ml-3 sm:mr-4" size={20} />
              <Input
                value={searchValue}
                readOnly
                onFocus={() => {
                  setIsFocused(true);
                  setOpen(true);
                }}
                onBlur={() => setIsFocused(false)}
                placeholder="Search Sameer's portfolio..."
                className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
              <div className="flex items-center gap-1 sm:gap-2 sm:mr-2">
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
        </PopoverTrigger>
        <PopoverContent
          className="w-full max-w-2xl p-0 bg-card/95 backdrop-blur-md border-border/30"
          align="start"
        >
          <Command>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Quick Navigation">
                {searchOptions.map((option) => (
                  <CommandItem
                    key={option.path}
                    onSelect={() => {
                      navigate(option.path);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Search className="sm:mr-2 h-4 w-4 sm:w-5 sm:h-5" />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </form>
  );
};