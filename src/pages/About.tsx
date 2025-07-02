import { ArrowLeft, Github, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "CashCorn",
    date: "Feb 2025",
    description: "Hackathon project to solve my popeyes addiction",
    details: "A chrome extension that blocks your impulsive spends.. with a squirrel game",
    icon: "💰",
    color: "bg-orange-500",
    technologies: ["JavaScript", "Chrome Extension", "Game Development"]
  },
  {
    id: 2,
    title: "Meetmidway",
    date: "present",
    description: "Pre-successful CS sweats compress a 2-month hackathon project into 2 weeks of grind",
    details: "We bring your plans outside of the groupchat",
    icon: "🗺️",
    color: "bg-blue-500",
    technologies: ["React", "Node.js", "Maps API", "Real-time"]
  },
  {
    id: 3,
    title: "Dogma AI",
    date: "Nov 2024",
    description: "Girl flys to Toronto because she heard Cohere, OpenSesame and Hackathon in the same sentence",
    details: "An AI tutor you can join a call with to explain topics ranging from complicated school problems to real life advice. (not responsible for anything bad AI says <3)",
    icon: "🤖",
    color: "bg-green-500",
    technologies: ["AI/ML", "Voice Integration", "Educational Tech"]
  },
  {
    id: 4,
    title: "Muto",
    date: "Nov 2024",
    description: "University sweats build a workforce reintegration tool under 24 hours",
    details: "A Next.js app aimed at providing the vulnerable population with the resources and opportunities they need to reintegrate into society • Hack the Change 2024",
    icon: "🔄",
    color: "bg-purple-500",
    technologies: ["Next.js", "Social Impact", "Hackathon Winner"]
  },
  {
    id: 5,
    title: "Nurture",
    date: "Nov 2024",
    description: "Mental health support platform",
    details: "A comprehensive mental health platform connecting users with resources and support",
    icon: "🌱",
    color: "bg-pink-500",
    technologies: ["React", "Mental Health", "Support Platform"]
  }
];

const languageStats = [
  { name: "JavaScript", percentage: 53.11, color: "bg-yellow-400" },
  { name: "Python", percentage: 26.43, color: "bg-blue-500" },
  { name: "TypeScript", percentage: 5.65, color: "bg-blue-600" },
  { name: "Ruby", percentage: 5.64, color: "bg-red-500" },
  { name: "HTML", percentage: 5.28, color: "bg-orange-500" },
  { name: "Java", percentage: 3.88, color: "bg-orange-600" }
];

const languages = [
  "Python", "Java", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "SQLite", "Solidity"
];

const frameworks = [
  "React.js", "React Native", "Node.js", "Next.js", "Flask", "Django", "Tailwind CSS", "PostgreSQL",
  "Ruby on Rails", "Docker", "AWS", "Nginx", "Svelte", "pandas", "NumPy", "Matplotlib"
];

const otherSkills = [
  "Ruby", "XML", "GraphQL", "NLTK", "Kivy"
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-card/50 transition-smooth"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Projects */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-light text-foreground mb-2">
                About <span className="text-primary">Sameer</span>
              </h1>
              <p className="text-muted-foreground">Full-stack developer passionate about building impactful solutions</p>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id} className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">{project.date}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Github className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-foreground font-medium mb-2">{project.description}</p>
                        <p className="text-muted-foreground text-sm mb-3">{project.details}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-6">
            {/* Most Used Languages */}
            <Card className="bg-card/50 backdrop-blur-md border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Most Used Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Language Bar Chart */}
                <div className="space-y-3">
                  {languageStats.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`${lang.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="bg-card/50 backdrop-blur-md border-border/30">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  I love building impact-driven, full-stack projects.
                </p>
                <p className="text-muted-foreground mb-6">
                  Currently, I'm working on specializing my technical skills in ML.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground font-medium mb-2">LANGUAGES</h4>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-foreground font-medium mb-2">FRAMEWORKS & LIBRARIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {frameworks.map((framework) => (
                        <Badge key={framework} variant="outline" className="text-xs">
                          {framework}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-foreground font-medium mb-2">OTHER</h4>
                    <div className="flex flex-wrap gap-2">
                      {otherSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-card/50 backdrop-blur-md border-border/30">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Toronto, Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Available for opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;