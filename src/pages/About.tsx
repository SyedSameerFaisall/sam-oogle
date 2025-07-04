import { ArrowLeft, MapPin, Calendar, Mail, GraduationCap, Download, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
          {/* Hero Section with Profile */}
          <div className="text-center relative">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-2xl">
                  <AvatarImage src="/profile.jpg" alt="Sameer" />
                  <AvatarFallback className="text-3xl bg-primary/10">
                    <User className="w-16 h-16" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">
              About <span className="text-primary">Sameer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate developer crafting digital experiences with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="px-3 py-1">Full-Stack Developer</Badge>
              <Badge variant="secondary" className="px-3 py-1">React Specialist</Badge>
              <Badge variant="secondary" className="px-3 py-1">Open Source Contributor</Badge>
            </div>
          </div>

          {/* Personal Gallery */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Personal Gallery
              </CardTitle>
              <CardDescription>A glimpse into my world</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-muted/30 border border-border/30 overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <User className="w-8 h-8" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Upload your photos to showcase your personality and interests
              </p>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* About & Experience Cards */}
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

          {/* Education Section */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education & Certifications
              </CardTitle>
              <CardDescription>Academic background and professional development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Master of Computer Science</h3>
                    <p className="text-muted-foreground">University Name</p>
                  </div>
                  <Badge variant="outline">2020-2022</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized in Software Engineering and AI. Graduated with distinction.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Bachelor of Technology</h3>
                    <p className="text-muted-foreground">College Name</p>
                  </div>
                  <Badge variant="outline">2016-2020</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Computer Science and Engineering. First class honors.
                </p>
              </div>

              <div className="pt-4 border-t border-border/30">
                <h4 className="font-medium text-foreground mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS Certified</Badge>
                  <Badge variant="secondary">React Advanced</Badge>
                  <Badge variant="secondary">Node.js Expert</Badge>
                  <Badge variant="secondary">MongoDB Professional</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CV Download Section */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Resume / CV
              </CardTitle>
              <CardDescription>Download my detailed resume for more information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-muted-foreground mb-2">
                    Get a comprehensive overview of my professional experience, skills, and achievements.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>•</span>
                    <span>Updated December 2024</span>
                    <span>•</span>
                    <span>PDF Format</span>
                  </div>
                </div>
                <Button variant="hero" className="min-w-[150px]">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* My Story */}
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