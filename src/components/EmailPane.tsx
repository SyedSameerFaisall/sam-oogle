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
      <DialogContent className="w-full max-w-[95vw] sm:max-w-lg mx-auto h-[80vh] sm:h-[70vh] bg-card/95 text-foreground border border-border/30 rounded-xl sm:rounded-2xl p-0">
        <DialogHeader className="p-3 sm:p-4 border-b border-border/30 bg-secondary/50 rounded-t-xl sm:rounded-t-2xl">
          <div className="flex items-center justify-center">
            <DialogTitle className="text-white text-base sm:text-lg">New Message</DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              <span className="text-muted-foreground text-xs sm:text-sm w-16 sm:w-12">From</span>
              <Input
                type="email"
                value={formData.from}
                onChange={(e) => setFormData(prev => ({ ...prev, from: e.target.value }))}
                className="flex-1 bg-background/50 border-border/30 text-xs sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              <span className="text-muted-foreground text-xs sm:text-sm w-16 sm:w-12">Subject</span>
              <Input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                className="flex-1 bg-background/50 border-border/30 text-xs sm:text-sm"
                placeholder="Enter subject"
              />
            </div>

            <div className="flex-1">
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full h-32 sm:h-64 bg-background/50 border-border/30 resize-none text-xs sm:text-sm"
                placeholder="Compose your message..."
              />
            </div>
          </div>

          <div className="p-3 sm:p-4 border-t border-border/30 bg-secondary/20">
            <div className="flex items-center justify-end sm:justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-4 sm:px-8 py-2 bg-primary border border-primary/40 hover:bg-primary/80 text-primary-foreground disabled:opacity-50 text-xs sm:text-sm rounded-lg shadow-none"
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