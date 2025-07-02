import { Linkedin, Instagram, Github, Mail, Facebook, Calendar, MoreHorizontal, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
  return (
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
            <Button variant="ghost" size="sm" className="p-3 h-12 w-12 bg-card/30 backdrop-blur-md rounded-2xl border border-border/20 hover:bg-card/50 transition-smooth hover:scale-110 flex flex-col items-center justify-center">
              <span className="flex gap-1">
                <Dot size={12} strokeWidth={3} className="font-bold" />
                <Dot size={12} strokeWidth={3} className="font-bold" />
                <Dot size={12} strokeWidth={3} className="font-bold" />
              </span>
              <span className="flex gap-1 mt-0.5">
                <Dot size={12} strokeWidth={3} className="font-bold" />
                <Dot size={12} strokeWidth={3} className="font-bold" />
                <Dot size={12} strokeWidth={3} className="font-bold" />
              </span>
              <span className="flex gap-1 mt-0.5">
                <Dot size={12} strokeWidth={3} className="font-bold" />
                <Dot size={12} strokeWidth={3} className="font-bold" />
                <Dot size={12} strokeWidth={3} className="font-bold" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2 bg-card/95 backdrop-blur-md border-border/30">
            <div className="grid grid-cols-3 gap-2">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="sm" className={`p-2 h-10 w-10 transition-smooth hover:scale-110 hover:bg-card/50 ${social.color}`} asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        {/* Right: Circular image */}
        <div className="w-10 h-10 rounded-full bg-muted-foreground/20 border-2 border-border flex items-center justify-center overflow-hidden">
          {/* Replace with your image */}
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </header>
  );
};