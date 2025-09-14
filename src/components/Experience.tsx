import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Extended Web AppTech LLP",
      location: "Hyderabad, IN",
      period: "2022 - Present",
      type: "Full-time",
      description: "Led full product lifecycle from design and development to deployment for FinTech & EdTech applications.",
      achievements: [
        "Architected and developed complex mobile applications using React Native",
        "Created serialized JSON bridges for Native APIs integration on Android & iOS",
        "Implemented advanced features: Push Notifications, Audio/Video calls, Real-time messaging",
        "Enhanced code quality through unit testing, automation, and thorough code reviews",
        "Managed state complexity using Redux for enterprise-level applications",
        "Collaborated with cross-functional teams following Agile methodology"
      ],
      technologies: ["React Native", "Redux", "Firebase", "Native APIs", "JSON", "Android", "iOS"]
    },
    {
      title: "Software Developer",
      company: "Dj Technologies",
      location: "Indore, IN",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Developed cross-platform mobile applications and coordinated with design teams for optimal UI/UX implementation.",
      achievements: [
        "Built React Native applications for both Android & iOS platforms",
        "Collaborated closely with design and development teams for UI/UX requirements",
        "Developed reusable custom components for consistent app architecture",
        "Re-designed and developed e-commerce & e-learning applications",
        "Successfully handled deployment processes to Play Store & App Store",
        "Contributed to WUZO app development and launch"
      ],
      technologies: ["React Native", "UI/UX Design", "Custom Components", "E-commerce", "E-learning"]
    },
    {
      title: "Software Developer Intern",
      company: "Cerbosys",
      location: "Indore, IN",
      period: "2021",
      type: "Internship",
      description: "Gained foundational experience in React Native development and frontend architecture.",
      achievements: [
        "Learned React Native framework fundamentals and best practices",
        "Created responsive and intuitive UI designs for mobile applications",
        "Integrated REST APIs for dynamic data fetching and manipulation",
        "Established well-structured front-end architecture patterns",
        "Developed reusable and scalable JavaScript code components",
        "Implemented responsive design principles for cross-device compatibility"
      ],
      technologies: ["React Native", "REST APIs", "JavaScript", "UI Design", "Frontend Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey as a React Native developer across different companies and roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <Card className="project-card ml-8">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary mt-2 md:mt-0"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;