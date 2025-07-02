export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-secondary opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary to-accent opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Medium floating elements */}
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-accent/15 rounded-full blur-lg animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      
      {/* Small particles */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-accent rounded-full opacity-40 animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-primary-glow rounded-full opacity-80 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      
      {/* Additional animated elements */}
      <div className="absolute top-10 left-1/2 w-6 h-6 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-8 h-8 border-2 border-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-1 h-16 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};