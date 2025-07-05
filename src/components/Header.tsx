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
      <header className="w-full pt-3 md:pt-6 pr-4 md:pr-12 z-50">
      <div className="flex items-center justify-end w-full gap-3 md:gap-8 lg:gap-12">
        <Button
          variant="ghost"
          className="text-sm md:text-lg lg:text-xl font-bold text-foreground px-1 md:px-2 py-1"
          onClick={() => setIsEmailOpen(true)}
        >
          Gmail
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8 md:h-10 md:w-10 rounded-2xl transition-smooth hover:scale-110 flex items-center justify-center">
              <NineDotIcon className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 md:w-52 lg:w-72 p-2 md:p-4 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg" align="end">
            <div className="grid grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                social.label === "Gmail" ? (
                  <button
                    key={index}
                    onClick={() => setIsEmailOpen(true)}
                    className="flex flex-col items-center gap-2 p-2 sm:gap-3 sm:p-4 rounded-lg hover:bg-card/50 transition-smooth cursor-pointer border-none bg-transparent"
                    type="button"
                  >
                    <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-lg flex items-center justify-center overflow-hidden">
                      {React.cloneElement(social.icon, {
                        className: ["Github", "Gmail", "Calendly"].includes(social.label)
                          ? "h-[90%] w-auto"
                          : "w-full h-full",
                        style: { objectFit: 'contain' }
                      })}
                    </div>
                    <span className="text-xs sm:text-base text-muted-foreground font-medium">{social.label}</span>
                  </button>
                ) : (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-2 sm:gap-3 sm:p-4 rounded-lg hover:bg-card/50 transition-smooth cursor-pointer"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center overflow-hidden">
                      {React.cloneElement(social.icon, {
                        className: 'w-full h-full',
                        style: {
                          objectFit: 'contain',
                          transform:
                            social.label === "Gmail"
                              ? "scale(1.6)"
                              : ["Github", "Calendly"].includes(social.label)
                              ? "scale(1.3)"
                              : undefined
                        }
                      })}
                    </div>
                    <span className="text-xs sm:text-base text-muted-foreground font-medium">{social.label}</span>
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
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-muted-foreground/20 border-2 border-border flex items-center justify-center overflow-hidden p-0 hover:border-primary/50 transition-smooth hover:scale-110"
            >
              <img src="/profile.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 md:w-80 lg:w-[28rem] p-3 md:p-6 lg:p-8 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg flex flex-col items-center gap-3 md:gap-4 lg:gap-6" align="end">
            <img src="/profile.jpg" alt="Sameer" className="w-20 h-20 rounded-full object-cover mb-2" />
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">Hi, I am Sameer</div>
              <div className="text-muted-foreground text-sm mb-2">syedsameerfaisal1@gmail.com</div>
            </div>
            <div className="my-4">
              <h3 className="text-foreground font-semibold text-lg md:text-xl mb-3">HOW TO USE</h3>
              <ul className="space-y-2 text-base md:text-lg text-muted-foreground font-medium">
                <li>🔍 Use <span className="text-primary font-semibold">Search</span> to explore my portfolio</li>
                <li>📧 Click <span className="text-primary font-semibold">Gmail</span> to contact me</li>
                <li>🟦 Use the <span className="text-primary font-semibold">Dot-Menu</span> for more links</li>
                <li>📅 Book a call with <span className="text-primary font-bold">Calendly</span></li>
                <li>🤖 Use the <span className="text-primary font-bold">AI Chatbot</span> to learn more</li>
              </ul>
            </div>
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