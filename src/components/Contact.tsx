import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Ready to bring your ideas to life? I'm here to help create amazing digital experiences.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold text-card-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">bhargavichamalla@gmail.com</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-card-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">+91 9704306571</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-bold text-card-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Srikakulam, AP</p>
          </div>
        </div>
        
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;