import { ArrowLeft, Building, Calendar, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices infrastructure.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led a team of 5 developers on multiple client projects",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Designed and developed REST APIs serving 1M+ requests daily"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
  },
  {
    company: "Digital Innovations Inc",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    location: "New York, NY",
    type: "Full-time",
    description: "Developed responsive web applications and collaborated with UX/UI designers to create intuitive user interfaces. Focused on modern frontend frameworks and performance optimization.",
    achievements: [
      "Built 15+ responsive web applications from scratch",
      "Reduced page load times by 50% through optimization techniques",
      "Collaborated with design team to improve user experience",
      "Implemented automated testing reducing bugs by 30%"
    ],
    technologies: ["React", "Vue.js", "JavaScript", "CSS3", "SASS", "Jest"]
  },
  {
    company: "StartupXYZ",
    position: "Junior Web Developer",
    duration: "2019 - 2020",
    location: "Austin, TX",
    type: "Full-time",
    description: "Started my professional journey in a fast-paced startup environment. Worked on various projects including e-commerce platforms, landing pages, and internal tools.",
    achievements: [
      "Developed and maintained 10+ client websites",
      "Learned modern development frameworks and best practices",
      "Contributed to open-source projects",
      "Implemented responsive design patterns"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "PHP"]
  },
  {
    company: "Freelance",
    position: "Web Developer",
    duration: "2018 - 2019",
    location: "Remote",
    type: "Freelance",
    description: "Provided web development services to small businesses and startups. Focused on creating modern, responsive websites and learning new technologies.",
    achievements: [
      "Completed 20+ client projects successfully",
      "Built portfolio of diverse web applications",
      "Established long-term client relationships",
      "Gained experience in project management"
    ],
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL"]
  }
];

const Experience = () => {
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
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Work <span className="text-primary">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey through various roles and companies in the tech industry
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-smooth"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary mb-1">
                        {experience.position}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building className="h-4 w-4" />
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <Briefcase className="mr-1 h-3 w-3" />
                        {experience.type}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{experience.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="bg-background/50 hover:bg-primary/10 border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;