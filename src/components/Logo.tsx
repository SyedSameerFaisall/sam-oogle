export const Logo = () => {
  return <div className="text-center mb-16 animate-fade-in">
      <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light text-foreground tracking-tight shadow-glow">
        <span className="inline-block hover:text-primary transition-smooth">Sam</span>
        <span className="text-primary animate-pulse">-</span>
        <span className="inline-block bg-gradient-secondary bg-clip-text text-transparent hover:scale-110 transition-transform">oogle</span>
      </h1>
      <p className="text-2xl md:text-3xl text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Full-Stack Developer & Problem Solver
      </p>
    </div>;
};