import { ArrowLeft, Award, Code, Database, Globe, Smartphone, Wrench, BarChart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const skillCategories = [
  {
    title: "Data Analysis",
    icon: <BarChart className="h-6 w-6" />,
    skills: [
      { name: "Python (Pandas, NumPy)", level: 95 },
      { name: "Matplotlib / Seaborn", level: 85 },
      { name: "R", level: 90 },
      { name: "SQL", level: 95 },
      { name: "Excel / Google Sheets", level: 95 }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow / Keras", level: 85 },
      { name: "LangChain / LangGraph / CrewAI", level: 85 },
      { name: "Hugging Face Transformers", level: 80 }
    ]
  },
  {
    title: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Node.js", level: 85 }
    ]
  },
  {
    title: "Dev Tools & Platforms",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "VS Code", level: 90 },
      { name: "Streamlit / Gradio", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Linux / Bash", level: 85 }
    ]
  }
];

const certifications = [
  {
    title: "Machine Learning Certification",
    issuer: "Stanford University",
    date: "Dec 2024",
    credentialId: "https://www.coursera.org/account/accomplishments/specialization/US9WW4UT4MP3"
  },
  {
    title: "Data Analyst Certification",
    issuer: "DataCamp",
    date: "Sep 2024",
    credentialId: "https://www.datacamp.com/certificate/DA0029836382233" 
  },
  {
    title: "Data Analysis with R Programming",
    issuer: "Google",
    date: "Jul 2024",
    credentialId: "https://www.coursera.org/account/accomplishments/verify/LZB4687RJSHP"
  },
  {
    title: "Google Data Analytics Professional Certification",
    issuer: "Google",
    date: "Jul 2024",
    credentialId: "https://www.coursera.org/account/accomplishments/professional-cert/JHAA3XNXDJVR"
  },
  {
    title: "SQL for Data Science",
    issuer: "Coursera",
    date: "Jan 2024",
    credentialId: "https://www.coursera.org/account/accomplishments/verify/JNN3NKVWTXZ8?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Jul 2023",
    credentialId: "https://www.freecodecamp.org/certification/fccab862b8b-4aba-4f19-a453-74de60a2cb5c/responsive-web-design"
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
          <ArrowLeft className="sm:mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">
              <span className="text-primary">Skills & Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and professional certifications that drive my development journey in the tech field
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
                    <Button asChild variant="outline" size="sm" className="mt-2" {...(!cert.credentialId.startsWith('http') && { disabled: true })}>
                      <a href={cert.credentialId.startsWith('http') ? cert.credentialId : '#'} target="_blank" rel="noopener noreferrer">
                        View Credential
                      </a>
                    </Button>
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