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
      <header className="w-full pt-6 pr-12 z-50">
      <div className="flex items-center justify-end w-full mt-6 gap-24 pl-24">
        <span className="text-2xl font-bold text-foreground">Gmail</span>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-12 w-12 rounded-2xl transition-smooth hover:scale-110 flex items-center justify-center">
              <NineDotIcon className="w-12 h-12 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-96 p-6 bg-card/95 backdrop-blur-md border-border/30">
            <div className="grid grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-smooth cursor-pointer"
                  onClick={(e) => handleSocialClick(social, e)}
                >
                  <div className="w-20 h-20 rounded-lg bg-background/80 flex items-center justify-center">
                    <social.icon size={40} className={social.color.replace('hover:', '')} />
                  </div>
                  <span className="text-base text-muted-foreground font-medium">{social.label}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Button
          variant="ghost"
          className="w-16 h-16 rounded-full bg-muted-foreground/20 border-2 border-border flex items-center justify-center overflow-hidden p-0 hover:border-primary/50 transition-smooth hover:scale-110"
          onClick={() => setIsProfileOpen(true)}
        >
          <img src="/profile.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
        </Button>
      </div>
    </header>
    
    <ProfilePane isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    <EmailPane isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
    </>
  );
};