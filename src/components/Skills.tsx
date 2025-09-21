import { Code, Cloud, Palette, Settings, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Web",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "CRM & Cloud",
      icon: Cloud,
      color: "text-accent",
      skills: ["Salesforce Admin", "ServiceNow System Admin", "Google Cloud (GCP)"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: "Design",
      icon: Palette,
      color: "text-secondary",
      skills: ["Figma", "Wireframing", "Prototyping", "User Flows", "Design Systems"],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      title: "Tools",
      icon: Settings,
      color: "text-accent-glow",
      skills: ["VS Code", "CMD", "MS Word", "PowerPoint"],
      gradient: "from-accent/10 to-muted/5"
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-primary-glow",
      skills: ["Quick Learner", "Strong Communication", "Problem-Solving", "Team Leadership"],
      gradient: "from-primary/10 to-secondary/5"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-accent/15 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse float" style={{
          animationDelay: '1s'
        }} />
        
        {/* Tech Icons Floating */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-secondary/40 rounded-lg rotate-12 float" style={{
          animationDelay: '0.5s'
        }} />
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-accent/50 rounded-full animate-spin" style={{
          animationDuration: '4s'
        }} />
        <div className="absolute top-1/2 left-16 w-2 h-8 bg-primary/40 rounded-full" style={{
          animation: 'float 3s ease-in-out infinite, spin 8s linear infinite'
        }} />
        
        {/* Code Particles */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/60 rounded-full animate-pulse"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 1.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Binary Lines */}
        <div className="absolute top-32 right-20 w-24 h-px bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0 float" />
        <div className="absolute bottom-24 left-24 w-32 h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 float" style={{
          animationDelay: '1.8s'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud technologies, and modern design practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${category.gradient} p-4 rounded-xl mb-4`}>
                <category.icon size={32} className={`${category.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse`} />
                    <span className="text-muted-foreground hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Full-Stack', 'Cloud Native', 'UI/UX Design', 'System Admin', 'Problem Solver', 'Team Player'].map((badge, index) => (
              <span
                key={badge}
                className="glass-nav text-sm font-medium hover-glow animate-fade-in"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;