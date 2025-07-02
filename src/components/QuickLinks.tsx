import { Button } from "@/components/ui/button";

const quickLinks = [
  { title: "About Sam", description: "Learn more about my background and experience" },
  { title: "My Projects", description: "Explore my latest work and creations" },
  { title: "Skills & Tech", description: "Technologies I work with" },
  { title: "Contact Me", description: "Let's connect and collaborate" },
];

export const QuickLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-16 animate-fade-in">
      {quickLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="group p-6 h-auto bg-card/20 hover:bg-card/40 border border-border/20 hover:border-primary/30 transition-smooth hover:scale-105 text-left"
          style={{ animationDelay: `${index * 100}ms` }}
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