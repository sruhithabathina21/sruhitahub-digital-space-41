import { Github, ExternalLink, Droplets, Hand, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "NGO Donations & Volunteer Management App",
      description: "Salesforce application to manage NGO donations, volunteers, and events. Built with custom objects, automated workflows, and comprehensive reporting for enhanced organizational efficiency.",
      technologies: ["Salesforce", "Apex", "Flow Builder", "Lightning Platform"],
      github: "https://github.com/sruhithabathina21/NGO-Donor-Volunteer-Management",
      icon: Database,
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
      features: ["Custom Objects & Fields", "Automated Workflows", "Dashboards & Reports", "Record Management"],
      isSalesforce: false
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing resume, skills, projects, and YouTube channel. Features responsive design, smooth animations, and direct communication through EmailJS integration.",
      technologies: ["HTML", "CSS", "JavaScript", "EmailJS"],
      github: "https://github.com/sruhithabathina21", // User can update this
      icon: Globe,
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
      features: ["Responsive Design", "Contact Form", "Smooth Animations", "GitHub Integration"]
    },
    {
      title: "Rainwater Harvesting Indicator",
      description: "Desktop application built with Python and Tkinter to analyze rainfall data for water conservation. Features data visualization, trend analysis, and conservation recommendations.",
      technologies: ["Python", "Tkinter", "Data Analysis"],
      github: "https://github.com/sruhithabathina21/Rainwater-Harvest-Indicator",
      icon: Droplets,
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
      features: ["Rainfall Data Analysis", "Conservation Metrics", "Visual Dashboard", "Water Management Tools"]
    },
    {
      title: "Text-to-Sign Language Converter",
      description: "Inclusive communication tool that converts typed text into sign language images. Built with Python for accessibility and enhanced communication for the hearing-impaired community.",
      technologies: ["Python", "Tkinter", "Image Processing"],
      github: "https://github.com/sruhithabathina21/Sign-Language-Converter",
      icon: Hand,
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5",
      features: ["Text Input Processing", "Sign Language Mapping", "Image Generation", "Accessibility Focus"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Project-themed Orbs */}
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse float" style={{
          animationDelay: '1.2s'
        }} />
        
        {/* Code Symbols */}
        <div className="absolute top-24 right-24 text-primary/30 text-2xl font-mono float">{'<>'}</div>
        <div className="absolute bottom-32 left-32 text-secondary/30 text-xl font-mono float" style={{
          animationDelay: '1.5s'
        }}>{'{ }'}</div>
        <div className="absolute top-1/2 right-1/3 text-accent/30 text-lg font-mono float" style={{
          animationDelay: '2s'
        }}>{'[ ]'}</div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 left-40 w-6 h-6 border border-primary/40 rotate-45 animate-spin" style={{
          animationDuration: '8s'
        }} />
        <div className="absolute bottom-40 right-40 w-4 h-4 bg-secondary/50 rounded-sm float" />
        
        {/* Tech Particles */}
        <div className="absolute inset-0 opacity-60">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/50 rounded-full animate-pulse"
              style={{
                top: `${5 + Math.random() * 90}%`,
                left: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.8 + Math.random() * 1.2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that combine technical expertise with real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card hover-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-br ${project.gradient} p-6 rounded-xl mb-6`}>
                <div className="flex items-center justify-between mb-4">
                  <project.icon size={32} className={`${project.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="flex gap-2">
                    {!project.isSalesforce && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass rounded-lg hover-glow transition-colors hover:text-primary"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass-nav text-xs font-medium hover-glow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {project.isSalesforce ? (
                  <div className="w-full bg-gradient-to-r from-primary to-secondary rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-2 text-primary-foreground font-semibold">
                      <Database size={18} />
                      Salesforce Project
                    </div>
                  </div>
                ) : (
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 border-0 text-primary-foreground font-semibold"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      View on GitHub
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Placeholder */}
        <div className="mt-12 text-center">
          <div className="glass-card hover-glow max-w-md mx-auto">
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                <ExternalLink size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                I'm constantly working on new innovative projects. Stay tuned for updates!
              </p>
              <Button
                asChild
                variant="outline"
                className="glass-nav hover-glow"
              >
                <a
                  href="https://github.com/sruhithabathina21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  View All Repositories
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;