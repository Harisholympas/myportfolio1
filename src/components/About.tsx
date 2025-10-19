const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
                Personal Profile
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate AIML engineer with experience in developing Machine Learning and Deep Learning 
                solutions using PyTorch and OpenCV as frameworks in Python. Skilled in C, JAVA & Python. 
                Strong problem-solving abilities and committed to continuous learning in AI.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl hover-glow animate-fade-in">
              <h3 className="text-2xl font-display font-semibold mb-6 text-secondary">
                Education
              </h3>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">
                  Dr. Mahalingam College of Engineering
                </h4>
                <p className="text-primary font-medium">
                  B.E - CSE (Artificial Intelligence & Machine Learning)
                </p>
                <p className="text-muted-foreground">
                  2023 - 2027 | Pollachi, Coimbatore
                </p>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl hover-glow animate-fade-in">
              <h3 className="text-2xl font-display font-semibold mb-4 text-secondary">
                Achievements
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Won 1st award in several Ideathons and Hackathons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Published a research paper in NLP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Successfully completed the role of class representative & industrial visit coordinator</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;