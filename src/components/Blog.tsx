import { Youtube, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-45">
        {/* Content Orbs */}
        <div className="absolute top-1/4 left-1/6 w-52 h-52 bg-primary/15 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/3 right-1/5 w-44 h-44 bg-secondary/20 rounded-full blur-2xl animate-pulse float" style={{
          animationDelay: '1.6s'
        }} />
        
        {/* Video/Content Elements */}
        <div className="absolute top-32 right-32 text-accent/40 text-xl font-bold float">▶</div>
        <div className="absolute bottom-40 left-40 w-5 h-5 bg-primary/50 rounded-sm float" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute top-2/3 right-1/3 w-4 h-4 border border-secondary/50 rounded-full animate-spin" style={{
          animationDuration: '7s'
        }} />
        
        {/* Streaming Lines */}
        <div className="absolute top-24 left-1/3 w-32 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 float" />
        <div className="absolute bottom-32 right-1/4 w-28 h-px bg-gradient-to-r from-secondary/0 via-secondary/60 to-secondary/0 float" style={{
          animationDelay: '1.9s'
        }} />
        
        {/* Content Particles */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
              style={{
                top: `${12 + Math.random() * 76}%`,
                left: `${8 + Math.random() * 84}%`,
                animationDelay: `${Math.random() * 2.5}s`,
                animationDuration: `${1.6 + Math.random() * 1.8}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Blog & Content</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and insights through engaging video content on technology, development, and innovation.
          </p>
        </div>

        {/* YouTube Channel Highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card hover-glow text-center">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-xl mb-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center pulse-glow">
                <Youtube size={40} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gradient mb-4">
                YouTube Channel
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Join me on my YouTube journey where I share tutorials, project walkthroughs, coding tips, 
                and insights into the latest technologies. Perfect for developers looking to expand their skillset.
              </p>

              {/* Channel Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">Tech Tutorials</div>
                  <div className="text-sm text-muted-foreground">Programming & Development</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-1">Project Reviews</div>
                  <div className="text-sm text-muted-foreground">Code Walkthroughs</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">Tech Insights</div>
                  <div className="text-sm text-muted-foreground">Industry Trends</div>
                </div>
              </div>

              
              <a
                href="https://www.youtube.com/@sruhithabathina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 border-0 text-primary-foreground font-semibold rounded-md transition-all duration-200 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.youtube.com/@sruhithabathina", "_blank", "noopener,noreferrer");
                }}
              >
                <Play size={20} />
                Visit My YouTube Channel
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {[
            {
              title: "Coding Tutorials",
              description: "Step-by-step programming tutorials covering Python, JavaScript, and web development fundamentals.",
              icon: "💻",
              topics: ["Python Basics", "Web Development", "Problem Solving", "Code Reviews"]
            },
            {
              title: "Project Showcases",
              description: "Detailed walkthroughs of my projects, from conception to deployment, sharing lessons learned.",
              icon: "🚀",
              topics: ["Project Planning", "Development Process", "Challenges Faced", "Solutions Found"]
            },
            {
              title: "Tech Insights",
              description: "Discussions on emerging technologies, career advice, and industry trends for aspiring developers.",
              icon: "💡",
              topics: ["Career Tips", "Technology Trends", "Learning Resources", "Industry Insights"]
            }
          ].map((category, index) => (
            <div
              key={category.title}
              className="glass-card hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {category.title}
              </h4>
              
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>

              <div className="space-y-2">
                {category.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified about new content, tutorials, and project updates. 
              Let's learn and grow together in the amazing world of technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="glass-nav hover-glow"
              >
                <a
                  href="https://www.youtube.com/@sruhithabathina?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube size={16} />
                  Subscribe on YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;