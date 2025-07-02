import { Linkedin, Instagram, Github, Mail, Facebook, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
const socialLinks = [{
  icon: Linkedin,
  href: "#",
  label: "LinkedIn",
  color: "hover:text-blue-400"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram",
  color: "hover:text-pink-400"
}, {
  icon: Github,
  href: "#",
  label: "GitHub",
  color: "hover:text-gray-300"
}, {
  icon: Mail,
  href: "#",
  label: "Email",
  color: "hover:text-green-400"
}, {
  icon: Facebook,
  href: "#",
  label: "Facebook",
  color: "hover:text-blue-600"
}, {
  icon: Calendar,
  href: "#",
  label: "Calendly",
  color: "hover:text-orange-400"
}];
export const Header = () => {
  return <header className="fixed top-0 right-0 p-6 z-50">
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-3 h-12 w-12 bg-card/30 backdrop-blur-md rounded-2xl border border-border/20 hover:bg-card/50 transition-smooth hover:scale-110">
              <MoreHorizontal size={20} className="rotate-90" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2 bg-card/95 backdrop-blur-md border-border/30">
            <div className="grid grid-cols-3 gap-2">
              {socialLinks.map((social, index) => <Button key={index} variant="ghost" size="sm" className={`p-2 h-10 w-10 transition-smooth hover:scale-110 hover:bg-card/50 ${social.color}`} asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon size={18} />
                  </a>
                </Button>)}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>;
};