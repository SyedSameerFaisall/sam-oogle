export const Logo = () => {
  return <div className="text-center mb-12 animate-fade-in">
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-light text-foreground tracking-tight shadow-glow">
        <span className="inline-block hover:text-primary transition-smooth">Sam</span>
        <span className="text-primary animate-pulse">-</span>
        <span className="inline-block bg-gradient-secondary bg-clip-text text-transparent hover:scale-110 transition-transform">oogle</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Full-Stack Developer & Problem Solver
      </p>
    </div>;
};