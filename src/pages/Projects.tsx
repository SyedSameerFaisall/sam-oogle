import { ArrowLeft, ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
const projects = [
  {
    title: "AI Financial Analyst",
    description:
      "A cutting-edge, multi-agent system engineered with LangGraph and LangChain, designed to autonomously perform comprehensive stock evaluations across four core dimensions: Technical Analysis, Fundamental Valuation, News Sentiment, and Analyst Consensus. The agent intelligently orchestrates these modules to deliver a clear, evidence-backed investment verdict (BUY/HOLD/SELL) with confidence scoring. All insights are delivered through a sleek, interactive Streamlit dashboard, making institutional-grade analysis accessible in real time.",
    technologies: [
      "Python", "LangChain", "LangGraph", "Streamlit", "YFinance", "TA-Lib", "Plotly", "Tavily", "BeautifulSoup", "Markdown2", "FPDF2"
    ],
    image: "/ai-financial-analyst.jpg",
    liveUrl: "http://localhost:8501",
    githubUrl: "https://github.com/SyedSameerFaisall/Financial-Investment-Agent"
  },
  {
    title: "Brain Tumor Classifier",
    description:
      "Developed a high-accuracy deep learning model using a custom-built Convolutional Neural Network (CNN) to classify brain tumors from MRI scans into four categories: Glioma, Meningioma, Pituitary Tumor, and No Tumor. The project showcases a complete end-to-end machine learning pipeline—from data acquisition and preprocessing to training, evaluation, and result visualization. Achieved over 96% test accuracy, demonstrating the effectiveness of tailored CNN architectures in real-world medical imaging tasks.",
    technologies: [
      "Python", "PyTorch", "Torchvision", "KaggleHub", "Matplotlib", "Seaborn", 'Pandas', 'Numpy'
    ],
    image: "/brain-tumor-classifier.png",
    liveUrl: "#",
    githubUrl: "https://github.com/SyedSameerFaisall/Brain-MRI-Classifier"
  },
  {
    title: "Semantic Book Recommender",
    description:
      "A powerful, semantic book recommendation system powered by OpenAI LLMs and vector search. It intelligently matches user queries to books using dense embeddings and performs zero-shot classification to categorize titles as fiction or non-fiction. The system also extracts emotional tone (e.g., suspenseful, joyful, tragic) from text using sentiment analysis, enabling highly personalized filtering. All functionality is wrapped in an intuitive Gradio web app, delivering real-time, human-like recommendations that go beyond simple keyword matching.",
    technologies: [
      "Python", "LangChain", "Transformers", "ChromaDB", "Gradio", "Pandas", "Seaborn", "OpenCV", "ipywidgets"
    ],
    image: "/book-recommender-system.png",
    liveUrl: "#",
    githubUrl: "https://github.com/SyedSameerFaisall/Book-Recommender-System"
  },
  {
    title: "HEP Citation Network Analysis",
    description:
      "A rigorous statistical analysis of citation behavior within the High Energy Physics – Phenomenology (hep-ph) domain on arXiv, spanning nearly a decade of research (1993–2001). Conducted entirely in base R with fully reproducible R Markdown reporting, the project explores in- and out-citation distributions, models longitudinal trends in reference counts, and investigates seasonal patterns in paper impact. Demonstrates strong applied statistical reasoning and data storytelling in a real-world scientific context, without relying on external libraries.",
    technologies: [
      "R", "R Markdown", "knitr"
    ],
    image: "/hep-citation-network.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/SyedSameerFaisall/HEP-citation-analysis"
  },
  {
  title: "Support Data Insight Analysis",
  description:
    "An autonomous, multi-agent data insight pipeline built with CrewAI to process and analyze customer support ticket data. The system features specialized agents for suggestion generation, tabular reporting, and chart creation, orchestrated in a cohesive Crew to simulate, train, and execute structured automated LLM workflows. YAML-based configuration makes it modular and reusable, while the integration of FileReadTool enables real-time CSV analysis. Designed to demonstrate advanced task orchestration and smooth tool-assisted LLM workflows in a business intelligence context.",
  technologies: [
    "Python", "CrewAI", "YAML", "Pandas", "Matplotlib", "Numpy", "FastAPI"
  ],
  image: "/data-analysis.jpg",
  liveUrl: "#",
  githubUrl: "https://github.com/SyedSameerFaisall/Data-Analyzer"
  },
  {
  title: "FareShare Database System",
  description:
    "A comprehensive relational database system designed for FareShare, a UK-based charity tackling food waste and hunger. This project models the end-to-end redistribution of surplus food from suppliers to charities, with robust normalization (1NF–3NF), regional impact tracking, and integration of real-world sustainability metrics. Aligned with key UN Sustainable Development Goals (SDG 2, 12, 13), the system quantifies reductions in food insecurity, waste, and greenhouse gas emissions. Delivered with realistic synthetic datasets and accompanied by detailed design reports.",
  technologies: [
    "SQL", "ER Diagrams", "PostgreSQL"
  ],
  image: "/food.png",
  liveUrl: "#",
  githubUrl: "https://github.com/SyedSameerFaisall/FareShare-Database"
  },
  {
  title: "Neural Network & Autograd Engine",
  description:
    "A minimalist deep learning library built from scratch in Python to understand the core mechanics of backpropagation and gradient descent. Implements a scalar-valued autograd engine that constructs and traverses a computational graph, enabling automatic differentiation via the `.backward()` method. Also includes a lightweight neural network library featuring neurons, layers, and multi-layer perceptrons (MLPs). Graphviz integration provides visualization of the forward and backward passes through the network.",
  technologies: [
    "Python", "Numpy", "Graphviz"
  ],
  image: "/neural-network.jpg",
  liveUrl: "#",
  githubUrl: "https://github.com/SyedSameerFaisall/NN-From-Scratch"
  },
  {
  title: "Credit Card Approval Predictor",
  description:
    "A machine learning project that automates credit card approval decisions by analyzing applicant data. Designed to replicate industry-grade decision systems, this model handles real-world imperfections like missing values, imbalanced features, and mixed data types. It incorporates advanced feature engineering (age buckets, DTI ratios), multiple classification models, and exhaustive hyperparameter tuning to optimize prediction accuracy. Logistic Regression and Random Forest were top performers with cross-validation scores above 86%.",
  technologies: [
    "Python", "Pandas", "Numpy", "Scikit-learn", "Matplotlib", "Seaborn"
  ],
  image: "/credit-card-approval.png",
  liveUrl: "#",
  githubUrl: "https://github.com/SyedSameerFaisall/Credit-Card-Approval-System"
  }
];

const Projects = () => {
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
              <span className="text-primary">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A portfolio of cutting-edge technical skills and globally recognized certifications that underpin my journey as a forward-thinking technologist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group flex flex-col h-full animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      {index !== 0 && project.liveUrl !== "#" && (
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm group-hover:text-muted-foreground/80 transition-colors">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 text-xs px-2 py-1 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    {index !== 0 && project.liveUrl !== "#" && (
                    <Button 
                        variant="hero"
                      size="sm"
                      className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                    </Button>
                    )}
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

export default Projects;