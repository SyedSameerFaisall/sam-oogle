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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-16 animate-fade-in">
      {quickLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="group p-6 h-auto bg-card/20 hover:bg-card/40 border border-border/20 hover:border-primary/30 transition-smooth hover:scale-105 text-center"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => navigate(link.path)}
        >
          <div>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-smooth">
              {link.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {link.description}
            </p>
          </div>
        </Button>
      ))}
    </div>
  );
};