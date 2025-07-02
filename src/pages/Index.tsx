import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { QuickLinks } from "@/components/QuickLinks";
import { FloatingElements } from "@/components/FloatingElements";
import { Chatbot } from "@/components/Chatbot";
const Index = () => {
  return <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      <Header />
      
      <main className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
        <div className="w-full max-w-5xl">
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