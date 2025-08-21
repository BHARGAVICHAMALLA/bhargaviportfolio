const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                📧 bhargavichamalla@gmail.com
              </p>
              <p className="text-muted-foreground">
                📱 +91 9704306571
              </p>
              <p className="text-muted-foreground">
                📍 Srikakulam, AP
              </p>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-4">About</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              UI/UX Designer passionate about creating exceptional digital experiences 
              through innovative design solutions and user-centered approaches.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Bhargavi Chamalla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;