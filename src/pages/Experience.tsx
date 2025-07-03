import { ArrowLeft, Building, Calendar, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
const experiences = [
  {
    company: "HeadStart Global",
    position: "Data Analyst Intern",
    duration: "Nov 2024 – Dec 2024",
    location: "London, United Kingdom (Remote)",
    type: "Internship",
    description:
      "Led market research and strategic evaluation of global data providers for a SaaS platform, focusing on data-driven decision-making to guide partnership strategies.",
    achievements: [
      "Performed a comprehensive analysis of over 40 data providers, evaluating datasets across consumer behavior, social media trends, and industry benchmarks to determine strategic alignment and data quality.",
      "Developed a detailed business case and competitive comparison matrix that identified the top three high-value partners, laying the foundation for long-term strategic partnerships.",
      "Designed and presented a polished, insights-driven pitch deck to executive stakeholders, clearly communicating partnership value propositions and demonstrating expansion potential for the platform’s market reach."
    ],
    technologies: ["Pandas", 'Numpy', 'Matplotlib', 'Pytorch', 'SkLearn', 'SQL', 'Excel', "Notion"]
  },
  {
    company: "WeMakeApp Limited",
    position: "Software Engineering Intern",
    duration: "Dec 2023 – Jan 2024",
    location: "Hong Kong SAR",
    type: "Internship",
    description:
      "Contributed to frontend development within an agile team, improving user interface responsiveness and ensuring development aligned closely with evolving design goals.",
    achievements: [
      "Collaborated with UI/UX designers to rework key interface components, improving responsiveness by 25% and reducing time-to-iteration by 20% through efficient use of Figma prototypes and developer handoff practices.",
      "Actively participated in peer code reviews and applied software engineering best practices, resulting in a 15% reduction in post-deployment bugs and improved overall codebase maintainability.",
      "Wrote unit tests for major components, refactored legacy UI code, and maintained a clean, well-documented Git commit history to ensure consistent development workflows."
    ],
    technologies: ["React", "JavaScript", "Tailwind", "NodeJS", "TypeScript", "Figma", "Git"]
  },
  {
    company: "SudoStudy",
    position: "Data Intern",
    duration: "June 2023 – July 2023",
    location: "Geneva, Switzerland (Remote)",
    type: "Internship",
    description:
      "Worked on content structuring and AI-powered question generation for an EdTech platform, optimizing user engagement and backend efficiency.",
    achievements: [
      "Redesigned the structure of over 3,000 A-level practice questions by tagging them with subject, topic, and difficulty, resulting in a 30% reduction in search time and a measurable boost in user retention.",
      "Engineered a custom tagging and filtering framework that increased platform discoverability and helped drive a 15% rise in daily active users within a month.",
      "Leveraged AI tools to generate and standardize 200+ subject-specific A-level questions, expanding the content base by 35% and significantly enhancing the platform’s academic credibility and user satisfaction."
    ],
    technologies: ["Notion", "ChatGPT", "Python", "Excel"]
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
          <ArrowLeft className="sm:mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">
              <span className="text-primary"> Work Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A results-driven journey across diverse roles in the tech ecosystem, contributing to real-world solutions through innovation and collaboration.
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
                        <Briefcase className="sm:mr-1 h-4 w-4" />
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