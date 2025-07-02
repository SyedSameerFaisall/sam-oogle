import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Sameer's AI assistant. I can help you learn more about his background, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("project") || lowerInput.includes("work")) {
      return "Sameer has worked on various exciting projects including web applications, mobile apps, and AI integrations. You can explore his projects section to see detailed case studies and live demos!";
    } else if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
      return "Sameer is proficient in React, TypeScript, Node.js, Python, and cloud technologies. He's also experienced with AI/ML frameworks and modern development practices. Check out his skills section for the complete list!";
    } else if (lowerInput.includes("experience") || lowerInput.includes("intern")) {
      return "Sameer has gained valuable experience through internships at various tech companies, working on real-world projects and contributing to production systems. Visit his experience section for detailed information!";
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach")) {
      return "You can reach Sameer through the Gmail option in the top navigation, connect with him on LinkedIn, or check out his GitHub profile. He's always open to interesting opportunities and collaborations!";
    } else if (lowerInput.includes("about") || lowerInput.includes("background")) {
      return "Sameer is a passionate software engineer with a strong background in full-stack development and AI. He loves building innovative solutions and is always learning new technologies. Learn more in his about section!";
    } else {
      return "That's a great question! You can explore different sections of Sameer's portfolio using the search bar or quick links. Is there anything specific about his projects, skills, or experience you'd like to know?";
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-glow z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-card/95 backdrop-blur-md border border-border/30 rounded-2xl shadow-elegant z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-foreground font-medium text-sm">Sam's Assistant</h3>
            <p className="text-muted-foreground text-xs">Online</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              {message.isBot && (
                <div className="w-6 h-6 rounded-full bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                  <Bot className="h-3 w-3 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  message.isBot
                    ? 'bg-secondary text-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="h-3 w-3" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border/30">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-background/50 border-border/30"
          />
          <Button
            type="submit"
            size="sm"
            className="h-10 w-10 p-0 bg-primary hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};