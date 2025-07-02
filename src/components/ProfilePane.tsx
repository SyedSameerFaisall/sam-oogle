import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface ProfilePaneProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfilePane = ({ isOpen, onClose }: ProfilePaneProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-96 bg-card/95 backdrop-blur-md border-border/30">
        <SheetHeader className="text-center pb-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center overflow-hidden">
              <img src="/profile.jpg" alt="Sameer" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <SheetTitle className="text-foreground text-xl">Hi, I'm Sameer</SheetTitle>
              <p className="text-muted-foreground mt-1">Welcome to my personal site. 💜</p>
            </div>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-foreground font-medium mb-3">HOW TO USE</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground text-sm">
                  Explore my projects and journey using <span className="text-primary font-medium italic">Search</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground text-sm">
                  Send me a message using <span className="text-green-400 font-medium italic">Gmail</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground text-sm">
                  View more of my work using the <span className="text-primary font-medium italic">Dot-Menu</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground text-sm">
                  Book a call using <Badge variant="outline" className="text-xs">📅</Badge>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-6">
            <h3 className="text-foreground font-medium mb-3">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="text-left justify-start">
                About Me
              </Button>
              <Button variant="outline" size="sm" className="text-left justify-start">
                Projects
              </Button>
              <Button variant="outline" size="sm" className="text-left justify-start">
                Skills
              </Button>
              <Button variant="outline" size="sm" className="text-left justify-start">
                Experience
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};