import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(216 50% 4% / 0.9), hsl(216 50% 8% / 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent/40 rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent animate-glow">
                Adarsh Agrawal
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              React Native Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80">
              2+ Years of Professional Experience
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Experienced in building cross-platform mobile applications for EdTech, HealthTech & FinTech domains. 
            Specialized in React Native with expertise in Redux, Firebase, and native API integrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={scrollToProjects}
              className="btn-hero group"
              size="lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="mailto:Adarshagrawal11111@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://linkedin.com/in/adarsh-agrawal" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://github.com/adarshagrawal" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;