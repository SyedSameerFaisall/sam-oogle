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
    color: "hover:text-green-400"
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
      <header className="w-full p-6 z-50">
      <div className="flex items-center justify-end gap-6 w-full">
        {/* Left: Text with red dot */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-foreground">Gmail</span>
          <span className="h-2 w-2 rounded-full bg-red-500 inline-block ml-1"></span>
        </div>
        {/* Center: 9-dot icon as popover trigger */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-4 h-16 w-16 bg-card/30 backdrop-blur-md rounded-2xl border border-border/20 hover:bg-card/50 transition-smooth hover:scale-110 flex items-center justify-center">
              <NineDotIcon className="w-12 h-12 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-3 bg-card/95 backdrop-blur-md border-border/30">
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index} 
                  variant="ghost" 
                  size="sm" 
                  className={`p-3 h-14 w-14 transition-smooth hover:scale-110 hover:bg-card/50 ${social.color}`}
                  onClick={(e) => handleSocialClick(social, e)}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        {/* Right: Circular image */}
        <Button
          variant="ghost"
          className="w-14 h-14 rounded-full bg-muted-foreground/20 border-2 border-border flex items-center justify-center overflow-hidden p-0 hover:border-primary/50 transition-smooth hover:scale-110"
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