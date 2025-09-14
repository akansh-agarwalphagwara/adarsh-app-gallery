import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  Palette,
  Server,
  Zap
} from "lucide-react";
import { useScrollAnimation, useProgressAnimation, useCountAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const titleRef = useScrollAnimation(0.2);
  const skillsRef = useProgressAnimation();
  const statsRef = useScrollAnimation(0.3);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-primary to-primary-glow",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Android Development", level: 85 },
        { name: "iOS Development", level: 85 },
        { name: "Expo", level: 80 },
        { name: "Native Modules", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-secondary to-accent",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Java", level: 75 },
        { name: "Swift", level: 70 },
        { name: "Kotlin", level: 65 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "from-accent to-secondary",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 75 },
        { name: "Express.js", level: 80 },
        { name: "Socket.io", level: 70 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "from-primary to-secondary",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Google Cloud", level: 65 }
      ]
    },
    {
      title: "State Management",
      icon: Settings,
      color: "from-secondary to-primary",
      skills: [
        { name: "Redux", level: 95 },
        { name: "Redux Toolkit", level: 90 },
        { name: "Context API", level: 85 },
        { name: "MobX", level: 70 },
        { name: "Zustand", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Zap,
      color: "from-accent to-primary",
      skills: [
        { name: "Git", level: 90 },
        { name: "Agile/Scrum", level: 95 },
        { name: "CI/CD", level: 80 },
        { name: "Jest", level: 85 },
        { name: "Flipper", level: 75 }
      ]
    }
  ];

  const certifications = [
    "React Native Certified Developer",
    "AWS Mobile Development",
    "Google Play Console Expert",
    "Apple Developer Program Member"
  ];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in mobile development technologies and tools
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="project-card group scroll-reveal hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`progress-bar h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out w-0`}
                          style={{ '--progress-width': `${skill.level}%` } as any}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="skill-badge group cursor-pointer">
                <Palette className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div ref={statsRef} className="mt-16 grid md:grid-cols-4 gap-8 scroll-reveal">
          <StatCard number={10} suffix="+" label="Apps Deployed" color="text-primary" />
          <StatCard number={3} suffix="" label="Industry Domains" color="text-secondary" />
          <StatCard number={2} suffix="+" label="Years Experience" color="text-accent" />
          <StatCard number={100} suffix="%" label="Client Satisfaction" color="text-primary" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, suffix, label, color }: { 
  number: number; 
  suffix: string; 
  label: string; 
  color: string; 
}) => {
  const countRef = useCountAnimation(number);
  
  return (
    <div className="text-center group hover:scale-110 transition-all duration-300">
      <div className={`text-3xl font-bold ${color} mb-2 group-hover:animate-bounce-subtle`}>
        <span ref={countRef}>0</span>{suffix}
      </div>
      <div className="text-muted-foreground group-hover:text-foreground transition-colors">{label}</div>
    </div>
  );
};

export default Skills;