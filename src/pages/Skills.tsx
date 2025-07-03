import {
  ArrowLeft, Award, Code, Database, Globe, Smartphone, Wrench, BarChart, Brain, Layers, Flame, Terminal, GitBranch, FileSpreadsheet, Feather, BookOpen, Sparkles
} from "lucide-react";
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
      { name: "Cursor", level: 90 },
      { name: "Streamlit / Gradio", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 85 }
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

// Skill icon mapping
const skillIconMap: Record<string, { icon: JSX.Element; color: string }> = {
  "React": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-5 w-5" alt="React" />, color: ""
  },
  "React / Next.js": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-5 w-5" alt="React / Next.js" />, color: ""
  },
  "Tailwind CSS": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="h-5 w-5" alt="Tailwind CSS" />, color: ""
  },
  "Python": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-5 w-5" alt="Python" />, color: ""
  },
  "R": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" className="h-5 w-5" alt="R" />, color: ""
  },
  "Docker": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-5 w-5" alt="Docker" />, color: ""
  },
  "Pandas": { icon: <FileSpreadsheet className="h-5 w-5 text-yellow-700" />, color: "text-yellow-700" },
  "NumPy": { icon: <Feather className="h-5 w-5 text-blue-500" />, color: "text-blue-500" },
  "Matplotlib": { icon: <BarChart className="h-5 w-5 text-purple-500" />, color: "text-purple-500" },
  "Seaborn": { icon: <Flame className="h-5 w-5 text-pink-500" />, color: "text-pink-500" },
  "Scikit-learn": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" className="h-5 w-5" alt="Scikit-learn" />, color: ""
  },
  "PyTorch": { icon: <Flame className="h-5 w-5 text-orange-600" />, color: "text-orange-600" },
  "TensorFlow": { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="h-5 w-5" alt="TensorFlow" />, color: "" },
  "Keras": { icon: <Flame className="h-5 w-5 text-red-400" />, color: "text-red-400" },
  "LangChain": {
    icon: <img src="/langchain.svg" className="h-5 w-5" alt="LangChain" />, color: ""
  },
  "Cursor": {
    icon: <img src="/cursor.svg" className="h-5 w-5" alt="Cursor" />, color: ""
  },
  "Figma": {
    icon: <img src="/figma.svg" className="h-5 w-5" alt="Figma" />, color: ""
  },
  "LangGraph": { icon: <Layers className="h-5 w-5 text-blue-600" />, color: "text-blue-600" },
  "CrewAI": { icon: <Brain className="h-5 w-5 text-fuchsia-500" />, color: "text-fuchsia-500" },
  "Hugging Face": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/huggingface/huggingface-original.svg" className="h-5 w-5" alt="Hugging Face" />, color: ""
  },
  "Transformers": { icon: <Sparkles className="h-5 w-5 text-yellow-400" />, color: "text-yellow-400" },
  "TypeScript": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-5 w-5" alt="TypeScript" />, color: ""
  },
  "JavaScript": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-5 w-5" alt="JavaScript" />, color: ""
  },
  "Node.js": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-5 w-5" alt="Node.js" />, color: ""
  },
  "SQL": { icon: <Database className="h-5 w-5 text-indigo-500" />, color: "text-indigo-500" },
  "Excel": { icon: <FileSpreadsheet className="h-5 w-5 text-green-600" />, color: "text-green-600" },
  "Google Sheets": { icon: <FileSpreadsheet className="h-5 w-5 text-green-400" />, color: "text-green-400" },
  "Git": { icon: <GitBranch className="h-5 w-5 text-orange-500" />, color: "text-orange-500" },
  "GitHub": { icon: <GitBranch className="h-5 w-5 text-gray-800 dark:text-white" />, color: "text-gray-800 dark:text-white" },
  "VS Code": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg" className="h-5 w-5" alt="Cursor" />, color: ""
  },
  "Streamlit": { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" className="h-5 w-5" alt="Streamlit" />, color: "" },
  "Gradio": { icon: <Flame className="h-5 w-5 text-gray-400" />, color: "text-gray-400" },
  "Linux": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-5 w-5" alt="Figma" />, color: ""
  },
  "Bash": { icon: <Terminal className="h-5 w-5 text-gray-600" />, color: "text-gray-600" },
  "Excel / Google Sheets": { icon: <FileSpreadsheet className="h-5 w-5 text-green-500" />, color: "text-green-500" },
  "LangChain / LangGraph / CrewAI": { icon: <img src="https://docs.langchain.com/_static/logo.svg" className="h-5 w-5" alt="LangChain" />, color: "" },
  "TensorFlow / Keras": { icon: <Flame className="h-5 w-5 text-orange-500" />, color: "text-orange-500" },
  "Matplotlib / Seaborn": { icon: <BarChart className="h-5 w-5 text-purple-500" />, color: "text-purple-500" },
  "Face": {
    icon: <img src="https://huggingface.co/front/assets/huggingface_logo.svg" className="h-5 w-5" alt="Hugging Face" />, color: ""
  },
  "Hugging Face Transformers": {
    icon: <img src="https://huggingface.co/front/assets/huggingface_logo.svg" className="h-5 w-5" alt="Hugging Face" />, color: ""
  },
};

function getSkillIcon(skillName: string) {
  // Use only the first part if skillName contains '/'
  const mainSkill = skillName.split('/')[0].split('(')[0].trim();
  if (skillIconMap[mainSkill]) return skillIconMap[mainSkill].icon;
  if (skillIconMap[skillName]) return skillIconMap[skillName].icon;
  // Try to find a partial match for Hugging Face
  if (skillName.toLowerCase().includes('hugging face')) {
    return <img src="https://huggingface.co/front/assets/huggingface_logo.svg" className="h-5 w-5" alt="Hugging Face" />;
  }
  // Try to find a partial match for LangChain (including as first part of multi-skill)
  if (mainSkill.toLowerCase().includes('langchain') || skillName.toLowerCase().includes('langchain')) {
    return <img src="/langchain.svg" className="h-5 w-5" alt="LangChain" />;
  }
  // Try to find a partial match for Cursor
  if (mainSkill.toLowerCase().includes('cursor') || skillName.toLowerCase().includes('cursor')) {
    return <img src="/cursor.svg" className="h-5 w-5" alt="Cursor" />;
  }
  // Try to find a partial match for Figma
  if (mainSkill.toLowerCase() === 'figma' || skillName.toLowerCase().includes('figma')) {
    return <img src="/figma.svg" className="h-5 w-5" alt="Figma" />;
  }
  // Default icon
  return <Code className="h-5 w-5 text-primary" />;
}

// Certification issuer icon mapping
const certIssuerIconMap: Record<string, JSX.Element> = {
  "stanford": <img src="/stanford.svg" className="h-5 w-5" alt="Stanford" />, // Place stanford.svg in public
  "google": <img src="/google.svg" className="h-5 w-5" alt="Google" />, // Place google.svg in public
  "freecodecamp": <img src="/freecodecamp.svg" className="h-5 w-5" alt="freeCodeCamp" />, // Place freecodecamp.svg in public
  "datacamp": <img src="/datacamp.svg" className="h-5 w-5" alt="DataCamp" />, // Place datacamp.svg in public
  "coursera": <img src="/coursera.svg" className="h-5 w-5" alt="Coursera" />, // Place coursera.svg in public
};

function getCertIssuerIcon(issuer: string) {
  const lower = issuer.toLowerCase();
  for (const key in certIssuerIconMap) {
    if (lower.includes(key)) return certIssuerIconMap[key];
  }
  return null;
}

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
                        <div className="flex justify-between text-sm items-center gap-2">
                          <span className="flex items-center gap-2 text-foreground">
                            {getSkillIcon(skill.name)}
                            {skill.name}
                          </span>
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
                      <span className="flex items-center gap-2">
                        {getCertIssuerIcon(cert.issuer)}
                        {cert.issuer}
                      </span>
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