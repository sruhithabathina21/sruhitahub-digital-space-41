import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech, Electronics and Communication Engineering",
      institution: "Pragati Engineering College",
      period: "2022 - 2026",
      score: "CGPA: 8.1 (Pursuing)",
      status: "current"
    },
    {
      degree: "Intermediate, MPC",
      institution: "Sri Chaitanya Junior College", 
      period: "2020 - 2022",
      score: "84%",
      status: "completed"
    },
    {
      degree: "10th Grade",
      institution: "Kendriya Vidyalaya Sangathan",
      period: "2020",
      score: "92.3%",
      status: "completed"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative tech solutions with a strong foundation in engineering and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden opacity-60">
            {/* Floating Orbs */}
            <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-secondary/15 rounded-full blur-3xl animate-pulse float" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-pulse float" style={{
              animationDelay: '1.5s'
            }} />
            
            {/* Geometric Elements */}
            <div className="absolute top-16 right-16 w-3 h-3 bg-primary/50 rotate-45 animate-spin" style={{
              animationDuration: '6s'
            }} />
            <div className="absolute bottom-20 left-20 w-4 h-4 bg-secondary/40 rounded-full float" style={{
              animationDelay: '2s'
            }} />
            <div className="absolute top-2/3 right-1/4 w-2 h-6 bg-accent/50 rounded-full" style={{
              animation: 'float 4s ease-in-out infinite, spin 8s linear infinite'
            }} />
            
            {/* Particle Effects */}
            <div className="absolute inset-0 opacity-40">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-secondary/60 rounded-full animate-pulse"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 1.5}s`
                  }}
                />
              ))}
            </div>
            
            {/* Floating Lines */}
            <div className="absolute top-24 left-1/3 w-20 h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 float" style={{
              animationDelay: '0.5s'
            }} />
            <div className="absolute bottom-32 right-20 w-16 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 float" style={{
              animationDelay: '2.5s'
            }} />
          </div>

          {/* Bio Section */}
          <div className="glass-card hover-glow relative z-10">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <GraduationCap size={24} />
              Professional Background
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a passionate Full-Stack Developer pursuing B.Tech in Electronics and Communication Engineering at Pragati Engineering College. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Skilled in building innovative solutions, with strong foundations in programming, cloud technologies, and problem-solving. 
              I thrive on creating impactful applications that bridge the gap between complex technology and user-friendly experiences.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="glass-card hover-glow relative z-10">
            <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center gap-2">
              <Calendar size={24} />
              Education Timeline
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ${
                    edu.status === 'current' 
                      ? 'bg-primary/10 border border-primary/20 glow-primary' 
                      : 'bg-muted/10 hover:bg-muted/20'
                  }`}>
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                      edu.status === 'current' ? 'bg-primary animate-pulse' : 'bg-accent'
                    }`} />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <span className="text-accent font-medium">{edu.period}</span>
                        <span className="hidden sm:block text-muted-foreground">•</span>
                        <span className="text-primary font-medium">{edu.score}</span>
                        {edu.status === 'current' && (
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;