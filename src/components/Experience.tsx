import { Briefcase, MapPin, Clock } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      role: "UI/UX & Graphic Design Intern",
      company: "PurpleLane Institute",
      type: "Not Remote, Hands-on Experience",
      skills: ["UI/UX Design", "Graphic Design", "Hands-on Training"],
      icon: Briefcase,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {experienceData.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div 
                key={index} 
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span className="text-lg text-muted-foreground font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;