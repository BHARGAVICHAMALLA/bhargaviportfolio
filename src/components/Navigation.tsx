import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">BC</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors font-medium">
              Skills
            </a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors font-medium">
              Educational Journey
            </a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors font-medium">
              Experience Journey
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            onClick={() => window.open('/lovable-uploads/fac57643-7a57-4ffd-9f9c-091d84d14e8a.png', '_blank')}
          >
            📥 Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;