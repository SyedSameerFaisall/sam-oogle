import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shuffle } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { title: "About Sameer", description: "Learn more about my background", path: "/about" },
  { title: "My Projects", description: "Explore my latest work and creations", path: "/projects" },
  { title: "Skills & Tech", description: "Tools & Technologies I work with", path: "/skills" },
  { title: "Work Experience", description: "My internship experiences", path: "/experience" },
];

export const QuickLinks = () => {
  const navigate = useNavigate();
  const [shuffledLinks, setShuffledLinks] = useState(quickLinks);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleLinks = () => {
    setIsShuffling(true);
    const shuffled = [...quickLinks].sort(() => Math.random() - 0.5);
    setTimeout(() => {
      setShuffledLinks(shuffled);
      setIsShuffling(false);
    }, 300);
  };
  return (
    <div className="w-full max-w-xs sm:max-w-2xl mx-auto mt-8 animate-fade-in">
      <div className="flex justify-center mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={shuffleLinks}
          disabled={isShuffling}
          className="text-xs text-muted-foreground hover:text-primary transition-smooth hover:scale-105 bg-card/20 hover:bg-card/40 border border-border/20"
        >
          <Shuffle className={`w-3 h-3 mr-1 transition-transform ${isShuffling ? 'animate-spin' : ''}`} />
          Shuffle
        </Button>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 transition-all duration-300 ${isShuffling ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
        {shuffledLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="group p-2 sm:p-3 h-auto bg-card/20 hover:bg-card/40 border border-border/20 hover:border-primary/30 transition-smooth hover:scale-105 text-center"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => navigate(link.path)}
        >
          <div>
            <h3 className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-smooth">
              {link.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {link.description}
            </p>
          </div>
        </Button>
      ))}
      </div>
    </div>
  );
};