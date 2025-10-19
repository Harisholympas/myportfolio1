import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Intermediate" },
      { name: "C", level: "Intermediate" }
    ]
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Deep Learning", level: "Intermediate" },
      { name: "Computer Vision", level: "Intermediate" },
      { name: "NLP", level: "Beginner" },
      { name: "CNN", level: "Intermediate" }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "AWS", level: "Intermediate" },
      { name: "Power BI", level: "Advanced" },
      { name: "Tableau", level: "Advanced" },
      { name: "Raspberry Pi", level: "Expert" },
      { name: "Excel", level: "Expert" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Presentation", level: "Expert" },
      { name: "Teamwork", level: "Advanced" },
      { name: "Data Analytics", level: "Advanced" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground glow-cyan";
    case "Advanced":
      return "bg-secondary text-secondary-foreground glow-purple";
    case "Intermediate":
      return "bg-muted text-foreground border border-primary/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-2xl hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className={`${getLevelColor(skill.level)} px-4 py-2 text-sm font-medium transition-all hover:scale-105`}
                  >
                    {skill.name}
                    <span className="ml-2 text-xs opacity-75">
                      ({skill.level})
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;