import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Internships from "@/components/Internships";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Internships />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
