import { useState } from "react";
import { Linkedin, Instagram, Github, Mail, Facebook, Calendar, MoreHorizontal, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import NineDotIcon from "@/components/ui/NineDotIcon";
import { ProfilePane } from "./ProfilePane";
import { EmailPane } from "./EmailPane";
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/syedsameerfaisal/",
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
  {
    icon: Github,
    href: "https://github.com/SyedSameerFaisall",
    label: "GitHub",
    color: "hover:text-gray-300"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/sameer__faisal/",
    label: "Instagram",
    color: "hover:text-pink-400"
  },
  {
    icon: Mail,
    href: "mailto:syedsameerfaisal1@gmail.com",
    label: "Gmail",
    color: "text-white"
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
    color: "hover:text-blue-600"
  },
  {
    icon: Calendar,
    href: "#",
    label: "Calendly",
    color: "hover:text-orange-400"
  }
];
export const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const handleSocialClick = (social: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    if (social.label === "Gmail") {
      setIsEmailOpen(true);
    } else {
      window.open(social.href, "_blank");
    }
  };

  return (
    <>
      <header className="w-full pt-4 pr-6 z-50">
      <div className="flex items-center justify-end w-full gap-6 pl-6">
        <span className="text-lg font-medium text-foreground">Gmail</span>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-2 h-10 w-10 rounded-full transition-smooth hover:scale-110 flex items-center justify-center hover:bg-muted/20">
              <NineDotIcon className="w-6 h-6 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4 bg-card/95 backdrop-blur-md border-border/30 translate-x-[-60px] translate-y-[8px]">
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/20 transition-smooth cursor-pointer"
                  onClick={(e) => handleSocialClick(social, e)}
                >
                  <div className="w-12 h-12 rounded-lg bg-background/60 flex items-center justify-center">
                    <social.icon size={24} className={social.color.replace('hover:', '')} />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium text-center">{social.label}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-8 h-8 rounded-full bg-muted/20 border border-border flex items-center justify-center overflow-hidden p-0 hover:border-primary/50 transition-smooth hover:scale-110"
            >
              <img src="/profile.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-6 bg-card/95 backdrop-blur-md border-border/30 translate-x-[-80px] translate-y-[8px] flex flex-col items-center gap-4">
            <img src="/profile.jpg" alt="Sameer" className="w-16 h-16 rounded-full object-cover" />
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">Hi, I'm Sameer</div>
              <div className="text-muted-foreground text-sm">sameer@email.com</div>
            </div>
            <div className="w-full border-t border-border/30"></div>
            <div className="w-full flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-full justify-center text-sm">About Me</Button>
              <Button variant="outline" size="sm" className="w-full justify-center text-sm">Projects</Button>
              <Button variant="outline" size="sm" className="w-full justify-center text-sm">Skills</Button>
              <Button variant="outline" size="sm" className="w-full justify-center text-sm">Experience</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
    
    <EmailPane isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
    </>
  );
};