import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";

interface EmailPaneProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailPane = ({ isOpen, onClose }: EmailPaneProps) => {
  const [formData, setFormData] = useState({
    from: "Your Email",
    to: "syedsameerfaisal1@gmail.com",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email sending
    console.log("Sending email:", formData);
    // You could integrate with a real email service here
    alert("Email sent successfully!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg mx-auto h-[60vh] sm:h-[70vh] bg-card/95 text-foreground border border-border/30 rounded-2xl p-0">
        <DialogHeader className="p-4 border-b border-border/30 bg-secondary/50 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white">New Message</DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="flex-1 p-4 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm w-12">From</span>
              <Input
                type="email"
                value={formData.from}
                onChange={(e) => setFormData(prev => ({ ...prev, from: e.target.value }))}
                className="flex-1 bg-background/50 border-border/30"
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm w-12">Subject</span>
              <Input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                className="flex-1 bg-background/50 border-border/30"
                placeholder="Enter subject"
              />
            </div>

            <div className="flex-1">
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full h-64 bg-background/50 border-border/30 resize-none"
                placeholder="Compose your message..."
              />
            </div>
          </div>

          <div className="p-4 border-t border-border/30 bg-secondary/20">
            <div className="flex items-center justify-start">
              <Button
                type="submit"
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};