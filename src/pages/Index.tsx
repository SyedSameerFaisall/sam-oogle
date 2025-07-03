import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { QuickLinks } from "@/components/QuickLinks";
import { FloatingElements } from "@/components/FloatingElements";
import { Chatbot } from "@/components/Chatbot";
const Index = () => {
  return <div className="h-screen relative overflow-hidden flex flex-col">
      <FloatingElements />
      <Header />
      
      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'top center', width: '100%' }}>
          <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-8 sm:gap-10 mt-4 sm:mt-8">
            <Logo />
            <SearchBar />
            <QuickLinks />
          </div>
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-4 text-sm text-muted-foreground z-10">
    </footer>
    
    <Chatbot />
    </div>;
};
export default Index;