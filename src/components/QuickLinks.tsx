import { Button } from "@/components/ui/button";

const quickLinks = [
  { title: "About Sameer", description: "Learn more about my background" },
  { title: "My Projects", description: "Explore my latest work and creations" },
  { title: "Skills & Tech", description: "Skillset & Technologies I work with" },
  { title: "Work Experience", description: "My internship experiences" },
];

export const QuickLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-20 animate-fade-in">
      {quickLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          className="group p-8 h-auto bg-card/20 hover:bg-card/40 border border-border/20 hover:border-primary/30 transition-all duration-500 hover:scale-110 text-center rounded-3xl shadow-elegant hover:shadow-glow"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
              {link.title}
            </h3>
            <p className="text-base text-muted-foreground">
              {link.description}
            </p>
          </div>
        </Button>
      ))}
    </div>
  );
};