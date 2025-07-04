import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatbotContext } from "@/chatbot-context";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

async function fetchOpenAIResponse(userMessage: string) {
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: "You are Sameer's AI assistant. You know about Sameer's projects, skills, and background. Answer as a friendly, helpful portfolio assistant."
        },
        { role: 'user', content: userMessage }
      ],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
}

// Enhanced keyword matching with synonyms and categories
const keywordMap = {
  // Programming languages
  programming: ['python', 'javascript', 'js', 'typescript', 'ts', 'react', 'c++', 'cpp', 'sql', 'r', 'code', 'coding', 'programming', 'language', 'languages'],
  
  // Education
  education: ['study', 'studies', 'student', 'university', 'college', 'ucl', 'hkust', 'degree', 'bachelor', 'bsc', 'school', 'academic', 'grades', 'gpa'],
  
  // Skills
  skills: ['skills', 'abilities', 'expertise', 'proficient', 'experience', 'knowledge', 'capable', 'competent'],
  
  // Machine Learning
  ml: ['machine learning', 'ml', 'ai', 'artificial intelligence', 'deep learning', 'neural network', 'model', 'algorithm', 'tensorflow', 'pytorch', 'scikit', 'sklearn'],
  
  // Data Science
  data: ['data', 'analytics', 'analysis', 'visualization', 'dataset', 'statistics', 'statistical', 'tableau', 'pandas', 'numpy'],
  
  // Projects
  projects: ['project', 'projects', 'built', 'created', 'developed', 'work', 'portfolio', 'github'],
  
  // Work Experience
  work: ['work', 'job', 'employment', 'intern', 'internship', 'position', 'role', 'experience', 'company'],
  
  // Achievements
  achievements: ['award', 'awards', 'scholarship', 'achievement', 'accomplishment', 'honor', 'recognition', 'distinction'],
  
  // Leadership
  leadership: ['lead', 'leader', 'leadership', 'manage', 'manager', 'president', 'vice president', 'team', 'mentor']
};

// Improved text preprocessing
function preprocessText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Remove punctuation
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

// Enhanced similarity function with multiple scoring methods
function calculateSimilarity(userMessage: string, contextQuestion: string): number {
  const userTokens = preprocessText(userMessage).split(' ');
  const questionTokens = preprocessText(contextQuestion).split(' ');
  
  // 1. Exact token overlap
  const userSet = new Set(userTokens);
  const questionSet = new Set(questionTokens);
  const intersection = new Set([...userSet].filter(x => questionSet.has(x)));
  const tokenOverlap = intersection.size / Math.max(userSet.size, questionSet.size);
  
  // 2. Keyword category matching
  let categoryScore = 0;
  const userText = preprocessText(userMessage);
  const questionText = preprocessText(contextQuestion);
  
  for (const [category, keywords] of Object.entries(keywordMap)) {
    const userHasKeywords = keywords.some(keyword => userText.includes(keyword));
    const questionHasKeywords = keywords.some(keyword => questionText.includes(keyword));
    
    if (userHasKeywords && questionHasKeywords) {
      categoryScore += 0.3; // Boost for matching categories
    }
  }
  
  // 3. Substring matching for key phrases
  const substringScore = calculateSubstringScore(userText, questionText);
  
  // 4. Question word matching (what, where, when, how, etc.)
  const questionWordScore = calculateQuestionWordScore(userText, questionText);
  
  // Combine all scores with weights
  const totalScore = (tokenOverlap * 0.4) + (categoryScore * 0.3) + (substringScore * 0.2) + (questionWordScore * 0.1);
  
  return Math.min(totalScore, 1.0); // Cap at 1.0
}

function calculateSubstringScore(userText: string, questionText: string): number {
  const userWords = userText.split(' ').filter(word => word.length > 3);
  const questionWords = questionText.split(' ').filter(word => word.length > 3);
  
  let matches = 0;
  for (const userWord of userWords) {
    for (const questionWord of questionWords) {
      if (userWord.includes(questionWord) || questionWord.includes(userWord)) {
        matches++;
        break;
      }
    }
  }
  
  return matches / Math.max(userWords.length, questionWords.length, 1);
}

function calculateQuestionWordScore(userText: string, questionText: string): number {
  const questionWords = ['what', 'where', 'when', 'how', 'why', 'who', 'which', 'tell', 'describe', 'explain'];
  const userQuestionWords = questionWords.filter(word => userText.includes(word));
  const contextQuestionWords = questionWords.filter(word => questionText.includes(word));
  
  if (userQuestionWords.length > 0 && contextQuestionWords.length > 0) {
    const intersection = userQuestionWords.filter(word => contextQuestionWords.includes(word));
    return intersection.length / Math.max(userQuestionWords.length, contextQuestionWords.length);
  }
  
  return 0;
}

// Enhanced pronoun normalization
function normalizePronouns(text: string): string {
  return text
    .replace(/\b(he|him)\b/gi, "Sameer")
    .replace(/\b(his|he's)\b/gi, "Sameer's")
    .replace(/\b(himself)\b/gi, "Sameer")
    .replace(/\byour\b/gi, "Sameer's")
    .replace(/\byou\b/gi, "Sameer");
}

// Main function to find context answer with improved matching
function findContextAnswer(userMessage: string): string | null {
  const normalizedMessage = normalizePronouns(userMessage);
  let bestMatch = null;
  let bestScore = 0;
  let keywordMatch = null;

  // Calculate similarity with each context question
  for (const { question, answer } of chatbotContext) {
    let score = calculateSimilarity(normalizedMessage, question);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = answer;
    }
  }
  // Prefer keyword match if found
  if (keywordMatch) return keywordMatch;
  if (bestScore >= 0.3) return bestMatch;
  // Fallback: Try direct keyword matching for common queries
  const fallbackAnswer = findFallbackAnswer(normalizedMessage);
  if (fallbackAnswer) {
    return fallbackAnswer;
  }
  return null;
}

// Fallback function for common queries that might not match well
function findFallbackAnswer(userMessage: string): string | null {
  const message = preprocessText(userMessage);
  
  // Direct keyword matching for common queries
  const fallbackPatterns = [
    {
      patterns: ['contact', 'email', 'reach', 'get in touch'],
      answer: "You can reach Sameer through his email or LinkedIn. Check out the contact section on his portfolio for more details!"
    },
    {
      patterns: ['github', 'code', 'repository', 'repo'],
      answer: "Sameer has an active GitHub profile with various projects. You can find links to his repositories in the projects section of his portfolio."
    },
    {
      patterns: ['resume', 'cv', 'download'],
      answer: "You can find Sameer's resume and CV in the about section of his portfolio, along with his detailed experience and qualifications."
    }
  ];
  
  for (const { patterns, answer } of fallbackPatterns) {
    if (patterns.some(pattern => message.includes(pattern))) {
      return answer;
    }
  }
  
  return null;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `👋 Hi! Welcome to Sameer's world!\n\nI'm your friendly AI concierge here to make your journey smooth and snazzy.\n\n✨ Tap the dot icon to check out Sameer's epic links and socials.\n\n📬 Want to drop him a message? Use the gmail icon to access the in-built feature.\n\n🧠 Curious about his projects, passions, or tech wizardry? Just ask, I will spill the (well-formatted) tea!`,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
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
    setLoading(true);

    // Show a loading message
    const loadingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: loadingId,
      text: "Thinking...",
      isBot: true,
      timestamp: new Date()
    }]);

    // Check context first with improved matching
    const contextAnswer = findContextAnswer(userMessage.text);
    if (contextAnswer) {
      setMessages(prev => prev.filter(m => m.id !== loadingId));
      setMessages(prev => [...prev, {
        id: (Date.now() + 2).toString(),
        text: contextAnswer,
        isBot: true,
        timestamp: new Date()
      }]);
      setLoading(false);
      return;
    }

    // Otherwise, call OpenAI
    const botResponse = await fetchOpenAIResponse(userMessage.text);
    setMessages(prev => prev.filter(m => m.id !== loadingId));
      const botMessage: Message = {
      id: (Date.now() + 2).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        style={{ transform: 'scale(0.5)', transformOrigin: 'bottom right', right: '2rem', position: 'fixed', bottom: '1.5rem' }}
        className="group rounded-2xl p-6 z-[9999] pointer-events-auto flex flex-col items-center justify-center text-center transition-smooth h-auto w-auto"
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center gap-2">
            <span className="text-2xl">🤖</span>
            <h3 className="font-bold text-white group-hover:text-primary text-lg">Ask AI</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Chat with Sameer's assistant</p>
        </div>
      </Button>
    );
  }

  return (
    <div style={{ transform: 'scale(0.7)', transformOrigin: 'bottom right' }} className="fixed bottom-4 right-4 w-full max-w-xs sm:max-w-md md:max-w-lg h-[70vh] sm:h-[80vh] bg-card/95 backdrop-blur-md border border-border/30 rounded-2xl z-50 flex flex-col">
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
                {message.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
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