import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { FloatingElements } from "@/components/FloatingElements";
import { Chatbot } from "@/components/Chatbot";
const Index = () => {
  return <div className="h-screen relative overflow-hidden flex flex-col">
      <FloatingElements />
      <Header />
      
      <main className="flex flex-1 flex-col items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-4xl flex flex-col items-center gap-6 -mt-20 text-[9rem]">
          <Logo />
          <SearchBar />
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-4 text-sm text-muted-foreground z-10">
    </footer>
    
    <Chatbot />
    </div>;
};
export default Index;