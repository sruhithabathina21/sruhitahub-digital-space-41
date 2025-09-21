import { Github, Linkedin, Youtube, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "@/assets/sruhitha-portrait.jpg";
const Hero = () => {
  const socialLinks = [{
    icon: Linkedin,
    url: "https://linkedin.com/in/bathina-vijaya-sruhitha-7a2688259",
    label: "LinkedIn",
    color: "hover:text-accent"
  }, {
    icon: Github,
    url: "https://github.com/sruhithabathina21",
    label: "GitHub",
    color: "hover:text-primary"
  }, {
    icon: Code,
    url: "https://leetcode.com/u/sruhitha04/",
    label: "LeetCode",
    color: "hover:text-secondary"
  }, {
    icon: Trophy,
    url: "https://www.hackerrank.com/profile/sruhitha04",
    label: "HackerRank",
    color: "hover:text-accent-glow"
  }, {
    icon: Youtube,
    url: "https://www.youtube.com/@sruhithabathina",
    label: "YouTube",
    color: "hover:text-primary-glow"
  }];
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse float" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-pulse float" style={{
          animationDelay: '2.5s',
          transform: 'translate(-50%, -50%)'
        }} />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary/40 rotate-45 animate-spin" style={{
          animationDuration: '8s'
        }} />
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-secondary/50" style={{
          animation: 'float 4s ease-in-out infinite reverse'
        }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-8 bg-accent/60 rounded-full" style={{
          animation: 'float 3s ease-in-out infinite, spin 6s linear infinite'
        }} />

        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Floating Lines */}
        <div className="absolute top-10 left-10 w-32 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 float" />
        <div className="absolute bottom-20 right-32 w-24 h-px bg-gradient-to-r from-secondary/0 via-secondary/60 to-secondary/0 float" style={{
          animationDelay: '1.5s'
        }} />
        
        {/* Hexagonal Elements */}
        <div className="absolute top-32 left-1/3 w-8 h-8 border border-accent/40 rotate-12" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animation: 'float 5s ease-in-out infinite, spin 10s linear infinite'
        }} />
        <div className="absolute bottom-40 right-1/4 w-6 h-6 border border-primary/50 -rotate-12" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animation: 'float 6s ease-in-out infinite reverse, spin 8s linear infinite reverse'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block glass-nav mb-4 animate-fade-in">
              <span className="text-sm text-primary font-medium">👋 Hello, I'm</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <span className="block text-gradient">Bathina Vijaya</span>
              <span className="block text-gradient text-slate-800">Sruhitha</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
              Full-Stack Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              Building scalable, impactful, and futuristic tech solutions.
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start animate-scale-in" style={{
            animationDelay: '0.8s'
          }}>
              {['about', 'skills', 'projects', 'blog', 'contact'].map(section => <Button key={section} variant="outline" onClick={() => scrollToSection(section)} className="glass-nav hover-glow capitalize">
                  {section}
                </Button>)}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: '1s'
          }}>
              {socialLinks.map(social => <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 glass rounded-lg hover-glow transition-colors ${social.color}`} aria-label={social.label}>
                  <social.icon size={20} />
                </a>)}
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Main Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>
                <img src={portraitImage} alt="Bathina Vijaya Sruhitha - Full-Stack Developer" className="relative z-10 w-80 h-80 object-cover rounded-full border-2 border-primary/30 shadow-2xl float" style={{
                filter: 'brightness(1.1) contrast(1.1)',
                boxShadow: '0 0 40px hsl(var(--primary) / 0.4), 0 0 80px hsl(var(--secondary) / 0.2), inset 0 0 40px hsl(var(--primary) / 0.1)'
              }} />
              </div>

              {/* Status Indicators Around Profile */}
              <div className="absolute -top-2 -right-2 glass-card p-3 animate-pulse" style={{
              animationDelay: '0.5s'
            }}>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Active</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass-card p-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Available for opportunities</span>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 glass-card p-3 animate-pulse" style={{
              animationDelay: '1s'
            }}>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Full-Stack Dev</span>
                </div>
              </div>


              <div className="absolute top-1/2 -right-6 glass-card p-2 animate-pulse" style={{
              animationDelay: '2s'
            }}>
                <div className="flex flex-col items-center gap-1 text-xs">
                  <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
                  <span className="text-muted-foreground text-[10px]">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;