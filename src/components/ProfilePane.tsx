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
      <SheetContent side="right" className="w-[500px] h-full bg-card/95 backdrop-blur-md border-border/30 flex flex-col p-0">
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close profile pane">
            <X className="w-6 h-6" />
          </Button>
            </div>
        {/* Profile Image */}
        <div className="w-full h-72 bg-gradient-secondary flex items-center justify-center overflow-hidden rounded-t-xl">
          <img src="/profile.jpg" alt="Sameer" className="w-full h-full object-cover" />
            </div>
        {/* Main Content */}
        <div className="flex flex-col px-4 py-0">
          {/* Profile Info */}
          <div className="flex flex-col items-center text-center mb-5">
            <SheetTitle className="text-3xl text-foreground font-bold">Hi, I'm Sameer</SheetTitle>
            <span className="text-muted-foreground text-base">sameer@email.com</span>
            <p className="text-muted-foreground text-lg">Welcome to my personal site. 💜</p>
          </div>
          {/* Divider */}
          <div className="border-t border-border/30 mb-4"></div>
          {/* How to Use */}
          <div className="mb-4">
            <h3 className="text-foreground font-semibold text-lg text-center mb-2">HOW TO USE</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-1"></div>
                <p className="text-muted-foreground text-base ml-2">
                  Explore my projects and journey using <span className="text-primary font-medium italic">Search</span>
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-1"></div>
                <p className="text-muted-foreground text-base ml-2">
                  Send me a message using <span className="text-green-400 font-medium italic">Gmail</span>
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-1"></div>
                <p className="text-muted-foreground text-base ml-2">
                  View more of my work using the <span className="text-primary font-medium italic">Dot-Menu</span>
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-1"></div>
                <p className="text-muted-foreground text-base ml-2">
                  Book a call using <Badge variant="outline" className="text-xs">📅</Badge>
                </p>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-border/30 mb-4"></div>
          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-medium text-center mb-2">QUICK LINKS</h3>
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" size="sm" className="w-full justify-center">About Me</Button>
              <Button variant="outline" size="sm" className="w-full justify-center">Projects</Button>
              <Button variant="outline" size="sm" className="w-full justify-center">Skills</Button>
              <Button variant="outline" size="sm" className="w-full justify-center">Experience</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};