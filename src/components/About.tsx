const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Personal Profile</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Creative and self-motivated UI/UX and Graphic Designer with hands-on experience in designing user interfaces and visual elements. I developed my skills through internships at ExcelR and Codissoft and received training from Purplolane Institute.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion for design led me to enhance my knowledge through self-learning and personal projects. My portfolio and landing page projects showcase my expertise. I strive to create seamless, engaging user experiences by blending creativity with functionality.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">Contact Details</h4>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Phone:</strong> +91 9704306571, 7207133385</p>
                <p><strong className="text-foreground">Email:</strong> bhargavichamalla@gmail.com</p>
                <p><strong className="text-foreground">Location:</strong> 5-51 Venugopala Puram, Srikakulam-532201, AP</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">English</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Telugu</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">Hobbies & Interests</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">Drawing</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">Gardening</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;