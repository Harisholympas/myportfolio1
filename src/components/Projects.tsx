import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const projects = [
  {
    title: "Smart Case Management System",
    period: "Sept 2024 - Present",
    description: "Created a comprehensive software platform utilizing artificial intelligence to streamline case management processes, improving efficiency, accuracy, and decision-making in legal and administrative workflows.",
    details: "Integrated natural language processing (NLP - BERT) and advanced data analytics to automate document analysis, case categorization, and information retrieval, reducing manual effort by 40% and enhancing case resolution speed by 30%.",
    tags: ["AI", "NLP", "BERT", "Data Analytics"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Traffic Management System",
    period: "Sep 2024 - Nov 2024",
    description: "Developed a robust software solution leveraging artificial intelligence and Computer Vision to optimize traffic congestion, dynamically adjusting traffic signal timing according to lane density.",
    details: "Implemented a priority-based algorithm built on round-robin concepts to dynamically select signal lanes, effectively reducing waiting times and improving traffic flow.",
    tags: ["Computer Vision", "AI", "Optimization"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Industrial Cloth Segregation System",
    period: "Jun 2024 - Aug 2024",
    description: "Developed an AI-integrated cloth segregation system utilizing an AS7265 spectral sensor for real-time material identification and suction-based automated handling.",
    details: "Engineered an efficient, sensor-driven sorting mechanism eliminating manual intervention, optimizing material recovery processes for waste management applications.",
    tags: ["AI", "IoT", "Sensors", "Automation"],
    gradient: "from-green-500 to-teal-500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass border-border hover-glow group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;