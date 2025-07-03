import { useState } from "react";
import { X, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
      <DialogContent className="max-w-2xl h-[60vh] sm:h-[70vh] bg-card/95 backdrop-blur-md border-border/30 p-0">
        <DialogHeader className="p-4 border-b border-border/30 bg-secondary/50">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-foreground">New Message</DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Maximize2 className="h-4 w-4" />
              </Button>
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
              <div className="flex gap-2">
                <Button type="button" variant="ghost" size="sm" className="text-muted-foreground">
                  Cc
                </Button>
                <Button type="button" variant="ghost" size="sm" className="text-muted-foreground">
                  Bcc
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm w-12">To</span>
              <Input
                type="email"
                value={formData.to}
                onChange={(e) => setFormData(prev => ({ ...prev, to: e.target.value }))}
                className="flex-1 bg-background/50 border-border/30"
                readOnly
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
            <div className="flex items-center justify-between">
              <Button
                type="submit"
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              >
                Send
              </Button>
              <div className="flex items-center gap-2">
                <Button type="button" variant="ghost" size="sm">
                  Format
                </Button>
                <Button type="button" variant="ghost" size="sm">
                  Attach
                </Button>
                <Button type="button" variant="ghost" size="sm">
                  Insert
                </Button>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};