import { useState } from "react";
import { Linkedin, Instagram, Github, Mail, Facebook, Calendar, MoreHorizontal, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import NineDotIcon from "@/components/ui/NineDotIcon";
import { ProfilePane } from "./ProfilePane";
import { EmailPane } from "./EmailPane";
import React from "react";
const socialLinks = [
  {
    icon: <img src="/github.svg" alt="GitHub" />,
    href: "https://github.com/SyedSameerFaisall",
    label: "Github"
  },
  {
    icon: <img src="/linkedin.svg" alt="LinkedIn" />,
    href: "https://www.linkedin.com/in/syedsameerfaisal/",
    label: "Linkedin"
  },
  {
    icon: <img src="/whatsapp.svg" alt="Whatsapp" />,
    label: "Whatsapp"
  },
  {
    icon: <img src="/instagram.svg" alt="Instagram" />,
    href: "https://www.instagram.com/sameer__faisal/",
    label: "Instagram"
  },
  {
    icon: <img src="/facebook.svg" alt="Facebook" />,
    href: "https://www.facebook.com/sameer.faisal.524596",
    label: "Facebook"
  },
  {
    icon: <img src="/calendly.svg" alt="Calendly" />,
    href: "https://calendly.com/syedsameerfaisal1",
    label: "Calendly"
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
      <header className="w-full pt-1.5 md:pt-3 pr-2 md:pr-6 z-50">
      <div className="flex items-center justify-end w-full gap-1.5 md:gap-4 lg:gap-6">
        <Button
          variant="ghost"
          className="text-xs md:text-base lg:text-lg font-bold text-foreground px-0.5 md:px-1 py-0.5"
          onClick={() => setIsEmailOpen(true)}
        >
          Gmail
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-4 w-4 md:h-5 md:w-5 rounded-2xl transition-smooth hover:scale-110 flex items-center justify-center">
              <NineDotIcon className="w-3 h-3 md:w-4 md:h-4 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-24 md:w-26 lg:w-36 p-1 md:p-2 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg" align="end">
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                social.label === "Gmail" ? (
                  <button
                    key={index}
                    onClick={() => setIsEmailOpen(true)}
                    className="flex flex-col items-center gap-1 p-1 sm:gap-1.5 sm:p-2 rounded-lg hover:bg-card/50 transition-smooth cursor-pointer border-none bg-transparent"
                    type="button"
                  >
                    <div className="w-8 h-10 sm:w-10 sm:h-12 rounded-lg flex items-center justify-center overflow-hidden">
                      {React.cloneElement(social.icon, {
                        className: ["Github", "Gmail", "Calendly"].includes(social.label)
                          ? "h-[45%] w-auto"
                          : "w-full h-full",
                        style: { objectFit: 'contain' }
                      })}
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{social.label}</span>
                  </button>
                ) : (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 p-1 sm:gap-1.5 sm:p-2 rounded-lg hover:bg-card/50 transition-smooth cursor-pointer"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center overflow-hidden">
                      {React.cloneElement(social.icon, {
                        className: 'w-full h-full',
                        style: {
                          objectFit: 'contain',
                          transform:
                            social.label === "Gmail"
                              ? "scale(0.8)"
                              : ["Github", "Calendly"].includes(social.label)
                              ? "scale(0.65)"
                              : undefined
                        }
                      })}
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{social.label}</span>
                  </a>
                )
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-muted-foreground/20 border-2 border-border flex items-center justify-center overflow-hidden p-0 hover:border-primary/50 transition-smooth hover:scale-110"
            >
              <img src="/profile.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-32 md:w-40 lg:w-56 p-1.5 md:p-3 lg:p-4 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg flex flex-col items-center gap-1.5 md:gap-2 lg:gap-3" align="end">
            <img src="/profile.jpg" alt="Sameer" className="w-10 h-10 rounded-full object-cover mb-1" />
            <div className="text-center">
              <div className="text-base font-bold text-foreground">Hi, I am Sameer</div>
              <div className="text-muted-foreground text-xs mb-1">syedsameerfaisal1@gmail.com</div>
            </div>
            <div className="my-2">
              <h3 className="text-foreground font-semibold text-sm md:text-base mb-1.5">HOW TO USE</h3>
              <ul className="space-y-1 text-xs md:text-base text-muted-foreground font-medium">
                <li>🔍 Use <span className="text-primary font-semibold">Search</span> to explore my portfolio</li>
                <li>📧 Click <span className="text-primary font-semibold">Gmail</span> to contact me</li>
                <li>🟦 Use the <span className="text-primary font-semibold">Dot-Menu</span> for more links</li>
                <li>📅 Book a call with <span className="text-primary font-bold">Calendly</span></li>
                <li>🤖 Use the <span className="text-primary font-bold">AI Chatbot</span> to learn more</li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-1">
              <a href="/about" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs">About Me</Button></a>
              <a href="/projects" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs">Projects</Button></a>
              <a href="/skills" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs">Skills</Button></a>
              <a href="/experience" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs">Experience</Button></a>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
    </>
  );
};