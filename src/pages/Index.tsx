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
      
      <main className="flex flex-1 flex-col items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-4xl -mt-10 flex flex-col gap-10" style={{ transform: 'scale(1.5) translateY(-60px)' }}>
          <Logo />
          <SearchBar />
          <QuickLinks />
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-4 text-sm text-muted-foreground z-10">
    </footer>
    
    <Chatbot />
    </div>;
};
export default Index;