import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { QuickLinks } from "@/components/QuickLinks";
import { FloatingElements } from "@/components/FloatingElements";
import { Chatbot } from "@/components/Chatbot";
import { VisitorCounter } from "@/components/VisitorCounter";

const Index = ({ setIsEmailOpen, isEmailOpen }: { setIsEmailOpen: (open: boolean) => void, isEmailOpen: boolean }) => {
  return <div className="h-screen relative overflow-hidden flex flex-col bg-gradient-to-br from-background via-background/95 to-background/80">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-shimmer" 
           style={{ backgroundSize: '200% 100%' }} />
      <FloatingElements />
      <Header setIsEmailOpen={setIsEmailOpen} />
      
      <main className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 lg:px-8 relative z-10 mt-[-100px]">
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'top center', width: '100%' }} className="animate-fade-in">
          <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-1 sm:gap-2 mt-0 sm:mt-0">
            <div className="animate-bounce-in" style={{ animationDelay: '200ms' }}>
              <Logo className="text-4xl sm:text-6xl" />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <SearchBar className="p-2 sm:p-4" />
            </div>
            <div className="animate-scale-in mt-1 sm:mt-2" style={{ animationDelay: '600ms' }}>
              <QuickLinks 
                titleClassName="text-base sm:text-lg" 
                descClassName="text-xs sm:text-sm" 
                buttonClassName="p-2 sm:p-4" 
                gapClassName="gap-2 sm:gap-3" 
              />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-4 text-sm text-muted-foreground z-10 animate-fade-in" 
              style={{ animationDelay: '800ms' }}>
    </footer>
    
    <VisitorCounter />
    <Chatbot isEmailOpen={isEmailOpen} />
    </div>;
};
export default Index;