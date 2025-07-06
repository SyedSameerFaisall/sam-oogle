import { ArrowLeft, MapPin, Calendar, Mail, GraduationCap, Download, Award, User, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

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

        <div className="text-center mb-6">
          {/* Removed the top WhatsApp button */}
        </div>

        <div className="space-y-8 animate-fade-in">
          {/* Hero Section with Profile */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
            {/* Profile Image Left */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-[#3a1550] bg-background flex items-center justify-center">
                <Avatar className="w-52 h-52 rounded-full">
                  <AvatarImage src="/profile.jpg" alt="Sameer" className="object-cover w-full h-full" />
                  <AvatarFallback className="text-5xl bg-primary/10 rounded-full">
                    <User className="w-20 h-20" />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            {/* Name, Desc, Buttons Right */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                <span className="text-[#3a1550]">Syed Sameer Faisal</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
              Future-Forward Engineer: Passionate about AI, Data, and Building Scalable Solutions
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {/* Add badges here if needed */}
              </div>
              <div className="flex gap-4 mt-2">
                <Button asChild variant="hero" className="min-w-[150px]">
                  <a
                    href="/Sameer-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View CV
                  </a>
                </Button>
                <Button asChild variant="hero" className="min-w-[150px]">
                  <a
                    href="https://wa.me/447570903007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/whatsapp.svg" alt="WhatsApp" className="sm:mr-2 h-4 w-4 inline" />
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>


          {/* My Story */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                My story isn't one of privilege, but of a relentless, almost visceral ambition ignited in a 
                middle-class home. While other children explored playgrounds, my childhood was often spent 
                grinding, pushing limits not just in academics, but in disciplined routines, knowing that every 
                ounce of effort was an investment in a future I desperately craved. The relentless efforts and the 
                countless sleepless nights paid off: acceptances poured in from universities across the world, 
                each offering a fully funded scholarship, a profound validation of years of sacrifice. 
              </p>
              <p className="text-muted-foreground">
                Now at UCL, I channel that same fierce drive into the exhilarating world of data
                science and software engineering. I'm utterly obsessed with crafting elegant digital solutions that
                genuinely make a difference, whether it's teaching machines to see, predicting complex patterns, 
                or just making life a little smoother through clever code. When I'm not wrestling with algorithms or 
                optimizing datasets until they practically sing, you'll find me channeling that focus on the cricket 
                pitch or pushing my limits at the gym. It’s where I recharge, strategize, and remember that every 
                challenge, big or small, can be overcome with a disciplined approach and a healthy dose of determination. 
                Let's build something truly remarkable together!
              </p>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-2xl">
                <GraduationCap className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                Educational Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="pb-10">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img src="/ucl.svg" alt="UCL" className="w-7 h-7 mr-2" />
                    <div>
                      <h3 className="font-semibold text-foreground">BSc Data Science</h3>
                      <p className="text-muted-foreground">University College London</p>
                      <p className="text-sm text-muted-foreground mt-1">First Class Honors</p>
                    </div>
                  </div>
                  <Badge variant="outline">Sep 2024 - May 2027</Badge>
                </div>
              </div>
              <div className="pb-10">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img src="/hkust.svg" alt="HKUST" className="w-7 h-7 mr-2" />
                    <div>
                      <h3 className="font-semibold text-foreground">BEng Computer Science</h3>
                      <p className="text-muted-foreground">Hong Kong University of Science and Technology</p>
                      <p className="text-sm text-muted-foreground mt-1">Dropped out - Completed one year (with first-class honors) before switching to UCL.</p>
                    </div>
                  </div>
                  <Badge variant="outline">Aug 2023 - Aug 2024</Badge>
                </div>
              </div>
              <div className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img src="/nixor.svg" alt="Nixor College" className="w-7 h-7 mr-2" />
                    <div>
                      <h3 className="font-semibold text-foreground">Alevels (Math, Further Math, Physics, Chemistry, CompSci)</h3>
                      <p className="text-muted-foreground">Nixor College</p>
                      <p className="text-sm text-muted-foreground mt-1">5A*s, Top 0.001% grades in country</p>
                    </div>
                  </div>
                  <Badge variant="outline">Aug 2021 - May 2023</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Global Undergraduate Scholar */}
                <div className="flex items-start gap-3">
                  <img src="/ucl.svg" alt="UCL" className="w-7 h-7 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Global Undergraduate Scholar</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      UCL &middot; Sep 2024
                    </div>
                    <div className="text-sm text-muted-foreground">Scholarship amount of £112,500 across 3 years awarded to only 30 people around the world based on academic merit and financial need</div>
                  </div>
                </div>
                {/* 135% Undergraduate Scholarship */}
                <div className="flex items-start gap-3">
                  <img src="/hkust.svg" alt="HKUST" className="w-7 h-7 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">135% Undergraduate Scholarship</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      Hong Kong University Of Science and Technology &middot; Aug 2023
                    </div>
                    <div className="text-sm text-muted-foreground">Granted 135% scholarship accounting an amount of nearly $1,000,000HKD over 4 years based on academic excellence and brilliant extra-cirriculars.</div>
                  </div>
                </div>
                {/* Academic Distinction with the Highest Honor */}
                <div className="flex items-start gap-3">
                  <img src="/nixor.svg" alt="Nixor College" className="w-7 h-7 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Academic Distinction with the Highest Honor</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      Nixor College &middot; Jun 2023
                    </div>
                    <div className="text-sm text-muted-foreground">Awarded to students who have received the highest achievable term grades (A*s) in all subjects, with an extremely challenging course load of five subjects. One of the five students in Nixor to achieve this award.</div>
                  </div>
                </div>
                {/* Dean's List */}
                <div className="flex items-start gap-3">
                  <img src="/nixor.svg" alt="Nixor College" className="w-7 h-7 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Dean's List</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      Nixor College &middot; Jun 2023
                    </div>
                    <div className="text-sm text-muted-foreground">Name inscribed in Dean's List of Nixor College for excellence in academics.</div>
                  </div>
                </div>
                {/* Honor Roll */}
                <div className="flex items-start gap-3">
                  <img src="/nixor.svg" alt="Nixor College" className="w-7 h-7 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Honor Roll</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      Nixor College &middot; Jun 2023
                    </div>
                    <div className="text-sm text-muted-foreground">Name inscribed in Honor Roll by Nixor College for excellence in academics.</div>
                  </div>
                </div>
                {/* 7th rank nationally - International Kangaroo Math competition */}
                <div className="flex items-start gap-3">
                  <img src="/ikmc.svg" alt="IKMC" className="w-7 h-7 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">7th rank nationally - International Kangaroo Math competition</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      International Kangaroo Math competition &middot; Feb 2022
                    </div>
                    <div className="text-sm text-muted-foreground">Top in school for IKMC.</div>
                  </div>
                </div>
                {/* Fully-funded A Level Scholarship */}
                <div className="flex items-start gap-3">
                  <img src="/nixor.svg" alt="Nixor College" className="w-7 h-7 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Fully-funded A Level Scholarship</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      Nixor College &middot; Aug 2021
                    </div>
                    <div className="text-sm text-muted-foreground">Full scholarship on basis of O Level grades – 9A*s.</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hobbies & Interests Section */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Hobbies & Interests
              </CardTitle>
              <CardDescription>What I enjoy doing in my free time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Sports & Fitness */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Sports & Fitness
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      Cricket - Passionate player and strategist
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      Football - Team sports enthusiast
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      Gym & Fitness - Regular workout routine
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      Hiking - Exploring nature trails
                    </div>
                  </div>
                </div>

                {/* Tech & Learning */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Tech & Learning
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      AI/ML Research - Exploring latest developments
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      Technical Projects - Applying skills practically
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      Tech Communities - Networking and mentoring
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                      Continuous Learning - Always exploring new skills
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;