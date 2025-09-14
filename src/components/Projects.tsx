import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "WUZO",
      description: "A comprehensive mobile application built with React Native featuring complex user interactions and real-time data synchronization.",
      category: "Mobile App",
      technologies: ["React Native", "Redux", "Firebase", "REST APIs"],
      github: "https://github.com/adarshagrawal/wuzo",
      playStore: "https://play.google.com/store/apps/details?id=com.wuzo",
      appStore: "https://apps.apple.com/app/wuzo/id123456789",
      featured: true
    },
    {
      name: "FinTech Dashboard",
      description: "Cross-platform financial application with secure payment integration, transaction history, and real-time market data.",
      category: "FinTech",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com/adarshagrawal/fintech-app",
      playStore: "https://play.google.com/store/apps/details?id=com.fintech",
      appStore: "https://apps.apple.com/app/fintech/id123456789"
    },
    {
      name: "EdTech Learning Platform",
      description: "Educational mobile app with video streaming, progress tracking, interactive quizzes, and offline content access.",
      category: "EdTech",
      technologies: ["React Native", "Video Processing", "SQLite", "Push Notifications"],
      github: "https://github.com/adarshagrawal/edtech-app",
      playStore: "https://play.google.com/store/apps/details?id=com.edtech",
      appStore: "https://apps.apple.com/app/edtech/id123456789"
    },
    {
      name: "HealthTech Monitor",
      description: "Health monitoring application with biometric integration, appointment scheduling, and telemedicine features.",
      category: "HealthTech",
      technologies: ["React Native", "HealthKit", "WebRTC", "Firebase"],
      github: "https://github.com/adarshagrawal/healthtech-app",
      playStore: "https://play.google.com/store/apps/details?id=com.healthtech",
      appStore: "https://apps.apple.com/app/healthtech/id123456789"
    },
    {
      name: "E-Commerce Platform",
      description: "Feature-rich e-commerce mobile application with payment gateway integration, order tracking, and customer support.",
      category: "E-Commerce",
      technologies: ["React Native", "Stripe API", "Redux", "Push Notifications"],
      github: "https://github.com/adarshagrawal/ecommerce-app",
      playStore: "https://play.google.com/store/apps/details?id=com.ecommerce",
      appStore: "https://apps.apple.com/app/ecommerce/id123456789"
    },
    {
      name: "Social Networking App",
      description: "Social platform with real-time messaging, media sharing, user profiles, and advanced privacy controls.",
      category: "Social",
      technologies: ["React Native", "Socket.io", "CloudKit", "Redux Toolkit"],
      github: "https://github.com/adarshagrawal/social-app",
      playStore: "https://play.google.com/store/apps/details?id=com.social",
      appStore: "https://apps.apple.com/app/social/id123456789"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of mobile applications I've built across various industries, 
            each deployed to both Play Store and App Store
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`project-card group ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <div className="p-6">
                {project.featured && (
                  <div className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs px-2 py-1 rounded-full mb-4">
                    <Smartphone className="h-3 w-3 mr-1" />
                    Featured Project
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-secondary hover:text-secondary-foreground"
                    asChild
                  >
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Play Store
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      App Store
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;