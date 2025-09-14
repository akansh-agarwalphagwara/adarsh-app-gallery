import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-bg text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent mb-4">
              Adarsh Agrawal
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              React Native Developer passionate about creating innovative mobile solutions 
              that make a difference in people's lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:Adarshagrawal11111@gmail.com" className="hover:text-primary transition-colors">
                  Adarshagrawal11111@gmail.com
                </a>
              </div>
              <div className="text-muted-foreground">
                📍 Ujjain (M.P), India
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/adarshagrawal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/adarsh-agrawal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:Adarshagrawal11111@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Adarsh Agrawal. All rights reserved.
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;