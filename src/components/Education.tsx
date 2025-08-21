import { GraduationCap, BookOpen, School } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Pydah College of Engineering & Technology",
      period: "2021-2025",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Board of Intermediate (MPC)",
      institution: "Narayana Junior College, Visakhapatnam",
      period: "2019-2021",
      icon: BookOpen,
      color: "from-green-500 to-blue-600"
    },
    {
      degree: "Secondary School",
      institution: "Sai Vineeeth Public School, Pundi",
      period: "2018-2019",
      icon: School,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Educational Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} shadow-md`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
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

export default Education;