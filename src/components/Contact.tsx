import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harisholympas@gmail.com",
    href: "mailto:harisholympas@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9047996565",
    href: "tel:9047996565"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's collaborate on exciting AI/ML projects!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="glass border-border hover-glow group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <a 
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                    {item.href.startsWith("http") && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 glow-cyan font-semibold px-8"
          >
            <a href="mailto:harisholympas@gmail.com">
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;