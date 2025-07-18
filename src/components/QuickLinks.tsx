import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const quickLinks = [
  { title: "About Sameer", description: "Learn more about my background", path: "/about" },
  { title: "My Projects", description: "Explore my latest work and creations", path: "/projects" },
  { title: "Skills & Tech", description: "Tools & Technologies I work with", path: "/skills" },
  { title: "Work Experience", description: "My internship experiences", path: "/experience" },
];

export const QuickLinks = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-xs sm:max-w-md mx-auto mt-2 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 sm:gap-1.5 transition-all duration-300">
        {quickLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="group p-1 sm:p-2 h-auto min-h-[45px] sm:min-h-[60px] bg-card/20 hover:bg-card/40 border border-border/20 hover:border-primary/30 transition-smooth hover:scale-105 text-center"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => navigate(link.path)}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="font-medium text-[9px] sm:text-xs md:text-sm text-foreground group-hover:text-primary transition-smooth leading-tight mb-0.5">
              {link.title}
            </h3>
            <p className="text-[7px] sm:text-[9px] text-muted-foreground leading-tight text-center">
              {link.description}
            </p>
          </div>
        </Button>
      ))}
      </div>
    </div>
  );
};