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
    href: "https://www.facebook.com/sameer.faisal.524596",
    label: "Facebook",
    color: "hover:text-blue-600"
  },
  {
    icon: Calendar,
    href: "https://calendly.com/syedsameerfaisal1",
    label: "Calendly",
    color: "hover:text-orange-400"
  }
];
export const Header = ({ setIsEmailOpen }: { setIsEmailOpen: (open: boolean) => void }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
      <div style={{ transform: 'scale(0.6)', transformOrigin: 'top right' }} className="flex items-center justify-end w-full mt-4 mr-32 gap-12 pl-24">
        <Button
          variant="ghost"
          className="text-xl font-bold text-foreground px-2 py-1"
          onClick={() => setIsEmailOpen(true)}
        >
          Gmail
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-10 w-10 rounded-2xl transition-smooth hover:scale-110 flex items-center justify-center">
              <NineDotIcon className="w-8 h-8 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent style={{ transform: 'scale(0.6) translate(-60px, 40px)', transformOrigin: 'top right' }} className="w-96 p-8 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg">
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
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-12 h-12 rounded-full bg-muted-foreground/20 border-2 border-border flex items-center justify-center overflow-hidden p-0 hover:border-primary/50 transition-smooth hover:scale-110"
            >
              <img src="/profile.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
            </Button>
          </PopoverTrigger>
          <PopoverContent style={{ transform: 'scale(0.6) translate(-60px, 40px)', transformOrigin: 'top right' }} className="w-[28rem] p-8 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg flex flex-col items-center gap-6">
            <img src="/profile.jpg" alt="Sameer" className="w-20 h-20 rounded-full object-cover mb-2" />
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">Hi, I am Sameer</div>
              <div className="text-muted-foreground text-sm mb-2">syedsameerfaisal1@gmail.com</div>
            </div>
            <div className="my-4">
              <h3 className="text-foreground font-semibold text-lg md:text-xl text-center mb-3">HOW TO USE</h3>
              <ul className="space-y-2 text-base md:text-lg text-muted-foreground font-medium">
                <li>🔍 Use <span className="text-primary font-semibold">Search</span> to explore my portfolio</li>
                <li>📧 Click <span className="text-primary font-semibold">Gmail</span> to contact me</li>
                <li>🟦 Use the <span className="text-primary font-semibold">Dot-Menu</span> for more links</li>
                <li>📅 Book a call with the <span className="text-primary font-bold">calendar</span> icon</li>
              </ul>
            </div>
            <div className="w-full border-t border-border/30 my-2"></div>
            <div className="w-full flex flex-col gap-2">
              <a href="/about" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center">About Me</Button></a>
              <a href="/projects" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center">Projects</Button></a>
              <a href="/skills" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center">Skills</Button></a>
              <a href="/experience" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center">Experience</Button></a>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
    </>
  );
};