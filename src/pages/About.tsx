import { ArrowLeft, MapPin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-card/50 transition-smooth"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">
              About <span className="text-primary">Sameer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location & Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Based in [Your City], available for remote work and collaborations worldwide.
                  Always excited to work on innovative projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  5+ years of experience in full-stack development, specializing in React, 
                  Node.js, and modern web technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle>My Story</CardTitle>
              <CardDescription>How I became passionate about technology</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Started my journey in software development during college, where I discovered my passion 
                for creating digital solutions that make a real impact. From building my first "Hello World" 
                program to architecting complex web applications, every step has been a learning adventure.
              </p>
              <p className="text-muted-foreground">
                I believe in clean code, user-centered design, and the power of technology to solve 
                real-world problems. When I'm not coding, you'll find me exploring new frameworks, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-8 py-3"
            >
              <Mail className="sm:mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;