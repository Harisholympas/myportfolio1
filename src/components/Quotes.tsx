import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  {
    quote: "AI is the new electricity. Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that I don't think AI will transform in the next several years.",
    author: "Andrew Ng",
    role: "Co-founder of Coursera, Former head of Baidu AI"
  },
  {
    quote: "If the perception is that AI is going to take over the world, then we need to be concerned about that. But if you actually look at what's happening, it's not nearly as scary as it sounds.",
    author: "Geoffrey Hinton",
    role: "Godfather of AI, Turing Award Winner"
  },
  {
    quote: "Our intelligence is what makes us human, and AI is an extension of that quality. The future is about augmenting human intelligence, not replacing it.",
    author: "Yann LeCun",
    role: "Chief AI Scientist at Meta"
  },
  {
    quote: "The development of AI is as fundamental as the creation of the microprocessor, the personal computer, the Internet, and the mobile phone. It will change the way people work, learn, travel, get health care, and communicate with each other.",
    author: "Sam Altman",
    role: "CEO of OpenAI"
  }
];

const Quotes = () => {
  return (
    <section id="quotes" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          AI <span className="text-gradient">Thought Leaders</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Wisdom from pioneers shaping the future of artificial intelligence
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((item, index) => (
            <Card 
              key={index}
              className="glass border-border hover-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-1">
                      {item.author}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <svg 
                      className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" 
                      fill="currentColor" 
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
                    </svg>
                    <p className="text-foreground/90 leading-relaxed pl-6 italic">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;