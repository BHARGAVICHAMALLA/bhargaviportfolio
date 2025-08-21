import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { 
  User, Palette, Monitor, Smartphone, PenTool, Layout, Search, 
  Camera, Image, Layers, Brush, Type, Video, 
  Figma, Code, Globe, Zap, GitBranch, Target, MousePointer2,
  Sparkles, Lightbulb, Package
} from "lucide-react";

const Skills = () => {
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: any } = {
      "Problem Solving": Target,
      "User Interface": Monitor,
      "User Experience": User,
      "Mobile & Web": Smartphone,
      "Sketching": PenTool,
      "Prototyping": Layout,
      "Wireframing": Layout,
      "User Research": Search,
      "Responsive Design": Monitor,
      "Color Theory": Palette,
      "Design System": Layout,
      "Visual Design": Sparkles,
      "Typography": Type,
      "Adobe Photoshop": Image,
      "Adobe Illustrator": Brush,
      "Adobe XD": Layout,
      "Canva": Camera,
      "Figma": Figma,
      "Poster Design": Image,
      "Flyer Design": Image,
      "Brochure Design": Image,
      "Social Media Content Design": Camera,
      "Packaging Design": Package,
      "Branding": Lightbulb,
      "Logo Design": Sparkles,
      "Infographics": Layers,
      "HTML": Code,
      "CSS": Brush,
      "JavaScript": Code,
      "Zeplin": Layout,
      "GitLab": GitBranch,
      "Photoshop": Image,
      "Illustrator": Brush
    };
    
    return iconMap[skillName] || Code;
  };

  const uiuxSkills = [
    { name: "Problem Solving", percentage: 92 },
    { name: "User Interface", percentage: 90 },
    { name: "User Experience", percentage: 88 },
    { name: "Mobile & Web", percentage: 95 },
    { name: "Sketching", percentage: 85 },
    { name: "Prototyping", percentage: 90 },
    { name: "Wireframing", percentage: 88 },
    { name: "User Research", percentage: 85 },
    { name: "Responsive Design", percentage: 93 },
    { name: "Color Theory", percentage: 87 },
    { name: "Design System", percentage: 89 },
    { name: "Visual Design", percentage: 91 },
    { name: "Typography", percentage: 90 }
  ];

  const graphicSkills = [
    { name: "Adobe Photoshop", percentage: 95 },
    { name: "Adobe Illustrator", percentage: 90 },
    { name: "Adobe XD", percentage: 90 },
    { name: "Canva", percentage: 90 },
    { name: "Figma", percentage: 95 },
    { name: "Poster Design", percentage: 90 },
    { name: "Flyer Design", percentage: 90 },
    { name: "Brochure Design", percentage: 88 },
    { name: "Social Media Content Design", percentage: 92 },
    { name: "Packaging Design", percentage: 85 },
    { name: "Branding", percentage: 88 },
    { name: "Logo Design", percentage: 90 },
    { name: "Infographics", percentage: 87 }
  ];

  const technicalSkills = [
    { name: "Figma", percentage: 95 },
    { name: "Photoshop", percentage: 95 },
    { name: "Illustrator", percentage: 90 },
    { name: "Adobe XD", percentage: 90 },
    { name: "Zeplin", percentage: 75 },
    { name: "Canva", percentage: 90 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 88 },
    { name: "JavaScript", percentage: 85 },
    { name: "GitLab", percentage: 80 }
  ];

  useEffect(() => {
    // Initialize all progress values to 0
    const initialValues: { [key: string]: number } = {};
    [...uiuxSkills, ...graphicSkills, ...technicalSkills].forEach(skill => {
      initialValues[skill.name] = 0;
    });
    setProgressValues(initialValues);

    // Animate progress bars with staggered timing
    const timer = setTimeout(() => {
      const newValues: { [key: string]: number } = {};
      [...uiuxSkills, ...graphicSkills, ...technicalSkills].forEach((skill, index) => {
        setTimeout(() => {
          setProgressValues(prev => ({
            ...prev,
            [skill.name]: skill.percentage
          }));
        }, index * 100); // Stagger each bar by 100ms
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getGradientColor = (index: number) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-blue-600", 
      "from-purple-500 to-pink-600",
      "from-orange-500 to-red-600",
      "from-teal-500 to-cyan-600",
      "from-indigo-500 to-purple-600",
      "from-pink-500 to-rose-600",
      "from-yellow-500 to-orange-600",
      "from-emerald-500 to-teal-600",
      "from-violet-500 to-purple-600",
      "from-sky-500 to-blue-600",
      "from-rose-500 to-pink-600",
      "from-amber-500 to-yellow-600"
    ];
    return gradients[index % gradients.length];
  };

  const renderSkillItem = (skill: { name: string; percentage: number }, index: number) => {
    const IconComponent = getSkillIcon(skill.name);
    const gradientClass = getGradientColor(index);
    
    return (
      <div key={index} className="space-y-3 group">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${gradientClass} shadow-md group-hover:shadow-lg transition-all duration-300`}>
              <IconComponent size={16} className="text-white" />
            </div>
            <span className="text-sm text-card-foreground font-medium">{skill.name}</span>
          </div>
          <span className="text-sm text-muted-foreground font-semibold">{skill.percentage}%</span>
        </div>
        <Progress 
          value={progressValues[skill.name] || 0} 
          className="h-3 bg-muted transition-all duration-1000 ease-out"
        />
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">A comprehensive toolkit for creating exceptional digital experiences</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* UI/UX Design Skills */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-card-foreground">UI/UX Design Skills</h3>
            </div>
            <div className="space-y-5">
              {uiuxSkills.map((skill, index) => renderSkillItem(skill, index))}
            </div>
          </div>
          
          {/* Graphic Design Skills */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-card-foreground">Graphic Design Skills</h3>
            </div>
            <div className="space-y-5">
              {graphicSkills.map((skill, index) => renderSkillItem(skill, index + uiuxSkills.length))}
            </div>
          </div>
          
          {/* Tools & Software + Technical Skills */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-card-foreground">Tools & Software + Technical Skills</h3>
            </div>
            
              <div className="mb-6">
                <h4 className="text-md font-semibold text-card-foreground mb-3">Tools & Software</h4>
                <div className="space-y-5">
                  {technicalSkills.slice(0, 6).map((skill, index) => renderSkillItem(skill, index + uiuxSkills.length + graphicSkills.length))}
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-semibold text-card-foreground mb-3">Technical Skills</h4>
                <div className="space-y-5">
                  {technicalSkills.slice(6).map((skill, index) => renderSkillItem(skill, index + uiuxSkills.length + graphicSkills.length + 6))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;