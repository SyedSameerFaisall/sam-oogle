import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface EmailPaneProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailPane = ({ isOpen, onClose }: EmailPaneProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    to: "syedsameerfaisal1@gmail.com",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.from || !formData.subject || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '491dd003-3205-42e1-ba87-a4304a62fe42',
          from_name: formData.from,
          from_email: formData.from,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Syed Sameer Faisal',
          replyto: formData.from,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to send email');
      }

      toast({
        title: "Email Sent Successfully!",
        description: "Your message has been sent to my inbox. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        from: "",
        to: "syedsameerfaisal1@gmail.com",
        subject: "",
        message: ""
      });

      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send email. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg mx-auto h-[60vh] sm:h-[70vh] bg-card/95 text-foreground border border-border/30 rounded-2xl p-0">
        <DialogHeader className="p-4 border-b border-border/30 bg-secondary/50 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white">New Message</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:text-white/80 hover:bg-white/10"
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
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
                placeholder="Enter your email"
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
                type="button"
                variant="ghost"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};