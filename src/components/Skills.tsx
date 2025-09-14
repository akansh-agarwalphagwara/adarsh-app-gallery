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

const Skills = () => {
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in mobile development technologies and tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card group">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
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
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Apps Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">3</div>
            <div className="text-muted-foreground">Industry Domains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;