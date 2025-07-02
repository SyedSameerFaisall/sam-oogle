import { ArrowLeft, Award, Code, Database, Globe, Smartphone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: "React Native", level: 80 },
      { name: "Flutter", level: 75 },
      { name: "iOS Development", level: 70 },
      { name: "Android Development", level: 70 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 }
    ]
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023-001"
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PRO-2023-002"
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MDB-DEV-2022-003"
  },
  {
    title: "React Professional Certificate",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-REACT-2022-004"
  }
];

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-6xl mx-auto">
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
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Skills & <span className="text-primary">Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and professional certifications that drive my development journey
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-smooth"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      {category.icon}
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-smooth hover:scale-105 group"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>{cert.issuer}</span>
                      <Badge variant="secondary">{cert.date}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Credential ID: {cert.credentialId}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;