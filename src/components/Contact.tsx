import { useState } from "react";
import { Mail, Send, MapPin, Phone, Github, Linkedin, Youtube, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_6qxb88b', // Service ID
        'template_vmdym5s', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sruhitha',
          user_name: formData.name,
          user_email: formData.email,
          reply_to: formData.email,
          subject: `New message from ${formData.name}`,
        },
        'hAx_06jtPBDRZRMbf' // Public Key
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at sruhitha04@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      url: "https://linkedin.com/in/bathina-vijaya-sruhitha-7a2688259", 
      label: "LinkedIn",
      color: "hover:text-accent"
    },
    { 
      icon: Github, 
      url: "https://github.com/sruhithabathina21", 
      label: "GitHub",
      color: "hover:text-primary"
    },
    { 
      icon: Code, 
      url: "https://leetcode.com/u/sruhitha04/", 
      label: "LeetCode",
      color: "hover:text-secondary"
    },
    { 
      icon: Trophy, 
      url: "https://www.hackerrank.com/profile/sruhitha04", 
      label: "HackerRank",
      color: "hover:text-accent-glow"
    },
    { 
      icon: Youtube, 
      url: "https://www.youtube.com/@sruhithabathina", 
      label: "YouTube",
      color: "hover:text-primary-glow"
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Communication Orbs */}
        <div className="absolute top-1/3 left-1/6 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-primary/15 rounded-full blur-2xl animate-pulse float" style={{
          animationDelay: '1.3s'
        }} />
        
        {/* Communication Elements */}
        <div className="absolute top-28 right-28 text-secondary/40 text-lg font-bold float">@</div>
        <div className="absolute bottom-36 left-36 w-5 h-5 bg-accent/50 rounded-full float" />
        <div className="absolute top-1/2 right-1/3 w-4 h-6 bg-primary/40 rounded-sm" style={{
          animation: 'float 3.8s ease-in-out infinite'
        }} />
        
        {/* Network Lines */}
        <div className="absolute top-36 left-1/4 w-28 h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 float" />
        <div className="absolute bottom-28 right-1/3 w-24 h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 float" style={{
          animationDelay: '2.1s'
        }} />
        
        {/* Connection Particles */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary/60 rounded-full animate-pulse"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2.3}s`,
                animationDuration: `${1.7 + Math.random() * 1.6}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card hover-glow">
              <h3 className="text-2xl font-semibold text-gradient mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/[0.05] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:sruhitha04@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sruhitha04@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/[0.05] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">India (Remote Available)</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/[0.05] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center">
                    <Send size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card hover-glow">
              <h3 className="text-xl font-semibold text-gradient mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 p-4 glass rounded-lg hover-glow transition-colors ${social.color} group`}
                  >
                    <social.icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card hover-glow">
            <h3 className="text-2xl font-semibold text-gradient mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="glass border-white/20 focus:border-primary/50 focus:ring-primary/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="glass border-white/20 focus:border-primary/50 focus:ring-primary/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="glass border-white/20 focus:border-primary/50 focus:ring-primary/20 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 border-0 text-primary-foreground font-semibold h-12 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                <Mail size={16} className="inline mr-2" />
                Your message will be sent directly to my email. I'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Resume Download Section */}
        <div id="resume" className="mt-16 text-center">
          <div className="glass-card hover-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Download Resume</h3>
            <p className="text-muted-foreground mb-6">
              Get a comprehensive overview of my skills, experience, and achievements in a detailed resume format.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/80 hover:to-accent/80 border-0 text-secondary-foreground font-semibold"
            >
              <a
                href="/resume.pdf"
                download="Sruhitha_Bathina_Resume.pdf"
                onClick={() => {
                  toast({
                    title: "Resume downloaded!",
                    description: "Your download should start automatically.",
                  });
                }}
                className="flex items-center gap-2"
              >
                📄 Download Resume (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;