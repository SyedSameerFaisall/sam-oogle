import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import chatbotContextText from "@/chatbot-context.txt?raw";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

async function fetchOpenAIResponse(userMessage: string) {
  const context = findRelevantContextChunk(userMessage);
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are Syed Sameer Faisal's AI assistant. You represent him professionally and help visitors learn about his background, skills, and experience. \n\nHere is comprehensive information about Sameer:\n${context}\n\nGuidelines:\n- Answer as if you're representing Sameer professionally\n- Use first person when talking about Sameer's experiences ("I have experience in...", "I worked at...", "My projects include...")\n- Be friendly, professional, and enthusiastic about his work\n- Provide specific details from the context when relevant\n- If asked about something not in the context, politely redirect to what you do know\n- Highlight his achievements, skills, and projects naturally in conversation`
        },
        { role: 'user', content: userMessage }
      ],
      max_tokens: 400,
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
}

// Enhanced keyword mapping specific to Sameer's profile
const keywordMap = {
  // Programming & Technical Skills
  programming: ['python', 'javascript', 'js', 'react', 'nextjs', 'next.js', 'sql', 'r', 'html', 'css', 'code', 'coding', 'programming', 'language', 'languages', 'typescript', 'git'],
  
  // Education & Academic
  education: ['study', 'studies', 'student', 'university', 'college', 'ucl', 'hkust', 'hong kong', 'nixor', 'credo', 'degree', 'bachelor', 'bsc', 'school', 'academic', 'grades', 'scholarship', 'a-level', 'o-level'],
  
  // Skills & Expertise
  skills: ['skills', 'abilities', 'expertise', 'proficient', 'experience', 'knowledge', 'capable', 'competent', 'technical', 'programming', 'development'],
  
  // Machine Learning & AI
  ml: ['machine learning', 'ml', 'ai', 'artificial intelligence', 'deep learning', 'neural network', 'cnn', 'model', 'algorithm', 'tensorflow', 'pytorch', 'scikit', 'sklearn', 'hugging face', 'langchain', 'langgraph', 'openai', 'llm', 'nlp'],
  
  // Data Science & Analytics
  data: ['data', 'analytics', 'analysis', 'visualization', 'dataset', 'statistics', 'statistical', 'tableau', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'plotly', 'data science', 'data scientist'],
  
  // Specific Projects
  projects: ['project', 'projects', 'built', 'created', 'developed', 'work', 'portfolio', 'github', 'financial analyst', 'brain tumor', 'book recommender', 'citation network', 'semantic', 'facial recognition', 'credit card'],
  
  // Work Experience & Companies
  work: ['work', 'job', 'employment', 'intern', 'internship', 'position', 'role', 'experience', 'company', 'headstart', 'wemakeapp', 'sudostudy', 'nixor', 'idp', 'stakehold'],
  
  // Achievements & Awards
  achievements: ['award', 'awards', 'scholarship', 'achievement', 'accomplishment', 'honor', 'recognition', 'distinction', 'dean', 'honor roll', 'global scholar', 'top', 'best'],
  
  // Leadership & Roles
  leadership: ['lead', 'leader', 'leadership', 'manage', 'manager', 'president', 'vice president', 'team', 'mentor', 'ambassador', 'representative', 'society'],
  
  // Tools & Technologies
  tools: ['streamlit', 'gradio', 'chromadb', 'opencv', 'yfinance', 'figma', 'excel', 'tableau', 'beautiful soup', 'web scraping', 'api'],
  
  // Specific Domains
  finance: ['finance', 'financial', 'stock', 'trading', 'investment', 'market', 'fintech', 'analyst', 'economic'],
  
  // Contact & Personal
  contact: ['contact', 'email', 'phone', 'linkedin', 'reach', 'connect', 'location', 'london', 'karachi', 'pakistan', 'uk']
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
function calculateSimilarity(userMessage: string, contextChunk: string): number {
  const userTokens = preprocessText(userMessage).split(' ');
  const chunkTokens = preprocessText(contextChunk).split(' ');
  
  // 1. Exact token overlap
  const userSet = new Set(userTokens.filter(token => token.length > 2));
  const chunkSet = new Set(chunkTokens.filter(token => token.length > 2));
  const intersection = new Set([...userSet].filter(x => chunkSet.has(x)));
  const tokenOverlap = intersection.size / Math.max(userSet.size, chunkSet.size, 1);
  
  // 2. Keyword category matching
  let categoryScore = 0;
  const userText = preprocessText(userMessage);
  const chunkText = preprocessText(contextChunk);
  
  for (const [category, keywords] of Object.entries(keywordMap)) {
    const userHasKeywords = keywords.some(keyword => userText.includes(keyword));
    const chunkHasKeywords = keywords.some(keyword => chunkText.includes(keyword));
    
    if (userHasKeywords && chunkHasKeywords) {
      categoryScore += 0.4; // Boost for matching categories
    }
  }
  
  // 3. Substring matching for key phrases
  const substringScore = calculateSubstringScore(userText, chunkText);
  
  // 4. Header/section matching (if user asks about specific sections)
  const headerScore = calculateHeaderScore(userText, chunkText);
  
  // Combine all scores with weights
  const totalScore = (tokenOverlap * 0.3) + (categoryScore * 0.4) + (substringScore * 0.2) + (headerScore * 0.1);
  
  return Math.min(totalScore, 1.0); // Cap at 1.0
}

function calculateSubstringScore(userText: string, chunkText: string): number {
  const userWords = userText.split(' ').filter(word => word.length > 3);
  const chunkWords = chunkText.split(' ').filter(word => word.length > 3);
  
  let matches = 0;
  for (const userWord of userWords) {
    for (const chunkWord of chunkWords) {
      if (userWord.includes(chunkWord) || chunkWord.includes(userWord)) {
        matches++;
        break;
      }
    }
  }
  
  return matches / Math.max(userWords.length, chunkWords.length, 1);
}

function calculateHeaderScore(userText: string, chunkText: string): number {
  const sectionHeaders = [
    'personal information', 'education', 'experience', 'skills', 'projects', 
    'achievements', 'certifications', 'languages', 'technical skills',
    'machine learning', 'data science', 'programming', 'work experience'
  ];
  
  let headerMatches = 0;
  for (const header of sectionHeaders) {
    if (userText.includes(header) && chunkText.includes(header)) {
      headerMatches++;
    }
  }
  
  return headerMatches / sectionHeaders.length;
}

// Enhanced pronoun normalization for Sameer
function normalizePronouns(text: string): string {
  return text
    .replace(/\b(he|him)\b/gi, "Sameer")
    .replace(/\b(his|he's)\b/gi, "Sameer's")
    .replace(/\b(himself)\b/gi, "Sameer")
    .replace(/\byour\b/gi, "Sameer's")
    .replace(/\byou\b/gi, "Sameer");
}

// Split context into meaningful chunks (by sections and paragraphs)
function getContextChunks(text: string): string[] {
  // Split by double newlines and section headers
  const chunks = text.split(/\n\s*\n/).filter(chunk => chunk.trim().length > 50);
  
  // Further split very long chunks
  const processedChunks = [];
  for (const chunk of chunks) {
    if (chunk.length > 1000) {
      // Split long chunks by sentences or bullet points
      const subChunks = chunk.split(/(?:[.!?]\s+)|(?:\n- )|(?:\n\* )/).filter(sub => sub.trim().length > 20);
      processedChunks.push(...subChunks);
    } else {
      processedChunks.push(chunk);
    }
  }
  
  return processedChunks;
}

const contextChunks = getContextChunks(chatbotContextText);

// Find the most relevant context chunks for a user message
function findRelevantContextChunk(userMessage: string): string {
  const normalizedMessage = normalizePronouns(userMessage);
  
  // Score all chunks
  const scoredChunks = contextChunks.map(chunk => ({
    chunk,
    score: calculateSimilarity(normalizedMessage, chunk)
  })).sort((a, b) => b.score - a.score);
  
  // If top score is very low, return a general overview
  if (scoredChunks[0].score < 0.1) {
    return contextChunks.slice(0, 3).join('\n\n'); // Return first few chunks as general context
  }
  
  // Return top 2-3 most relevant chunks
  const topChunks = scoredChunks.slice(0, 3).map(item => item.chunk);
  return topChunks.join('\n\n');
}

export const Chatbot = ({ isEmailOpen }: { isEmailOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `👋 Hi! I'm Sameer's AI assistant!\n\nI'm here to help you learn about Syed Sameer Faisal - his background, skills, projects, and experience.\n\n🎓 Currently pursuing BSc Data Science at UCL\n💼 Vice President of UCL Data Science Society\n🏆 Global Undergraduate Scholar\n\n✨ Feel free to ask me about:\n• His technical skills and projects\n• Education and achievements\n• Work experience\n• Machine learning expertise\n• Contact information\n\nWhat would you like to know about Sameer?`,
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

    // Always call OpenAI with the relevant context
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

  if (isEmailOpen) {
    return null;
  }
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
            <h3 className="text-foreground font-medium text-sm">Sameer's AI Assistant</h3>
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
            placeholder="Ask about Sameer's experience..."
            className="flex-1 bg-background/50 border-border/30"
            disabled={loading}
          />
          <Button
            type="submit"
            size="sm"
            className="h-10 w-10 p-0 bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};