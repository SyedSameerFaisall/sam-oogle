import { Linkedin, Instagram, Github, Mail, Facebook, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
  { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Calendar, href: "#", label: "Calendly", color: "hover:text-orange-400" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 p-6 z-50">
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-3 gap-2 p-3 bg-card/30 backdrop-blur-md rounded-2xl border border-border/20">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`p-2 h-10 w-10 transition-smooth hover:scale-110 hover:bg-card/50 ${social.color}`}
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};