import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold">
              Hi, I'm{" "}
              <span className="text-gradient animate-glow-pulse">
                T.Harish
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              AI/ML Engineer
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about developing Machine Learning and Deep Learning solutions. 
            Skilled in building intelligent systems with PyTorch, OpenCV, and Python.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan hover-glow font-semibold px-8"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-8">
            <a 
              href="mailto:harisholympas@gmail.com"
              className="text-foreground hover:text-primary transition-colors p-2 hover-glow rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/harish-t-80b406291/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors p-2 hover-glow rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Harisholympas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors p-2 hover-glow rounded-lg"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="tel:+91 9047996565"
              className="text-foreground hover:text-primary transition-colors p-2 hover-glow rounded-lg"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
