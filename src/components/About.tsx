import { Card } from "@/components/ui/card";
import { Code, Smartphone, Trophy, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Professional React Native development across multiple industries"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Expert",
      description: "Built apps for both Android and iOS platforms with seamless deployment"
    },
    {
      icon: Trophy,
      title: "Industry Domains",
      description: "EdTech, HealthTech & FinTech application development experience"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led development teams following Agile methodology and Scrum practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate mobile app developer with a track record of delivering high-quality applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm an experienced <span className="text-primary font-semibold">Hybrid Application Developer</span> with 
                over 2 years of professional experience specializing in React Native development. Throughout my career, 
                I've had hands-on experience building applications across diverse domains including EdTech, HealthTech, and FinTech.
              </p>
              
              <p className="text-lg leading-relaxed">
                During my tenure in the industry, I've not only contributed as a team member but also taken leadership roles 
                in application development, working with <span className="text-secondary font-semibold">Agile Methodology</span> and 
                following Scrum practices to ensure efficient project delivery.
              </p>

              <p className="text-lg leading-relaxed">
                With several applications successfully deployed on both <span className="text-accent font-semibold">Play Store and App Store</span>, 
                I've become a versatile developer proficient in both Android and iOS platforms. My passion lies in 
                problem-solving and creating mobile solutions that make a real impact on users' lives.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-primary">Core Competencies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Full product lifecycle from design to deployment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Complex feature integrations (Push Notifications, Audio/Video calls)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    State management with Redux for complex applications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Native API bridge development for Android & iOS
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="project-card group">
                <div className="p-6">
                  <item.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;