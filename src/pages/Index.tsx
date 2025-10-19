import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2024 Harish T. Built with passion for AI/ML.</p>
      </footer>
    </div>
  );
};

export default Index;