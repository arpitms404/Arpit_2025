import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Mail, ArrowRight, Code2, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 max-w-7xl mx-auto">
              <motion.div 
                className="md:w-1/2 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                    Co-Founder & Tech Lead at SkillLogic Technologies
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display">
                  <span className="block">Hi, I'm Arpit</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Building the Future
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  I build scalable, high-impact digital solutions that combine innovation, business strategy, and technology execution.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                      View My Work 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                      Contact Me <Mail className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://in.linkedin.com/in/arpit-shrivastva-780602311" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <div className="h-6 w-px bg-border" />
                  <Button variant="ghost" size="sm" asChild>
                    <a href="/Arpit Shrivastva 01-04-2025.pdf" download="Arpit_Shrivastava_Resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                className="md:w-1/2 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img 
                      src="/arpit-professional.jpg" 
                      alt="Arpit Shrivastava - Co-Founder & Tech Lead" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section id="services" className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What I Do</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Combining technical expertise with strategic vision to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform" />
                <div className="relative bg-card p-8 rounded-2xl shadow-sm border border-border h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Rocket className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-display mb-3">Technology Leadership</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Leading technology vision and strategy for scalable, high-impact software solutions that drive business success.
                  </p>
                  <Link to="/about" className="inline-flex items-center text-primary hover:underline font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform" />
                <div className="relative bg-card p-8 rounded-2xl shadow-sm border border-border h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Code2 className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold font-display mb-3">Full-Stack Development</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Building production-ready applications with MERN stack, PHP/Laravel, and modern frameworks.
                  </p>
                  <Link to="/skills" className="inline-flex items-center text-primary hover:underline font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform" />
                <div className="relative bg-card p-8 rounded-2xl shadow-sm border border-border h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-display mb-3">DevOps & Cloud</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Implementing CI/CD pipelines, containerization, and cloud infrastructure management for optimal performance.
                  </p>
                  <Link to="/skills" className="inline-flex items-center text-primary hover:underline font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Let's Build Something Together
              </h2>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                Interested in collaborating on innovative solutions or discussing technology strategy? 
                I'm always open to meaningful conversations and partnerships.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="shadow-lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
