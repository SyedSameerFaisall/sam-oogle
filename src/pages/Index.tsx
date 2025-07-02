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
          
          {/* Enhanced Visual Elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-card/20 backdrop-blur-md border border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 hover:scale-105 shadow-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">Cutting-edge solutions with modern tech</p>
              </div>
            </div>
            
            <div className="bg-card/20 backdrop-blur-md border border-accent/20 rounded-3xl p-8 hover:border-accent/40 transition-all duration-500 hover:scale-105 shadow-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Performance</h3>
                <p className="text-muted-foreground">Optimized for speed and efficiency</p>
              </div>
            </div>
            
            <div className="bg-card/20 backdrop-blur-md border border-primary-glow/20 rounded-3xl p-8 hover:border-primary-glow/40 transition-all duration-500 hover:scale-105 shadow-glow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Design</h3>
                <p className="text-muted-foreground">Beautiful & user-centered interfaces</p>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-12 bg-card/10 backdrop-blur-md border border-border/30 rounded-3xl p-8 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Available</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-4 text-sm text-muted-foreground z-10">
    </footer>
    
    <Chatbot />
    </div>;
};
export default Index;