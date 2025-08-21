import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Melofy TV",
      description: "TV/Desktop Application - A Smart TV Interface Experience Screens creating intuitive navigation and seamless content discovery for smart TV platforms.",
      category: "TV/Desktop Application",
      image: "/lovable-uploads/a394f176-c3e4-4171-a784-43a5d19be8e8.png",
      link: "https://www.behance.net/gallery/229006989/TV-APP-FIGMA-2025"
    },
    {
      title: "Fitify",
      description: "Fitness Mobile App (21 Screens) - A Complete Fitness App Platform with comprehensive workout tracking and health monitoring interfaces.",
      category: "Mobile App Design",
      image: "/lovable-uploads/bde3aa8a-f670-43c3-b818-6858d618aaaf.png",
      link: "https://www.behance.net/gallery/228826565/FITNESS-APP-FIGMA-2025"
    },
    {
      title: "Smartora",
      description: "Smart Home App - IoT Smart Home Control Interface designing intuitive controls for smart home devices with modern aesthetics.",
      category: "IoT Interface",
      image: "/lovable-uploads/fdd8beae-69fe-4d7d-88c3-28283ff333eb.png",
      link: "https://www.behance.net/gallery/228886393/SMART-HOME-FIGMA-2025"
    },
    {
      title: "Book Cover Design",
      description: "Creative book cover design showcasing typography and visual storytelling through compelling graphic elements.",
      category: "Graphic Design",
      image: "/lovable-uploads/62701612-3d88-4888-bf4f-f112ef1c0eb4.png",
      link: "https://www.behance.net/gallery/227714003/BOOK-COVER-DESIGN-PHOTOSHOP-2025"
    },
    {
      title: "A4 Flyer – Fresh Food",
      description: "Eye-catching flyer design promoting fresh food products with vibrant colors and appetizing visuals.",
      category: "Print Design",
      image: "/lovable-uploads/909bae84-852b-408e-a214-b930138fef5a.png",
      link: "https://www.behance.net/gallery/227906329/FLYER-DESIGN-PHOTOSHOP-2025"
    },
    {
      title: "A4 Flyer – Travel",
      description: "Travel promotional flyer featuring stunning destinations and inspiring adventure-focused design elements.",
      category: "Print Design",
      image: "/lovable-uploads/224bcb9d-59aa-49d6-b02d-25670ff668ac.png",
      link: "https://www.behance.net/gallery/228232121/FLYER-DESIGN-PHOTOSHOP-2025"
    },
    {
      title: "A4 Flyer – Photography Studio",
      description: "Professional photography studio flyer showcasing services with elegant layout and visual hierarchy.",
      category: "Print Design",
      image: "/lovable-uploads/13ba8055-3a2d-40b1-ba51-ea0783f65a90.png",
      link: "https://www.behance.net/gallery/227869827/FLYER-DESIGN-PHOTOSHOP-2025"
    },
    {
      title: "Tri Fold Brochure – Nail Art",
      description: "Elegant tri-fold brochure design for nail art services featuring beautiful layouts and service highlights.",
      category: "Print Design",
      image: "/lovable-uploads/49ed6a44-595d-42dc-a9c7-601f1f53c619.png",
      link: "https://www.behance.net/gallery/227864667/TRI-FOLD-BROUCHER-PHOTOSHOP-2025"
    },
    {
      title: "Tri Fold Brochure – Menu Card",
      description: "Restaurant menu brochure design with appealing food presentation and organized information layout.",
      category: "Print Design",
      image: "/lovable-uploads/d39abe8e-74a3-46ca-a198-9b6678e772f2.png",
      link: "https://www.behance.net/gallery/228236017/TRI-FOLD-DESIGN-PHOTOSHOP-2025"
    },
    {
      title: "Social Media Poster – Marketing",
      description: "Engaging social media marketing poster designed to capture audience attention and drive engagement.",
      category: "Social Media Design",
      image: "/lovable-uploads/a771ff1d-228e-4a38-9dac-492967c00c0e.png",
      link: "https://www.behance.net/gallery/232603155/SOCIAL-MEDIA-PHOTOSHOP-2025"
    },
    {
      title: "Social Media Poster – Marketing",
      description: "Creative marketing poster design showcasing professional layouts and visual storytelling elements.",
      category: "Social Media Design",
      image: "/lovable-uploads/46268f0b-1aae-4892-90a6-9a00e9f3a936.png",
      link: "https://www.behance.net/gallery/232596949/SOCIAL-MEDIA-POSTER-PHOTOSHOP-2025"
    },
    {
      title: "Social Media Poster – Burger",
      description: "Appetizing burger promotional poster with vibrant colors and mouth-watering food photography design.",
      category: "Social Media Design",
      image: "/lovable-uploads/a84dfd4e-ecb6-4d44-a220-cc343e955868.png",
      link: "https://www.behance.net/gallery/228768333/SOCIAL-MEDIA-PHOTOSHOP-2025"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Exploring innovative solutions through thoughtful design and user-centered approach</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;