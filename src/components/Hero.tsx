import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-card border-2 border-primary rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">BC</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-primary">Bhargavi</span>{" "}
          <span className="text-foreground">Chamalla</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          UI/UX & Graphic Designer crafting seamless digital experiences with creativity and functionality
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8"
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://drive.google.com/uc?export=download&id=12rLRUyx4U_dmyA-HMRlT89Pb6teU1UJH';
              link.download = 'Bhargavi_Chamalla_Resume.pdf';
              link.click();
            }}
          >
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <button
            onClick={() => window.open('https://www.linkedin.com/in/chamalla-bhargavi-aa56a0310/', '_blank')}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </button>
          <button
            onClick={() => window.open('https://www.behance.net/chamallbhargavi', '_blank')}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Behance Portfolio"
          >
            <ExternalLink size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;