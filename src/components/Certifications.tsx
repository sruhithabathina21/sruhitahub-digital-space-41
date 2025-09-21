import { Award, ExternalLink, Cloud, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      provider: "Google Cloud",
      description: "Demonstrated expertise in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform.",
      icon: Cloud,
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
      link: "https://www.credly.com/badges/3f542329-ee0a-4e55-859d-8517e8c426e6/public_url",
      skills: ["Cloud Architecture", "GCP Services", "Infrastructure Management", "DevOps"]
    },
    {
      title: "Salesforce Certified AI Associate",
      provider: "Salesforce",
      description: "Certified in AI-powered CRM solutions, automation, and intelligent workflow design within the Salesforce ecosystem.",
      icon: Zap,
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
      link: "https://www.salesforce.com/trailblazer/sruhitha04",
      skills: ["AI Integration", "CRM Automation", "Workflow Design", "Data Analysis"]
    },
    {
      title: "ServiceNow Certified System Administrator",
      provider: "ServiceNow",
      description: "Expert in ServiceNow platform administration, ITSM implementation, and enterprise service management solutions.",
      icon: Settings,
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5",
      link: "https://drive.google.com/file/d/1cXaqLFf21lD5pWJwpcHUuuK82R6gkjEA/view?usp=sharing",
      skills: ["System Administration", "ITSM", "Service Management", "Process Automation"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-45">
        {/* Certification Orbs */}
        <div className="absolute top-1/3 right-1/6 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-secondary/15 rounded-full blur-2xl animate-pulse float" style={{
          animationDelay: '1.4s'
        }} />
        
        {/* Badge Elements */}
        <div className="absolute top-28 left-28 w-6 h-6 border-2 border-primary/40 rounded-full animate-spin" style={{
          animationDuration: '10s'
        }} />
        <div className="absolute bottom-36 right-36 w-4 h-4 bg-accent/50 rounded-full float" />
        <div className="absolute top-1/2 left-1/3 w-3 h-6 bg-secondary/40 rounded-full" style={{
          animation: 'float 3.5s ease-in-out infinite'
        }} />
        
        {/* Achievement Lines */}
        <div className="absolute top-36 right-24 w-24 h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 float" />
        <div className="absolute bottom-32 left-32 w-32 h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 float" style={{
          animationDelay: '1.7s'
        }} />
        
        {/* Success Particles */}
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/60 rounded-full animate-pulse"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${8 + Math.random() * 84}%`,
                animationDelay: `${Math.random() * 2.2}s`,
                animationDuration: `${1.8 + Math.random() * 1.4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications validating expertise in cloud technologies, CRM systems, and enterprise solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card hover-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Certificate Header */}
              <div className={`bg-gradient-to-br ${cert.gradient} p-6 rounded-xl mb-6 text-center`}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <cert.icon size={32} className={`${cert.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {cert.provider}
                </p>
              </div>

              {/* Certificate Content */}
              <div className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">
                    Key Competencies
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {cert.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Award size={10} className="text-accent flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  asChild={cert.title !== "Salesforce Certified AI Associate"}
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 border-0 text-primary-foreground"
                  onClick={cert.title === "Salesforce Certified AI Associate" ? (e) => {
                    e.preventDefault();
                    window.open("https://www.salesforce.com/trailblazer/sruhitha04", "_blank");
                    window.open("https://drive.google.com/file/d/1AtTgpoUzeJwzcaA3clwKKKGygxM3CA7X/view?usp=sharing", "_blank");
                  } : undefined}
                >
                  {cert.title === "Salesforce Certified AI Associate" ? (
                    <div className="flex items-center justify-center gap-2">
                      <Award size={16} />
                      View Certificate
                      <ExternalLink size={14} />
                    </div>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Award size={16} />
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Certifications", value: "3+", icon: Award },
            { label: "Cloud Platforms", value: "2+", icon: Cloud },
            { label: "Years Learning", value: "4+", icon: Zap },
            { label: "Skills Validated", value: "15+", icon: Settings }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card text-center hover-glow animate-fade-in"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <stat.icon size={24} className="text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;