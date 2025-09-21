import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      title: "Salesforce Green Internship",
      company: "1M1B (One Million for One Billion)",
      period: "May - June 2025",
      type: "Remote",
      status: "current",
      description: "Working on sustainability initiatives combined with Salesforce CRM implementation. Gained hands-on experience with Tableau for data visualization and completed a live project focusing on green technology solutions.",
      achievements: [
        "Salesforce CRM Implementation",
        "Tableau Training & Certification",
        "Live Sustainability Project",
        "Green Technology Solutions"
      ],
      skills: ["Salesforce", "Tableau", "Data Visualization", "Sustainability Tech"],
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Data Analytics Process Automation Internship",
      company: "Technology Solutions Provider",
      period: "January - March 2024",
      type: "Remote",
      status: "completed",
      description: "Focused on automating data pipeline processes and creating interactive dashboards using low-code/no-code tools. Streamlined data workflows and improved reporting efficiency for business stakeholders.",
      achievements: [
        "Automated Data Pipelines",
        "Interactive Dashboard Creation",
        "Process Optimization",
        "Stakeholder Reporting"
      ],
      skills: ["Data Analytics", "Process Automation", "Dashboard Design", "Low-Code Tools"],
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: "AWS AI/ML Internship",
      company: "AWS Educational Initiative",
      period: "September - November 2023",
      type: "Remote",
      status: "completed",
      description: "Built and deployed machine learning models using Amazon SageMaker. Gained comprehensive experience in cloud-based AI/ML workflows, model training, and deployment strategies.",
      achievements: [
        "ML Model Development",
        "Amazon SageMaker Expertise",
        "Model Deployment",
        "Cloud AI/ML Workflows"
      ],
      skills: ["Machine Learning", "AWS SageMaker", "Model Deployment", "Cloud Computing"],
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5"
    }
  ];

  return (
    <section id="internships" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-35">
        {/* Career Path Orbs */}
        <div className="absolute top-1/4 left-1/6 w-52 h-52 bg-primary/15 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/3 right-1/5 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse float" style={{
          animationDelay: '1.3s'
        }} />
        
        {/* Professional Icons */}
        <div className="absolute top-32 right-32 w-5 h-5 bg-secondary/40 rounded-full float" />
        <div className="absolute bottom-40 left-40 w-3 h-8 bg-primary/40 rounded-full" style={{
          animation: 'float 4s ease-in-out infinite'
        }} />
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-accent/50 rotate-45 animate-spin" style={{
          animationDuration: '6s'
        }} />
        
        {/* Timeline Elements */}
        <div className="absolute top-20 left-1/3 w-28 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 float" />
        <div className="absolute bottom-28 right-1/4 w-20 h-px bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0 float" style={{
          animationDelay: '2s'
        }} />
        
        {/* Experience Particles */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary/60 rounded-full animate-pulse"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2.5}s`,
                animationDuration: `${2 + Math.random() * 1.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience across diverse technology domains, from AI/ML to data analytics and sustainability tech.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <div
              key={internship.title}
              className={`glass-card hover-glow group relative animate-slide-up ${
                internship.status === 'current' ? 'ring-2 ring-primary/30 glow-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Connector */}
              {index < internships.length - 1 && (
                <div className="absolute left-6 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-muted to-transparent hidden md:block" />
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Dot & Company Info */}
                <div className="flex md:flex-col items-start gap-4 md:w-1/3">
                  <div className={`w-4 h-4 rounded-full ${
                    internship.status === 'current' 
                      ? 'bg-primary animate-pulse shadow-lg shadow-primary/50' 
                      : 'bg-muted'
                  } flex-shrink-0 mt-1`} />
                  
                  <div className="flex-1 md:ml-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className={internship.color} />
                      <span className="text-sm font-medium text-muted-foreground">{internship.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-accent" />
                      <span className="text-sm text-muted-foreground">{internship.type}</span>
                    </div>

                    {internship.status === 'current' && (
                      <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {internship.title}
                    </h3>
                    <p className={`font-semibold ${internship.color}`}>
                      {internship.company}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Award size={14} />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {internship.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide flex items-center gap-2">
                      <Briefcase size={14} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <span
                          key={skill}
                          className="glass-nav text-xs font-medium hover-glow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Internships", value: "3", icon: Briefcase },
            { label: "Months Experience", value: "8+", icon: Calendar },
            { label: "Technologies", value: "12+", icon: Award },
            { label: "Projects", value: "6+", icon: MapPin }
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

export default Internships;